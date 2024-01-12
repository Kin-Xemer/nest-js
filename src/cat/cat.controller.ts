import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './schema/cat.schema';

@Controller('cat')
export class CatController {
  constructor(private readonly catsService: CatService) {}

  @Post()
  async create(@Body() cat: Cat): Promise<Cat> {
    return await this.catsService.create(cat);
  }

  @Get()
  async getAll(): Promise<Cat[]> {
    return await this.catsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Cat | null> {
    return await this.catsService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updates: Partial<Cat>,
  ): Promise<Cat | null> {
    return await this.catsService.update(id, updates);
  }
}
