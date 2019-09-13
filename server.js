const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

const  uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connection established')
})

const app = express();
const port = process.env.PORT || 3001;
const userRouter = require('./routes/user.routes')
const orderRouter = require('./routes/order.routes')


app.use(cors());
app.use(express.json());
app.use('/users',userRouter)
app.use('/orders',orderRouter)

app.get('/',(req,res)=>{
    res.send('Server Running')
})

app.listen(port,()=>{
    console.log(`Listening on part:${port}`)
})

