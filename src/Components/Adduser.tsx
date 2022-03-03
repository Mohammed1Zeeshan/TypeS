import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Input } from 'reactstrap'


function Adduser() {

  const historyy=useHistory()
    
    const [user,setUser]=useState({
        id:'',
        Key:'',
        Value:''
    })
    const {id,Key,Value}=user;

    const onInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{setUser({...user,[e.target.name]: e.target.value});console.log(user);}

    const Submit= async (e: { preventDefault: () => void })=>{e.preventDefault();await axios.post('http://localhost:3005/users',user);historyy.push('')}

  return (
    <div className='constainer'><h1>Add User</h1>
      <div className='w-75 mx-auto shadow p-5'>
        <Form>
          <div className='form-group'>
          <Input type='text'  placeholder="enter Key"  name="Key" className='form-control form-control-lg'
           value={Key} onChange={e=>onInputChange(e)} ></Input></div> 
        </Form>
        <Form>
          <div className='form-group'>
          <Input type='text'  placeholder="enter Value"  name="Value" className='form-control form-control-lg'
            value={Value} onChange={e=>onInputChange(e)}></Input></div> 
        </Form>
        <Button onClick={Submit} >Add</Button>
      </div>
    </div>
  )
}

export default Adduser
