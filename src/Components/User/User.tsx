import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import './User.css';

function User() {

    const [user,setUser]=useState({id:'',key:'',value:''})
    const {id} : {id:string} =useParams();
    useEffect(()=>{loaduser();},[])
    const loaduser=async ()=>
    {
        //const res=await axios.get(`http://localhost:3005/users/${id}`);setUser(res.data)
        const res=await axios.get(`https://localhost:44330/api/User/users/${id}`);setUser(res.data)
    }

  return (
    <div >
         <div className='w-50 mx-auto shadow p-5' >
             <Container >
                 <Card>
                     <CardBody className='User'>
                         <CardTitle><h1>Details of User {user.id}</h1></CardTitle>
                         <CardTitle>{user.key}</CardTitle>
                         <CardTitle>{user.value}</CardTitle>
                         <CardSubtitle>
                         <Link to={`/users/Edit/${id}`}><button className='btn btn-primary'>Edit</button> </Link>
                             <Button > Cancle</Button>
                         </CardSubtitle>
                     </CardBody>
                 </Card>
             </Container>
         </div>
    </div>
   
  )
}

export default User;