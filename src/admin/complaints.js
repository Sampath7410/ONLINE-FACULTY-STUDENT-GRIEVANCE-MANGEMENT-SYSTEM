import React, { useEffect, useState } from "react";
import axios from "axios";
import './complaints.css'

const Complaints = () => {
    let a=1;
    const [complaints, setComplaints] = useState([]);
    const [search,setSearch]=useState('')
    const [get,setGet]=useState([])
    const click=(e)=>{
        setSearch(e.target.value)
    }

    useEffect(() => {
        
        
        axios.get('http://localhost:5000/complaints')
            .then(res => {
                setComplaints(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);

            });
    }, [])

    const sear=()=>{
        axios.get('http://localhost:5000/search',
        {
            search:search
        })
        .then(res=>{
             setGet(res.data)
             console.log(res.data)
        })

    }

    return (
        <div className="cc3">
        <div className="cc2">
            <center><h1>COMPLAINTS</h1></center>
            <input type="nu" placeholder="search with id" onClick={click}></input>
            <button type="button" onClick={sear}>search</button>
            {get.map((get, index) => (
                <div key={index}>
                    {(
                        <>
                        
                            <p className="cc1">{a++}.{get.description}</p>
                        </>
                    )}
                </div>
            ))}
            {complaints.map((complaint, index) => (
                <div key={index}>
                    {(
                        <>
                        
                            <p className="cc1">{a++}.{complaint.description} <button className="cb">Review</button></p>
                        </>
                    )}
                </div>
            ))}
        </div></div>
    )
}

export default Complaints
