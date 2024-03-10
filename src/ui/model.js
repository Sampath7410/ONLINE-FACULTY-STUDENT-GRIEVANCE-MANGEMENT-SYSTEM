import React from 'react'
import './model.css'
import { FaCheckCircle } from 'react-icons/fa';

const Model=({setModel})=>{
    const model=()=>{
        setModel(false)
    }
    return(
        <div className='modelbackground'>
            <div className='modelbody'>
                
                    <div className='tick'>
                   < FaCheckCircle className='icon'/>
                    </div>
                    <div className='items'>
               <p> Your complaint has</p> <p>  successfully</p> <p>submitted.</p> </div>
               <button className='closebutton' onClick={model}>close</button>
               
           
        </div>
        </div>
    )
}

export default Model;