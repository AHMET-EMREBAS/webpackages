import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto, LoginResponse } from './dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { compareHash } from '@webpackages/hash';
import { User } from '@webpackages/entities';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) protected readonly repo: Repository<User>,
    protected readonly jwt: JwtService,
    protected readonly config: ConfigService
  ) {}

  sign(userId: number) {
    return this.jwt.sign({ sub: userId });
  }

  async verify(token: string): Promise<User> {
    const { sub } = this.jwt.verify(token);
    if (sub) {
      try {
        return await this.repo.findOneByOrFail({ id: sub });
      } catch (err) {
        throw new UnauthorizedException('User not found!');
      }
    }

    throw new UnauthorizedException(`There is no valid session!`);
  }

  async findByUsername(username: string) {
    try {
      return await this.repo.findOneByOrFail({ username });
    } catch (err) {
      throw new UnauthorizedException(`User not found!`);
    }
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { username, password } = loginDto;
    const { id, password: hashedPassed } = await this.findByUsername(username);
    const isPasswordMatch = compareHash(password, hashedPassed);

    if (isPasswordMatch) {
      return { token: this.sign(id) };
    }

    throw new UnauthorizedException('Wrong password');
  }
}
