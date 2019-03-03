import {dataSource} from './sow.swagger.datasource';
import { ControllerDefaults } from '@loopback/boot';
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
    console.log("Got sow instance (in APs SOW repository): " + sowInstance);
    return await this.model.create(sowInstance);
  }
}
/* tslint:enable no-any */
