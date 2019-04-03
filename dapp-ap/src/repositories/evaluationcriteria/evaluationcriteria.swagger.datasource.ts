import {juggler} from '@loopback/repository';
import {evaluationCriteriaDefinition} from './evaluationcriteria.repository.api';

export const dataSource = new juggler.DataSource('EvaluationCriteriaService', {
  connector: 'loopback-connector-swagger',
  spec: evaluationCriteriaDefinition,
});
