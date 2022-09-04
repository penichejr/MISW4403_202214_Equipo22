import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoCaracteristicoEntity } from './producto-caracteristico.entity';
import { ProductoCaracteristicoService } from './producto-caracteristico.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoCaracteristicoEntity])],
  providers: [ProductoCaracteristicoService],
})
export class ProductoCaracteristicoModule {}
