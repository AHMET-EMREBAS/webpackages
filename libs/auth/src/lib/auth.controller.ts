import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto';
import { LocalGuard } from './guards/local.guard';
import { PublicResource, AuthNames, TokenParam } from '@webpackages/core';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth(AuthNames.BEARER_AUTH)
@Controller('auth')
export class AuthController {

  @PublicResource()
  @UseGuards(LocalGuard)
  @Post('login')
  login(@Body() loginDto: LoginDto, @TokenParam() token: string) {
    return { token };
  }
}
