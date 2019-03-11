import {juggler} from '@loopback/repository';
import {requisitionRequestFormDefinition} from './requisitionrequestform.repository.api';

export const dataSource = new juggler.DataSource(
  'RequisitionRequestFormService',
  {
    connector: 'loopback-connector-swagger',
    spec: requisitionRequestFormDefinition,
  },
);
