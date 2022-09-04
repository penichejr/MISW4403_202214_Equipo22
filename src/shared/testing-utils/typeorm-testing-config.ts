import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoCaracteristicoEntity } from '../../producto-caracteristico/producto-caracteristico.entity';

export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [ProductoCaracteristicoEntity],
   synchronize: true,
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([ProductoCaracteristicoEntity]),
];
