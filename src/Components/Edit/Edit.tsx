import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams, Link } from 'react-router-dom';
import { Input } from 'reactstrap';


function Edit() 
{

  const history=useHistory()
  
  const [user,setUser]=useState({
      
      key:'',
      value:''
  })
  const {key,value}=user;
  const {id} : {id:string} =useParams();

  const onInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
      setUser({...user,[e.target.name]: e.target.value})
      console.log(user);
  }

  const Submit= async (e: { preventDefault: () => void; })=>{
        e.preventDefault();       
        //await axios.put(`http://localhost:3005/users/${id}`,user)
        await axios.put(`https://localhost:44330/api/User/editStu/${id}`,user)
        history.push('')       
  }
  
  useEffect(()=>{loaduser()},[])

  const loaduser=async ()=>{ 
    //  const res=await axios.get(`http://localhost:3005/users/${id}`);
      
      const res=await axios.get(`https://localhost:44330/api/User/users/${id}`);

      console.log(res.data)
      setUser(res.data)
  }

  return (
    <div className='container'>
        
    <div className='w-75 mx-auto shadow p-5'> 
    <h2>Update user</h2>
    <Form>
    <div className='form-group'>
    <Input type='text'  placeholder="enter key" name="key" className='form-control form-control-lg'
    value={key} onChange={e=>onInputChange(e)}></Input>
    </div>
    <div className='form-group'> 
    <Input type='text'  placeholder="enter value" name="value" className='form-control form-control-lg'
     value={value} onChange={e=>onInputChange(e)} ></Input>
    </div>
    <Button  onClick={Submit}>Update</Button>
    </Form>
    </div>
    </div>
  )
}

export default Edit