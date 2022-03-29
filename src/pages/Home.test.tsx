import Home from './Home';
import { shallow } from 'enzyme';
import { render ,screen } from '@testing-library/react';

describe('Testing ',()=>{
    it('Testiing for class name',()=>{
      const wrapper=shallow(<Home/>)
      expect(wrapper.exists('.main')).toEqual(true)
    });
    it('Checking for html content  ',()=>{
        const wrapper=shallow(<Home/>)
        expect(wrapper.contains(<div className=" main" > 
        <h1 className="h1"> This is Home page</h1>
        <p className='p' > Introduction to TypeScript React</p>
       
      </div>)).toEqual(true)
      });
      it('Checking for html content  ',()=>{
        const wrapper=shallow(<Home/>)
        expect(wrapper.containsAllMatchingElements([<div className=" main" > 
        <h1 className="h1"> This is Home page</h1>
        <p className='p' > Introduction to TypeScript React</p>
      </div>])).toEqual(true)
      });
});