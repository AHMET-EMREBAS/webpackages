import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@webpackages/resources';
import { Repository } from 'typeorm';
import { LoginDto, LoginResponse } from './dto';
import { compareHash } from '@webpackages/core';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export type JwtPayload = {
  sub: number;
};

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

  async isRootUser(username: string, password: string) {
    const rootUsername = this.config.getOrThrow('ROOT_USERNAME');
    const rootPassword = this.config.getOrThrow('ROOT_PASSWORD');

    if (username === rootUsername) {
      if (password === rootPassword) {
        return true;
      }
    }
    return false;
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

    if (await this.isRootUser(username, password)) {
      return { token: this.sign(0) };
    }

    const { id, password: hashedPassed } = await this.findByUsername(username);
    const isPasswordMatch = compareHash(password, hashedPassed);

    if (isPasswordMatch) {
      return { token: this.sign(id) };
    }

    throw new UnauthorizedException('Wrong password');
  }
}
