const mongoos = require('mongoose');

const userSchema=  mongoos.Schema({
    name:{ 
        type:String, 
        required:true
    },
    email:{
        type:String,
        unique:true, 
        required:true
    },
    password:{
        type:String, 
        required:true 
    },
    date:{
        type:Date ,
      default: Date.now}
     
    },
    
    {timestamps:true}
    );
    
    module.exports = mongoos.model('user',userSchema);