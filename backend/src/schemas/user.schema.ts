import validator from 'validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({
    lowercase: true,
    required: [true, 'Please tell us your name!'],
  })
  fullname: string;

  @Prop({
    lowercase: true,
    required: [true, 'Please provide your email!'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  })
  email: string;

  @Prop({
    lowercase: true,
    required: [true, 'Please provide a password!'],
    minlength: 3,
    select: false,
  })
  password: string;

  @Prop({
    lowercase: true,
    required: [true, 'Please confirm ypur password!'],
    validate: {
      validator: function (el: any) {
        return el === this.password;
      },
      message: 'Passwords are not the same!',
    },
  })
  passwordConfirm: string;

  @Prop()
  deletedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
