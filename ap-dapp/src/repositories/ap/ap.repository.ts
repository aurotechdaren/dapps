import {dataSource} from './ap.swagger.datasource';
import {Filter} from '@loopback/repository';

/* tslint:disable no-any */
export class ApRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('ApService', {});
  }

  async find(apid : String): Promise<any> {
    console.log("(ap.repository) Got apid: " + apid);
    const response = await this.model.find({Where:{"apid":apid}}, {strictObjectIDCoercion: true});
    console.log("(ap repository): apid search returned" + JSON.stringify(response.obj));
    return (response.obj);
  }

  async create(apInstance: any): Promise<any> {

    return await this.model.create(apInstance);
  }
}
/* tslint:enable no-any */
