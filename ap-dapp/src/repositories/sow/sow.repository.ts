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
    console.log("In /ap-dapp sow repository: received sow instance = " + sowInstance);
    
    
    return await this.model.create(sowInstance);
  }
}
/* tslint:enable no-any */
