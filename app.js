const express = require("express");
const app = express()
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://Moni:navgurukul@cluster0.zab2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true

})
        
app.set('secretkey','12345');
var secretkey = app.get('secretkey');

// create get endpoint

app.get('/user', function(req,res){
    var queryParameter = req.query;
    console.log("Name",queryParameter.name)
    console.log("Age",queryParameter.age)
    console.log("Siklls",queryParameter.skill)
    
    //  res.send(queryParameter)
    res.json(queryParameter);

})



// creating an express parameter

app.listen(3000, function(){
    console.log("server started--")
})