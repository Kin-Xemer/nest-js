import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cat/schema/cat.schema';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { CatsModule } from './cat/cat.module';
import { DB_URL } from './config/ constants';
import configuration from './config/configuration';
const MONGO_URL = process.env.NODE_ENV === 'test' ? DB_URL.development : DB_URL.production;
@Module({
  imports: [
    MongooseModule.forRoot(DB_URL.development, {
      autoCreate: true,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    BookModule,
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
