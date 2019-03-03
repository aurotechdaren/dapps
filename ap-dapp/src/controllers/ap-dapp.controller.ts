import {
  api,
  param,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  post,
  get,
  RestBindings,
  Request,
} from '@loopback/rest';

import {
  ApRepository,
  SowRepository
} from '../repositories';

import {Ap} from '../models/ap.model';

/* tslint:disable no-any */

//@api(apDappDefinition)
export class ApDappController {
  apRepository: ApRepository;
  sowRepository: SowRepository;

  constructor() {
    this.sowRepository = new SowRepository();
    this.apRepository = new ApRepository();
  }

  @get('/ap-dapp/{id}', {
    responses: {
      '200': {
        description: 'Ap model instance',
        content: {'application/json': {schema: {'x-ts-type': Ap}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Ap> {
    return await this.apRepository.find(id);
  }

  @post('/ap-dapp/create', {
    responses: {
      '200': {
        description: 'Ap model instance',
        content: {'application/json': {schema: {'x-ts-type': Ap}}},
      },
    },
  })

  async create(@requestBody({required: false}) ap: Ap): Promise<Ap> {
    console.log(ap);
    return await this.apRepository.create(ap);
  }

}
/* tslint:enable no-any */
