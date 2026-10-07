import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { BookResponseDto } from './dto/book-response.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks(): Promise<BookResponseDto[]> {
    return this.booksService.getBooks();
  }

  @Get('category/:categoryId')
  getBooksByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<BookResponseDto[]> {
    return this.booksService.getBooksByCategory(categoryId);
  }

  // POST는 Nest 기본 응답 코드가 201 Created
  @Post()
  createBook(@Body() dto: CreateBookDto): Promise<BookResponseDto> {
    return this.booksService.createBook(dto);
  }
}
