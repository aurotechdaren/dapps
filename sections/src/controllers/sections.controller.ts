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
import {Sections} from '../models';
import {SectionsRepository} from '../repositories';

export class SectionsController {
  constructor(
    @repository(SectionsRepository)
    public sectionsRepository: SectionsRepository,
  ) {}

  @post('/sections', {
    responses: {
      '200': {
        description: 'Sections model instance',
        content: {'application/json': {schema: {'x-ts-type': Sections}}},
      },
    },
  })
  async create(@requestBody() sections: Sections): Promise<Sections> {
    return await this.sectionsRepository.create(sections);
  }

  @get('/sections/count', {
    responses: {
      '200': {
        description: 'Sections model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Sections)) where?: Where,
  ): Promise<Count> {
    return await this.sectionsRepository.count(where);
  }

  @get('/sections', {
    responses: {
      '200': {
        description: 'Array of Sections model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Sections}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Sections)) filter?: Filter,
  ): Promise<Sections[]> {
    return await this.sectionsRepository.find(filter);
  }

  @patch('/sections', {
    responses: {
      '200': {
        description: 'Sections PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() sections: Sections,
    @param.query.object('where', getWhereSchemaFor(Sections)) where?: Where,
  ): Promise<Count> {
    return await this.sectionsRepository.updateAll(sections, where);
  }

  @get('/sections/{id}', {
    responses: {
      '200': {
        description: 'Sections model instance',
        content: {'application/json': {schema: {'x-ts-type': Sections}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Sections> {
    return await this.sectionsRepository.findById(id);
  }

  @patch('/sections/{id}', {
    responses: {
      '204': {
        description: 'Sections PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() sections: Sections,
  ): Promise<void> {
    await this.sectionsRepository.updateById(id, sections);
  }

  @put('/sections/{id}', {
    responses: {
      '204': {
        description: 'Sections PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sections: Sections,
  ): Promise<void> {
    await this.sectionsRepository.replaceById(id, sections);
  }

  @del('/sections/{id}', {
    responses: {
      '204': {
        description: 'Sections DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sectionsRepository.deleteById(id);
  }
}
