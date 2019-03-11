import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './clauses-ds.datasource.json';

export class ClausesDsDataSource extends juggler.DataSource {
  static dataSourceName = 'clausesDs';

  constructor(
    @inject('datasources.config.clausesDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
