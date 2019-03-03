import {Entity, model, property} from '@loopback/repository';

@model()
export class Ap extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

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


  constructor(data?: Partial<Ap>) {
    super(data);
  }
}
