import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessLogicException, BusinessError } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';
import { CulturaGastronomicaEntity } from './cultura-gastronomica.entity';

@Injectable()
export class CulturaGastronomicaService {
    constructor(
        @InjectRepository(CulturaGastronomicaEntity)
        private readonly culturaGastronomicaRepository: Repository<CulturaGastronomicaEntity>
    ){}

    async findAll(): Promise<CulturaGastronomicaEntity[]> {
        return await this.culturaGastronomicaRepository.find({ relations: ["paises", "recetas", "productosCaracteristicos", "restaurantesEspecializados"] });
    }

    async findOne(id: string): Promise<CulturaGastronomicaEntity> {
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where: {id}, relations: ["paises", "recetas", "productosCaracteristicos", "restaurantesEspecializados"] } );
        if (!culturaGastronomica)
          throw new BusinessLogicException("The culturaGastronomica with the given id was not found", BusinessError.NOT_FOUND);
    
        return culturaGastronomica;
    }
    
    async create(culturaGastronomica: CulturaGastronomicaEntity): Promise<CulturaGastronomicaEntity> {
        return await this.culturaGastronomicaRepository.save(culturaGastronomica);
    }

    async update(id: string, culturaGastronomica: CulturaGastronomicaEntity): Promise<CulturaGastronomicaEntity> {
        const persistedCulturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where:{id}});
        if (!persistedCulturaGastronomica)
          throw new BusinessLogicException("The culturaGastronomica with the given id was not found", BusinessError.NOT_FOUND);
        
        return await this.culturaGastronomicaRepository.save({...persistedCulturaGastronomica, ...culturaGastronomica});
    }

    async delete(id: string) {
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where:{id}});
        if (!culturaGastronomica)
          throw new BusinessLogicException("The culturaGastronomica with the given id was not found", BusinessError.NOT_FOUND);
      
        await this.culturaGastronomicaRepository.remove(culturaGastronomica);
    }
}
