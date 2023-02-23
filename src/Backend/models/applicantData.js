const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const applicantData=new mongoose.Schema({
    applicant_id:{
         type: mongoose.SchemaTypes.ObjectId,
    ref: "Applicant",
    required: true,
    },
      position_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Position",
    required: true,
  },

})

module.exports=mongoose.model("ApplicantData",applicantData)