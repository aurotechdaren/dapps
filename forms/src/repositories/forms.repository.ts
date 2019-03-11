import {DefaultCrudRepository} from '@loopback/repository';
import {Forms} from '../models';
import {FormsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FormsRepository extends DefaultCrudRepository<
  Forms,
  typeof Forms.prototype.id
> {
  constructor(
    @inject('datasources.formsDs') dataSource: FormsDsDataSource,
  ) {
    super(Forms, dataSource);
  }
}
