import { Model } from 'mongoose';
import { CreateUserDTO } from './DTOUser/create-user.dto';
import { UpdateUserDTO } from './DTOUser/update-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class AppService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[]>;
    getUserById(id: string): Promise<User[]>;
    createUser(createUser: CreateUserDTO): Promise<User>;
    updateUser(id: string, updateUser: UpdateUserDTO): Promise<User>;
    deleteUser(id: string): Promise<import("mongodb").DeleteResult>;
}
