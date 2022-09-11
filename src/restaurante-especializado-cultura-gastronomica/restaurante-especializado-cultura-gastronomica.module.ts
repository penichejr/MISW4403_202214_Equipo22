/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from 'src/cultura-gastronomica/cultura-gastronomica.entity';
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';
import { RestauranteEspecializadoCulturaGastronomicaService } from './restaurante-especializado-cultura-gastronomica.service';
import { RestauranteEspecializadoCulturaGastronomicaController } from './restaurante-especializado-cultura-gastronomica.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestauranteEspecializadoEntity, CulturaGastronomicaEntity])],
  providers: [RestauranteEspecializadoCulturaGastronomicaService],
  controllers: [RestauranteEspecializadoCulturaGastronomicaController],
})
export class RestauranteEspecializadoCulturaGastronomicaModule {}
