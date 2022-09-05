import { PaisEntity } from '../pais/pais.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestauranteEspecializadoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  @ManyToOne(() => PaisEntity, pais => pais.restaurantesEspecializados)
  pais: PaisEntity;

  //   @OneToMany(() => EstrellaMichelinEntity, estrellaMichelin => estrellaMichelin.restauranteEspecializado)
  //   estrellasMichelin: EstrellaMichelinEntity[];

  //   @ManyToMany(() => CulturaGastronomicaEntity, culturaGastronomica => culturaGastronomica.restaurantesEspecializados)
  //   culturasGastronomicas: CulturaGastronomicaEntity[];
}
