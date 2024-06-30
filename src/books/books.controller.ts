// src/books/books.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(
    @Body() createBookDto: { title: string; author: string; price: number },
  ) {
    return this.booksService.createBook(
      createBookDto.title,
      createBookDto.author,
      createBookDto.price,
    );
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }

  @Delete(':id')
  async buy(@Param('id') id: string) {
    return this.booksService.buyBook(id);
  }
}
