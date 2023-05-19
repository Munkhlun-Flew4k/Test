const { model, Schema } = require("mongoose");

const taskSchema = new Schema({
  text: String,
  isDone: { type: Boolean, default: false },
});

const taskModel = model("text", taskSchema);
//links

module.exports = taskModel;
