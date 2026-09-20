const express = require("express")
const app = express()

require("dotenv").config()
app.use(express.json())


const movies = [

  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },

  { id: 2, title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },

  { id: 3, title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 }

];


// POST route - Update movie
app.post("/movies/:id", (req, res) => {

    const movieId = parseInt(req.params.id);

    const { id, title, director, year } = req.body;

    const movieToUpdate = movies.find((m) => m.id === movieId);

    if (!movieToUpdate) {
        return res.status(404).json({
            error: "Movie not found"
        });
    }

    if (!title || !director || !year) {
        return res.status(400).json({
            error: "title, director, year are required"
        });
    }

    const updatedMovie = {
        title,
        director,
        year
    };

    Object.assign(movieToUpdate, updatedMovie);

    res.status(200).json({
        message: "Movie updated successfully",
        movie: movieToUpdate
    });
});


// GET route - Get all movies
app.get("/movies", (req, res) => {

    res.json({
        movies: movies
    });

});


// Items array
const items = [

    { id: 1, itemName: "Spoon", color: "Silver", quantity: 8 },

    { id: 2, itemName: "Fork", color: "Silver", quantity: 8 },

    { id: 3, itemName: "Plate", color: "Off-White", quantity: 6 }

];


// POST route - Update item
app.post("/items/:id", (req, res) => {

    const itemId = parseInt(req.params.id);

    const { id, itemName, color, quantity } = req.body;

    const itemToUpdate = items.find((i) => i.id === itemId);

    if (!itemToUpdate) {
        return res.status(404).json({
            error: "Item not found"
        });
    }

    if (!itemName || !color || !quantity) {
        return res.status(400).json({
            error: "itemName, color, quantity are required"
        });
    }

    const updatedItem = {
        itemName,
        color,
        quantity
    };

    Object.assign(itemToUpdate, updatedItem);

    res.status(200).json({
        message: "Item updated successfully",
        item: itemToUpdate
    });

});


// GET route - Get all items
app.get("/items", (req, res) => {

    res.json({
        items: items
    });

});

const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log("Server running successfully");
    
})
