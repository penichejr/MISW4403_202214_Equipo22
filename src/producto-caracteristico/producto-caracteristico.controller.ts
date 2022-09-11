import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { ProductoCaracteristicoDto } from './producto-caracteristico.dto';
import { ProductoCaracteristicoEntity } from './producto-caracteristico.entity';
import { ProductoCaracteristicoService } from './producto-caracteristico.service';

@Controller('ProductoCaracteristico')
@UseInterceptors(BusinessErrorsInterceptor)
export class ProductoCaracteristicoController {
    constructor(private readonly ProductoCaracteristicoService: ProductoCaracteristicoService) {}

  @Get()
  async findAll() {
    return await this.ProductoCaracteristicoService.findAll();
  }

  @Get(':ProductoCaracteristicoId')
  async findOne(@Param('ProductoCaracteristicoId') ProductoCaracteristicoId: string) {
    return await this.ProductoCaracteristicoService.findOne(ProductoCaracteristicoId);
  }

  @Post()
  async create(@Body() ProductoCaracteristicoDto: ProductoCaracteristicoDto) {
    const ProductoCaracteristico: ProductoCaracteristicoEntity = plainToInstance(ProductoCaracteristicoEntity, ProductoCaracteristicoDto);
    return await this.ProductoCaracteristicoService.create(ProductoCaracteristico);
  }

  @Put(':ProductoCaracteristicoId')
  async update(@Param('ProductoCaracteristicoId') ProductoCaracteristicoId: string, @Body() ProductoCaracteristicoDto: ProductoCaracteristicoDto) {
    const ProductoCaracteristico: ProductoCaracteristicoEntity = plainToInstance(ProductoCaracteristicoEntity, ProductoCaracteristicoDto);
    return await this.ProductoCaracteristicoService.update(ProductoCaracteristicoId, ProductoCaracteristico);
  }

  @Delete(':ProductoCaracteristicoId')
  @HttpCode(204)
  async delete(@Param('ProductoCaracteristicoId') ProductoCaracteristicoId: string) {
    return await this.ProductoCaracteristicoService.delete(ProductoCaracteristicoId);
  }

}
