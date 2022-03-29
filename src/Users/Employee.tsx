import React from 'react'

const Employee=({employee=[]})=>
{
    if(employee.length=0)
    {
        return <div>no employees found</div>
    }
    else
    {
        return <div>employess exits
            {employee.map(emp =>{
                return <h3>{emp}</h3>
            })
            
        }        
        </div>
    }
    
}

export default Employee