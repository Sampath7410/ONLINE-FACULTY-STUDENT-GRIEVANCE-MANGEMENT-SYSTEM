const mongoose =require('mongoose')

const complaint=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    profession:{
         type:String,
         required:true
    },
    branch:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    sub:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    solution:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('complaint',complaint)