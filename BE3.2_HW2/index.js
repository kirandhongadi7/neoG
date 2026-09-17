const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())

app.get("/",(req,res) =>{
    res.send( "Express server.")
})

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }

];
app.post("/movies",(req,res) =>{
    const {id, title,director,year} = req.body

    if(!id || !title || !director || !year){
        return res.status(401).json({
            message: "Please provide all details"
        })
    }

    const newMovie ={
        id,
        title,
        director,
        year
    }

    movies.push(newMovie)

    res.status(200).json({
        message: "Successfully  add new movie",
        newMovie: newMovie
    })
})

app.get("/movies",(req,res) =>{
    res.json({
        movies: movies
    })
})

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }

];

app.post("/items",(req,res) =>{
    const {id,itemName,color,quantity} = req.body

    if(!id || !itemName || !color || !quantity){
        return res.status(401).json({
            Error: "Please fill all required details"
        })
    }

    const newItem ={
        id,
        itemName,
        color,
        quantity
    }
    items.push(newItem)

    res.json({
        message: "Item added successfully",
        item: newItem
    })
})

app.get("/items",(req,res) =>{
    res.json({
        items: items
    })
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Connected to server");
})