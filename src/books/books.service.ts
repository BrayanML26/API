// src/books/books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async createBook(
    title: string,
    author: string,
    price: number,
  ): Promise<Book> {
    const newBook = new this.bookModel({ title, author, price });
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async buyBook(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
