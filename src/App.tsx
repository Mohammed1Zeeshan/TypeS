import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Aboutpage from './pages/Aboutpage';
import {Row,Col} from 'react-bootstrap';
import Allusers from './Components/Allusers';
import { BrowserRouter,Route, RouteComponentProps, Switch} from 'react-router-dom';
import routes from './Configure/Config';
import Header from './Components/Header';
import Adduser from './Components/Adduser';
import User from './Components/User';
import Edit from './Components/Edit';




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
      </Col>
      <Col md='6'>
            <Route exact path='/'><Home/></Route>
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
