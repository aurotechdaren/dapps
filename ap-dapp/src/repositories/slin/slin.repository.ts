import {dataSource} from './slin.swagger.datasource';
/* tslint:disable no-any */
export class SlinRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('SlinService', {});
  }

  // Finds a slin record by it's id
  async find(slinId: string) {
    const response = await this.model.findById({id: `${slinId}`});
    return (response && response.obj) || [];
  }

  async create(slinInstance: any): Promise<any> {
    
    return await this.model.create(slinInstance);
  }

  async replaceById(slinHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the slinHttpParams is a concatenation of:
    // slinId and the sow JSON in the body 
    return await this.model.replaceById(slinHttpParams);
  }
}
/* tslint:enable no-any */
