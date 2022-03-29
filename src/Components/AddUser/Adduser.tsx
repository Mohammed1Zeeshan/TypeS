import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Input } from 'reactstrap'


function Adduser() {

  const historyy=useHistory()
    
    const [users,setUsers]=useState({
       // id:'',
        key:'',
        value:''
    })
    const {key,value}=users;

    
    const onInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{setUsers({...users,[e.target.name]: e.target.value});console.log(users);}

    //const Submit= async (e: { preventDefault: () => void })=>{e.preventDefault();await axios.post('http://localhost:3005/users',user);historyy.push('')}
    const Submit= async (e: { preventDefault: () => void })=>{e.preventDefault();await axios.post('https://localhost:44330/api/User/Addstu',users);historyy.push('')}


  return (
    <div className='constainer'><h1>Add User</h1>
      <div className='w-75 mx-auto shadow p-5'>
        <Form>
          <div className='form-group'>
          <Input type='text'  placeholder="enter Key"  name="key" className='form-control form-control-lg'
           value={key} onChange={e=>onInputChange(e)} ></Input></div> 
        </Form>
        <Form>
          <div className='form-group'>
          <Input type='text'  placeholder="enter Value"  name="value" className='form-control form-control-lg'
            value={value} onChange={e=>onInputChange(e)}></Input></div> 
        </Form>
        <Button onClick={Submit} >Add</Button>
      </div>
    </div>
  )
}

export default Adduser
