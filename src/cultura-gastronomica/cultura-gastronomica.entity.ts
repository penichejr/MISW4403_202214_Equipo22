/* eslint-disable prettier/prettier */
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CulturaGastronomicaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  //   @ManyToMany(() => PaisEntity, paisEntity => PaisEntity.culturasGastronomicas)
  //   @JoinColumn()
  //   paises: PaisEntity[];

  @ManyToMany(() => RestauranteEspecializadoEntity, restaurante => restaurante.culturasGastronomicas)
  restaurantesEspecializados: RestauranteEspecializadoEntity[];

  //   @ManyToOne(() => RecetaEntity, recetaEntity => receta.culturasGastronomicas)
  //   @JoinColumn()
  //   recetas: recetaEntity[];

  //   @ManyToMany(() => ProductoCaracteristicoEntity, productoCaracteristicoEntity => productosCaracteristicos.culturasGastronomicas)
  //   @JoinColumn()
  //   productosCaracteristicos: productoCaracteristicoEntity[];
}
