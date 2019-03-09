import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './funding.datasource.json';

export class FundingDataSource extends juggler.DataSource {
  static dataSourceName = 'funding';

  constructor(
    @inject('datasources.config.funding', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
