import { CulturaGastronomicaEntity } from '../cultura-gastronomica/cultura-gastronomica.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';

@Entity()
export class PaisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nombre: string;

  @ManyToMany(
    () => CulturaGastronomicaEntity,
    (culturaGastronomica) => culturaGastronomica.paises,
  )
  culturasGastronomicas: CulturaGastronomicaEntity[];

  @OneToMany(() => RestauranteEspecializadoEntity, restauranteEspecializado => restauranteEspecializado.pais)
  restaurantesEspecializados: RestauranteEspecializadoEntity[];
}
