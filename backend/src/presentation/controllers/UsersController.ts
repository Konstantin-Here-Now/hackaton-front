import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Logger,
  Req,
  Patch,
  UseGuards,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';

import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { UserModel } from 'domain/models/UserModel';
import { UserPasswordModel } from 'domain/models/UserPasswordModel';

const requestIp = require('request-ip');

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersUseCases: UsersUseCases) {}

  @Post("sign")
  @ApiOperation({
    summary: "Sign User"
  })
  async sign(@Body() data: UserModel){
    const result = await this.usersUseCases.sign(data);
    return result;
  }

  @Post("login")
  @ApiOperation({
    summary: "Login User"
  })
  async login(@Body() data: UserModel){
    const result = await this.usersUseCases.login(data);
    return result;
  }

  @Post("change")
  @ApiOperation({
    summary: "Change password"
  })
  async changePassword(@Body() data: UserPasswordModel){
    const result = await this.usersUseCases.updatePassword(data);
    return result;
  }
  

  

  
}
