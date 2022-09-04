import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

//   @ManyToMany(() => RestauranteEspecializadoEntity, restauranteEspecializadoEntity => restauranteEspecializado.culturasGastronomicas)
//   @JoinColumn()
//   paises: PaisEntity[];

//   @ManyToOne(() => RecetaEntity, recetaEntity => receta.culturasGastronomicas)
//   @JoinColumn()
//   recetas: recetaEntity[];

//   @ManyToMany(() => ProductoCaracteristicoEntity, productoCaracteristicoEntity => productosCaracteristicos.culturasGastronomicas)
//   @JoinColumn()
//   productosCaracteristicos: productoCaracteristicoEntity[];
}
