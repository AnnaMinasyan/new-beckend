import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Book extends Model {
  @Column
  title: string;

  @Column
  author: string;

  @Column
  year_of_publication: number;
}
