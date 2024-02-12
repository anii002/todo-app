const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
})

module.exports = Todos = mongoose.model("todos", userSchema)