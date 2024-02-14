import { Book } from './entity/book.entity';

export const booksProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useValue: Book,
  },
];
