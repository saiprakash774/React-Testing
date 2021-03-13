import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import {findByTestAttr} from './../../../Utils';

//***** since setUp method is different for different test cases should consider in the same file****

const setUp=(props={})=>{
    const component=shallow(<Header {...props}/>); 
    return component;
}

/*
describe() allows you to gather your tests into seperate grouping within same file by breaking your test suite
into components depending on your test strategy.Even multiple nested levels(for unit test cases it mosst common 
    to have one test file per production)  
*/

describe('Header Component',()=>{
    let component;  // here beforeEach methods runs before each test case
    beforeEach(()=>{
        component=setUp();
    })

    /*
    ************Since we need this method everytime we are considering in the utils folder **************

    const findByTestAttr=(component,attr)=>{
        const wrapper=component.find(`[data-test='${attr}']`);
        return wrapper;
    };

    ******************************** it is an alias of test ******************************

    it('Should render without any erros',()=>{
    const component=shallow(<Header/>);               => general usage of shallow in every line
    console.log(component.debug());
    const wrapper=component.find('.headerComponent');   =>using from className
    expect(wrapper.length).toBe(1);
    });

    it('Should render a logo',()=>{
        const component=setUp();                        =>using setUP instead of shallow in every test cases
        console.log(component.debug());
        const logo=component.find('.logoIMG');
        expect(logo.length).toBe(1);
        });

    */

    it('Should render without any erros',()=>{
        const wrapper= findByTestAttr(component,'headerComponent');  //by findByTestAttr we can test each attribute occurance
        expect(wrapper.length).toBe(1);
        });

    /*
        it is used to perform individual tests.you able to be described eacch test with a little sentence
        as shown above.You should be able to sub-divide tests futher,if you feel like you need ,use describe instead
    */

        it('Should render a logo',()=>{
            const logo=component.find(`[data-test='logoIMG']`);
            expect(logo.length).toBe(1);
            });
})
