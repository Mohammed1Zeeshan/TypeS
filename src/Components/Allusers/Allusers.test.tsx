
import Allusers from './Allusers';
import {shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import { Button } from "react-bootstrap";
 import puppeteer from 'puppeteer-core';
import {toMatchImageSnapshot} from 'jest-image-snapshot';

jest.setTimeout(30000)
expect.extend({toMatchImageSnapshot});
const browserPath="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

const mockFn = jest.fn();

describe('Testing ',()=>{
    it('Checking for key ',()=>{
      render(<Allusers/>)
      const LinkElement =screen.getByText(/Key/i)
      expect(LinkElement).toBeInTheDocument();
    });
    it('Checking for Value ',()=>{
        render(<Allusers/>)
        const LinkElement =screen.getByText(/Value/i)
        expect(LinkElement).toBeInTheDocument();
      });
      it('Checking for Action ',()=>{
        render(<Allusers/>)
        const LinkElement =screen.getByText(/Action/i)
        expect(LinkElement).toBeInTheDocument();
      });
})
 
describe('shallow', ()=>{
    it('shallow should render the component correctly',()=>{
        const wraper=shallow(<Allusers/>)
        expect(wraper).toMatchSnapshot();
    })
    it('check the length of the column in a table',()=>{
      const wraper=shallow(<Allusers/>)
      expect(wraper.find('.tab').length).toBe(3);
  })
   it('Key as the content',()=>{
    const wraper=shallow(<Allusers/>)
    expect(wraper.find('.tab').at(0).key()).toBe('key');
})
it('Value as the content',()=>{
  const wraper=shallow(<Allusers/>)
  expect(wraper.find('.tab').at(1).key()).toBe('value');
})
it('Value as the content',()=>{
  const wraper=shallow(<Allusers/>)
  expect(wraper.find('.tab').at(2).key()).toBe('action');
})
it('Delete',()=>{
  const wraper=shallow(<Button name='delete' onClick={mockFn}/>)
  expect(mockFn).toMatchSnapshot();
})
})

// test for function exam[ple test


// image snap shot testing
// describe('Imagesanpshot testing', () => {
//   test('Alluser page rendering', async() => { 
//     const browser =await puppeteer.launch();
//     const page  =await browser.newPage();
    
    

    it('create add user snapshot',async()=>{
    const browser = await puppeteer.launch({executablePath:browserPath,});
    const page=await browser.newPage();
    await page.goto('http://localhost:3006');
    const image= await page.screenshot()
    expect(image).toMatchImageSnapshot();
  });


