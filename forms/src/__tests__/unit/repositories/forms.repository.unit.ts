//import {aLocation, givenForms} from '../../helpers';

import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor,
} from '@loopback/testlab';
import {Forms} from '../../../models';
import {FormsRepository} from '../../../repositories';
import {givenForms} from '../../helpers';
import {Filter} from '@loopback/repository';

describe('FormsRepository (unit)', () => {
  let formsRepo: StubbedInstanceWithSinonAccessor<FormsRepository>;
  let create: sinon.SinonStub;
  let count: sinon.SinonStub;
  let updateAll: sinon.SinonStub;
  let findById: sinon.SinonStub;
  let find: sinon.SinonStub;
  let replaceById: sinon.SinonStub;
  let updateById: sinon.SinonStub;
  let deleteById: sinon.SinonStub;

  let aForms: Forms;
  let aFormsWithId: Forms;
  let aChangedForms: Forms;
  let aListOfFormss: Forms[];

  beforeEach(resetRepositories);
  describe('createForms', () => {
    it('creates a Forms', async () => {
      create.resolves(aFormsWithId);
      const result = await formsRepo.create(aForms);
      expect(result).to.eql(aFormsWithId);
      sinon.assert.calledWith(create, aForms);
    });
  });

  describe('findFormsById', () => {
    it('returns a forms if it exists', async () => {
      findById.resolves(aFormsWithId);
      expect(await formsRepo.findById(aFormsWithId.id as string)).to.eql(
        aFormsWithId,
      );
      sinon.assert.calledWith(findById, aFormsWithId.id);
    });
  });

  describe('findFormss', () => {
    it('returns multiple formss if they exist', async () => {
      find.resolves(aListOfFormss);
      expect(await formsRepo.find({})).to.eql(aListOfFormss);
      sinon.assert.called(find);
    });

    it('returns empty list if no formss exist', async () => {
      const expected: Forms[] = [];
      find.resolves(expected);
      expect(await formsRepo.find({where: {id: 'hgfhjfghjfjs'}})).to.eql(
        expected,
      );
      sinon.assert.called(find);
    });

    it('uses the provided filter', async () => {
      const filter: Filter = {where: {requisitionNumber: 'do a thing'}};
      find.resolves(aListOfFormss);
      await formsRepo.find(filter);
      sinon.assert.calledWith(find, filter);
    });
  });

  describe('replaceForms', () => {
    it('successfully replaces existing items', async () => {
      replaceById.resolves();
      await formsRepo.replaceById(aFormsWithId.id as string, aChangedForms);
      sinon.assert.calledWith(replaceById, aFormsWithId.id, aChangedForms);
    });
  });

  describe('updateForms', () => {
    it('successfully updates existing items', async () => {
      updateById.resolves();
      await formsRepo.updateById(aFormsWithId.id as string, aChangedForms);
      sinon.assert.calledWith(updateById, aFormsWithId.id, aChangedForms);
    });
  });

  describe('deleteById()', () => {
    it('successfully deletes existing items', async () => {
      deleteById.resolves();
      await formsRepo.deleteById(aFormsWithId.id as string);
      sinon.assert.calledWith(deleteById, aFormsWithId.id);
    });
  });

  describe('count()', () => {
    it('returns the number of existing formsLists', async () => {
      count.resolves(aListOfFormss.length);
      expect(await formsRepo.count()).to.eql(aListOfFormss.length);
      sinon.assert.called(count);
    });
  });

  describe('updateAll()', () => {
    it('returns a number of formss updated', async () => {
      updateAll.resolves([aListOfFormss].length);
      const where = {requisitionNumber: aFormsWithId.requisitionNumber};
      expect(await formsRepo.updateAll(aChangedForms, where)).to.eql(1);
      sinon.assert.calledWith(updateAll, aChangedForms, where);
    });
  });

  function resetRepositories() {
    formsRepo = createStubInstance(FormsRepository);
    aForms = givenForms();
    aFormsWithId = givenForms({
      id: '6364hfhfhfgr1',
    });
    aListOfFormss = [
      aFormsWithId,
      givenForms({
        id: '77r74ygrfhfhr',
        requisitionNumber: 'so many things to do',
      }),
    ] as Forms[];
    aChangedForms = givenForms({
      id: aFormsWithId.id,
      requisitionNumber: 'Do some important things',
    });

    // Setup CRUD fakes
    ({
      create,
      count,
      updateAll,
      findById,
      find,
      updateById,
      replaceById,
      deleteById,
    } = formsRepo.stubs);
  }
});
