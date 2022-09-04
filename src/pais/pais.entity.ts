import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';

@Entity()
export class PaisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nombre: string;

  //El JoinTable se pone en CulturaGastronomicaEntity
  //   @ManyToMany(() => CulturaGastronomicaEntity, culturaGastronomica => culturaGastronomica.paises)
  //   culturasGastronomicas: CulturaGastronomicaEntity[];

  // @OneToMany(() => RestauranteEspecializadoEntity, restauranteEspecializado => restauranteEspecializado.pais)
  // restaurantesEspecializados: RestauranteEspecializadoEntity[];
}
