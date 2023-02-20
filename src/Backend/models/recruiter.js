const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recuriterSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username:{type:String,required:true,unique:true},
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Recuriter", recuriterSchema);
