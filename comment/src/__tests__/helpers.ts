import {Comment} from '../models';

/**
 * Generate a complete Comment object for use with tests.
 * @param comment A partial (or complete) Comment object.
 */
export function givenComment(comment?: Partial<Comment>) {
  const data = Object.assign(
    {
    },
    comment,
  );
  return new Comment(data);
}
