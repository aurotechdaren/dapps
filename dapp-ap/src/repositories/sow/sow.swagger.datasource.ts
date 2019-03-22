import {juggler} from '@loopback/repository';
import {sowDefinition} from './sow.repository.api';

export const dataSource = new juggler.DataSource(
  'SowService',
  {
    connector: 'loopback-connector-swagger',
    spec: sowDefinition,
  },
);
