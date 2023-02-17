const express = require("express");
const router = express.Router();
const SignUp = require("../models/Signup");


// //register applicants
router.post("/register-applicant", (req, res) => {
  const signupapplicants = new SignUp({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signupapplicants
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json({msg:"error happend at " + error});
    });
});
router.use((req,res,next)=>{
  console.log(req.body,'@',Date.now());
  next();
})
router.delete('/:id',(req,res)=>{
  res.json({mssg:'deleted sucessfully'})
})



module.exports = router;
