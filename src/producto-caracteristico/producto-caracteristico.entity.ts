/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoriaEntity } from '../categoria/categoria.entity';

@Entity()
export class ProductoCaracteristicoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  historia: string;

  @ManyToOne(() => CategoriaEntity, categoria => categoria.productos)
    categoria: CategoriaEntity;
}
