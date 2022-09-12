import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CulturaGastronomicaEntity } from '../cultura-gastronomica/cultura-gastronomica.entity';
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';
import { BusinessLogicException, BusinessError } from '../shared/errors/business-errors';
import { Repository } from 'typeorm';

@Injectable()
export class CulturaGastronomicaRestauranteEspecializadoService {
    constructor(
        @InjectRepository(CulturaGastronomicaEntity)
        private readonly culturaGastronomicaRepository: Repository<CulturaGastronomicaEntity>,
    
        @InjectRepository(RestauranteEspecializadoEntity)
        private readonly restauranteEspecializadoRepository: Repository<RestauranteEspecializadoEntity>
    ) {}

    

    async addRestauranteEspecializadoCulturaGastronomica(culturaGastronomicaId: string, restauranteEspecializadoId: string): Promise<CulturaGastronomicaEntity> {
        const restauranteEspecializado: RestauranteEspecializadoEntity = await this.restauranteEspecializadoRepository.findOne({where: {id: restauranteEspecializadoId}});
        if (!restauranteEspecializado)
          throw new BusinessLogicException("El restaurante especializado con el id dado no fue encontrado", BusinessError.NOT_FOUND);
  
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where: {id: culturaGastronomicaId}, relations: ["restaurantesEspecializados"]});
        if (!culturaGastronomica)
          throw new BusinessLogicException("La cultura gastronomica con el id dado no fue encontrada", BusinessError.NOT_FOUND);

        culturaGastronomica.restaurantesEspecializados = [...culturaGastronomica.restaurantesEspecializados, restauranteEspecializado];
        return await this.culturaGastronomicaRepository.save(culturaGastronomica);
      }
     
    async findRestauranteEspecializadoByCulturaGastronomicaIdRestauranteEspecializadoId(culturaGastronomicaId: string, restauranteEspecializadoId: string): Promise<RestauranteEspecializadoEntity> {
        const restauranteEspecializado: RestauranteEspecializadoEntity = await this.restauranteEspecializadoRepository.findOne({where: {id: restauranteEspecializadoId}});
        if (!restauranteEspecializado)
          throw new BusinessLogicException("El restaurante especializado con el id dado no fue encontrado", BusinessError.NOT_FOUND)
        
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where: {id: culturaGastronomicaId}, relations: ["restaurantesEspecializados"]}); 
        if (!culturaGastronomica)
          throw new BusinessLogicException("El restaurante especializado con el id dado no fue encontrado. Make sure your query is correct.", BusinessError.NOT_FOUND)
    
        const culturaGastronomicaRestauranteEspecializado: RestauranteEspecializadoEntity = culturaGastronomica.restaurantesEspecializados.find(e => e.id === restauranteEspecializado.id);
    
        if (!culturaGastronomicaRestauranteEspecializado)
          throw new BusinessLogicException("El restaurante con el id dado no fue encontrado", BusinessError.PRECONDITION_FAILED)
    
        return culturaGastronomicaRestauranteEspecializado;
    }
     
    async findRestauranteEspecializadosByCulturaGastronomicaId(culturaGastronomicaId: string): Promise<RestauranteEspecializadoEntity[]> {
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where: {id: culturaGastronomicaId}, relations: ["restaurantesEspecializados"]});
        if (!culturaGastronomica)
          throw new BusinessLogicException("La cultura gastronomica con el id dado no fue encontrada", BusinessError.NOT_FOUND)
        
        return culturaGastronomica.restaurantesEspecializados;
    }
     
    async associateRestauranteEspecializadosCulturaGastronomica(culturaGastronomicaId: string, restaurantesEspecializados: RestauranteEspecializadoEntity[]): Promise<CulturaGastronomicaEntity> {
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where: {id: culturaGastronomicaId}, relations: ["restaurantesEspecializados"]});
     
        if (!culturaGastronomica)
          throw new BusinessLogicException("La cultura gastronomica con el id dado no fue encontrada", BusinessError.NOT_FOUND)
     
        for (let i = 0; i < restaurantesEspecializados.length; i++) {
          const restauranteEspecializado: RestauranteEspecializadoEntity = await this.restauranteEspecializadoRepository.findOne({where: {id: restaurantesEspecializados[i].id}});
          if (!restauranteEspecializado)
            throw new BusinessLogicException("El restaurante especializado con el id dado no fue encontrado", BusinessError.NOT_FOUND)
        }
     
        culturaGastronomica.restaurantesEspecializados = restaurantesEspecializados;
        return await this.culturaGastronomicaRepository.save(culturaGastronomica);
      }
     
    async deleteRestauranteEspecializadoCulturaGastronomica(culturaGastronomicaId: string, restauranteEspecializadoId: string){
        const restauranteEspecializado: RestauranteEspecializadoEntity = await this.restauranteEspecializadoRepository.findOne({where: {id: restauranteEspecializadoId}});
        if (!restauranteEspecializado)
          throw new BusinessLogicException("El restaurante especializado con el id dado no fue encontrado", BusinessError.NOT_FOUND)
     
        const culturaGastronomica: CulturaGastronomicaEntity = await this.culturaGastronomicaRepository.findOne({where: {id: culturaGastronomicaId}, relations: ["restaurantesEspecializados"]});
        if (!culturaGastronomica)
          throw new BusinessLogicException("La cultura gastronomica con el id dado no fue encontrada", BusinessError.NOT_FOUND)
     
        const culturaGastronomicaRestauranteEspecializado: RestauranteEspecializadoEntity = culturaGastronomica.restaurantesEspecializados.find(e => e.id === restauranteEspecializado.id);
     
        if (!culturaGastronomicaRestauranteEspecializado)
            throw new BusinessLogicException("El restaurante con el id dado no fue encontrado", BusinessError.PRECONDITION_FAILED)

        culturaGastronomica.restaurantesEspecializados = culturaGastronomica.restaurantesEspecializados.filter(e => e.id !== restauranteEspecializadoId);
        await this.culturaGastronomicaRepository.save(culturaGastronomica);
    } 
}
