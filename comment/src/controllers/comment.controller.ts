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
import {Comment} from '../models';
import {CommentRepository} from '../repositories';

export class CommentController {
  constructor(
    @repository(CommentRepository)
    public commentRepository: CommentRepository,
  ) {}

  @post('/comment', {
    responses: {
      '200': {
        description: 'Comment model instance',
        content: {'application/json': {schema: {'x-ts-type': Comment}}},
      },
    },
  })
  async create(@requestBody() comment: Comment): Promise<Comment> {
    return await this.commentRepository.create(comment);
  }

  @get('/comment/count', {
    responses: {
      '200': {
        description: 'Comment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Comment)) where?: Where,
  ): Promise<Count> {
    return await this.commentRepository.count(where);
  }

  @get('/comment', {
    responses: {
      '200': {
        description: 'Array of Comment model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Comment}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Comment)) filter?: Filter,
  ): Promise<Comment[]> {
    return await this.commentRepository.find(filter);
  }

  @patch('/comment', {
    responses: {
      '200': {
        description: 'Comment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() comment: Comment,
    @param.query.object('where', getWhereSchemaFor(Comment)) where?: Where,
  ): Promise<Count> {
    return await this.commentRepository.updateAll(comment, where);
  }

  @get('/comment/{id}', {
    responses: {
      '200': {
        description: 'Comment model instance',
        content: {'application/json': {schema: {'x-ts-type': Comment}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Comment> {
    return await this.commentRepository.findById(id);
  }

  @patch('/comment/{id}', {
    responses: {
      '204': {
        description: 'Comment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() comment: Comment,
  ): Promise<void> {
    await this.commentRepository.updateById(id, comment);
  }

  @put('/comment/{id}', {
    responses: {
      '204': {
        description: 'Comment PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() comment: Comment,
  ): Promise<void> {
    await this.commentRepository.replaceById(id, comment);
  }

  @del('/comment/{id}', {
    responses: {
      '204': {
        description: 'Comment DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.commentRepository.deleteById(id);
  }
}
