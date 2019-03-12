import {Entity, model, property} from '@loopback/repository';

@model()
export class Funding extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;
  
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: false,
  })
  cost: string;

 @property({
    type: 'string',
    required: false,
  })
  tradeOffs: string;

 @property({
    type: 'string',
    required: false,
  })
  priceTechnicalTradeOffAnalysis: string;

 @property({
    type: 'string',
    required: false,
  })
  budgetingAndFunding: string;

 @property({
    type: 'string',
    required: false,
  })
  estimateCurrentYearFunding: string;

 @property({
    type: 'string',
    required: false,
  })
  isCompetitive: string;

@property({
    type: 'string',
    required: false,
  })
  compatibility: string;

  @property({
    type: 'string',
    required: false,
  })
  constraints: string;


  constructor(data?: Partial<Funding>) {
    super(data);
  }
}
