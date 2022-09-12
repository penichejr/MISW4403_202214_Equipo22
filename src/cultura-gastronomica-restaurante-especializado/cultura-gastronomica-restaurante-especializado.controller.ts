import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { RestauranteEspecializadoDto } from 'src/restaurante-especializado/restaurante-especializado.dto';
import { RestauranteEspecializadoEntity } from 'src/restaurante-especializado/restaurante-especializado.entity';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CulturaGastronomicaRestauranteEspecializadoService } from './cultura-gastronomica-restaurante-especializado.service';

@Controller('culturas-gastronomicas')
@UseInterceptors(BusinessErrorsInterceptor)
export class CulturaGastronomicaRestauranteEspecializadoController {
    constructor(private readonly culturaGastronomicaRestauranteEspecializadoService: CulturaGastronomicaRestauranteEspecializadoService){}

    @Post(':culturaGId/restaurantes/:restauranteId')
    async addRestauranteCultura(@Param('culturaGId') culturaGId: string, @Param('restauranteId') restauranteId: string){
        return await this.culturaGastronomicaRestauranteEspecializadoService.addRestauranteEspecializadoCulturaGastronomica(culturaGId, restauranteId);
    }

    @Get(':culturaGId/restaurantes/:restauranteId')
    async findCulturaByculturaGIdCulturaId(@Param('culturaGId') culturaGId: string, @Param('restauranteId') restauranteId: string){
        return await this.culturaGastronomicaRestauranteEspecializadoService.findRestauranteEspecializadoByCulturaGastronomicaIdRestauranteEspecializadoId(culturaGId, restauranteId);
    }

    @Get(':culturaGId/restaurantes')
    async findRestaurantesByCulturaGId(@Param('culturaGId') culturaGId: string){
        return await this.culturaGastronomicaRestauranteEspecializadoService.findRestaurantesEspecializadosByCulturaGastronomicaId(culturaGId);
    }

    @Put(':culturaGId/restaurantes')
    async associateRestauranteCulturas(@Body() restaurantesDto: RestauranteEspecializadoDto[], @Param('culturaGId') culturaGId: string){
        const restaurantes = plainToInstance(RestauranteEspecializadoEntity, restaurantesDto)
        return await this.culturaGastronomicaRestauranteEspecializadoService.associateRestauranteEspecializadosCulturaGastronomica(culturaGId, restaurantes);
    }

    @Delete(':culturaGId/restaurantes/:restauranteId')
    @HttpCode(204)
    async deleteRestauranteCultura(@Param('culturaGId') culturaGId: string, @Param('restauranteId') restauranteId: string){
        return await this.culturaGastronomicaRestauranteEspecializadoService.deleteRestauranteEspecializadoCulturaGastronomica(culturaGId, restauranteId);
    }
}


