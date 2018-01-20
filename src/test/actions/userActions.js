import * as actions from '../actions';
import * as actionTypes from 'constants/actionTypes'

describe('actions', () => {
    describe('fetchUsers', () => {
      it('has the correct type', () => {
        const action = actions.fetchUsers();
        expect(action.type).to.equal(actionTypes.FETCH_USERS);
      });
  
   S
    });
  });
  