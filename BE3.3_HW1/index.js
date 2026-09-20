const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())


app.get("/",(req,res) => {
    res.send("Hello, From Express Server.")
})

const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },

  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }

];

app.delete("/books/:id",(req,res) =>{
    const id = req.params.id

    const index = books.findIndex((b) => b.id == id)

    if(index == -1 ){
       return res.status(404).json({
        Error: "Book Not Fount"
       })
    }

    books.splice(index,1)

    res.json({
        message: "Successfully deleted"
    })
})

app.get("/books",(req,res) =>{
    res.send(books)
})


const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

  { id: 2, title: 'Go for a walk', day: 'Sunday' }

];

app.delete("/todos/:id",(req,res) =>{
    const id = req.params.id

    const index = todos.findIndex((t) => t.id == id)

    if(index == -1){
        return res.status(404).json({
            Error: "Todo does not exist"
        })
    }

    todos.splice(index,1)
    res.send("successfully deleted ")
})

app.get("/todos",(req,res) =>{
    res.send(todos)
})
const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log("Server running successfully");
})