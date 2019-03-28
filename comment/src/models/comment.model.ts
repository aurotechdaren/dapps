import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Comment extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id: string;

  constructor(data?: Partial<Comment>) {
    super(data);
  }
}
