const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stageSchema = new Schema({
  type: {
    type: String,
    enum: ["text", "audio", "video", "file", "finished"],
  },
  prompt: { type: String, required: true },
});

const positionSchema = new Schema({
  title: { type: String, required: true, text: true },
  instructions: { type: String, required: true, text: true },
  steps: [stageSchema],
  status: {
    type: String,
    required: true,
    enum: [
      "approved",
      "pending-approval",
      "rejected",
      "draft",
      "active",
      "inactive",
    ],
    default: "pending-approval",
  },
});
positionSchema.index(
  { title: "text", instructions: "text" },
  { default_language: "english" }
);

module.exports = mongoose.model("Position", positionSchema);
