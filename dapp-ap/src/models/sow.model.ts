import {Entity, model, property} from '@loopback/repository';

@model()
export class Sow extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  @property({
    type: 'string',
  })
  performanceWorkStatement?: string;

  @property({
    type: 'string',
  })
  backgroundStatement?: string;

  @property({
    type: 'string',
  })
  contractAdministration?: string;


  constructor(data?: Partial<Sow>) {
    super(data);
  }
}