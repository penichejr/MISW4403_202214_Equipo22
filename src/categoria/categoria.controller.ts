import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CategoriaDto } from './categoria.dto';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';

@Controller('categorias')
@UseInterceptors(BusinessErrorsInterceptor)
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  async findAll() {
    return await this.categoriaService.findAll();
  }

  @Get(':CategoriaId')
  async findOne(@Param('CategoriaId') CategoriaId: string) {
    return await this.categoriaService.findOne(CategoriaId);
  }

  @Post()
  async create(@Body() categoriaDto: CategoriaDto) {
    const Categoria: CategoriaEntity = plainToInstance(CategoriaEntity, categoriaDto);
    return await this.categoriaService.create(Categoria);
  }

  @Put(':CategoriaId')
  async update(@Param('CategoriaId') CategoriaId: string, @Body() categoriaDto: CategoriaDto) {
    const Categoria: CategoriaEntity = plainToInstance(CategoriaEntity, categoriaDto);
    return await this.categoriaService.update(CategoriaId, Categoria);
  }

  @Delete(':CategoriaId')
  @HttpCode(204)
  async delete(@Param('CategoriaId') CategoriaId: string) {
    return await this.categoriaService.delete(CategoriaId);
  }

}
