const mongoose = require("mongoose");

const applicantDataSchema = new mongoose.Schema({
  applicant_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Applicant",
    required: true,
  },
  position_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Position",
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ApplicantData", applicantDataSchema);
