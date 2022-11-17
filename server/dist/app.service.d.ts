import { Model } from 'mongoose';
import { CreateUserDTO } from './DTOUser/create-user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';
export declare class AppService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[]>;
    getUserById(id: string): Promise<User[]>;
    createUser(createUser: CreateUserDTO): Promise<User>;
    updateUser(id: string, data: any): Promise<User>;
    deleteUser(id: string): Promise<import("mongodb").DeleteResult>;
}
