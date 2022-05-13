require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
const blogroute = require('./routes/blogroutes')
//middleware
app.use(express.json());
app.use(cors());
app.use(cookieparser());
app.use('api/v1', blogroute);

//starting server connection
const startServer = async () => {
    try{
        //database connection

        //connecting server to port
        const port = process.env.PORT;
        app.listen(port || 5000, () => console.log(`Server is listening to port: ${port}`))
    }catch(err){
        console.log(err.message)
    }
}

startServer()




