const mongoose= require("mongoose");


const Productschema= new mongoose.Schema(
    {
        title :{type :string , require:true, unique : true},
        desc  : {type: string ,required: true , },
        img :{type : string ,required : true},
        categories :{type : Array},
        size :{ytpe : string },
        color :{type : string },
        price :{type : Number ,required : true},

       
    },
    {timestamps: true }
);
module.exports=mongoose.model("User",productschema); 