const mongoose= require("mongoose");
const { object } = require("webidl-conversions");


const OrderSchema= new mongoose.Schema(
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
                },
            },
        ],
        amount :{type:Number,required: true},
        address : {type:Object,required : true},
        status : {type:string,default: "pending"},

       
    },
    {timestamps: true }
);
module.exports=mongoose.model("Order",OrderSchema); 