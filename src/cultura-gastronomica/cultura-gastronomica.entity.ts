/* eslint-disable prettier/prettier */
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';
import { PaisEntity } from '../pais/pais.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecetaEntity } from '../receta/receta.entity';

@Entity()
export class CulturaGastronomicaEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @ManyToMany(() => RestauranteEspecializadoEntity, (restaurante) => restaurante.culturasGastronomicas)
  restaurantesEspecializados: RestauranteEspecializadoEntity[];


   @ManyToMany(() => PaisEntity, paisEntity => paisEntity.culturasGastronomicas)
   @JoinTable()
   paises: PaisEntity[];

  //   @ManyToOne(() => RecetaEntity, recetaEntity => receta.culturasGastronomicas)
  //   @JoinColumn()
  //   recetas: recetaEntity[];

   @OneToMany(() => RecetaEntity, receta => receta.culturaGastronomica)
   recetas: RecetaEntity[];

//   @ManyToMany(() => ProductoCaracteristicoEntity, productoCaracteristicoEntity => productosCaracteristicos.culturasGastronomicas)
//   @JoinColumn()
//   productosCaracteristicos: productoCaracteristicoEntity[];

}
