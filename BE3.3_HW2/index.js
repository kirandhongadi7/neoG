const express = require("express")
const app = express()

require("dotenv").config()
app.use(express.json())

app.get("/",(req,res) =>{
    res.send("Hello, Express server")
})

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },

  { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }

];

app.delete("/movies/:id",(req,res) =>{
    const id = req.params.id

    const index = movies.findIndex((m) => m.id == id)

    if(index == -1){
        return res.status(404).send("Movie not found")
    }

    movies.splice(index, 1)

    res.send("Movie deleted successfully")
})

app.get("/movies",(req,res) =>{
    res.send(movies)
})

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },

 { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }

];

app.delete("/items/:id",(req,res) =>{
    const id  = req.params.id

    const index = items.findIndex((i) => i.id == id)

    if(index == -1){
        return res.status(404).send("Item not found")
    }

    items.splice(index, 1)

    res.send("Successfully deleted")
})

app.get("/items",(req,res) =>{
    res.send(items)
})
const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log("Successfully Connected");
})