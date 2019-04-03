//import {aLocation, givenComment} from '../../helpers';

import {expect} from '@loopback/testlab';
import {Comment} from '../../../models';
import {givenComment} from '../../helpers';

describe('Comment (unit)', () => {
  //we recommend to tests by properties
  describe('getId()', () => {
    it('uses all three parts when present', () => {
      const comment = commentData({
        id: 'Do, what I say',
      });

      const id = comment.id;
      expect(id).to.equal('Do, what I say');
    });
  });
  //   it('omits middlename when not present', () => {
  //     const person = givenPerson({
  //       firstname: 'Mark',
  //       surname: 'Twain',
  //     });

  //     const fullName = person.getFullName();
  //     expect(fullName).to.equal('Mark Twain');
  //   });
  // });

  function commentData(data: Partial<Comment>) {
    return new Comment(givenComment(data));
  }
});
