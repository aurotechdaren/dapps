import {dataSource} from './funding.swagger.datasource';
/* tslint:disable no-any */
export class FundingRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('FundingService', {});
  }

  // Finds a funding record by it's id
  async find(fundingId: string) {
    const response = await this.model.findById({id: `${fundingId}`});
    return (response && response.obj) || [];
  }

  async create(fundingInstance: any): Promise<any> {
    
    return await this.model.create(fundingInstance);
  }

  async replaceById(fundingHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the sowHttpParams is a concatenation of:
    // sowId and the sow JSON in the body 
    return await this.model.replaceById(fundingHttpParams);
  }

  async updateById(fundingHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the sowHttpParams is a concatenation of:
    // sowId and the sow JSON in the body 
    return await this.model.updateById(fundingHttpParams);
  }
}
/* tslint:enable no-any */
