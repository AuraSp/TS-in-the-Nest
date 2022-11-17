import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch
} from '@nestjs/common';
import { CreateUserDTO } from './DTOUser/create-user.dto';
import { BaseUserDTO } from './DTOUser/base-user.dto';
import { AppService } from './app.service';

@Controller('users') //@Injectable
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('/')
  async getAllUsers() {
    return await this.service.findAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: string) {
    if (id == null) {
      return this.service.findAll();
    } else {
      return await this.service.getUserById(id);
    }
  }

  @Post('newUser')
  async Create(@Body() createUser: CreateUserDTO) {
    return await this.service.createUser(createUser);
  }

  @Patch('updateUser/:id')
  async Update(@Param('id') id: string, @Body() body: any) {
    console.log(id, body);
    return await this.service.updateUser(id, body);
  }

  @Delete('deleteUser/:id')
  async Delete(@Param('id') id: string) {
    return await this.service.deleteUser(id);
  }
}
