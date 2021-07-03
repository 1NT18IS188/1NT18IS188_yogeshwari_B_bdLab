const mongoose=require("mongoose");

const certificate_schema=new mongoose.Schema({
    _id:{
        type:String ,
        required:true,
        
    },
    Eventname:{
        type:String,
        required:true
    },
    Issuer_cft:{
        type:String,
        required:true
    },
    Rank_cft:{
        type:String,
        required:true,
        
        
    },
    year_cft:{
        type:String,
        required:true,
    
        
    },
    img:{
        type:String,
        required:true,
    }
    
},
);

const certificate=new mongoose.model("Certificate",certificate_schema);
module.exports=certificate;