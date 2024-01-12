import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookJson } from './schema/book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}
  // bookModel laf model cua mongoDB

  async findAll(): Promise<BookJson> {
    const returnBook = await this.bookModel.find();
    const successMsg: BookJson = {
      message: 'success',
      status: 'done',
      listBook: returnBook,
    };
    return await successMsg;
  }

  async create(book: Book): Promise<Book> {
    return await this.bookModel.create(book);
  }
  async delete(id: string): Promise<void> {
    await this.bookModel.findByIdAndDelete(id);
  }
}
