import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import  puppeteer  from "puppeteer-core";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { render, screen } from "@testing-library/react";

jest.setTimeout(30000)
expect.extend({toMatchImageSnapshot});
const browserPath="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";


it('test',()=>{
    const Wrapper=shallow(<Header/>)
    expect(Wrapper.exists('.Head')).toMatchSnapshot();
})
// Image snapshot testing  not required its just for practise

it("image snapshot testing header",async()=>{
    const browser=await puppeteer.launch({executablePath:browserPath})
    const page=await browser.newPage();
    await page.goto('http://localhost:3006');
    const image= await page.screenshot()
    expect(image).toMatchImageSnapshot();
})
it('Home page nav button',()=>{
    const Wrapper=shallow(<Header/>)
    expect(Wrapper.exists('.a')).toMatchSnapshot();
})
it('About page nav and AddUser page nav button',()=>{
    const Wrapper=shallow(<Header/>)
    expect(Wrapper.exists('.b')).toMatchSnapshot();
})
it('About page nav and AddUser page nav button',()=>{
    const Wrapper=shallow(<Header/>)
    expect(Wrapper.exists('.logo')).toMatchSnapshot();
})



