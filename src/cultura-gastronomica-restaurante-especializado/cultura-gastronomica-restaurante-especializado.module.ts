import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from '../cultura-gastronomica/cultura-gastronomica.entity';
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';
import { CulturaGastronomicaRestauranteEspecializadoService } from './cultura-gastronomica-restaurante-especializado.service';
import { CulturaGastronomicaRestauranteEspecializadoController } from './cultura-gastronomica-restaurante-especializado.controller';

@Module({
  providers: [CulturaGastronomicaRestauranteEspecializadoService],
  imports: [TypeOrmModule.forFeature([CulturaGastronomicaEntity, RestauranteEspecializadoEntity])],
  controllers: [CulturaGastronomicaRestauranteEspecializadoController]
})
export class CulturaGastronomicaRestauranteEspecializadoModule {
  
}
