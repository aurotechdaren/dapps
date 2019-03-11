import {dataSource} from './clin.swagger.datasource';
/* tslint:disable no-any */
export class ClinRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('ClinService', {});
  }

  // Finds a clin record by it's id
  async find(clinId: string) {
    const response = await this.model.findById({id: `${clinId}`});
    return (response && response.obj) || [];
  }

  async create(clinInstance: any): Promise<any> {
    
    return await this.model.create(clinInstance);
  }

  async replaceById(clinHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the clinHttpParams is a concatenation of:
    // clinId and the sow JSON in the body 
    return await this.model.replaceById(clinHttpParams);
  }
}
/* tslint:enable no-any */
