import { CreateUserDTO } from './DTOUser/create-user.dto';
import { UpdateUserDTO } from './DTOUser/update-user.dto';
import { AppService } from './app.service';
export declare class AppController {
    private readonly service;
    constructor(service: AppService);
    getAllUsers(): Promise<import("./schemas/user.schema").User[]>;
    findById(id: string): Promise<import("./schemas/user.schema").User[]>;
    Create(createUser: CreateUserDTO): Promise<import("./schemas/user.schema").User>;
    Update(id: string, updateUser: UpdateUserDTO): Promise<import("./schemas/user.schema").User>;
    Delete(id: string): Promise<import("mongodb").DeleteResult>;
}
