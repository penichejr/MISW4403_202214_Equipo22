import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestauranteEspecializadoEntity } from './restaurante-especializado.entity';
import { RestauranteEspecializadoService } from './restaurante-especializado.service';
import { RestauranteEspecializadoController } from './restaurante-especializado.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestauranteEspecializadoEntity])],
  providers: [RestauranteEspecializadoService],
  controllers: [RestauranteEspecializadoController],
})
export class RestauranteEspecializadoModule {}
