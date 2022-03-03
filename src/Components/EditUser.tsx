import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';


const  EditUser =()=> 
{
    const initial={ 
            Key:'',
            Value:''
    }
    

    const [user,setUser]=useState(initial)

    const {Key,Value}=user;
    
    const id=useParams() 

    const history=useHistory();

        const loadData=async()=>{
            const response=await axios.get(`http://localhost:3005/users/${id}`);
            setUser(response.data)   }
       const onValueChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
           setUser({...user, [e.target.name]:e.target.value})
       } 
       useEffect(()=>{loadData()},[])

       const addDetails= async ()=>{await axios.put(`http://localhost:3005/users/${id}`,user) ; history.push('')}

       const [EditClick,visibility]=useState(false)

       const onVisibility=()=>{ 
           visibility(EditClick)
       }
    const BackHome=()=>{
        history.push('')
    }

    
  return (
    <div className='container my-5 py-2'>EditUser
        {EditClick ?
        <div>
            <div className='border border-dark my-3 py-3 px-2'>
                <h2>Edit User Details</h2>
                <label>Key</label>
         
                <input type="text" name='Key' onChange={(e)=>onValueChange(e)} value={Key} className='form-control form-control-lg' aria-describedby='passwordHelpBlock' ></input>
                <label>Value</label>
                <input type="text" name='Value' onChange={(e)=>onValueChange(e)} value={Value} className='form-control form-control-lg' aria-describedby='passwordHelpBlock' ></input>
            </div>
            <button className='btn btn-sm btn-outline-sucess' onClick={()=>addDetails}>Update</button>
            <button className='btn btn-sm btn-outline-danger  mx-3' onClick={()=>BackHome}>Cancle</button>
        </div>
        :
        <div className=' border border-dark my-2 px-3' >
            <h2 className='text-center text-white'>User Data</h2>
            <h3 className='my-2'>Key :{Key} </h3><br/>
            <h3 >Value :{Value}</h3><br/>
        
        </div>
        }
        {EditClick ? '':
          <div className=' px-2' >  
        <button className='btn btn-sm btn-outline-primary' onClick={()=>onVisibility}>Update</button>
            <button className='btn btn-sm btn-outline-danger  mx-2' onClick={()=>BackHome}>Cancle</button>
    
        </div>  
        }
    </div>
    
  )
}

export default EditUser