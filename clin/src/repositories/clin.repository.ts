import {DefaultCrudRepository} from '@loopback/repository';
import {Clin} from '../models';
import {ClinDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClinRepository extends DefaultCrudRepository<
  Clin,
  typeof Clin.prototype.id
> {
  constructor(
    @inject('datasources.clinDs') dataSource: ClinDsDataSource,
  ) {
    super(Clin, dataSource);
  }
}
