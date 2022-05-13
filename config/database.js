require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://maceteli:yuppies1998@taskmanager.5niks.mongodb.net/Blog?retryWrites=true&w=majority", 
()=>{
    console.log("db connected")
}, e => {
    console.log(e.message)
})