import { Test, TestingModule } from '@nestjs/testing';
import { CulturaGastronomicaService } from './cultura-gastronomica.service';

describe('CulturaGastronomicaService', () => {
  let service: CulturaGastronomicaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CulturaGastronomicaService],
    }).compile();

    service = module.get<CulturaGastronomicaService>(CulturaGastronomicaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
