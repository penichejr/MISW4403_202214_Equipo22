/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CulturaGastronomicaDto } from 'src/cultura-gastronomica/cultura-gastronomica.dto';
import { CulturaGastronomicaEntity } from 'src/cultura-gastronomica/cultura-gastronomica.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { RestauranteEspecializadoCulturaGastronomicaService } from './restaurante-especializado-cultura-gastronomica.service';

@Controller('restaurantesespecializados')
@UseInterceptors(BusinessErrorsInterceptor)
export class RestauranteEspecializadoCulturaGastronomicaController {
  constructor(private readonly restauranteCulturaService: RestauranteEspecializadoCulturaGastronomicaService){}

  @Post(':restauranteId/culturasgastronomicas/:culturaId')
   async addCulturaRestaurante(@Param('restauranteId') restauranteId: string, @Param('culturaId') culturaId: string){
       return await this.restauranteCulturaService.addCulturaRestaurante(restauranteId, culturaId);
   }

   @Get(':restauranteId/culturasgastronomicas/:culturaId')
   async findCulturaByRestauranteIdCulturaId(@Param('restauranteId') restauranteId: string, @Param('culturaId') culturaId: string){
       return await this.restauranteCulturaService.findCulturaByRestauranteIdCulturaId(restauranteId, culturaId);
   }

   @Get(':restauranteId/culturasgastronomicas')
   async findCulturasByRestauranteId(@Param('restauranteId') restauranteId: string){
       return await this.restauranteCulturaService.findCulturasByRestauranteId(restauranteId);
   }

   @Put(':restauranteId/culturasgastronomicas')
   async associateCulturasRestaurante(@Body() culturasDto: CulturaGastronomicaDto[], @Param('restauranteId') restauranteId: string){
       const culturas = plainToInstance(CulturaGastronomicaEntity, culturasDto)
       return await this.restauranteCulturaService.associateCulturasRestaurante(restauranteId, culturas);
   }

   @Delete(':restauranteId/culturasgastronomicas/:culturaId')
   @HttpCode(204)
   async deleteCulturaRestaurante(@Param('restauranteId') restauranteId: string, @Param('culturaId') culturaId: string){
       return await this.restauranteCulturaService.deleteCulturaRestaurante(restauranteId, culturaId);
   }
}
