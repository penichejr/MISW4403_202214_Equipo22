import { PaisEntity } from '../pais/pais.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecetaEntity } from '../receta/receta.entity';

@Entity()
export class CulturaGastronomicaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;


   @ManyToMany(() => PaisEntity, paisEntity => paisEntity.culturasGastronomicas)
   @JoinTable()
   paises: PaisEntity[];

//   @ManyToMany(() => RestauranteEspecializadoEntity, restauranteEspecializadoEntity => restauranteEspecializado.culturasGastronomicas)
//   @JoinColumn()
//   restaurantesEspecializadosEntity: RestauranteEspecializadoEntity[];

   @OneToMany(() => RecetaEntity, receta => receta.culturaGastronomica)
   recetas: RecetaEntity[];

//   @ManyToMany(() => ProductoCaracteristicoEntity, productoCaracteristicoEntity => productosCaracteristicos.culturasGastronomicas)
//   @JoinColumn()
//   productosCaracteristicos: productoCaracteristicoEntity[];
}
