const express =require('express');
const app= express();
const PORT =5000
const mongoose =require('mongoose');


mongoose.connect("mongodb+srv://amruthakv:i5btwUJp0pFm9bez@cluster0.nhmw3pg.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch((err)=>{console.log(err)});

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.get('/About',(req,res)=>{
    res.send('About')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);

});