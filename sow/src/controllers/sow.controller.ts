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
import {Sow} from '../models';
import {SowRepository} from '../repositories';

export class SowController {
  constructor(
    @repository(SowRepository)
    public sowRepository: SowRepository,
  ) {}

  @post('/sow', {
    responses: {
      '200': {
        description: 'Sow model instance',
        content: {'application/json': {schema: {'x-ts-type': Sow}}},
      },
    },
  })
  async create(@requestBody() sow: Sow): Promise<Sow> {
    return await this.sowRepository.create(sow);
  }

  @get('/sow/count', {
    responses: {
      '200': {
        description: 'Sow model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sow)) where?: Where,
  ): Promise<Count> {
    return await this.sowRepository.count(where);
  }

  @get('/sow', {
    responses: {
      '200': {
        description: 'Array of Sow model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Sow}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sow)) filter?: Filter,
  ): Promise<Sow[]> {
    return await this.sowRepository.find(filter);
  }

  @patch('/sow', {
    responses: {
      '200': {
        description: 'Sow PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() sow: Sow,
    @param.query.object('where', getWhereSchemaFor(Sow)) where?: Where,
  ): Promise<Count> {
    return await this.sowRepository.updateAll(sow, where);
  }

  @get('/sow/{id}', {
    responses: {
      '200': {
        description: 'Sow model instance',
        content: {'application/json': {schema: {'x-ts-type': Sow}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Sow> {
    return await this.sowRepository.findById(id);
  }

  @patch('/sow/{id}', {
    responses: {
      '204': {
        description: 'Sow PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() sow: Sow,
  ): Promise<void> {
    await this.sowRepository.updateById(id, sow);
  }

  @put('/sow/{id}', {
    responses: {
      '204': {
        description: 'Sow PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sow: Sow,
  ): Promise<void> {
    await this.sowRepository.replaceById(id, sow);
  }

  @del('/sow/{id}', {
    responses: {
      '204': {
        description: 'Sow DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sowRepository.deleteById(id);
  }
}
