import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book, BookJson } from './schema/book.schema';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBook(): Promise<BookJson> {
    return await this.bookService.findAll();
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    return await this.bookService.create(book);
  }
  @Post('delete')
  async delete(@Body() { id }: { id: string }) {
    await this.bookService.delete(id);
    return {
      message: 'success',
      status: 'done',
    };
  }
}
