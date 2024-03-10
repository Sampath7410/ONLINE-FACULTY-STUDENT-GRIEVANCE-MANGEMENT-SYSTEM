const mongoose =require('mongoose');

const devuser = new mongoose.Schema({

    type:String,
        required:true
    },
    password:{   
        type:String,
        pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:String

    
})

module.exports = mongoose.model('devuser',devuser)
