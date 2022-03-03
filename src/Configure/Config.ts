import Home from "../pages/Home";
import Aboutpage from "../pages/Aboutpage";

import IRoute from '../Intefaces/routes'; 


const routes:IRoute[]=
[
    {
    path:'/',
    name:'Home page ',
    exact:true,
    component:Home
    },
    {
        path:'/about',
        name:'About page ',
        exact:true,
        component:Aboutpage
        }

]
export default routes;