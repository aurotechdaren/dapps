import {Entity, model, property} from '@loopback/repository';

@model()
export class Ap extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  ap_no?: string;

  @property({
    type: 'string',
  })
  projectTitle?: string;

  @property({
    type: 'string',
  })
  typeOfWork?: string;

  @property({
    type: 'string',
  })
  statementOfNeed?: string;

  @property({
    type: 'string',
  })
  acquisitionConsiderations?: string;

  @property({
    type: 'string',
  })
  capabilityPerformance?: string;
  
  @property({
    type: 'date',
  })
  periodOfPerformance?: string;
  
  @property({
    type: 'string',
  })
  contractVehicle?: string;
  
  @property({
    type: 'string',
  })
  contractType?: string;
  
  @property({
    type: 'string',
  })
  awardType?: string;
  
  @property({
    type: 'string',
  })
  proposedSolicitationType?: string;
  
  @property({
    type: 'string',
  })
  performanceBasedApproach?: string;
  
  @property({
    type: 'string',
  })
  bundlingDetermination?: string;
  
  @property({
    type: 'string',
  })
  contractingOfficer?: string;
  
  @property({
    type: 'string',
  })
  requestor?: string;
  
  @property({
    type: 'string',
  })
  budgetApprover?: string;
  
  @property({
    type: 'date',
  })
  date?: string;
  
  @property({
    type: 'string',
  })
  form_id?: string;
  
  @property({
    type: 'string',
  })
  status?: string;
    
  @property({
    type: 'string',
  })
  description?: string;
 
  @property({
    type: 'string',
  })
  supplyorservice?: string;

  @property({
    type: 'string',
  })
  itornonit?: string;

  @property({
    type: 'string',
  })
  poc?: string;

  @property({
    type: 'string',
  })
  sol_no?: string;

  @property({
    type: 'date',
  })
  createdDate?: string;

  @property({
    type: 'string',
  })
  contractOfficer?: string;

  @property({
    type: 'string',
  })
  createdBy?: string;

  @property({
    type: 'string',
  })
  selection?: string;

  @property({
    type: 'string',
  })
  contractNumber?: string;

  @property({
    type: 'string',
  })
  productorService?: string;

  @property({
    type: 'string',
  })
  catalogue?: string;

  @property({
    type: 'string',
  })
  inputService?: string;

  @property({
    type: 'string',
  })
  similarContract?: string;

  @property({
    type: 'string',
  })
  initaitedBy?: string;

  @property({
    type: 'string',
  })
  dsol_no?: string;

  @property({
    type: 'string',
  })
  acqConsideration?: string;

  @property({
    type: 'string',
  })
  acqMethod?: string;

  @property({
    type: 'string',
  })
  baAddress?: string;

  @property({
    type: 'string',
  })
  baEmail?: string;

  @property({
    type: 'string',
  })
  baName?: string;

  @property({
    type: 'string',
  })
  baPhone?: string;

  @property({
    type: 'string',
  })
  coAddress?: string;

  @property({
    type: 'string',
  })
  coEmail?: string;

  @property({
    type: 'string',
  })
  coName?: string;

  @property({
    type: 'string',
  })
  coPhone?: string;

  @property({
    type: 'string',
  })
  endDate?: string;

  @property({
    type: 'string',
  })
  existingContract?: string;

  @property({
    type: 'string',
  })
  performanceApproach?: string;

  @property({
    type: 'string',
  })
  rAddress?: string;

  @property({
    type: 'string',
  })
  rEmail?: string;

  @property({
    type: 'string',
  })
  rName?: string;

  @property({
    type: 'string',
  })
  rPhone?: string;

  @property({
    type: 'string',
  })
  startDate?: string;

  @property({
    type: 'string',
  })
  sowid?: string;

  @property({
    type: 'string',
  })
  fundingId?: string;

  constructor(data?: Partial<Ap>) {
    super(data);
  }
}
