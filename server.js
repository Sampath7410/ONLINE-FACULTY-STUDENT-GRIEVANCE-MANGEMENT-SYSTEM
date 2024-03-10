const express = require('express');
const mongoose = require('mongoose');
const devuser = require('./devusermodel');
const complaint=require('./complaint')
const bodyParser = require('body-parser');
const cors = require('cors');
const devusermodel = require('./devusermodel');

const app = express();
app.use(cors())
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://sain41159:sai123@cluster0.tunicjm.mongodb.net/',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('db connected'))


app.get('/',(req,res)=>{
    return res.send('This is Sai Naidu')
})

app.post('/register',async(req,res)=>{
    try{
        const{username,password,email,mobile}=req.body
        const exist=await devuser.findOne({username})
        if(exist){
            return res.status(400).send('user already exists');
        }
        else{
        const newUser=new devuser({username,password,email,mobile})
        
        await newUser.save();
        return res.status(200).send('user registered');
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send('server error')
    }
})

app.post('/login',async(req,res)=>{
    try{
        const{username,password}=req.body
        const exist=await devuser.findOne({username})
        
        if(!exist){
            return res.status(400).send('user not exist')
        }

        if(exist.password!=password){
            return res.status(400).send('password invalid')
        }
        
        else{
            
            console.log(username)
            console.log('registerd')
            return res.status(200).send('user registered');
            
        }  
    }
    catch(err){
        console.log(err);
        return res.status(501).send('server error')
    }
});

app.get('/profile', async (req, res) => {
    try { 

const exist = await devuser.find();

if (exist) {
  console.log(exist);
  return res.json(exist);;
      } 
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });
  
  app.post('/complaint',async(req,res)=>{
    try{
        const {name,profession,branch,id,sub,description,solution}=req.body;
        const newComplaint=complaint({name,profession,branch,id,sub,description,solution})
        await newComplaint.save();
        return res.send('comlaint submitted')
        
    }
    catch(err){
        console.log(err)
    }
  })

  app.get('/users',async(req,res)=>{
    

        const exist = await devuser.find();
          console.log(exist);
           res.send(exist);;
    
  })
  
  app.get('/complaints',async(req,res)=>{
    const complain=await complaint.find();
    console.log(complain);
    res.send(complain);
  })

  app.get('/search',async(req,res)=>{
    try{
        const {id}=req.body;
        const exist=await complaint.findOne({id})
         if(exist){
            console.log(exist)
            res.send(exist)
         }
        
        
    }
    catch(err){
        console.log(err)
    }
  })
 
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));