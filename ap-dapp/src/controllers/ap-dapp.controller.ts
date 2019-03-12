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
  FundingRepository,
  IgceRepository,
  FormsRepository,
  SectionsRepository,
  ClausesRepository,
  ClinRepository,
  SlinRepository,
  EvaluationCriteriaRepository,
  RequisitionRequestFormRepository,
} from '../repositories';

import {Ap} from '../models/ap.model';
import {Sow} from '../models/sow.model';


/* tslint:disable no-any */

//@api(apDappDefinition)
export class ApDappController {
  apRepository: ApRepository;
  sowRepository: SowRepository;
  fundingRepository: FundingRepository;
  igceRepository: IgceRepository;
  formsRepository: FormsRepository;
  sectionsRepository: SectionsRepository;
  clausesRepository: ClausesRepository;
  clinRepository: ClinRepository;
  slinRepository: SlinRepository;
  evaluationCriteriaRepository: EvaluationCriteriaRepository;
  requisitionRequestFormRepository: RequisitionRequestFormRepository;

  constructor() {
    this.sowRepository = new SowRepository();
    this.apRepository = new ApRepository();
    this.fundingRepository = new FundingRepository();
    this.igceRepository = new IgceRepository();
    this.formsRepository = new FormsRepository();
    this.sectionsRepository = new SectionsRepository();
    this.clausesRepository = new ClausesRepository();
    this.clinRepository = new ClinRepository();
    this.slinRepository = new SlinRepository();
    this.evaluationCriteriaRepository = new EvaluationCriteriaRepository();
    this.requisitionRequestFormRepository = new RequisitionRequestFormRepository();
  }

  @post('/ap-dapp/create', {
    responses: {
      '200': {
        description: 'Ap model instance',
        content: {'application/json': {schema: {'x-ts-type': Ap}}},
      },
    },
  })

  async create(@requestBody({required: false}) ap: Ap): Promise<Ap> {

    // Generate a fake AP ID.  Utimately this will come from a service
    var ap_no:string = "AP" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    ap.ap_no = ap_no;
     // Initialize the blank SOW associated with this AP
    var sowJson = JSON.stringify({backgroundStatement: "New SOW"});
    var sow = await this.sowRepository.create({body: sowJson});
    // Initialize a blank funding entry associated with this AP
    var fundingJson = JSON.stringify({name: "New Funding"});
    var funding = await this.fundingRepository.create({body: fundingJson});
    // Document the structure of the JSON returned from the sow repository here 
    // console.log("Returned sow:" + JSON.stringify(sow));

    // Update the AP with the new SOW ID
    ap.sowid = sow["obj"].id;
    //ap.fundingId = funding["obj"].id; 

    // The swagger-client requires that the HTTP body be composed with the 'body' param so that it can be properly extracted
    return await this.apRepository.create({body: ap});
  }

  @put('/ap-dapp/ap/{ap_no}/updateSow', {
    responses: {
      '204': {
        description: 'Sow PUT success',
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
    await this.sowRepository.replaceById({body: sow, id: sowid} );
  }

}
/* tslint:enable no-any */
