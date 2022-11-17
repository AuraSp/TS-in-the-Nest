import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSchema } from './schemas/user.schema';

const DB =
  'mongodb+srv://Aura-Owner:NestApp@crud.8tuv9.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB).then(() => {
  console.log('Prisijungta prie DB...:)');
});

@Module({
  imports: [
    MongooseModule.forRoot(DB),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
