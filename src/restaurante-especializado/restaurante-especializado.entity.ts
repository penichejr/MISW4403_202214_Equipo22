/* eslint-disable prettier/prettier */
import { CulturaGastronomicaEntity } from '../cultura-gastronomica/cultura-gastronomica.entity';
import { Column, Entity, ManyToOne, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaisEntity } from '../pais/pais.entity';

@Entity()
export class RestauranteEspecializadoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  @ManyToOne(() => PaisEntity, pais => pais.restaurantesEspecializados)
  pais: PaisEntity;

  //   @OneToMany(() => EstrellaMichelinEntity, estrellaMichelin => estrellaMichelin.restauranteEspecializado)
  //   estrellasMichelin: EstrellaMichelinEntity[];

  @ManyToMany(() => CulturaGastronomicaEntity, culturaGastronomica => culturaGastronomica.restaurantesEspecializados)
  @JoinTable()
  culturasGastronomicas: CulturaGastronomicaEntity[];
}
