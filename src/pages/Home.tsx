import { FunctionComponent } from "react";
import React from 'react'
import '../Styles/Style.css'


interface IHomeProps {
  
}
 
const IHome: FunctionComponent<IHomeProps> = () => {
  return (
    <div className=" main" > 
      <h1 className="h1"> This is Home page</h1>
      <p className='p' > Introduction to TypeScript React</p>
     
    </div>
    );
}
 
export default IHome;