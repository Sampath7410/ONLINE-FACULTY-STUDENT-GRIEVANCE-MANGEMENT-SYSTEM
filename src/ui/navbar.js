import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className="nav">
           <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <span class="material-symbols-outlined">
home
</span>
            <ul className="na">
             <li className='a'>
             <Link to='/profile' className='link1'>Profile</Link>
             </li>
             <li className='b'>
                <Link to='/complaint' className='link1'>Complaint</Link>
                </li>
                <li className='c'>
                <Link to='/mycomplaints' className='link1'>mycomplaints</Link>
                </li>
                <li className='d'>
                    <Link to='/about' className='link1'>About</Link>
                </li>
                <li className='e'>
                    <Link to='/' className='link1'>Logout</Link>
                </li>
                </ul>
        </div>
    )
}
export default Navbar