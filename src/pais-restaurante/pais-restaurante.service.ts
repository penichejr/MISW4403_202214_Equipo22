import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaisEntity } from '../pais/pais.entity';
import { RestauranteEspecializadoEntity } from '../restaurante-especializado/restaurante-especializado.entity';
import { Repository } from 'typeorm';
import {
  BusinessError,
  BusinessLogicException,
} from '../shared/errors/business-errors';

@Injectable()
export class PaisRestauranteService {
  constructor(
    @InjectRepository(PaisEntity)
    private readonly paisRepository: Repository<PaisEntity>,

    @InjectRepository(RestauranteEspecializadoEntity)
    private readonly restauranteRepository: Repository<RestauranteEspecializadoEntity>,
  ) {}

  async addRestaurantePais(
    paisId: string,
    restauranteId: string,
  ): Promise<PaisEntity> {
    const restaurante: RestauranteEspecializadoEntity =
      await this.restauranteRepository.findOne({
        where: { id: restauranteId },
      });
    if (!restaurante)
      throw new BusinessLogicException(
        'El restaurante con el id dado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    const pais: PaisEntity = await this.paisRepository.findOne({
      where: { id: paisId },
      relations: ['culturasGastronomicas', 'restaurantesEspecializados'],
    });
    if (!pais)
      throw new BusinessLogicException(
        'El país con el id dado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    pais.restaurantesEspecializados = [
      ...pais.restaurantesEspecializados,
      restaurante,
    ];
    return await this.paisRepository.save(pais);
  }

  async findRestauranteByPaisIdRestauranteId(
    paisId: string,
    restauranteId: string,
  ): Promise<RestauranteEspecializadoEntity> {
    const restaurante: RestauranteEspecializadoEntity =
      await this.restauranteRepository.findOne({
        where: { id: restauranteId },
      });
    if (!restaurante)
      throw new BusinessLogicException(
        'El restaurante con el id dado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    const pais: PaisEntity = await this.paisRepository.findOne({
      where: { id: paisId },
      relations: ['restaurantesEspecializados'],
    });
    if (!pais)
      throw new BusinessLogicException(
        'El país con el id dado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    const paisRestaurante: RestauranteEspecializadoEntity =
      pais.restaurantesEspecializados.find((e) => e.id === restaurante.id);

    if (!paisRestaurante)
      throw new BusinessLogicException(
        'El restaurante con el id dado no está asociado al país indicado',
        BusinessError.PRECONDITION_FAILED,
      );

    return paisRestaurante;
  }

  async findRestaurantesByPaisId(
    paisId: string,
  ): Promise<RestauranteEspecializadoEntity[]> {
    const pais: PaisEntity = await this.paisRepository.findOne({
      where: { id: paisId },
      relations: ['restaurantesEspecializados'],
    });
    if (!pais)
      throw new BusinessLogicException(
        'El país con el id dado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    return pais.restaurantesEspecializados;
  }

  async associateRestaurantesPais(
    paisId: string,
    restaurantes: RestauranteEspecializadoEntity[],
  ): Promise<PaisEntity> {
    const pais: PaisEntity = await this.paisRepository.findOne({
      where: { id: paisId },
      relations: ['restaurantesEspecializados'],
    });

    if (!pais)
      throw new BusinessLogicException(
        'El país con el id dado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    for (let i = 0; i < restaurantes.length; i++) {
      const restaurante: RestauranteEspecializadoEntity =
        await this.restauranteRepository.findOne({
          where: { id: restaurantes[i].id },
        });
      if (!restaurante)
        throw new BusinessLogicException(
          'El restaurante con el id dado no fue encontrado',
          BusinessError.NOT_FOUND,
        );
    }

    pais.restaurantesEspecializados = restaurantes;
    return await this.paisRepository.save(pais);
  }

  async deleteRestaurantePais(paisId: string, restauranteId: string) {
    const restaurante: RestauranteEspecializadoEntity =
      await this.restauranteRepository.findOne({
        where: { id: restauranteId },
      });
    if (!restaurante)
      throw new BusinessLogicException(
        'El restaurante con el id indicado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    const pais: PaisEntity = await this.paisRepository.findOne({
      where: { id: paisId },
      relations: ['restaurantesEspecializados'],
    });
    if (!pais)
      throw new BusinessLogicException(
        'El país con el id indicado no fue encontrado',
        BusinessError.NOT_FOUND,
      );

    const paisRestaurante: RestauranteEspecializadoEntity =
      pais.restaurantesEspecializados.find((e) => e.id === restaurante.id);

    if (!paisRestaurante)
      throw new BusinessLogicException(
        'El restaurante con el id indicado no está asociado al país',
        BusinessError.PRECONDITION_FAILED,
      );

    pais.restaurantesEspecializados = pais.restaurantesEspecializados.filter(
      (e) => e.id !== restauranteId,
    );
    await this.paisRepository.save(pais);
  }
}
