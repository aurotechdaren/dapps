import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './clin-ds.datasource.json';

export class ClinDsDataSource extends juggler.DataSource {
  static dataSourceName = 'clinDs';

  constructor(
    @inject('datasources.config.clinDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
