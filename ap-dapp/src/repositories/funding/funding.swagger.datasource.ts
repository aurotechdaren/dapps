import {juggler} from '@loopback/repository';
import {fundingDefinition} from './funding.repository.api';

export const dataSource = new juggler.DataSource(
  'FundingService',
  {
    connector: 'loopback-connector-swagger',
    spec: fundingDefinition,
  },
);
