import { Injectable, Inject } from '@nestjs/common';
import { Book } from './entity/book.entity';
import { BookDTO } from './entity/Book.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private booksRepository: typeof Book,
  ) {}

  async store(bookDTO: BookDTO) {
    return await this.booksRepository.create({ ...bookDTO });
  }
  async findAll(): Promise<Book[]> {
    return await this.booksRepository.findAll<Book>();
  }
  async destroy(id: number) {
    return await this.booksRepository.destroy({
      where: {
        id,
      },
    });
  }
  async getById(id: number) {
    return await this.booksRepository.findByPk(id);
  }
  async update(id: number, body: BookDTO): Promise<number[]> {
    return await this.booksRepository.update(
      { ...body },
      {
        where: {
          id,
        },
      },
    );
  }
}
