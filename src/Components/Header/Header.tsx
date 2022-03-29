import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../image/logo.png';
import './Headerr.css';



function Header() {
  return (
    <div className='Head'>
       <>
       <Navbar bg='dark' variant='dark'>
           
      
      <Nav >
       
          <img className='logo' src={logo}/>
        <h3 className='c'> Welcome to Augmento labs</h3> 
        <h1 className='a'><Nav.Link as={Link} to='/home'>Home</Nav.Link></h1> 
       <h1 className='b'> <Nav.Link as={Link} to='/about'>About</Nav.Link></h1>
       <h1 className='b'> <Nav.Link as={Link} to='/Adduser'>Adduser</Nav.Link></h1> 
      </Nav>
      
      </Navbar>
      </>
    </div>
    
  )
}

export default Header