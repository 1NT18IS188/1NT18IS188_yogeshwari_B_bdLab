const mongoose=require("mongoose");

const admin_schema=new mongoose.Schema({
    _id:{
        type:String ,
        required:true,
        
    },
   
    Password:{
        type:String,
        required:true,
    }
    
}
);

const Admin=new mongoose.model("Admin",admin_schema);
module.exports=Admin;