import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './sections-ds.datasource.json';

export class SectionsDsDataSource extends juggler.DataSource {
  static dataSourceName = 'sectionsDs';

  constructor(
    @inject('datasources.config.sectionsDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
