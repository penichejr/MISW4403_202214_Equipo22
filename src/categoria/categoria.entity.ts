import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoriaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
}
