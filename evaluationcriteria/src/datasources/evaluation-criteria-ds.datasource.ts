import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './evaluation-criteria-ds.datasource.json';

export class EvaluationCriteriaDsDataSource extends juggler.DataSource {
  static dataSourceName = 'evaluationCriteriaDs';

  constructor(
    @inject('datasources.config.evaluationCriteriaDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
