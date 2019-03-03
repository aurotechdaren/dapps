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
import {Sow} from '../models/sow.model';

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
  async findById(@param.path.number('id') id: string): Promise<Ap> {
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
    console.log("/ap-dapp AP controller: " + ap);
    // simulate receiving a SOW
    var sowJson = JSON.stringify({title: "New SOW"});
    var sow = await this.sowRepository.create({body: sowJson});

    // Document the structure of the JSON returned from the sow repository here 
    // console.log("Returned sow:" + JSON.stringify(sow));

    // Update the AP with the new SOW ID
    ap.sowid = sow["obj"].id;
    
    // The swagger-client requires that the HTTP body be composed with the 'body' param so that it can be properly extracted
    return await this.apRepository.create({body: ap});
  }

}
/* tslint:enable no-any */
