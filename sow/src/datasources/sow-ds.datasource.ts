import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './sow-ds.datasource.json';

export class SowDsDataSource extends juggler.DataSource {
  static dataSourceName = 'sowDs';

  constructor(
    @inject('datasources.config.sowDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
