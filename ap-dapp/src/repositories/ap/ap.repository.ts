import {dataSource} from './ap.swagger.datasource';
//import { ControllerDefaults } from '@loopback/boot';
/* tslint:disable no-any */
export class ApRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('ApService', {});
  }

  async find(apId: string) {
    const response = await this.model.findById({id: `${apId}`});
    return (response && response.obj) || [];
  }

  async create(apInstance: any): Promise<any> {
    console.log('in ap repository');
    console.log(apInstance);
    return await this.model.create(apInstance);
  }
}
/* tslint:enable no-any */
