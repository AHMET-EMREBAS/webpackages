import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { ForgotPasswordDto, LoginDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from '@webpackages/hash';
import { Session, SessionView, User } from '@webpackages/entities';
import { v4 } from 'uuid';
import { isNotUndefined } from '@webpackages/utils';

@Injectable()
export class AuthService {
  protected readonly logger = new Logger('AuthService');

  constructor(
    @InjectRepository(User) protected readonly userRepo: Repository<User>,
    @InjectRepository(Session)
    protected readonly sessionRepo: Repository<Session>,
    @InjectRepository(SessionView)
    protected readonly sessionViewRepo: Repository<SessionView>,
    protected readonly jwt: JwtService,
    protected readonly config: ConfigService
  ) {}

  sign(sessionId: number) {
    try {
      this.logger.debug(`Trying to sign JWT token for ${sessionId}`);
      return this.jwt.sign({ sub: sessionId });
    } catch (err) {
      this.logger.debug(`Could not sign the token for ${sessionId}`);
      throw new InternalServerErrorException();
    }
  }

  async verify(token: string): Promise<Session> {
    const { sub } = this.jwt.verify(token);

    if (sub) {
      try {
        this.logger.debug(`Trying to find the session by id ${sub}`);
        return await this.sessionRepo.findOneByOrFail({ id: sub });
      } catch (err) {
        this.logger.debug(`Session ${sub} is not found`);
        throw new InternalServerErrorException();
      }
    }
    throw new UnauthorizedException(`There is no valid session!`);
  }

  async findByUsername(username: string) {
    this.logger.debug(`Trying to find the user by username ${username}`);
    try {
      const foundUser = await this.userRepo.findOneOrFail({
        where: { username },
      });
      this.logger.debug(`Found user ${foundUser.username}`);

      return foundUser;
    } catch (err) {
      this.logger.debug('User not found!');
      throw new UnauthorizedException(`User not found!`);
    }
  }

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    this.logger.debug(`Trying to login with ${username}@${password}`);
    const foundUser = await this.findByUsername(username);

    const { password: hashedPassed } = foundUser;

    const isPasswordMatch = compareHash(password, hashedPassed);

    if (isPasswordMatch != true) {
      this.logger.debug(`Wrong password for ${username}@${password}`);
      throw new BadRequestException(`Wrong password`);
    }

    let newSession: Session;
    try {
      newSession = await this.sessionRepo.save({
        user: foundUser,
        active: true,
        deviceId: v4(),
        scope: 'app',
        token: v4(),
      });
    } catch (err) {
      this.logger.debug('Could not create the session');
      this.logger.debug(err);
      throw new InternalServerErrorException();
    }

    this.logger.debug('Created session');
    const token = this.sign(newSession.id);

    this.logger.debug(
      `Signed token for the user ${newSession.id}, ${newSession.user.username}@*`
    );

    try {
      await this.sessionRepo.update(newSession.id, { token });

      this.logger.debug('');
    } catch (err) {
      this.logger.debug(`Could not update the session token`);
      this.logger.error(err);
      throw new InternalServerErrorException();
    }

    try {
      const session = await this.sessionRepo.findOneBy({
        id: newSession.id,
      });

      this.logger.debug('Returning session');

      return session;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async logout(session: Session) {
    await this.sessionRepo.delete(session.id);

    return { message: 'Bye' };
  }

  async logoutAll(session: Session) {
    const founds = await this.sessionViewRepo.find({
      where: { userId: session.user.id },
    });

    const sessionIds = founds.map((e) => e.id);
    await this.sessionRepo.delete(sessionIds);

    return { messsage: 'Bye, all' };
  }

  async forgotPassword(body: ForgotPasswordDto) {
    const found = await this.userRepo.findOneBy({ username: body.username });

    if (isNotUndefined(found)) {
      return {
        message: 'Check your inbox. We just sent a password reset link.',
      };
    }
    throw new NotFoundException('User not found!');
  }
}
