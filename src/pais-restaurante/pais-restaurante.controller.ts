/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { RestauranteEspecializadoDto } from 'src/restaurante-especializado/restaurante-especializado.dto';
import { RestauranteEspecializadoEntity } from 'src/restaurante-especializado/restaurante-especializado.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { PaisRestauranteService } from './pais-restaurante.service';

@Controller('paises')
@UseInterceptors(BusinessErrorsInterceptor)
export class PaisRestauranteController {
    constructor(private readonly paisRestauranteService: PaisRestauranteService) { }

    @Post(':paisId/restaurantesEspecializados/:restauranteId')
    async addRestaurantePais(@Param('paisId') paisId: string, @Param('restauranteId') restauranteId: string) {
        return await this.paisRestauranteService.addRestaurantePais(paisId, restauranteId);
    }

    @Get(':paisId/restaurantesEspecializados/:restauranteId')
    async findRestauranteByPaisIdRestauranteId(@Param('paisId') paisId: string, @Param('restauranteId') restauranteId: string) {
        return await this.paisRestauranteService.findRestauranteByPaisIdRestauranteId(paisId, restauranteId);
    }

    @Get(':paisId/restaurantesEspecializados')
    async findRestaurantesByPaisId(@Param('paisId') paisId: string) {
        return await this.paisRestauranteService.findRestaurantesByPaisId(paisId);
    }

     @Put(':paisId/restaurantesEspecializados')
     async associateRestaurantesPais(@Body() restaurantesDto: RestauranteEspecializadoDto[], @Param('paisId') paisId: string) {
         const restaurantes = plainToInstance(RestauranteEspecializadoEntity, restaurantesDto)
         return await this.paisRestauranteService.associateRestaurantesPais(paisId, restaurantes);
     }

    @Delete(':paisId/restaurantesEspecializados/:restauranteId')
    @HttpCode(204)
    async deleteRestaurantePais(@Param('paisId') paisId: string, @Param('restauranteId') restauranteId: string) {
        return await this.paisRestauranteService.deleteRestaurantePais(paisId, restauranteId);
    }
}
