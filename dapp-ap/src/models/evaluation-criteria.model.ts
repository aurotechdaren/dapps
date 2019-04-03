import {Entity, model, property} from '@loopback/repository';

@model()
export class EvaluationCriteria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;
  @property({
    type: 'string',
    required: false,
  })
  description: string;

  @property({
    type: 'string',
  })
  technicalEvaluationCriteria?: string;

  @property({
    type: 'string',
  })
  mandatoryCriteria?: string;

  @property({
    type: 'string',
  })
  pastPerformance?: string;

  @property({
    type: 'string',
  })
  smallBusinessSubContractingAndDisadvantagedParticipationPlans?: string;

  @property({
    type: 'string',
  })
  sourceSelectionProcedures?: string;

  constructor(data?: Partial<EvaluationCriteria>) {
    super(data);
  }
}
