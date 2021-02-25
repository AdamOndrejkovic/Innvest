const express = require('express');
const connectDB = require('./config/db');

const app = express();

//DB
connectDB();

//Middleware
app.use(express.json({extended: false}));

app.get('', (req,res) => res.send('Api running'));

//Routes

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`The server is listening on ${PORT}`));