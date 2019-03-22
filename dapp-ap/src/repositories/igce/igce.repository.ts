import {dataSource} from './igce.swagger.datasource';
/* tslint:disable no-any */
export class IgceRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('IgceService', {});
  }

  // Finds a igce record by it's id
  async find(igceId: string) {
    const response = await this.model.findById({id: `${igceId}`});
    return (response && response.obj) || [];
  }

  async create(igceInstance: any): Promise<any> {
    
    return await this.model.create(igceInstance);
  }

  async replaceById(igceHttpParams: any): Promise <any> {

    // Documented in the dapp-ap controller - the sowHttpParams is a concatenation of:
    // sowId and the sow JSON in the body 
    return await this.model.replaceById(igceHttpParams);
  }
}
/* tslint:enable no-any */
