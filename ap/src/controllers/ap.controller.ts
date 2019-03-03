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
import {Ap} from '../models';
import {ApRepository} from '../repositories';
import {SowRepository} from '../repositories/sow.repository';

export class ApController {
  constructor(
    @repository(ApRepository)
    public apRepository : ApRepository,
  ) {}
  
  // Create the sow repository so we can access the sow creation method
  @repository(SowRepository)
    public sowRepository : SowRepository;
  

  @post('/ap', {
    responses: {
      '200': {
        description: 'Ap model instance',
        content: {'application/json': {schema: {'x-ts-type': Ap}}},
      },
    },
  })
  async create(@requestBody() ap: Ap): Promise<Ap> {
    console.log("In AP Controller.  Got ap:");
    console.log(ap);
    ap.sowid = "SOW-12345";
    // JSON.stringify({body: {id: "SOW-12345", title: "SOW #2"}}
    this.sowRepository.create('{ body:\n{id: "SOW-12345", title: "SOW #2"}}');
    return await this.apRepository.create(ap);
  }

  @get('/ap/count', {
    responses: {
      '200': {
        description: 'Ap model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ap)) where?: Where,
  ): Promise<Count> {
    return await this.apRepository.count(where);
  }

  @get('/ap', {
    responses: {
      '200': {
        description: 'Array of Ap model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Ap}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ap)) filter?: Filter,
  ): Promise<Ap[]> {
    return await this.apRepository.find(filter);
  }

  @patch('/ap', {
    responses: {
      '200': {
        description: 'Ap PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() ap: Ap,
    @param.query.object('where', getWhereSchemaFor(Ap)) where?: Where,
  ): Promise<Count> {
    return await this.apRepository.updateAll(ap, where);
  }

  @get('/ap/{id}', {
    responses: {
      '200': {
        description: 'Ap model instance',
        content: {'application/json': {schema: {'x-ts-type': Ap}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Ap> {
    return await this.apRepository.findById(id);
  }

  @patch('/ap/{id}', {
    responses: {
      '204': {
        description: 'Ap PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() ap: Ap,
  ): Promise<void> {
    await this.apRepository.updateById(id, ap);
  }

  @put('/ap/{id}', {
    responses: {
      '204': {
        description: 'Ap PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ap: Ap,
  ): Promise<void> {
    await this.apRepository.replaceById(id, ap);
  }

  @del('/ap/{id}', {
    responses: {
      '204': {
        description: 'Ap DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.apRepository.deleteById(id);
  }
}
