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
import {RequisitionRequestForm} from '../models';
import {RequisitionRequestFormRepository} from '../repositories';

export class RequisitionRequestFormController {
  constructor(
    @repository(RequisitionRequestFormRepository)
    public requisitionRequestFormRepository : RequisitionRequestFormRepository,
  ) {}

  @post('/requisition-request-form', {
    responses: {
      '200': {
        description: 'RequisitionRequestForm model instance',
        content: {'application/json': {schema: {'x-ts-type': RequisitionRequestForm}}},
      },
    },
  })
  async create(@requestBody() requisitionRequestForm: RequisitionRequestForm): Promise<RequisitionRequestForm> {
    return await this.requisitionRequestFormRepository.create(requisitionRequestForm);
  }

  @get('/requisition-request-form/count', {
    responses: {
      '200': {
        description: 'RequisitionRequestForm model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(RequisitionRequestForm)) where?: Where,
  ): Promise<Count> {
    return await this.requisitionRequestFormRepository.count(where);
  }

  @get('/requisition-request-form', {
    responses: {
      '200': {
        description: 'Array of RequisitionRequestForm model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': RequisitionRequestForm}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(RequisitionRequestForm)) filter?: Filter,
  ): Promise<RequisitionRequestForm[]> {
    return await this.requisitionRequestFormRepository.find(filter);
  }

  @patch('/requisition-request-form', {
    responses: {
      '200': {
        description: 'RequisitionRequestForm PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() requisitionRequestForm: RequisitionRequestForm,
    @param.query.object('where', getWhereSchemaFor(RequisitionRequestForm)) where?: Where,
  ): Promise<Count> {
    return await this.requisitionRequestFormRepository.updateAll(requisitionRequestForm, where);
  }

  @get('/requisition-request-form/{id}', {
    responses: {
      '200': {
        description: 'RequisitionRequestForm model instance',
        content: {'application/json': {schema: {'x-ts-type': RequisitionRequestForm}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<RequisitionRequestForm> {
    return await this.requisitionRequestFormRepository.findById(id);
  }

  @patch('/requisition-request-form/{id}', {
    responses: {
      '204': {
        description: 'RequisitionRequestForm PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() requisitionRequestForm: RequisitionRequestForm,
  ): Promise<void> {
    await this.requisitionRequestFormRepository.updateById(id, requisitionRequestForm);
  }

  @put('/requisition-request-form/{id}', {
    responses: {
      '204': {
        description: 'RequisitionRequestForm PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() requisitionRequestForm: RequisitionRequestForm,
  ): Promise<void> {
    await this.requisitionRequestFormRepository.replaceById(id, requisitionRequestForm);
  }

  @del('/requisition-request-form/{id}', {
    responses: {
      '204': {
        description: 'RequisitionRequestForm DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.requisitionRequestFormRepository.deleteById(id);
  }
}
