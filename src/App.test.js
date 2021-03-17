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
});