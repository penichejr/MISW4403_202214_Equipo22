import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaProductoCaracteristicoService } from './categoria-producto-caracteristico.service';
import { ProductoCaracteristicoEntity } from '../producto-caracteristico/producto-caracteristico.entity';
import { CategoriaEntity } from '../categoria/categoria.entity';

@Module({
  providers: [CategoriaProductoCaracteristicoService],
  imports: [TypeOrmModule.forFeature([CategoriaEntity, ProductoCaracteristicoEntity])],
})
export class CategoriaProductoCaracteristicoModule {}
