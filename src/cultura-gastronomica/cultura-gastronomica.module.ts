import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from './cultura-gastronomica.entity';
import { CulturaGastronomicaService } from './cultura-gastronomica.service';
import { CulturaGastronomicaController } from './cultura-gastronomica.controller';

@Module({
  providers: [CulturaGastronomicaService],
  imports: [TypeOrmModule.forFeature([CulturaGastronomicaEntity])],
  controllers: [CulturaGastronomicaController],
})
export class CulturaGastronomicaModule {}
