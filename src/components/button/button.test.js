import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from './../../../Utils/index';
import SharedButton from './index';

describe(' SharedButton Component',()=>{
    describe('checking PropTYpes',()=>{
        it('Should not throw warning',()=>{
            const expectedProps={
                buttonText:'Example Button Text',
                emitEvent:()=>{

                }
            };
            const propsError=checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        });

        // ||> checking for the correct property types
    });
         describe('Renders',()=>{
        let wrapper;
        let mockFunc;
        beforeEach(()=>{
            mockFunc=jest.fn();
            const props={
                buttonText:'Example Button Text',
                emitEvent: mockFunc
            };
            wrapper=shallow(<SharedButton {...props}/>);
        });
//component renders without error
        it('Should Render a button',()=>{
            const button=findByTestAttr(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event',()=>{
            const button=findByTestAttr(wrapper,'buttonComponent');
            button.simulate('click');
           const callback=mockFunc.mock.calls.length;
           expect(callback).toBe(1); 
        })
    });
});