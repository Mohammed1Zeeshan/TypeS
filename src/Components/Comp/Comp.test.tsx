import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Comp from "./Comp";
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';







test('renders without crashing',()=>{
    const div=document.createElement('div');
    ReactDOM.render(<Comp id={1} key={"mohammed"} value={"zeeshan"} ></Comp>,div)
})

// it('snapshot test to allusers' , ()=>{
//     const wrapper =renderer.create(<Comp id={1} Key={"zeeshan "} Value={"mohammed"}/>)
//     expect(wrapper).toMatchSnapshot();
// });

// it('shallow',()=>{
//     const wrappeer =shallow(<Comp id={1} Key={"mohammed"} Value={"zeeshan"} />)
//     expect(wrappeer).toMatchSnapshot();
// })

 




  

