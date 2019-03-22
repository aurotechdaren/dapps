import {dataSource} from './blockchain.swagger.datasource';
//import { ControllerDefaults } from '@loopback/boot';
/* tslint:disable no-any */
export class BlockchainRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('BlockchainService', {});
  }

  async find(asset_no : String): Promise<any> {
    console.log("Retreiving asset from blockchain " + asset_no);
    console.log("Sending filter as: " + JSON.stringify({filter: {WHERE:{"apId":asset_no}}}) );
    
    let response;

    try {
     response = await this.model.findAP({filter: `{"where": {"apId":"${asset_no}"}}`});
    // response = await this.model.org_auro_hhsnet_AP.find({filter: `{"where": {"apId":"${asset_no}"}}`});
    
    } catch(err) {
      console.log("ERROR: " + err.message + err.info);
    }
    //console.log(response)
    return (response.obj);
  }

  async createAP(blockchainInstance: any): Promise<any> {
   return await this.model.createAP(blockchainInstance);
  }

  async initiateAP(blockchainInstance: any): Promise<any> {
    return await this.model.createapInitiate(blockchainInstance);
  }

  async createAPHash(blockchainInstance: any): Promise<any> {
    
    return await this.model.createapHash(blockchainInstance);
  }

  // async replaceById(sowHttpParams: any): Promise <any> {

  //   // Documented in the dapp-ap controller - the sowHttpParams is a concatenation of:
  //   // sowId and the sow JSON in the body 
  //   return await this.model.replaceById(sowHttpParams);
  // }
}
/* tslint:enable no-any */
