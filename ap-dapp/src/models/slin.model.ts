import {Entity, model, property} from '@loopback/repository';

@model()
export class Slin extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;
  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
  })
  quantity?: number;

  @property({
    type: 'number',
  })
  unitForQuantity?: number;

  @property({
    type: 'number',
  })
  unitPrice?: number;


  constructor(data?: Partial<Slin>) {
    super(data);
  }
}
