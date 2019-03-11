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
import {Slin} from '../models';
import {SlinRepository} from '../repositories';

export class SlinController {
  constructor(
    @repository(SlinRepository)
    public slinRepository : SlinRepository,
  ) {}

  @post('/slin', {
    responses: {
      '200': {
        description: 'Slin model instance',
        content: {'application/json': {schema: {'x-ts-type': Slin}}},
      },
    },
  })
  async create(@requestBody() slin: Slin): Promise<Slin> {
    return await this.slinRepository.create(slin);
  }

  @get('/slin/count', {
    responses: {
      '200': {
        description: 'Slin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Slin)) where?: Where,
  ): Promise<Count> {
    return await this.slinRepository.count(where);
  }

  @get('/slin', {
    responses: {
      '200': {
        description: 'Array of Slin model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Slin}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Slin)) filter?: Filter,
  ): Promise<Slin[]> {
    return await this.slinRepository.find(filter);
  }

  @patch('/slin', {
    responses: {
      '200': {
        description: 'Slin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() slin: Slin,
    @param.query.object('where', getWhereSchemaFor(Slin)) where?: Where,
  ): Promise<Count> {
    return await this.slinRepository.updateAll(slin, where);
  }

  @get('/slin/{id}', {
    responses: {
      '200': {
        description: 'Slin model instance',
        content: {'application/json': {schema: {'x-ts-type': Slin}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Slin> {
    return await this.slinRepository.findById(id);
  }

  @patch('/slin/{id}', {
    responses: {
      '204': {
        description: 'Slin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() slin: Slin,
  ): Promise<void> {
    await this.slinRepository.updateById(id, slin);
  }

  @put('/slin/{id}', {
    responses: {
      '204': {
        description: 'Slin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() slin: Slin,
  ): Promise<void> {
    await this.slinRepository.replaceById(id, slin);
  }

  @del('/slin/{id}', {
    responses: {
      '204': {
        description: 'Slin DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.slinRepository.deleteById(id);
  }
}
