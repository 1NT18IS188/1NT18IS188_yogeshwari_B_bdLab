const mongoose=require("mongoose");

const signup_fac_schema=new mongoose.Schema({
    _id:{
        type:String ,
        required:true,
        
    },
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Ph_no:{
        type:Number,
        required:true,
        unique:true
    },
    email_id:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true,
    },
    Confirmpassword:{
        type:String,
        required:true
    }
},
);

const Faculty=new mongoose.model("Faculty",signup_fac_schema);
module.exports=Faculty;