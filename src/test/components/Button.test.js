import React from 'react';
import App from 'components/App';
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Button from 'components/Button';
import sinon from 'sinon';

describe("Button", () => {
    let component;
    let actions;

    beforeEach(() => {

        actions = {
            onClick: sinon.spy(),
        }

        const props = {
            type: "test",
            className: "testclass",
            iconClassName: "testiconclass",
            id: "test id",
            label: "test label"
        }

        component = shallow(<Button {...props} {...actions} />)
    })


    it("Button render components", () => {
        expect(component.find('button')).to.exist;
    })

    it("Button render text", () => {
        expect(component.text()).equals('test label')
    })

    it("Button should call onClick button click", () => {
        let button = component.find('.testclass')
        button.simulate('click')
        expect(actions.onClick.calledOnce).to.equal(true);
    })

})
