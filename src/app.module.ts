/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoCaracteristicoEntity } from './producto-caracteristico/producto-caracteristico.entity';
import { ProductoCaracteristicoModule } from './producto-caracteristico/producto-caracteristico.module';
import { RecetaModule } from './receta/receta.module';
import { RecetaEntity } from './receta/receta.entity';
import { PaisModule } from './pais/pais.module';
import { PaisEntity } from './pais/pais.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaEntity } from './categoria/categoria.entity';
import { RestauranteEspecializadoModule } from './restaurante-especializado/restaurante-especializado.module';
import { RestauranteEspecializadoEntity } from './restaurante-especializado/restaurante-especializado.entity';

@Module({
  imports: [ 
    CategoriaModule,
    RecetaModule,
    PaisModule,
    ProductoCaracteristicoModule,
    RestauranteEspecializadoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'culturasGastronomicas',
      entities: [RecetaEntity, PaisEntity, ProductoCaracteristicoEntity,RestauranteEspecializadoEntity, CategoriaEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    CategoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
