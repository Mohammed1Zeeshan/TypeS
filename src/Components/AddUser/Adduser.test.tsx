import {shallow } from "enzyme";
import Adduser from "./Adduser";
import puppeteer from 'puppeteer-core';
import {toMatchImageSnapshot} from 'jest-image-snapshot';

jest.setTimeout(30000)

expect.extend({toMatchImageSnapshot});
const browserPath="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";


describe('shallow', ()=>{
    it('shallow should render the component correctly',()=>{
        const wraper=shallow(<Adduser/>)
        expect(wraper).toMatchSnapshot();
    })
})
// it('Google page',async()=>{
  //   const browser = await puppeteer.launch({executablePath:browserPath,});
  //   const page=await browser.newPage();
  //   await page.goto('https://www.google.com/');
  //   const image= await page.screenshot()
  //   expect(image).toMatchImageSnapshot();
  // });


    it('create add user snapshot',async()=>{
    const browser = await puppeteer.launch({executablePath:browserPath,});
    const page=await browser.newPage();
    await page.goto('http://localhost:3006/Adduser');
    const image= await page.screenshot()
    expect(image).toMatchImageSnapshot();
  });
