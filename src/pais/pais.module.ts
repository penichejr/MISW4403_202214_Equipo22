import { Module } from '@nestjs/common';
import { PaisService } from './pais.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaisEntity } from './pais.entity';

@Module({
  providers: [PaisService],
  imports: [TypeOrmModule.forFeature([PaisEntity])],
})
export class PaisModule {}
