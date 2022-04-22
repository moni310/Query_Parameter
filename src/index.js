const express = require("express");
const mongoose=require("mongoose");
const Book  = require("../models/Book")

mongoose.connect('mongodb+srv://Moni:navgurukul@cluster0.zab2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true

})

    .then(() => {
        const app = express()
        
        app.get("/books", async (req,res) => {
            // res.send(book)
            const books= await Book.find();
            res.send({ data:books })
        });

        app.post("/books", async (req,res) => {
            const books= await Book.find();
            res.send({ data:books})

        });


        app.post("/food", async (request, response) => {
            const food = new foodModel(request.body);
          
            try {
              await food.save();
              response.send(food);
            } catch (error) {
              response.status(500).send(error);
            }
          });


         
        app.listen(8000,()=>{
            console.log("its working")
        })

    })
    .catch((err)=>{
        console.log("Server Error",err)
    })

        
