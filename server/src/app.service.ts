import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './DTOUser/create-user.dto';
import { UpdateUserDTO } from './DTOUser/update-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User[]> {
    return await this.userModel.find({ _id: id });
  }

  async createUser(createUser: CreateUserDTO): Promise<User> {
    console.log(createUser);

    return await new this.userModel({
      ...createUser,
    }).save();
  }

  async updateUser(id: string, updateUser: UpdateUserDTO): Promise<User> {
    console.log(id, updateUser);
    return await this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: { ...updateUser } },
    );
  }
  // updateUser(id: string, updateUser: UpdateUserDTO) {
  //   console.log(id, updateUser);
  //   return `This returns a ${id} user, with ${JSON.stringify(
  //     updateUser,
  //   )} fields`;
  // }

  async deleteUser(id: string) {
    console.log(id);
    return await this.userModel.deleteOne({ _id: id });
  }
}
