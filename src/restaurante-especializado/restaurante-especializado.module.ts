import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEspecializadoEntity } from './restaurante-especializado.entity';
import { RestauranteEspecializadoService } from './restaurante-especializado.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestauranteEspecializadoEntity])],
  providers: [RestauranteEspecializadoService],
})
export class RestauranteEspecializadoModule {}
