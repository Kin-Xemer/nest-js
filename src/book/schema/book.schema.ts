import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum Category {
  ADVENTURE = 'Adventure',
  CLASSIC = 'Classic',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}
export type BookDocument = HydratedDocument<Book>;
@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true })
  tile: string;

  @Prop()
  descrip: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  category: Category;
}
export class BookJson {
  @Prop()
  message: string;

  @Prop()
  status: string;

  @Prop()
  listBook: Book[];
}
export const BookSchema = SchemaFactory.createForClass(Book);
