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

    });
         describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props={
                buttonText:'Example Button Text',
                emitEvent:()=>{

                }
            };
            wrapper=shallow(<SharedButton {...props}/>);
        });

        it('Should Render a button',()=>{
            const button=findByTestAttr(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        });
    });
});