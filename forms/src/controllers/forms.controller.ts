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
import {Forms} from '../models';
import {FormsRepository} from '../repositories';

export class FormsController {
  constructor(
    @repository(FormsRepository)
    public formsRepository: FormsRepository,
  ) {}

  @post('/forms', {
    responses: {
      '200': {
        description: 'Forms model instance',
        content: {'application/json': {schema: {'x-ts-type': Forms}}},
      },
    },
  })
  async create(@requestBody() forms: Forms): Promise<Forms> {
    return await this.formsRepository.create(forms);
  }

  @get('/forms/count', {
    responses: {
      '200': {
        description: 'Forms model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Forms)) where?: Where,
  ): Promise<Count> {
    return await this.formsRepository.count(where);
  }

  @get('/forms', {
    responses: {
      '200': {
        description: 'Array of Forms model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Forms}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Forms)) filter?: Filter,
  ): Promise<Forms[]> {
    return await this.formsRepository.find(filter);
  }

  @patch('/forms', {
    responses: {
      '200': {
        description: 'Forms PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() forms: Forms,
    @param.query.object('where', getWhereSchemaFor(Forms)) where?: Where,
  ): Promise<Count> {
    return await this.formsRepository.updateAll(forms, where);
  }

  @get('/forms/{id}', {
    responses: {
      '200': {
        description: 'Forms model instance',
        content: {'application/json': {schema: {'x-ts-type': Forms}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Forms> {
    return await this.formsRepository.findById(id);
  }

  @patch('/forms/{id}', {
    responses: {
      '204': {
        description: 'Forms PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() forms: Forms,
  ): Promise<void> {
    await this.formsRepository.updateById(id, forms);
  }

  @put('/forms/{id}', {
    responses: {
      '204': {
        description: 'Forms PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() forms: Forms,
  ): Promise<void> {
    await this.formsRepository.replaceById(id, forms);
  }

  @del('/forms/{id}', {
    responses: {
      '204': {
        description: 'Forms DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.formsRepository.deleteById(id);
  }
}
