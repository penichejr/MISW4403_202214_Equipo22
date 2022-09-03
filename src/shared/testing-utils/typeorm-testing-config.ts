import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisEntity } from '../../pais/pais.entity';
import { RecetaEntity } from '../../receta/receta.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [PaisEntity, RecetaEntity],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([PaisEntity, RecetaEntity]),
];
