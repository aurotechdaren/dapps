import {dataSource} from './ap.swagger.datasource';

/* tslint:disable no-any */
export class ApRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('ApService', {});
  }

  async find(ap_no: String): Promise<any> {
    console.log('(ap.repository) Got ap_no: ' + ap_no);
    console.log(
      'Sending filter as: ' + JSON.stringify({filter: {WHERE: {ap_no: ap_no}}}),
    );

    let response;

    try {
      response = await this.model.find({
        filter: `{"where": {"ap_no":"${ap_no}"}}`,
      });
    } catch (err) {
      console.log('ERROR: ' + err.message);
    }

    //console.log("(ap repository): apid search returned" + JSON.stringify(response.obj));
    return response.obj;
  }

  async create(apInstance: any): Promise<any> {
    return await this.model.create(apInstance);
  }

  async updateById(apHttpParams: any): Promise<any> {
    // Documented in the dapp-ap controller - the apHttpParams is a concatenation of:
    // sowId and the sow JSON in the body
    console.log('In AP repository updated');
    let response;

    try {
      response = await this.model.updateById(apHttpParams);
    } catch (err) {
      console.log('ERROR: ' + err.message);
    }
    return response;
  }
}
/* tslint:enable no-any */
