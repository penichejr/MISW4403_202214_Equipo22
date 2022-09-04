import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestauranteEspecializadoEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  //   @OneToOne(() => PaisEntity, pais => pais.restauranteEspecializado)
  //   @JoinColumn()
  //   pais: PaisEntity;

  //   @OneToMany(() => EstrellaMichelinEntity, estrellaMichelin => estrellaMichelin.restauranteEspecializado)
  //   estrellasMichelin: EstrellaMichelinEntity[];

  //   @ManyToMany(() => CulturaGastronomicaEntity, culturaGastronomica => culturaGastronomica.restaurantesEspecializados)
  //   culturasGastronomicas: CulturaGastronomicaEntity[];
}
