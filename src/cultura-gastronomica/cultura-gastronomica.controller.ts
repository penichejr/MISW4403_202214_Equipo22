import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
import { CulturaGastronomicaDto } from './cultura-gastronomica.dto';
import { CulturaGastronomicaEntity } from './cultura-gastronomica.entity';
import { CulturaGastronomicaService } from './cultura-gastronomica.service';


@Controller('culturas-gastronomicas')
@UseInterceptors(BusinessErrorsInterceptor)
export class CulturaGastronomicaController {
    constructor(private readonly culturaGService: CulturaGastronomicaService) {}

    @Get()
    async findAll() {
        return await this.culturaGService.findAll();
    }

    @Get(':culturaGId')
    async findOne(@Param('culturaGId') culturaGId: string) {
        return await this.culturaGService.findOne(culturaGId);
    }

    @Post()
    async create(@Body() restauranteDto: CulturaGastronomicaDto) {
        const restaurante: CulturaGastronomicaEntity = plainToInstance(CulturaGastronomicaEntity, restauranteDto);
        return await this.culturaGService.create(restaurante);
    }

    @Put(':culturaGId')
    async update(@Param('culturaGId') culturaGId: string, @Body() restauranteDto: CulturaGastronomicaDto) {
        const restaurante: CulturaGastronomicaEntity = plainToInstance(CulturaGastronomicaEntity, restauranteDto);
        return await this.culturaGService.update(culturaGId, restaurante);
    }

    @Delete(':culturaGId')
    @HttpCode(204)
    async delete(@Param('culturaGId') culturaGId: string) {
        return await this.culturaGService.delete(culturaGId);
    }
}
