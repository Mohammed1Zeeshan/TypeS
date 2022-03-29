import React, { useState } from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import {Row,Col} from 'react-bootstrap';
import Allusers from './Components/Allusers/Allusers';
import { BrowserRouter,Route, RouteComponentProps, Switch} from 'react-router-dom';
import routes from './Configure/Configure';
import Header from './Components/Header/Header';
import Adduser from './Components/AddUser/Adduser';
import User from './Components/User/User';
import Edit from './Components/Edit/Edit';
import '../src/Styles/Style.css'
import Comp from './Components/Comp/Comp';
import Employee from './Users/Employee';

const listofemployees=['mohammed','zeeshan']

function App() {
  // const [isAuth,setIsAuth]=useState(false);
  return (
    <BrowserRouter>
    <Switch>    
    <div className="App"> 
     <Header></Header>
      <Row>
      <Col md='6'>
      <Allusers/>
      {/* <Employee employee={listofemployees}/> */}
      </Col> 
      <Col md='6'>
            <Route exact path='/home'><Home/></Route>
            <Route exact path='/about'><Aboutpage/></Route>
            <Route exact path='/Adduser'><Adduser/></Route>
            <Route exact path='/users/:id'><User/></Route>
            <Route exact path='/users/Edit/:id'><Edit/></Route>
          
             </Col>
      </Row>
     
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
