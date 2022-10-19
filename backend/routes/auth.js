const express = require('express')
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');

//Create a user using:POST "/api/auth" no authentication required
router.post('/createuser',[
  body('name','Enter a valid name').isLength({ min: 3 }),
  body('email','Enter a valid Email').isEmail(),
  body('password','Password must contain atleast 5 characters').isLength({ min: 5 }),
],(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  }).then(user => res.json(user)).catch(err=>{console.log(err) 
  res.json({error:"Please enter a unique value"})})
  
})

//Authenticate a user using: POST "api/auth/login"
router.post('/login',[
  body('email','Enter a valid Email').isEmail(),
  body('password','Password can not be blank').exists()
],(req,res)=>{

  res.json("hello")
  
})
module.exports = router