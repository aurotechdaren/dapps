//import {aLocation, givenAp} from '../../helpers';

import {expect} from '@loopback/testlab';
import {Ap} from '../../../models';
import {givenAp} from '../../helpers';

describe('Ap (unit)', () => {
  // we recommend to group tests by method names
  // describe('getFullName()', () => {
  //   it('uses all three parts when present', () => {
  //     const person = givenPerson({
  //       firstname: 'Jane',
  //       middlename: 'Smith',
  //       surname: 'Brown',
  //     });

  //     const fullName = person.getFullName();
  //     expect(fullName).to.equal('Jane Smith Brown');
  //   });

  //   it('omits middlename when not present', () => {
  //     const person = givenPerson({
  //       firstname: 'Mark',
  //       surname: 'Twain',
  //     });

  //     const fullName = person.getFullName();
  //     expect(fullName).to.equal('Mark Twain');
  //   });
  // });

  function givenAp(data: Partial<Ap>) {
    return givenAp;
  }
});
