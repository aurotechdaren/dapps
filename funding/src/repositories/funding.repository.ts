import {DefaultCrudRepository} from '@loopback/repository';
import {Funding} from '../models';
import {FundingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FundingRepository extends DefaultCrudRepository<
  Funding,
  typeof Funding.prototype.id
> {
  constructor(
    @inject('datasources.funding') dataSource: FundingDataSource,
  ) {
    super(Funding, dataSource);
  }
}
