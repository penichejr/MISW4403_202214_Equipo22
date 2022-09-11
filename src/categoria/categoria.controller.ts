import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CategoriaDto } from './Categoria.dto';
import { CategoriaEntity } from './Categoria.entity';
import { CategoriaService } from './Categoria.service';

@Controller('Categorias')
@UseInterceptors(BusinessErrorsInterceptor)
export class CategoriaController {
    constructor(private readonly CategoriaService: CategoriaService) {}

  @Get()
  async findAll() {
    return await this.CategoriaService.findAll();
  }

  @Get(':CategoriaId')
  async findOne(@Param('CategoriaId') CategoriaId: string) {
    return await this.CategoriaService.findOne(CategoriaId);
  }

  @Post()
  async create(@Body() CategoriaDto: CategoriaDto) {
    const Categoria: CategoriaEntity = plainToInstance(CategoriaEntity, CategoriaDto);
    return await this.CategoriaService.create(Categoria);
  }

  @Put(':CategoriaId')
  async update(@Param('CategoriaId') CategoriaId: string, @Body() CategoriaDto: CategoriaDto) {
    const Categoria: CategoriaEntity = plainToInstance(CategoriaEntity, CategoriaDto);
    return await this.CategoriaService.update(CategoriaId, Categoria);
  }

  @Delete(':CategoriaId')
  @HttpCode(204)
  async delete(@Param('CategoriaId') CategoriaId: string) {
    return await this.CategoriaService.delete(CategoriaId);
  }

}
