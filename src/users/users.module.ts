// users.module.ts (donde se define el módulo que usa UserModel)
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserModel } from './schemas/user.schema'; // Importa el modelo y su esquema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserModel }]),
    // Otros módulos importados
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
