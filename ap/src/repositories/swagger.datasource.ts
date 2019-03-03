import {juggler} from '@loopback/repository';
import {sowDefinition} from './sow.repository.api';

//import {DataSourceConstructor, DataSourceType} from '@loopback/repository';
//export const dataSource: DataSourceType = new DataSourceConstructor(
export const dataSource = new juggler.DataSource(
  'ApService',
  {
    connector: 'loopback-connector-swagger',
    spec: sowDefinition,
    validate: true,
  },
);
