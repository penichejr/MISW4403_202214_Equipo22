import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from 'src/cultura-gastronomica/cultura-gastronomica.entity';
import { PaisEntity } from '../../pais/pais.entity';
import { RecetaEntity } from '../../receta/receta.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [PaisEntity, RecetaEntity, CulturaGastronomicaEntity],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([PaisEntity, RecetaEntity, CulturaGastronomicaEntity]),
];
