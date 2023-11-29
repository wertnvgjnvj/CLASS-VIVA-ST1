const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dB = require('./middleware/dB');
const bookRoutes = require('./routes/bookRoutes');

app.get('/',(req,res)=>{
    res.send('Hello I am G3');
})

app.use(express.json());
dB.connectToDB();

//bookRoutes
app.use('/books', bookRoutes)

const uri = "mongodb://localhost:27017/";

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })

  .then(()=>console.log('Database Connected'))
  .catch(()=>console.log('Error'))

app.listen(3000, ()=>{
    console.log("Server has Started");
})