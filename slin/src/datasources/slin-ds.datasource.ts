import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './slin-ds.datasource.json';

export class SlinDsDataSource extends juggler.DataSource {
  static dataSourceName = 'slinDs';

  constructor(
    @inject('datasources.config.slinDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
