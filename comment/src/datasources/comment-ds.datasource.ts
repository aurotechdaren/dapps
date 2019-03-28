import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './comment-ds.datasource.json';

export class CommentDsDataSource extends juggler.DataSource {
  static dataSourceName = 'commentDs';

  constructor(
    @inject('datasources.config.commentDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
