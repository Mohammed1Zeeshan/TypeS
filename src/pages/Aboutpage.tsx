import { FunctionComponent } from "react";
import '../Styles/Style.css'
import '../Components/image/logo.png';

 
 
 //const bimg =new URL('../Components/image/logo.png',import.meta.url) CANNOT USE import.meta outside a module

interface IAboutProps {
  
}
 
const IAbout: FunctionComponent<IAboutProps> = () => {
  return (  
    <div className="main">
    <div className="backgroundimg " >
    <h1 className="h1">  About Page</h1>
    <p className="p">This the implaentation of Scss </p>
    
   
    </div>
  </div>
  );
}
 
export default IAbout;