import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductoCaracteristicoEntity } from '../producto-caracteristico/producto-caracteristico.entity';

@Entity()
export class CategoriaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @OneToMany(() => ProductoCaracteristicoEntity, producto => producto.categoria)
    productos: ProductoCaracteristicoEntity[];



}
