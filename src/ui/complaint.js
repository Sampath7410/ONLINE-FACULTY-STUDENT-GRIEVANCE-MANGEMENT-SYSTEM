import React,{useState} from 'react'
import Home from './home'
import './complaint.css'
import Model from './model'
import axios from 'axios'


const Complaint=()=>{
    
    const [name,setName]=useState('')
    const [profession,setProfession]=useState('')
    const [branch,setBranch]=useState('')
    const [id,setId]=useState('')
    const [sub,setSub]=useState('')
    const [description,setDescription]=useState('')
    const [solution,setSolution]=useState('')
    const [model,setModel]=useState(false)
    const changename=(e)=>{
        setName(e.target.value)
    }
    const changeprofession=(e)=>{
        setProfession(e.target.value)
    }
    const changebranch=(e)=>{
        setBranch(e.target.value)
    }
    const changeid=(e)=>{
        setId(e.target.value)
    }
    const changesub=(e)=>{
        setSub(e.target.value)
    }
    const changedescription=(e)=>{
        setDescription(e.target.value)
    }
    const changesolution=(e)=>{
        setSolution(e.target.value)
    }
    
    const submit=()=>{
        axios.post('http://localhost:5000/complaint',{
            name:name,
            profession:profession,
            branch:branch,
            id:id,
            sub:sub,
            description:description,
            solution:solution
        })
        if(sub===''|| name==='' || profession==='' || branch==='' || id==='' || description==='' || solution===''){
            alert('Please fill all feilds'); 
         }
        else {
           
            setModel(true)
         } 
    }
    return(
        
            <div className='ccc1'>
            <Home/>
            <div className='come'>.
               <h1>COMPLAINT</h1>
            <p>Name :
            <input type='nu' placeholder='name' onChange={changename} /></p>
            <p>
            Profession:
            <input type='nu' placeholder='student/faculty' onChange={changeprofession} />
            </p>
            <p>
                Branch
                <input type='nu' placeholder='Branch' onChange={changebranch} />
            </p>
            <p>
                id no.
                <input type='nu' placeholder='id no.' onChange={changeid} />
            </p>
            <p>
                subject
                <input type='nu' placeholder='sub' onChange={changesub} />
            </p>
            <p>
                write full description about your complaint<br/>
                
                
             <textarea placeholder='detail' className='c1' onChange={changedescription} ></textarea>
            </p>
            
            <p>
                Do you find any solution for this grevience<br/>
                <textarea placeholder='solution' className='c1' onChange={changesolution} ></textarea>
            </p>
            <p>
                <button type='button' onClick={submit}>Submit</button>
            </p>
            {model && <Model setModel={setModel}/>}
            </div>
            </div>
    )
}

export default Complaint;
