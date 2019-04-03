import {juggler} from '@loopback/repository';
import {blockchainDefinition} from './blockchain.repository.api';

export const dataSource = new juggler.DataSource('BlockchainService', {
  connector: 'loopback-connector-swagger',
  spec: blockchainDefinition,
});
