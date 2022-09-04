/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoCaracteristicoEntity } from '../../producto-caracteristico/producto-caracteristico.entity';
import { PaisEntity } from '../../pais/pais.entity';
import { RecetaEntity } from '../../receta/receta.entity';
import { RestauranteEspecializadoEntity } from '../../restaurante-especializado/restaurante-especializado.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [ProductoCaracteristicoEntity, PaisEntity, RecetaEntity, RestauranteEspecializadoEntity],
    synchronize: true,
    keepConnectionAlive: true
}),
  TypeOrmModule.forFeature([ProductoCaracteristicoEntity, PaisEntity, RecetaEntity, RestauranteEspecializadoEntity]),
];
