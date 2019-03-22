import {dataSource} from './sections.swagger.datasource';
/* tslint:disable no-any */
export class SectionsRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('SectionsService', {});
  }

  // Finds a sections record by it's id
  async find(sectionsId: string) {
    const response = await this.model.findById({id: `${sectionsId}`});
    return (response && response.obj) || [];
  }

  async create(sectionsInstance: any): Promise<any> {
    
    return await this.model.create(sectionsInstance);
  }

  async replaceById(sectionsHttpParams: any): Promise <any> {

    // Documented in the dapp-ap controller - the sectionsHttpParams is a concatenation of:
    // sectionsId and the sow JSON in the body 
    return await this.model.replaceById(sectionsHttpParams);
  }
}
/* tslint:enable no-any */
