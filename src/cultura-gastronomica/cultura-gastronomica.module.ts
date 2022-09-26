import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from './cultura-gastronomica.entity';
import { CulturaGastronomicaService } from './cultura-gastronomica.service';
import { CulturaGastronomicaController } from './cultura-gastronomica.controller';
import * as sqliteStore from 'cache-manager-sqlite';

@Module({
  providers: [CulturaGastronomicaService],
  imports: [
    TypeOrmModule.forFeature([CulturaGastronomicaEntity]),
    CacheModule.register({
      store: sqliteStore,
      path: ':memory:',
      options: {
        ttl: 5
      },
    })
  ],
  controllers: [CulturaGastronomicaController],
})
export class CulturaGastronomicaModule {}
