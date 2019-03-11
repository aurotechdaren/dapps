import {dataSource} from './evaluationcriteria.swagger.datasource';
/* tslint:disable no-any */
export class EvaluationCriteriaRepository {
  model: any;

  constructor() {
    this.model = dataSource.createModel('EvaluationCriteriaService', {});
  }

  // Finds a evaluationCriteria record by it's id
  async find(evaluationCriteriaId: string) {
    const response = await this.model.findById({id: `${evaluationCriteriaId}`});
    return (response && response.obj) || [];
  }

  async create(evaluationCriteriaInstance: any): Promise<any> {
    
    return await this.model.create(evaluationCriteriaInstance);
  }

  async replaceById(evaluationCriteriaHttpParams: any): Promise <any> {

    // Documented in the ap-dapp controller - the evaluationCriteriaHttpParams is a concatenation of:
    // evaluationCriteriaId and the sow JSON in the body 
    return await this.model.replaceById(evaluationCriteriaHttpParams);
  }
}
/* tslint:enable no-any */
