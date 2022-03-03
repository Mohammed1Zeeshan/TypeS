import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IUser } from '../Intefaces/IUser';
import agent from '../Service/BaseUrl';
 

//  below is the user properties 

interface Props
{
  users:IUser[];
}

function Allusers()
 {
  const [users,setUsers]=useState<IUser[]>([]);

  useEffect(()=>{loadData();},[])

   const loadData=async ()=>{
     const res= await axios.get('http://localhost:3005/users')
     console.log(res.data);
     setUsers(res.data);
   }  
   const deleteuser=async (id:number)=>{
    await axios.delete(`http://localhost:3005/users/${id}`)
    loadData();
  }

  return (
    <div>
    <Table  striped bordered hover className='table table-borderless'>
            <thead className='thead-dark'>
            <tr>
            <th>KEY</th>
            <th>VALUE</th>
            <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map(user=>(
                    <tr>
                        <th>{user.Key}</th>
                        <th>{user.Value}</th>
                         <th>
                        <Link to={`/users/${user.id}`}><button className='btn btn-primary'>View</button> </Link>
                        <Button  onClick={()=> deleteuser(user.id)}>Delete</Button>
                         </th>
                    </tr>  
                )) 
            }
            </tbody>
        </Table>      
        </div>
  )
}

export default Allusers