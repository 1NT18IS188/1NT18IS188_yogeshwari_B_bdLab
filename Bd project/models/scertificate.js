const mongoose=require("mongoose");

const scertificate_schema=new mongoose.Schema({
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

const Scertificate=new mongoose.model("Scertificate",scertificate_schema);
module.exports=Scertificate;