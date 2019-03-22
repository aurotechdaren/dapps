import {dataSource} from './clauses.swagger.datasource';
/* tslint:disable no-any */
export class ClausesRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('ClausesService', {});
  }

  // Finds a clauses record by it's id
  async find(clausesId: string) {
    const response = await this.model.findById({id: `${clausesId}`});
    return (response && response.obj) || [];
  }

  async create(clausesInstance: any): Promise<any> {
    
    return await this.model.create(clausesInstance);
  }

  async replaceById(clausesHttpParams: any): Promise <any> {

    // Documented in the dapp-ap controller - the clausesHttpParams is a concatenation of:
    // clausesId and the sow JSON in the body 
    return await this.model.replaceById(clausesHttpParams);
  }
}
/* tslint:enable no-any */
