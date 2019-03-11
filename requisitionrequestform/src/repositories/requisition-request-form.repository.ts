import {DefaultCrudRepository} from '@loopback/repository';
import {RequisitionRequestForm} from '../models';
import {RequisitionRequestFormDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RequisitionRequestFormRepository extends DefaultCrudRepository<
  RequisitionRequestForm,
  typeof RequisitionRequestForm.prototype.id
> {
  constructor(
    @inject('datasources.requisitionRequestFormDs') dataSource: RequisitionRequestFormDsDataSource,
  ) {
    super(RequisitionRequestForm, dataSource);
  }
}
