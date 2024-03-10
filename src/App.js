import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './ui/loginpage'
import Register from './ui/register'
import Home from './ui/home'
import About from './ui/about'
import Profile from './ui/profilepage';
import Complaint from './ui/complaint';
import Mycomplaints from './ui/mycomplaints'
import AdminLogin from './admin/adminlogin';
import Complaints from './admin/complaints';
function App(){
  return(
    <div>
      
      <Router>
          <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/register" element={<Register/>}></Route>
            <Route exact path='/home' element={<Home/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/profile' element={<Profile/>}></Route>
            <Route exact path='/complaint' element={<Complaint/>}></Route>
            <Route exact path='/mycomplaints' element={<Mycomplaints/>}></Route>
            <Route exact path='/adminlogin' element={<AdminLogin/>}></Route>
            <Route exact path='complaints' element={<Complaints/>}></Route>
          </Routes>
        
      </Router>
     
    </div>
  )
}

export default App