import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto';
import { LocalGuard } from './guards/local.guard';
import { PublicResource, TokenParam } from '@webpackages/access-policy';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthNames } from '@webpackages/types';
import { LoginResponseDto } from './response';

@ApiBearerAuth(AuthNames.BEARER_AUTH)
@ApiTags(AuthController.name)
@Controller('auth')
export class AuthController {

  
  @PublicResource()
  @UseGuards(LocalGuard)
  @Post('login')
  @ApiOkResponse({ type: LoginResponseDto })
  login(@Body() loginDto: LoginDto, @TokenParam() token: string) {
    return { token };
  }
}
