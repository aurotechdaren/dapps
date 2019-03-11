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
import {EvaluationCriteria} from '../models';
import {EvaluationCriteriaRepository} from '../repositories';

export class EvaluationCriteriaController {
  constructor(
    @repository(EvaluationCriteriaRepository)
    public evaluationCriteriaRepository : EvaluationCriteriaRepository,
  ) {}

  @post('/evaluation-criteria', {
    responses: {
      '200': {
        description: 'EvaluationCriteria model instance',
        content: {'application/json': {schema: {'x-ts-type': EvaluationCriteria}}},
      },
    },
  })
  async create(@requestBody() evaluationCriteria: EvaluationCriteria): Promise<EvaluationCriteria> {
    return await this.evaluationCriteriaRepository.create(evaluationCriteria);
  }

  @get('/evaluation-criteria/count', {
    responses: {
      '200': {
        description: 'EvaluationCriteria model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EvaluationCriteria)) where?: Where,
  ): Promise<Count> {
    return await this.evaluationCriteriaRepository.count(where);
  }

  @get('/evaluation-criteria', {
    responses: {
      '200': {
        description: 'Array of EvaluationCriteria model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': EvaluationCriteria}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EvaluationCriteria)) filter?: Filter,
  ): Promise<EvaluationCriteria[]> {
    return await this.evaluationCriteriaRepository.find(filter);
  }

  @patch('/evaluation-criteria', {
    responses: {
      '200': {
        description: 'EvaluationCriteria PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() evaluationCriteria: EvaluationCriteria,
    @param.query.object('where', getWhereSchemaFor(EvaluationCriteria)) where?: Where,
  ): Promise<Count> {
    return await this.evaluationCriteriaRepository.updateAll(evaluationCriteria, where);
  }

  @get('/evaluation-criteria/{id}', {
    responses: {
      '200': {
        description: 'EvaluationCriteria model instance',
        content: {'application/json': {schema: {'x-ts-type': EvaluationCriteria}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<EvaluationCriteria> {
    return await this.evaluationCriteriaRepository.findById(id);
  }

  @patch('/evaluation-criteria/{id}', {
    responses: {
      '204': {
        description: 'EvaluationCriteria PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() evaluationCriteria: EvaluationCriteria,
  ): Promise<void> {
    await this.evaluationCriteriaRepository.updateById(id, evaluationCriteria);
  }

  @put('/evaluation-criteria/{id}', {
    responses: {
      '204': {
        description: 'EvaluationCriteria PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() evaluationCriteria: EvaluationCriteria,
  ): Promise<void> {
    await this.evaluationCriteriaRepository.replaceById(id, evaluationCriteria);
  }

  @del('/evaluation-criteria/{id}', {
    responses: {
      '204': {
        description: 'EvaluationCriteria DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.evaluationCriteriaRepository.deleteById(id);
  }
}
