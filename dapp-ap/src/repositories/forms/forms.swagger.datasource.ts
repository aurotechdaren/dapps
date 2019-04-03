import {juggler} from '@loopback/repository';
import {formsDefinition} from './forms.repository.api';

export const dataSource = new juggler.DataSource('FormsService', {
  connector: 'loopback-connector-swagger',
  spec: formsDefinition,
});
