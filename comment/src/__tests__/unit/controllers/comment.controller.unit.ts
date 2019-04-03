//import {aLocation, givenComment} from '../../helpers';

import {
  createStubInstance,
  expect,
  sinon,
  StubbedInstanceWithSinonAccessor,
} from '@loopback/testlab';
import {Comment} from '../../../models';
import {CommentRepository} from '../../../repositories';
import {CommentController} from '../../../controllers';
import {givenComment} from '../../helpers';
import {Filter} from '@loopback/repository';

describe('CommentController (unit)', () => {
  let commentRepo: StubbedInstanceWithSinonAccessor<CommentRepository>;
  let create: sinon.SinonStub;
  let count: sinon.SinonStub;
  let updateAll: sinon.SinonStub;
  let findById: sinon.SinonStub;
  let find: sinon.SinonStub;
  let replaceById: sinon.SinonStub;
  let updateById: sinon.SinonStub;
  let deleteById: sinon.SinonStub;

  let controller: CommentController;
  let aComment: Comment;
  let aCommentWithId: Comment;
  let aChangedComment: Comment;
  let aListOfComments: Comment[];

  beforeEach(resetRepositories);
  describe('createComment', () => {
    it('creates a Comment', async () => {
      create.resolves(aCommentWithId);
      const result = await controller.create(aComment);
      expect(result).to.eql(aCommentWithId);
      sinon.assert.calledWith(create, aComment);
    });
  });

  describe('findCommentById', () => {
    it('returns a comment if it exists', async () => {
      findById.resolves(aCommentWithId);
      expect(await controller.findById(aCommentWithId.id as string)).to.eql(
        aCommentWithId,
      );
      sinon.assert.calledWith(findById, aCommentWithId.id);
    });
  });

  describe('findComments', () => {
    it('returns multiple comments if they exist', async () => {
      find.resolves(aListOfComments);
      expect(await controller.find({})).to.eql(aListOfComments);
      sinon.assert.called(find);
    });

    it('returns empty list if no comments exist', async () => {
      const expected: Comment[] = [];
      find.resolves(expected);
      expect(await controller.find({where: {id: 'hgfhjfghjfjs'}})).to.eql(
        expected,
      );
      sinon.assert.called(find);
    });

    it('uses the provided filter', async () => {
      const filter: Filter = {where: {id: 'do a thing'}};
      find.resolves(aListOfComments);
      await controller.find(filter);
      sinon.assert.calledWith(find, filter);
    });
  });

  describe('replaceComment', () => {
    it('successfully replaces existing items', async () => {
      replaceById.resolves();
      await controller.replaceById(
        aCommentWithId.id as string,
        aChangedComment,
      );
      sinon.assert.calledWith(replaceById, aCommentWithId.id, aChangedComment);
    });
  });

  describe('updateComment', () => {
    it('successfully updates existing items', async () => {
      updateById.resolves();
      await controller.updateById(aCommentWithId.id as string, aChangedComment);
      sinon.assert.calledWith(updateById, aCommentWithId.id, aChangedComment);
    });
  });

  describe('deleteById()', () => {
    it('successfully deletes existing items', async () => {
      deleteById.resolves();
      await controller.deleteById(aCommentWithId.id as string);
      sinon.assert.calledWith(deleteById, aCommentWithId.id);
    });
  });

  describe('count()', () => {
    it('returns the number of existing commentLists', async () => {
      count.resolves(aListOfComments.length);
      expect(await controller.count()).to.eql(aListOfComments.length);
      sinon.assert.called(count);
    });
  });

  describe('updateAll()', () => {
    it('returns a number of comments updated', async () => {
      updateAll.resolves([aListOfComments].length);
      const where = {id: aCommentWithId.id};
      expect(await controller.updateAll(aChangedComment, where)).to.eql(1);
      sinon.assert.calledWith(updateAll, aChangedComment, where);
    });
  });

  function resetRepositories() {
    commentRepo = createStubInstance(CommentRepository);
    aComment = givenComment();
    aCommentWithId = givenComment({
      id: '6364hfhfhfgr1',
    });
    aListOfComments = [
      aCommentWithId,
      givenComment({
        id: '77r74ygrfhfhr',
      }),
    ] as Comment[];
    aChangedComment = givenComment({
      id: aCommentWithId.id,
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
    } = commentRepo.stubs);

    controller = new CommentController(commentRepo);
  }
});
