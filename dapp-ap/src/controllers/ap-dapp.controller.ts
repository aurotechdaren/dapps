import {
  api,
  param,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  post,
  get,
  RestBindings,
  Request,
} from '@loopback/rest';

import {Filter} from '@loopback/repository';

import {
  ApRepository,
  SowRepository,
  IgceRepository,
  FormsRepository,
  SectionsRepository,
  ClausesRepository,
  EvaluationCriteriaRepository,
  BlockchainRepository,
} from '../repositories';

import {Ap} from '../models/ap.model';
import {Sow} from '../models/sow.model';

/* tslint:disable no-any */

//@api(apDappDefinition)
export class ApDappController {
  apRepository: ApRepository;
  sowRepository: SowRepository;
  igceRepository: IgceRepository;
  formsRepository: FormsRepository;
  sectionsRepository: SectionsRepository;
  clausesRepository: ClausesRepository;
  evaluationCriteriaRepository: EvaluationCriteriaRepository;
  blockchainRepository: BlockchainRepository;
  constructor() {
    this.sowRepository = new SowRepository();
    this.apRepository = new ApRepository();
    this.igceRepository = new IgceRepository();
    this.formsRepository = new FormsRepository();
    this.sectionsRepository = new SectionsRepository();
    this.clausesRepository = new ClausesRepository();
    this.evaluationCriteriaRepository = new EvaluationCriteriaRepository();
    this.blockchainRepository = new BlockchainRepository();
  }

  @post('/dapp-ap/create', {
    responses: {
      '200': {
        description: 'Ap model instance',
        content: {'application/json': {schema: {'x-ts-type': Ap}}},
      },
    },
  })

  async create(@requestBody({required: false}) ap: Ap): Promise<Ap> {
    
    let response;

    try {

    // Generate a fake AP ID.  Utimately this will come from a service
    var ap_no:string = "AP" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    ap.ap_no = ap_no;
   
     // Initialize the blank SOW associated with this AP
    var sowJson = JSON.stringify({});
    var sow = await this.sowRepository.create({body: sowJson});
   
    var evaluationCriteriaJson = JSON.stringify({});
    var evaluationCriteria = await this.evaluationCriteriaRepository.create({body: evaluationCriteriaJson});
   
    // Initialize a blank funding entry associated with this AP
   // var fundingJson = JSON.stringify({name: "New Funding"});
   // var funding = await this.fundingRepository.create({body: fundingJson});
    // Document the structure of the JSON returned from the sow repository here 
    // console.log("Returned sow:" + JSON.stringify(sow));

    // Update the AP with the new SOW ID
    ap.sowid = sow["obj"].id;
    ap.evaluationCriteriaId = evaluationCriteria["obj"].id;
   //ap.fundingId = funding["obj"].id;
    //ap.fundingId = funding["obj"].id; 

    // The swagger-client requires that the HTTP body be composed with the 'body' param so that it can be properly extracted
    response = await this.apRepository.create({body: ap});
  } catch(err) {
    console.error(err);
    return err;
   }
  return response.obj;
  }

  @get('/dapp-ap/ap/{ap_no}', {
    responses: {
      '204': {
        description: 'Ap GET success',
      },
    },
  })
  async getAp(@param.path.string('ap_no') ap_no: string): Promise<void> {
    console.log("Get Ap: " + ap_no);

    // Returns raw JSON
    // Right now, this find is returning every AP - there is a bug in the WHERE filter
    // Need to correct it, but for now we'll just take the first AP we find
    let ap = await this.apRepository.find(ap_no);

    // The swagger-client requires that the HTTP body be composed with the 'body' param so that it can be properly extracted
    // In this case, the PUT requires teh sowid as a parameter, and the body content (sow JSON)
    return ap;
  }

  @get('/dapp-ap/ap', {
    responses: {
      '204': {
        description: 'Ap GET All success',
      },
    },
  })
  async getAllAp(@param.query.string('filter') filter: string): Promise<void> {
    console.log("Get Ap filter: " + filter);

    // Returns raw JSON
    // Right now, this find is returning every AP - there is a bug in the WHERE filter
    // Need to correct it, but for now we'll just take the first AP we find
    //let ap = await this.apRepository.model.find(JSON.parse(filter));
    let ap = await this.apRepository.model.find({filter:filter});

      // The swagger-client requires that the HTTP body be composed with the 'body' param so that it can be properly extracted
    // In this case, the PUT requires teh sowid as a parameter, and the body content (sow JSON)
    return ap;
  }

  @get('/dapp-ap/apCount', {
    responses: {
      '204': {
        description: 'Ap GET count success',
      },
    },
  })

  async getApCount(@param.query.string('where') where: string): Promise<void> {
    console.log("Get Ap count where: " + where);
    let response 
    try {
      response = await this.apRepository.model.count({where:where});
     
     } catch(err) {
      console.error(err);
       console.log("ERROR: " + err.info);
       return response;
     }
   return response.obj.count;
  }

  @patch('/dapp-ap/ap/{ap_no}/updateSow', {
    responses: {
      '204': {
        description: 'Sow PATCH success',
      },
    },
  })
  async updateSow(@param.path.string('ap_no') ap_no: string, @requestBody() sow: Sow): Promise<void> {
    console.log("Updating sow: " + sow.backgroundStatement);

    // Returns raw JSON
    // Right now, this find is returning every AP - there is a bug in the WHERE filter
    // Need to correct it, but for now we'll just take the first AP we find
    let ap = await this.apRepository.find(ap_no);

    // Need lots of error handling edge case testing around this
    console.log(JSON.stringify(ap));
    let sowid: String = ap[0].sowid;
    console.log("Found ap for: " + ap_no + ", sowid = " + sowid);

    // The swagger-client requires that the HTTP body be composed with the 'body' param so that it can be properly extracted
    // In this case, the PUT requires teh sowid as a parameter, and the body content (sow JSON)
    await this.sowRepository.updateById({body: sow, id: sowid} );
  }

  @patch('/dapp-ap/ap/{ap_no}/updateAp', {
    responses: {
      '204': {
        description: 'Ap PATCH success',
      },
    },
  })
  async updateAp(@param.path.string('ap_no') ap_no: string, @requestBody() ap: Ap): Promise<void> {
    console.log("Updating Ap: " + ap);

    // Returns raw JSON
    // Right now, this find is returning every AP - there is a bug in the WHERE filter
    // Need to correct it, but for now we'll just take the first AP we find
    let apResponse = await this.apRepository.find(ap_no);

    // Need lots of error handling edge case testing around this
    //console.log(JSON.stringify(apResponse));
    let apid: String = apResponse[0].id;
    console.log("Found ap for: " + ap_no + ", apid = " + apid);

    let response;

    try {
     response =   await this.apRepository.updateById({body: ap, id: apid} );
    
    } catch(err) {
      console.error(err);
      console.log("ERROR: " + err.info);
    }
   return response; 
  }

 
  @get('/dapp-ap/assetFromBlockChain/{asset_no}', {
    responses: {
      '204': {
        description: 'Blockchain GET success',
      },
    },
  })
  async assetFromBlockChain(@param.path.string('asset_no') asset_no: string): Promise<void> {
    console.log("Retreiving asset from blockchain for: " + asset_no);

    // Returns raw JSON
    // Right now, this find is returning every AP - there is a bug in the WHERE filter
    // Need to correct it, but for now we'll just take the first AP we find

  return await this.blockchainRepository.find(asset_no);
  }




  @put('/dapp-ap/ap/{ap_no}/acceptAp', {
    responses: {
      '204': {
        description: 'Blockchain accept put success',
      },
    },
  })
  async acceptAp(@param.path.string('ap_no') ap_no: string, @requestBody() inputAp: Ap): Promise<void> {
    console.log("Updating acceptAp: " + inputAp);

    // Returns updated JSON
    let apResponse = await this.apRepository.find(ap_no);

    let apid: String = apResponse[0].id;
    console.log("Found ap for: " + ap_no + ", apid = " + apid);
    let response;

    try {

      let assetAP = 
       { '$class': 'org.auro.hhsnet.AP',
         'apId': ap_no,
         'apName': inputAp.description,
         'apStatus': inputAp.status,
         'apFormId': '5bf38304a0ab7d1b9c3c6d85',
         'apSolNo': 'HHSABC19A3806',
         'apSelection':'new requirement',
         'apPoc':'resource:org.auro.hhsnet.CO#'+inputAp.initaitedBy,
         'apCatalogue':'Catalogue 1',
         'apITorNonIT': 'IT',
         'apSimilarContract':'GDFDSG6SHDFH',
         'apProductOrService':'product',
         'apInitaitedBy':'resource:org.auro.hhsnet.CO#'+inputAp.initaitedBy,
         'apHashVal':' ',
         'owner': 'resource:org.auro.hhsnet.CO#'+inputAp.initaitedBy }
       
        // console.log(JSON.parse(JSON.stringify(assetAP)));
       
         //create Asset in blockchain
      let createAPResponse = await this.blockchainRepository.createAP({data: JSON.parse(JSON.stringify(assetAP))});
      //console.log("createAPResponse: " + createAPResponse.obj);
    
      //Generate hash in blockchain

      let hashAP = 
       { '$class': 'org.auro.hhsnet.apHash',
         'ap': 'resource:org.auro.hhsnet.AP#'+ ap_no
      }

      let createAPHashResponse =  await this.blockchainRepository.createAPHash({data: JSON.parse(JSON.stringify(hashAP))});
      //console.log("createAPHashResponse: " + createAPHashResponse.obj);
    
          //Update status in AP
     response =   await this.apRepository.updateById({body: inputAp, id: apid} );
  
    
    } catch(err) {
      console.error(err);
      console.log("ERROR: " + err.info + err.message);
    }
   return response; 
  }


  @put('/dapp-ap/ap/{ap_no}/initiateAp', {
    responses: {
      '204': {
        description: 'Blockchain initiate put success',
      },
    },
  })
  async initiateAp(@param.path.string('ap_no') ap_no: string, @requestBody() inputAp: Ap): Promise<void> {
    console.log("Updating acceptAp: " + inputAp);

    // Returns updated JSON
    let apResponse = await this.apRepository.find(ap_no);

    let apid: String = apResponse[0].id;
    console.log("Found ap for: " + ap_no + ", apid = " + apid);
    let response;

    try {

      let initiateAP = 
       { '$class': 'org.auro.hhsnet.apInitiate',
          'ap': 'resource:org.auro.hhsnet.AP#'+ inputAp.ap_no }
       
        // console.log(JSON.parse(JSON.stringify(assetAP)));
       
         //initiate Asset in blockchain
      let initiateAPResponse = await this.blockchainRepository.initiateAP({data: JSON.parse(JSON.stringify(initiateAP))});
      console.log("initiateAPResponse: " + initiateAPResponse.obj);
    
      //Get hash from blockchain

      let hashAP = 
       { '$class': 'org.auro.hhsnet.apHash',
         'ap': 'resource:org.auro.hhsnet.AP#'+ ap_no
      }

      let hashResponse =  await this.blockchainRepository.find(ap_no);
      console.log("hashResponse: " + hashResponse);
    
          //Update status in AP
     response =   await this.apRepository.updateById({body: inputAp, id: apid} );
  
    
    } catch(err) {
      console.error(err);
      console.log("ERROR: " + err.info + err.message);
    }
   return response; 
  }

}
/* tslint:enable no-any */
