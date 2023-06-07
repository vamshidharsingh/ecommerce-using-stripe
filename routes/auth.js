const router=require("express").Router();
   username: req.body.username,
        email: req.body.email,
        password: Cryconst User =require("../models/User");  
const CryptoJs=require("crypto-js") 


//register
router.post("/register",async(req,res)=>{
    const newUser= new User ({
     ptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),  
    });
    try{ 
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
    }
    catch(err){
        res.status(500).json(err);
    }

});
 
//login

router.post("/login",async(req,res) =>{
    try {
    const user =await User.findOne( {username:req.body.username});
    !User&& res.status(401).json("wrong credials !")

     const hashedpassword   =CryptoJs.AES.decrypt(user.password,process.env.PASS_SEC);
     const password= hashedPassword.toString(CryptoJs.enc.Utf8);
     password!==req.body.password  && 
        res.status(401).json("wrong crendential!");
      
     
    } 
        catch(err)
      
      {
       res.status(500).json(err);
    }
});
  

module.exports=router;  