const express = require("express")
const app = express()

require("dotenv").config()

app.use(express.json())

app.get("/",(req,res) =>{
    res.send("Hello, From Express Server.")
})

const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },

  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }

];

app.post("/books/:id",(req,res) =>{
    const bookId = parseInt(req.params.id)
    const {id,title,author,year} = req.body

    const bookToUpdate = books.find((b) => b.id === bookId)

    if(!bookToUpdate){
        res.status(404).json({
            error: "Book not found"
        })
        return
    }

    if(!title || !author || !year){
        res.status(400).json({
            error: "title, author, year are required"
        })
        return
    }

    const updatedBook = {
        title,
        author,
        year
    }

    Object.assign(bookToUpdate, updatedBook)

    res.status(200).json({
        message:"Book updated successfully",
        book: updatedBook
    })

app.get("/books",(req,res) =>{
    res.json({
        books: books
    })
})

})
const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

  { id: 2, title: 'Go for a walk', day: 'Sunday' }

];

app.post("/todos/:id",(req,res) =>{
    const todoId = parseInt(req.params.id)
    const {id,title,day} = req.body

    const toUpdate = todos.find((t) => t.id = todoId)

    if(!toUpdate){
        res.status(404).json({
            error: "Todo does not found"
        })
        return
    }

    if(!id || !title || !day){
        res.status(400).json({
            message: "title and day required",
            
        })
        return
    }
    const updatedTodo ={
        id,
        title,
        day
    }

    Object.assign(toUpdate,updatedTodo)
    res.status(200).json({
        message: "Successfully updated",
        updatedTodo:updatedTodo 
    })
})

app.get("/todos",(req,res) =>{
    res.json({
        todos: todos
    })
})
const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log("Server running successfully");
    
})