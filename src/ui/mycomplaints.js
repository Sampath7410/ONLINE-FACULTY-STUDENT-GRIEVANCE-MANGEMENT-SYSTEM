import React, { useEffect, useState } from "react";
import axios from "axios";
import './mycomplaints.css'
import Home from "./home";
const Mycomplaints = () => {
    let a=1;
    const [complaints, setComplaints] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const names = sessionStorage.getItem('username')
        setName(names)
        axios.get('http://localhost:5000/complaints')
            .then(res => {
                setComplaints(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);

            });
    }, [])

    return (
        <div><Home/>
        <div className="cc3">
        <div className="cc2">
            <center><h1>MYCOMPLAINTS</h1></center>
            
            {complaints.map((complaint, index) => (
                <div key={index}>
                    {complaint.name === name && (
                        <>
                        
                            <p className="cc1">{a++}.{complaint.description}</p>
                        </>
                    )}
                </div>
            ))}
        </div></div></div>
    )
}

export default Mycomplaints
