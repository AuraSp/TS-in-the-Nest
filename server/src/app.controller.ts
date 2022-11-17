import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './DTOUser/create-user.dto';
import { UpdateUserDTO } from './DTOUser/update-user.dto';
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

  // @Patch('updateUser/:id')
  // async Update(@Param('id') id: string, @Body() updateUser: UpdateUserDTO) {
  //   console.log(updateUser);
  //   return await this.service.updateUser(id, updateUser);
  // }

  @Put('updateUser/:id')
  async Update(@Param('id') id: string, @Body() updateUser: UpdateUserDTO) {
    console.log(updateUser);
    return await this.service.updateUser(id, updateUser);
  }

  @Patch('deleteUser/:id')
  async Delete(@Param('id') id: string) {
    return await this.service.deleteUser(id);
  }
}
