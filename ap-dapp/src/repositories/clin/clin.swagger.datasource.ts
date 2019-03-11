import {juggler} from '@loopback/repository';
import {clinDefinition} from './clin.repository.api';

export const dataSource = new juggler.DataSource(
  'ClinService',
  {
    connector: 'loopback-connector-swagger',
    spec: clinDefinition,
  },
);
