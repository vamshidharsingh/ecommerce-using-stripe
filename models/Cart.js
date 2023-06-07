const mongoose= require("mongoose");


const Cartschema= new mongoose.Schema(
    {
        UserId :{type :string , require:true},
        Products  :[
            {
                productId:{
                    type :String
                },
                 
                quantity :{
                    type: Number,
                    dafault:1,
                }
            }
        ]
        

       
    },
    {timestamps: true }
);
module.exports=mongoose.model("Cart",Cartschema); 