import {Entity, model, property} from '@loopback/repository';

@model()
export class Forms extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;
  
  @property({
    type: 'string',
  })
  requisitionNumber?: string;

  @property({
    type: 'string',
  })
  setAside?: string;

  @property({
    type: 'object',
  })
  setAsideFor?: object;

  @property({
    type: 'object',
  })
  paymentTerms?: object;

  @property({
    type: 'object',
  })
  contractOrder?: object;

  @property({
    type: 'string',
  })
  method_of_solicitation?: string;

  @property({
    type: 'object',
  })
  paymentsBy?: object;

  @property({
    type: 'string',
  })
  solicitationIncorporates?: string;

  @property({
    type: 'string',
  })
  acquisitionMember?: string;

  @property({
    type: 'object',
  })
  locationforServices?: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  to_schedule?: object[];

  @property({
    type: 'string',
  })
  naicscode?: string;

  @property({
    type: 'string',
  })
  standard_size?: string;

  @property({
    type: 'string',
  })
  solicitationNumber?: string;

  @property({
    type: 'object',
  })
  Sections?: object;

  @property({
    type: 'object',
    required: true,
  })
  clauses: object;

  @property({
    type: 'array',
    itemType: 'object',
  })
  optinal?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  applied?: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  userDefined?: object[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  excludeClauses?: string[];


  constructor(data?: Partial<Forms>) {
    super(data);
  }
}
