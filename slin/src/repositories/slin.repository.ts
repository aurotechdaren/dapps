import {DefaultCrudRepository} from '@loopback/repository';
import {Slin} from '../models';
import {SlinDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SlinRepository extends DefaultCrudRepository<
  Slin,
  typeof Slin.prototype.id
> {
  constructor(
    @inject('datasources.slinDs') dataSource: SlinDsDataSource,
  ) {
    super(Slin, dataSource);
  }
}
