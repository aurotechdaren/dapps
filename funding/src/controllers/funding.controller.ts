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
import {Funding} from '../models';
import {FundingRepository} from '../repositories';

export class FundingController {
  constructor(
    @repository(FundingRepository)
    public fundingRepository : FundingRepository,
  ) {}

  @post('/funding', {
    responses: {
      '200': {
        description: 'Funding model instance',
        content: {'application/json': {schema: {'x-ts-type': Funding}}},
      },
    },
  })
  async create(@requestBody() funding: Funding): Promise<Funding> {
    return await this.fundingRepository.create(funding);
  }

  @get('/funding/count', {
    responses: {
      '200': {
        description: 'Funding model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Funding)) where?: Where,
  ): Promise<Count> {
    return await this.fundingRepository.count(where);
  }

  @get('/funding', {
    responses: {
      '200': {
        description: 'Array of Funding model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Funding}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Funding)) filter?: Filter,
  ): Promise<Funding[]> {
    return await this.fundingRepository.find(filter);
  }

  @patch('/funding', {
    responses: {
      '200': {
        description: 'Funding PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() funding: Funding,
    @param.query.object('where', getWhereSchemaFor(Funding)) where?: Where,
  ): Promise<Count> {
    return await this.fundingRepository.updateAll(funding, where);
  }

  @get('/funding/{id}', {
    responses: {
      '200': {
        description: 'Funding model instance',
        content: {'application/json': {schema: {'x-ts-type': Funding}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Funding> {
    return await this.fundingRepository.findById(id);
  }

  @patch('/funding/{id}', {
    responses: {
      '204': {
        description: 'Funding PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() funding: Funding,
  ): Promise<void> {
    await this.fundingRepository.updateById(id, funding);
  }

  @put('/funding/{id}', {
    responses: {
      '204': {
        description: 'Funding PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() funding: Funding,
  ): Promise<void> {
    await this.fundingRepository.replaceById(id, funding);
  }

  @del('/funding/{id}', {
    responses: {
      '204': {
        description: 'Funding DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fundingRepository.deleteById(id);
  }
}
