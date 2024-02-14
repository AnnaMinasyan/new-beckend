import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entity/book.entity';

@Controller("book")
export class BookController {
  constructor(private readonly appService: BookService) {}

  @Post()
  async store(@Body() body): Promise<Book>{
    try {
        return await this.appService.store(body);
    } catch (error) {
        throw new HttpException({error:error.message}, HttpStatus.BAD_REQUEST);
    }
  }
  @Get()
  async getHello(): Promise<Book[]> {
    try {
        return  await this.appService.findAll();
    } catch (error) {
        throw new HttpException({error:error.message}, HttpStatus.BAD_REQUEST);
    }
  }
  @Get("/:id")
  async getById(@Param() param): Promise<Book> {
    try {
        const {id} = param;
        return await this.appService.getById(id);
    } catch (error) {
        throw new HttpException({error:error.message}, HttpStatus.BAD_REQUEST);
    }
  }
  @Put("/:id")
  async update(@Param() param, @Body() body){
    try {
        const {id} = param;
        await this.appService.update(id, body);
        return await this.appService.getById(id);
    } catch (error) {
        throw new HttpException({error:error.message}, HttpStatus.BAD_REQUEST);
    }
  }
  @Delete("/:id")
  async destroy(@Param() param):Promise<number>{
    try {
        const {id} = param;
        return await this.appService.destroy(id);
    } catch (error) {
        throw new HttpException({error:error.message}, HttpStatus.BAD_REQUEST);
    }
  }
}