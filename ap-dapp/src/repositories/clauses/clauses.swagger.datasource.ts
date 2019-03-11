import {juggler} from '@loopback/repository';
import {clausesDefinition} from './clauses.repository.api';

export const dataSource = new juggler.DataSource(
  'ClausesService',
  {
    connector: 'loopback-connector-swagger',
    spec: clausesDefinition,
  },
);
