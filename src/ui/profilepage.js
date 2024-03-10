import React, {useState,useEffect} from 'react'
import {  FaUserCircle } from 'react-icons/fa';
import axios from 'axios'
import './profilepage.css'
import Home from './home';

const Profile=()=>{
  const [tasks,setTasks]=useState([])
  const [user_name,setUser_name]=useState('')

  useEffect(() => {
    const name=sessionStorage.getItem('username');
    setUser_name(name)
    if(name){
    axios.get('http://localhost:5000/users')
 
      .then(res => {
        setTasks(res.data);
        console.log(res.data);
        
      })

      .catch(error => {
        console.error('Error fetching profile data:', error);
      
      });
      
 } 
 
}, []);
      
 
  
  return(
    <div><Home/>
    <div className='pp3'> 
    <div className='pp2'>
     
     <center><h1><FaUserCircle/></h1></center>
       
     {tasks.map((task, index) => (
        <div key={index}>
          {task.username === user_name && (
            <>
            <div className='pp1'>
              <p>Username: {task.username}</p>
              <p>Email: {task.email}</p>
              <p>Mobile: {task.mobile}</p>
              <button>update profile</button>
              </div>
            </>
          )}
        </div>
      ))}

                 
    </div></div></div>
  )
}

export default Profile;