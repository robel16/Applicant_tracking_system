const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  settings: {
    allowNotification: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model("Applicant", applicantSchema);
