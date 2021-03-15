import React from 'react';
import {shallow} from 'enzyme';
import  {findByTestAttr,checkProps} from './../../../Utils';
import ListItem from './index';

describe('ListItem Component',()=>{
    describe('Checking PorpTypes',()=>{
        it('Should NOT throw a warning',()=>{
            const expectedProps={
                title:'Example Title',
                desc:'Example Description'
            };
            const propsError=checkProps(ListItem,expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Render',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                title:'Example Title',
                desc:'Example Description'
            };
            wrapper=shallow(<ListItem {...props}/>);
        });
        it('Should render without error',()=>{
            const component=findByTestAttr(wrapper,'ListItemComponent');
            expect(component.length).toBe(1);
        });
        it('Should render a title',()=>{
            const title=findByTestAttr(wrapper,'componentTitle');
            expect(title.length).toBe(1);
        });
        it('Should render a description',()=>{
            const description=findByTestAttr(wrapper,'componentDescription');
            expect(description.length).toBe(1);
        });
    });
    describe('Should not render',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                desc:'Example Description'
            };
            wrapper=shallow(<ListItem {...props}/>);
        });
        it('Component is not rendered',()=>{
            const component=findByTestAttr(wrapper,'ListItemComponent');
            expect(component.length).toBe(0);
        });

    });

});