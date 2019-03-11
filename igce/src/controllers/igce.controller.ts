import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Igce} from '../models';
import {IgceRepository} from '../repositories';

export class IgceController {
  constructor(
    @repository(IgceRepository)
    public igceRepository : IgceRepository,
  ) {}

  @post('/igce', {
    responses: {
      '200': {
        description: 'Igce model instance',
        content: {'application/json': {schema: {'x-ts-type': Igce}}},
      },
    },
  })
  async create(@requestBody() igce: Igce): Promise<Igce> {
    return await this.igceRepository.create(igce);
  }

  @get('/igce/count', {
    responses: {
      '200': {
        description: 'Igce model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Igce)) where?: Where,
  ): Promise<Count> {
    return await this.igceRepository.count(where);
  }

  @get('/igce', {
    responses: {
      '200': {
        description: 'Array of Igce model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Igce}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Igce)) filter?: Filter,
  ): Promise<Igce[]> {
    return await this.igceRepository.find(filter);
  }

  @patch('/igce', {
    responses: {
      '200': {
        description: 'Igce PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() igce: Igce,
    @param.query.object('where', getWhereSchemaFor(Igce)) where?: Where,
  ): Promise<Count> {
    return await this.igceRepository.updateAll(igce, where);
  }

  @get('/igce/{id}', {
    responses: {
      '200': {
        description: 'Igce model instance',
        content: {'application/json': {schema: {'x-ts-type': Igce}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Igce> {
    return await this.igceRepository.findById(id);
  }

  @patch('/igce/{id}', {
    responses: {
      '204': {
        description: 'Igce PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() igce: Igce,
  ): Promise<void> {
    await this.igceRepository.updateById(id, igce);
  }

  @put('/igce/{id}', {
    responses: {
      '204': {
        description: 'Igce PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() igce: Igce,
  ): Promise<void> {
    await this.igceRepository.replaceById(id, igce);
  }

  @del('/igce/{id}', {
    responses: {
      '204': {
        description: 'Igce DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.igceRepository.deleteById(id);
  }
}
