import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './forms-ds.datasource.json';

export class FormsDsDataSource extends juggler.DataSource {
  static dataSourceName = 'formsDs';

  constructor(
    @inject('datasources.config.formsDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
