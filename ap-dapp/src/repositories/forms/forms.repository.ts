import {dataSource} from './forms.swagger.datasource';
/* tslint:disable no-any */
export class FormsRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('FormsService', {});
  }

  // Finds a forms record by it's id
  async find(formsId: string) {
    const response = await this.model.findById({id: `${formsId}`});
    return (response && response.obj) || [];
  }

  async create(formsInstance: any): Promise<any> {
    
    return await this.model.create(formsInstance);
  }

  async replaceById(formsHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the formsHttpParams is a concatenation of:
    // formsId and the sow JSON in the body 
    return await this.model.replaceById(formsHttpParams);
  }
}
/* tslint:enable no-any */
