import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { ProductoCaracteristicoDto } from './producto-caracteristico.dto';
import { ProductoCaracteristicoEntity } from './producto-caracteristico.entity';
import { ProductoCaracteristicoService } from './producto-caracteristico.service';

@Controller('productocaracteristico')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProductoCaracteristicoController {
    constructor(private readonly productoCaracteristicoService: ProductoCaracteristicoService) {}

  @Get()
  async findAll() {
    return await this.productoCaracteristicoService.findAll();
  }

  @Get(':ProductoCaracteristicoId')
  async findOne(@Param('ProductoCaracteristicoId') ProductoCaracteristicoId: string) {
    return await this.productoCaracteristicoService.findOne(ProductoCaracteristicoId);
  }

  @Post()
  async create(@Body() productoCaracteristicoDto: ProductoCaracteristicoDto) {
    const ProductoCaracteristico: ProductoCaracteristicoEntity = plainToInstance(ProductoCaracteristicoEntity, productoCaracteristicoDto);
    return await this.productoCaracteristicoService.create(ProductoCaracteristico);
  }

  @Put(':ProductoCaracteristicoId')
  async update(@Param('ProductoCaracteristicoId') ProductoCaracteristicoId: string, @Body() productoCaracteristicoDto: ProductoCaracteristicoDto) {
    const ProductoCaracteristico: ProductoCaracteristicoEntity = plainToInstance(ProductoCaracteristicoEntity, productoCaracteristicoDto);
    return await this.productoCaracteristicoService.update(ProductoCaracteristicoId, ProductoCaracteristico);
  }

  @Delete(':ProductoCaracteristicoId')
  @HttpCode(204)
  async delete(@Param('ProductoCaracteristicoId') ProductoCaracteristicoId: string) {
    return await this.productoCaracteristicoService.delete(ProductoCaracteristicoId);
  }

}
