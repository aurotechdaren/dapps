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
import {Clin} from '../models';
import {ClinRepository} from '../repositories';

export class ClinController {
  constructor(
    @repository(ClinRepository)
    public clinRepository : ClinRepository,
  ) {}

  @post('/clin', {
    responses: {
      '200': {
        description: 'Clin model instance',
        content: {'application/json': {schema: {'x-ts-type': Clin}}},
      },
    },
  })
  async create(@requestBody() clin: Clin): Promise<Clin> {
    return await this.clinRepository.create(clin);
  }

  @get('/clin/count', {
    responses: {
      '200': {
        description: 'Clin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clin)) where?: Where,
  ): Promise<Count> {
    return await this.clinRepository.count(where);
  }

  @get('/clin', {
    responses: {
      '200': {
        description: 'Array of Clin model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Clin}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clin)) filter?: Filter,
  ): Promise<Clin[]> {
    return await this.clinRepository.find(filter);
  }

  @patch('/clin', {
    responses: {
      '200': {
        description: 'Clin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() clin: Clin,
    @param.query.object('where', getWhereSchemaFor(Clin)) where?: Where,
  ): Promise<Count> {
    return await this.clinRepository.updateAll(clin, where);
  }

  @get('/clin/{id}', {
    responses: {
      '200': {
        description: 'Clin model instance',
        content: {'application/json': {schema: {'x-ts-type': Clin}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Clin> {
    return await this.clinRepository.findById(id);
  }

  @patch('/clin/{id}', {
    responses: {
      '204': {
        description: 'Clin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() clin: Clin,
  ): Promise<void> {
    await this.clinRepository.updateById(id, clin);
  }

  @put('/clin/{id}', {
    responses: {
      '204': {
        description: 'Clin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clin: Clin,
  ): Promise<void> {
    await this.clinRepository.replaceById(id, clin);
  }

  @del('/clin/{id}', {
    responses: {
      '204': {
        description: 'Clin DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clinRepository.deleteById(id);
  }
}
