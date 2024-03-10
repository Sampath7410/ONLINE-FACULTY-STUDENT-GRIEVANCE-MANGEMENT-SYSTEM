import React from 'react'
import {useState} from 'react'
import './loginpage.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'
const Login=()=>{
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const change=(e)=>{
    setUsername(e.target.value)
  }
  const chang=(e)=>{
    setPassword(e.target.value)
  }
  const submit=async()=>{
        const response=await fetch('http://localhost:5000/login',{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        }) 
        if (response.ok) {
          sessionStorage.setItem('username', username);
          navigate('/complaint');
       } else {
           alert('Registration failed'); // You might want to handle unsuccessful registration
       } 
    


      
  }



  return(
  
    <div className='body1'>
     
    <h2 className="heading1">STUDENT/FACULTY GREVIENCE MANAGEMENT SYSTEM</h2>  
   

      <div className="box1">
  
      <h1>Login</h1>
      <p>Enter username</p>
      <input type="text" placeholder='username' onChange={change}></input>
      <p>Enter password</p>
      <input type="password" placeholder='password' onChange={chang}></input>
      
        <button type="button" onClick={submit}>Login</button>
      
      <p>Don't have an accout?<Link to='/register' className="link">Register</Link></p>
      <p>login as a admin<Link to='/adminlogin' className='link'>Admin</Link></p>
       
      
  </div>
  
  </div>
  )
}

export default Login