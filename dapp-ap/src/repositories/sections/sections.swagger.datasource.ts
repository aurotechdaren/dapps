import {juggler} from '@loopback/repository';
import {sectionsDefinition} from './sections.repository.api';

export const dataSource = new juggler.DataSource('SectionsService', {
  connector: 'loopback-connector-swagger',
  spec: sectionsDefinition,
});
