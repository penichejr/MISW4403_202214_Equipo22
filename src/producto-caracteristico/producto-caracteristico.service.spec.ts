import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { ProductoCaracteristicoEntity } from './producto-caracteristico.entity';
import { ProductoCaracteristicoService } from './producto-caracteristico.service';

describe('ProductoCaracteristicoService', () => {
 let service: ProductoCaracteristicoService;
 let repository: Repository<ProductoCaracteristicoEntity>;

 beforeEach(async () => {
   const module: TestingModule = await Test.createTestingModule({
     imports: [...TypeOrmTestingConfig()],
     providers: [ProductoCaracteristicoService],
   }).compile();

   service = module.get<ProductoCaracteristicoService>(ProductoCaracteristicoService);
   repository = module.get<Repository<ProductoCaracteristicoEntity>>(getRepositoryToken(ProductoCaracteristicoEntity));
 });
  
 it('should be defined', () => {
   expect(service).toBeDefined();
 });

});

