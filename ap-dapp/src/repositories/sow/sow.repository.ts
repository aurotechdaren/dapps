import {dataSource} from './sow.swagger.datasource';
import {Sow} from '../../models/sow.model';
//import { ControllerDefaults } from '@loopback/boot';
/* tslint:disable no-any */
export class SowRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('SowService', {});
  }

  async find(sowId: number) {
    const response = await this.model.findById({id: `${sowId}`});
    return (response && response.obj) || [];
  }

  async create(sowInstance: any): Promise<any> {
    
    return await this.model.create(sowInstance);
  }

  async updateById(sowHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the sowHttpParams is a concatenation of:
    // sowId and the sow JSON in the body 
    return await this.model.updateById(sowHttpParams);
  }
}
/* tslint:enable no-any */
