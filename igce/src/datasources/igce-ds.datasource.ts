import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './igce-ds.datasource.json';

export class IgceDsDataSource extends juggler.DataSource {
  static dataSourceName = 'igceDs';

  constructor(
    @inject('datasources.config.igceDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
