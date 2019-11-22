let mongoose = require("mongoose");
const Schema = mongoose.Schema;

var visitorSchema = new Schema({
  name: String,
  email: String,
  contact: Number,
  checkin: Date,
  checkout: Date
});

var Visitor = mongoose.model("Visitor", visitorSchema);
module.exports = Visitor;
