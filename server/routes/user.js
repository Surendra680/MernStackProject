const User = require("../model/userSchema");
const express = require("express");
const router = express.Router();

const createUser = async (req, res) => {
  const{email}=req.body
  try {
    let user=await User.findOne({email})
    if(!user){
      user = await User.create(req.body);
     return res.status(201).json({
        message: "successfully registered",
        data: user,
      });
    }else{
return res.status(400).json({
  message:'user already registered'
})
    }
   
  } catch (err) {
    res.status(400).json({
      message: "cant register",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    const isMatch = await user.comparePassword(password);
    
    if (!user||!isMatch) {
      return res.status(400).json({
        message: "incorrect password or email id",
      });
    }

   
   
    res.status(200).json({
      message: "logged in successfully",
      user
    });
  } catch (err) {
    res.status(400).json({
      message: "incorrect password or email id",
    });
  }
};
router.route("/").post(createUser);
router.route("/login").post(loginUser);
module.exports = router;
