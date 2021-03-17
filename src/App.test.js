import App  from './App';
import {shallow} from 'enzyme';
import {findByTestArr, findByTestAttr, testStore} from './../Utils';
import React from 'react';

const setUp=(initialState={})=>{
    const store=testStore(initialState);
    const wrapper=shallow(<App store={store}/>).childAt(0).dive();
    //console.log(wrapper.debug());
    return wrapper;
}

describe('App Component',()=>{
    let wrapper;
    beforeEach(()=>{
        const initialState={
            posts:[{
                title:'Example',
                body:'test'
            },
            {
                title:'Example',
                body:'test'
            },{
                title:'Example',
                body:'test'
            }]
        }
        wrapper=setUp();
    });

    it('Should render without error',()=>{
        const component=findByTestAttr(wrapper,'appComponent');
        expect(component.length).toBe(1);
    })
    it('exampleMethod_updatesState Method should update',()=>{
        const classInstance=wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState= classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })
    it('exmapleMethod_returnsAValue Method  should a value as expected',()=>{
    const classInstance=wrapper.instance();
    const newValue=classInstance.exmapleMethod_returnsAValue(6);
    expect(newValue).toBe(7);
});

});