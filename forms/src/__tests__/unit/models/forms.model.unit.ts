//import {aLocation, givenForms} from '../../helpers';

import {expect} from '@loopback/testlab';
import {Forms} from '../../../models';
import {givenForms} from '../../helpers';

describe('Forms (unit)', () => {
  //we recommend to tests by properties
  describe('getRequisitionNumber()', () => {
    it('uses all three parts when present', () => {
      const forms = formsData({
        requisitionNumber: 'Do, what I say',
      });

      const requisitionNumber = forms.requisitionNumber;
      expect(requisitionNumber).to.equal('Do, what I say');
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

  function formsData(data: Partial<Forms>) {
    return new Forms(givenForms(data));
  }
});
