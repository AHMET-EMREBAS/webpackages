import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto, LoginResponse } from './dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from '@webpackages/hash';
import { Session, User } from '@webpackages/entities';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) protected readonly userRepo: Repository<User>,
    @InjectRepository(Session)
    protected readonly sessionRepo: Repository<Session>,
    protected readonly jwt: JwtService,
    protected readonly config: ConfigService
  ) {}

  sign(sessionId: number) {
    return this.jwt.sign({ sub: sessionId });
  }

  async verify(token: string): Promise<Session> {
    const { sub } = this.jwt.verify(token);
    if (sub) {
      try {
        return await this.sessionRepo.findOneByOrFail({ id: sub });
      } catch (err) {
        throw new UnauthorizedException('User not found!');
      }
    }

    throw new UnauthorizedException(`There is no valid session!`);
  }

  async findByUsername(username: string) {
    try {
      return await this.userRepo.findOneByOrFail({ username });
    } catch (err) {
      throw new UnauthorizedException(`User not found!`);
    }
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { username, password } = loginDto;
    const foundUser = await this.findByUsername(username);
    const { password: hashedPassed } = foundUser;
    const isPasswordMatch = compareHash(password, hashedPassed);

    const newSession = await this.sessionRepo.save({
      user: foundUser,
      active: true,
    });

    if (isPasswordMatch) {
      const token = this.sign(newSession.id);
      await this.sessionRepo.update(newSession.id, { token });
      return { token: this.sign(newSession.id) };
    }

    throw new UnauthorizedException('Wrong password');
  }
}
