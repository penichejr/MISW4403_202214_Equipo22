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
import { CategoriaProductoCaracteristicoModule } from './categoria-producto-caracteristico/categoria-producto-caracteristico.module';
import { RestauranteEspecializadoCulturaGastronomicaModule } from './restaurante-especializado-cultura-gastronomica/restaurante-especializado-cultura-gastronomica.module';
import { PaisRestauranteModule } from './pais-restaurante/pais-restaurante.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

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
    CategoriaProductoCaracteristicoModule,
    RestauranteEspecializadoCulturaGastronomicaModule,
    PaisRestauranteModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
