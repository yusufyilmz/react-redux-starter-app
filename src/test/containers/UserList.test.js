import React from 'react';
import App from 'components/App';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import UserList from 'containers/UserList';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'

describe("User List container", () => {
    let component;
    let actions;
    const mockStore = configureStore();
    let store, container;
    const initialState = {
        user: {
            items: []
        }
    }

    beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<UserList store={store} />)
    })

    it('has length 1', () => {
        expect(container.length).equal(1)
    });

    it('has a user list', () => {
        expect(container.find('.user-list')).to.exist;
    });

})


