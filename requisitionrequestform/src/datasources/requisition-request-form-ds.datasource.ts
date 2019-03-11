import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './requisition-request-form-ds.datasource.json';

export class RequisitionRequestFormDsDataSource extends juggler.DataSource {
  static dataSourceName = 'requisitionRequestFormDs';

  constructor(
    @inject('datasources.config.requisitionRequestFormDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
