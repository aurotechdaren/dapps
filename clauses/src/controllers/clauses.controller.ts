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
import {Clauses} from '../models';
import {ClausesRepository} from '../repositories';

export class ClausesController {
  constructor(
    @repository(ClausesRepository)
    public clausesRepository : ClausesRepository,
  ) {}

  @post('/clauses', {
    responses: {
      '200': {
        description: 'Clauses model instance',
        content: {'application/json': {schema: {'x-ts-type': Clauses}}},
      },
    },
  })
  async create(@requestBody() clauses: Clauses): Promise<Clauses> {
    return await this.clausesRepository.create(clauses);
  }

  @get('/clauses/count', {
    responses: {
      '200': {
        description: 'Clauses model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clauses)) where?: Where,
  ): Promise<Count> {
    return await this.clausesRepository.count(where);
  }

  @get('/clauses', {
    responses: {
      '200': {
        description: 'Array of Clauses model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Clauses}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clauses)) filter?: Filter,
  ): Promise<Clauses[]> {
    return await this.clausesRepository.find(filter);
  }

  @patch('/clauses', {
    responses: {
      '200': {
        description: 'Clauses PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() clauses: Clauses,
    @param.query.object('where', getWhereSchemaFor(Clauses)) where?: Where,
  ): Promise<Count> {
    return await this.clausesRepository.updateAll(clauses, where);
  }

  @get('/clauses/{id}', {
    responses: {
      '200': {
        description: 'Clauses model instance',
        content: {'application/json': {schema: {'x-ts-type': Clauses}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Clauses> {
    return await this.clausesRepository.findById(id);
  }

  @patch('/clauses/{id}', {
    responses: {
      '204': {
        description: 'Clauses PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() clauses: Clauses,
  ): Promise<void> {
    await this.clausesRepository.updateById(id, clauses);
  }

  @put('/clauses/{id}', {
    responses: {
      '204': {
        description: 'Clauses PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clauses: Clauses,
  ): Promise<void> {
    await this.clausesRepository.replaceById(id, clauses);
  }

  @del('/clauses/{id}', {
    responses: {
      '204': {
        description: 'Clauses DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.clausesRepository.deleteById(id);
  }
}
