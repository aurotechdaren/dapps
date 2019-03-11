import {Entity, model, property} from '@loopback/repository';

@model()
export class Igce extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;
  
  @property({
    type: 'date',
  })
  periodOfPerformance?: string;

  @property({
    type: 'string',
  })
  basePeriodCost?: string;

  @property({
    type: 'date',
  })
  basePeriodDate?: string;

  @property({
    type: 'string',
  })
  totalCost?: string;

  @property({
    type: 'string',
  })
  optionPeriodCost?: string;

  @property({
    type: 'string',
  })
  slinDescription?: string;

  @property({
    type: 'string',
  })
  slinQuantity?: string;

  @property({
    type: 'string',
  })
  slinUnitOfMeasure?: string;

  @property({
    type: 'string',
  })
  slinUnitPrice?: string;

  @property({
    type: 'string',
  })
  slinTotalCost?: string;

  @property({
    type: 'string',
  })
  otherDirectCosts?: string;

  @property({
    type: 'string',
  })
  travel?: string;


  constructor(data?: Partial<Igce>) {
    super(data);
  }
}
