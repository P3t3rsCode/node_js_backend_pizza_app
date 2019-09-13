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

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening on part:${port}`)
})
