import { BaseUserDTO } from './base-user.dto';

export class CreateUserDTO extends BaseUserDTO {
  fullname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
