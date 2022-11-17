require('dotenv').config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSchema } from './schemas/user.schema';

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Prisijungta prie DB...:)');
});

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
