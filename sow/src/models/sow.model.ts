import {Entity, model, property} from '@loopback/repository';

@model()
export class Sow extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  title?: string;


  constructor(data?: Partial<Sow>) {
    super(data);
  }
}
