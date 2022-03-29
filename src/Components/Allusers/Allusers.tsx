import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Nav, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IUser } from '../../Intefaces/IUser';
 

//  below is the user properties 

interface Props
{
  users:IUser[];
}

function Allusers()
 {
  const [users,setUsers]=useState<IUser[]>([]);

  useEffect(()=>{loadData();},[])

   const loadData=async()=>{
 const res= await axios.get('https://localhost:44330/api/User/users')
     console.log(res.data);
     setUsers(res.data);
     
   }  
   const deleteuser=async (id:number)=>{
    //await axios.delete(`http://localhost:3005/users/${id}`)
    await axios.delete(`https://localhost:44330/api/User/DELETE/${id}`)
    loadData();
  }
//useEffect(()=>{fetch('https://localhost:44330/api/User/users').then(res=>res.json()).then((result)=>{setUsers(result);})},[])
  return (
    <div  className='Alluser'>
       
    <table  className='table border table-striped'>
            <thead className='thead-dark'>
            <tr>
            <th key='key' className='tab'>KEY</th>
            <th key='value' className='tab'>VALUE</th>
            <th key='action' className='tab'>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {
            users.map(user=>(
                    <tr>
                        <th>{user.key}</th>
                        <th>{user.value}</th>
                         <th>
                        <Link to={`/users/${user.id}`}><button className='btn btn-primary'>View</button> </Link>
                        <Button  className='delete' onClick={()=> deleteuser(user.id)}>Delete</Button>
                         </th>
                    </tr>  
                )) 
            }
            </tbody>
        </table> 
        
        </div> 
      
  )
}

export default Allusers