import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from './cultura-gastronomica.entity';
import { CulturaGastronomicaService } from './cultura-gastronomica.service';

@Module({
  providers: [CulturaGastronomicaService],
  imports: [TypeOrmModule.forFeature([CulturaGastronomicaEntity])],
})
export class CulturaGastronomicaModule {}
