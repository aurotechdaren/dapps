import {dataSource} from './requisitionrequestform.swagger.datasource';
/* tslint:disable no-any */
export class RequisitionRequestFormRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('RequisitionRequestFormService', {});
  }

  // Finds a requisitionRequestForm record by it's id
  async find(requisitionRequestFormId: string) {
    const response = await this.model.findById({id: `${requisitionRequestFormId}`});
    return (response && response.obj) || [];
  }

  async create(requisitionRequestFormInstance: any): Promise<any> {
    
    return await this.model.create(requisitionRequestFormInstance);
  }

  async replaceById(requisitionRequestFormHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the requisitionRequestFormHttpParams is a concatenation of:
    // requisitionRequestFormId and the sow JSON in the body 
    return await this.model.replaceById(requisitionRequestFormHttpParams);
  }
}
/* tslint:enable no-any */
