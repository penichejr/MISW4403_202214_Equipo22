import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria.entity';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { CategoriaResolver } from './categoria.resolver';
import * as sqliteStore from 'cache-manager-sqlite';


@Module({
  imports: [
    TypeOrmModule.forFeature([CategoriaEntity]),
    CacheModule.register({
      store: sqliteStore,
      path: ':memory:',
      options: {
        ttl: 5
      },
    })
  ],
  providers: [CategoriaService, CategoriaResolver],
  controllers: [CategoriaController],
})
export class CategoriaModule {}
