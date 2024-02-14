import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { booksProviders } from './book.repository';

@Module({
  controllers: [BookController],
  providers: [BookService, ...booksProviders],
})
export class BookModule {}
