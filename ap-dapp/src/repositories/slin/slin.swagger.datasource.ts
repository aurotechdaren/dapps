import {juggler} from '@loopback/repository';
import {slinDefinition} from './slin.repository.api';

export const dataSource = new juggler.DataSource(
  'slinService',
  {
    connector: 'loopback-connector-swagger',
    spec: slinDefinition,
  },
);
