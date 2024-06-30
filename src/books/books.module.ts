// books.module.ts (donde se define el módulo que usa BookModel)
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BookModel } from './schemas/book.schema'; // Importa el modelo y su esquema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Book', schema: BookModel }]),
    // Otros módulos importados
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
