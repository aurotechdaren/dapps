import {DefaultCrudRepository} from '@loopback/repository';
import {Comment} from '../models';
import {CommentDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommentRepository extends DefaultCrudRepository<
  Comment,
  typeof Comment.prototype.id
> {
  constructor(
    @inject('datasources.commentDs') dataSource: CommentDsDataSource,
  ) {
    super(Comment, dataSource);
  }
}
