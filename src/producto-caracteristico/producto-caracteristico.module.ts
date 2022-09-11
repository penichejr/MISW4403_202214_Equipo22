import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoCaracteristicoEntity } from './producto-caracteristico.entity';
import { ProductoCaracteristicoService } from './producto-caracteristico.service';
import { ProductoCaracteristicoController } from './producto-caracteristico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoCaracteristicoEntity])],
  providers: [ProductoCaracteristicoService],
  controllers: [ProductoCaracteristicoController],
})
export class ProductoCaracteristicoModule {}
