import {DefaultCrudRepository} from '@loopback/repository';
import {Sow} from '../models';
import {SowDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SowRepository extends DefaultCrudRepository<
  Sow,
  typeof Sow.prototype.id
> {
  constructor(@inject('datasources.sowDs') dataSource: SowDsDataSource) {
    super(Sow, dataSource);
  }
}
