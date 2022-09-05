/* eslint-disable prettier/prettier */
import { CulturaGastronomicaEntity } from '../cultura-gastronomica/cultura-gastronomica.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestauranteEspecializadoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  //   @ManyToOne(() => PaisEntity, pais => pais.restauranteEspecializado)
  //   @JoinColumn()
  //   pais: PaisEntity;

  //   @OneToMany(() => EstrellaMichelinEntity, estrellaMichelin => estrellaMichelin.restauranteEspecializado)
  //   estrellasMichelin: EstrellaMichelinEntity[];

  @ManyToMany(() => CulturaGastronomicaEntity, culturaGastronomica => culturaGastronomica.restaurantesEspecializados)
  @JoinTable()
  culturasGastronomicas: CulturaGastronomicaEntity[];
}
