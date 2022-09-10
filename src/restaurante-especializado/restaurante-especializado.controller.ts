/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { RestauranteEspecializadoDto } from './restaurante-especializado.dto';
import { RestauranteEspecializadoEntity } from './restaurante-especializado.entity';
import { RestauranteEspecializadoService } from './restaurante-especializado.service';

@Controller('restaurante-especializado')
@UseInterceptors(BusinessErrorsInterceptor)
export class RestauranteEspecializadoController {
  constructor(private readonly restauranteService: RestauranteEspecializadoService) {}

  @Get()
  async findAll() {
    return await this.restauranteService.findAll();
  }

  @Get(':restauranteId')
  async findOne(@Param('restauranteId') restauranteId: string) {
    return await this.restauranteService.findOne(restauranteId);
  }

  @Post()
  async create(@Body() restauranteDto: RestauranteEspecializadoDto) {
    const restaurante: RestauranteEspecializadoEntity = plainToInstance(RestauranteEspecializadoEntity, restauranteDto);
    return await this.restauranteService.create(restaurante);
  }

  @Put(':restauranteId')
  async update(@Param('restauranteId') restauranteId: string, @Body() restauranteDto: RestauranteEspecializadoDto) {
    const restaurante: RestauranteEspecializadoEntity = plainToInstance(RestauranteEspecializadoEntity, restauranteDto);
    return await this.restauranteService.update(restauranteId, restaurante);
  }

  @Delete(':restauranteId')
  @HttpCode(204)
  async delete(@Param('restauranteId') restauranteId: string) {
    return await this.restauranteService.delete(restauranteId);
  }
}
