import React, { useState } from 'react';

import './register.css';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate=useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")

    const changeHandler = (e) => {
        setUsername(e.target.value);
        
    };
    const changeh=(e)=>{
        setPassword(e.target.value);
    }
    const change=(e)=>{
        setEmail(e.target.value);
    }
    const chang=(e)=>{
        setMobile(e.target.value);
    }

    const submitHandler = async() => {
        
        const response=await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password,email,mobile }),
            
          })
          if (response.ok) {
            navigate('/');
         } else {
             alert('Registration failed'); // You might want to handle unsuccessful registration
         }
       
          
    };

    return (
        <div className='body'>
        
        <h1 className="heading">STUDENT/FACULTY GREVIENCE MANAGEMENT SYSTEM</h1>
                <div className="box2">
                    
                        <center>
                            <h2>Register</h2>
                        </center>
                        <p>Enter username</p>
                        <input type="text" name='username' placeholder="Username" onChange={changeHandler} required />
                        
                        <p>Enter password</p>
                        <input type="password" name='password' placeholder="password" onChange={changeh}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" />
                        
                        <p>Enter eamil</p>
                        <input type="email" name='email' placeholder="email" onChange={change} />
                        <p>Enter Mobile</p>
                        <input type="number" placeholder='mobile number' onChange={chang}  />
                        <center>
                            <button type="submit"  onClick={submitHandler}>register</button>
                            <br />
                            <p>already having an accout?<Link to="/" className="link">Login</Link></p>
                            
                            
                        </center>
                    
                </div>
                
            
        </div>
    );
}

export default Register;
