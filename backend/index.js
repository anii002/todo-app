const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors")

const App = express();
App.use(cors())
App.use(express.json());
const PORT = process.env.PORT || 5000;
App.listen(PORT, () => console.log(`The server has started on: ${PORT}`))

mongoose.connect(
    process.env.MONGO_CONNECT,
).then(() => {
    console.log("mongodb connected")
}).catch(error => {
    console.log("error in mongodb", error)
})

App.use('/todo', require("./routes/todo"))