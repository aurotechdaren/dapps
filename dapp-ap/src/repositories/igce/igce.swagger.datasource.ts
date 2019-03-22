import {juggler} from '@loopback/repository';
import {igceDefinition} from './igce.repository.api';

export const dataSource = new juggler.DataSource(
  'IgceService',
  {
    connector: 'loopback-connector-swagger',
    spec: igceDefinition,
  },
);
