const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  full_name: { type: String,required:true },

  telegram_id: { type: Number, required: true, unique: true },
  settings: {
    allowNotification: { type: Boolean, default: false },
  },
});

module.exports = mongoose.model("Applicant", applicantSchema);
