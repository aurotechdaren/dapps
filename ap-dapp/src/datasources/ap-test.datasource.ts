import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ap-test.datasource.json';

export class ApTestDataSource extends juggler.DataSource {
  static dataSourceName = 'apTest';

  constructor(
    @inject('datasources.config.apTest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
