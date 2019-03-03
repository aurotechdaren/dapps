import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ap-ds.datasource.json';

export class ApDsDataSource extends juggler.DataSource {
  static dataSourceName = 'apDs';

  constructor(
    @inject('datasources.config.apDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
