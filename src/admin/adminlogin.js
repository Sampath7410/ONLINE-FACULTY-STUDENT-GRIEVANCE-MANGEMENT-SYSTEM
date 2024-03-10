import React from 'react'
import {useState} from 'react'

import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'
const AdminLogin=()=>{
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const change=(e)=>{
    setUsername(e.target.value)
  }
  const chang=(e)=>{
    setPassword(e.target.value)
  }
  const submit = async () => {
    const user = "Sai Naidu"; 
    const pass = "sai12"; 
  
    if (username === user && password === pass) {
      navigate('/complaints');
    } else {
      alert('Registration failed'); 
    } 
  }
  



  return(
  
    <div className='body1'>
     
    <h2 className="heading1">STUDENT/FACULTY GREVIENCE MANAGEMENT SYSTEM</h2>  
   

      <div className="box1">
  
      <h1>Admin Login</h1>
      <p>Enter username</p>
      <input type="text" placeholder='username' onChange={change}></input>
      <p>Enter password</p>
      <input type="password" placeholder='password' onChange={chang}></input>
      
        <button type="button" onClick={submit}>Login</button>
      
      <p>Don't have an accout?<Link to='/register' className="link">Register</Link></p>
       
      
  </div>
  
  </div>
  )
}

export default AdminLogin