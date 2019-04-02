//import {aLocation, givenTodo} from '../../helpers';

import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor,
} from '@loopback/testlab';
import {Ap} from '../../../models';
import {ApRepository} from '../../../repositories';
import {ApController} from '../../../controllers';
import {givenAp} from '../../helpers';

describe('ApController (unit)', () => {
  //let repository: StubbedInstanceWithSinonAccessor<ApRepository>;
  let apRepo: StubbedInstanceWithSinonAccessor<ApRepository>;
  let create: sinon.SinonStub;
  let findById: sinon.SinonStub;
  let find: sinon.SinonStub;
  let replaceById: sinon.SinonStub;
 let updateById: sinon.SinonStub;
 let deleteById: sinon.SinonStub;

  //beforeEach(givenStubbedRepository);

  let controller: ApController;
  let aAp: Ap;
  let aApWithId: Ap;
  let aChangedAp: Ap;
  let aListOfAps: Ap[];

  beforeEach(resetRepositories);
  describe('createAp', () => {
    it('creates a Ap', async () => {
      create.resolves(aApWithId);
      const result = await controller.create(aAp);
      expect(result).to.eql(aApWithId);
      sinon.assert.calledWith(create, aAp);
    });
  });

  // describe('getId()', () => {
  //   it('retrieves details of a ap', async () => {
  //     const controller = new ApController(repository);
  //     repository.stubs.find.resolves([{"ap_no": 'ABCD', "id":'6ygywgfyew66768geeh'}]);

  //     const details = await controller.find({filter:{where: {id:'6ygywgfyew66768geeh'}}});

  //     expect(details).to.containEql({ap_no: 'ABCD', id:'6ygywgfyew66768geeh'});
  //     sinon.assert.calledWithMatch(repository.stubs.find, {
  //       where: {ap_no: 'ABCD'},
  //     });
  //   });
  // });

  function resetRepositories() {
    apRepo = createStubInstance(ApRepository);
    aAp = givenAp();
    aApWithId = givenAp({
      id: '6364hfhfhfgr1',
    });
    aListOfAps = [
      aApWithId,
      givenAp({
        id: '77r74ygrfhfhr',
        projectTitle: 'so many things to do',
      }),
    ] as Ap[];
    aChangedAp = givenAp({
      id: aApWithId.id,
      projectTitle: 'Do some important things',
    });

    // Setup CRUD fakes
    ({
      create,
      findById,
      find,
      updateById,
      replaceById,
      deleteById,
    } = apRepo.stubs);

    controller = new ApController(apRepo);
  }

  //   function givenStubbedRepository() {
  //   let repository: StubbedInstanceWithSinonAccessor<ApRepository>;
  //   repository = createStubInstance(ApRepository);
  //  // ({getId, getIdObject}) = repository.stubs;
  //   }
});
