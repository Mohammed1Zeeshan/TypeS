import React from 'react'
import { IUser } from '../../Intefaces/IUser'
import './Comp.css'



function Comp({id,key,value}:IUser) 
{
  return (

    <div  className='Comp-style'>
     
        <div data-testid='Comp1' >
        <h1>ID:{id}</h1>    
        <h1>key:{key}</h1>
        <h1>Value:{value}</h1>
        </div>
    </div>
  )
}

export default Comp