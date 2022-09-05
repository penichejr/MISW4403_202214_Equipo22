/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoCaracteristicoEntity } from './producto-caracteristico/producto-caracteristico.entity';
import { ProductoCaracteristicoModule } from './producto-caracteristico/producto-caracteristico.module';
import { RecetaModule } from './receta/receta.module';
import { RecetaEntity } from './receta/receta.entity';
import { PaisModule } from './pais/pais.module';
import { PaisEntity } from './pais/pais.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaModule } from './cultura-gastronomica/cultura-gastronomica.module';
import { CulturaGastronomicaEntity } from './cultura-gastronomica/cultura-gastronomica.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaEntity } from './categoria/categoria.entity';
import { RestauranteEspecializadoModule } from './restaurante-especializado/restaurante-especializado.module';
import { RestauranteEspecializadoEntity } from './restaurante-especializado/restaurante-especializado.entity';
import { RestauranteEspecializadoCulturaGastronomicaModule } from './restaurante-especializado-cultura-gastronomica/restaurante-especializado-cultura-gastronomica.module';

@Module({
  imports: [ 
    CategoriaModule,
    RecetaModule,
    PaisModule,
    CulturaGastronomicaModule,
    ProductoCaracteristicoModule,
    RestauranteEspecializadoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'culturasGastronomicas',
      entities: [RecetaEntity, PaisEntity, ProductoCaracteristicoEntity,RestauranteEspecializadoEntity, CategoriaEntity, CulturaGastronomicaEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    CategoriaModule,
    RestauranteEspecializadoCulturaGastronomicaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
