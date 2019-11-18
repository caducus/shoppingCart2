// ==========================
// Dependencies
// ==========================

var mongoose = require("mongoose");

// ==========================
// Schema
// ==========================

var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true}
});

// ==========================
// Export
// ==========================

module.exports = mongoose.model("User", userSchema);
