import {Entity, model, property} from '@loopback/repository';

@model()
export class RequisitionRequestForm extends Entity {
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
  requestorInformation?: string;

  @property({
    type: 'string',
  })
  requestorName?: string;

  @property({
    type: 'string',
  })
  requestorOfficeCode?: string;

  @property({
    type: 'string',
  })
  requestorTelephoneNumber?: string;

  @property({
    type: 'string',
  })
  requestDate?: string;

  @property({
    type: 'string',
  })
  directorName?: string;

  @property({
    type: 'string',
  })
  directorSignature?: string;

  @property({
    type: 'date',
  })
  directorDateSigned?: string;

  @property({
    type: 'date',
  })
  directorDateReceived?: string;

  @property({
    type: 'string',
  })
  budgetAnalystName?: string;

  @property({
    type: 'string',
  })
  budgetAnalystSignature?: string;

  @property({
    type: 'date',
  })
  budgetAnalystDateSigned?: string;

  @property({
    type: 'date',
  })
  budgetAnalystReceivedDate?: string;

  @property({
    type: 'string',
  })
  vendorSuggestionInformation?: string;

  @property({
    type: 'string',
  })
  remarks?: string;


  constructor(data?: Partial<RequisitionRequestForm>) {
    super(data);
  }
}
