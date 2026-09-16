const express = require("express")
const app = express()

app.use(express.json())
require("dotenv").config()


app.get("/",(req,res)=>{
    res.send( "Hello, Express server.")
})
const PORT = process.env.PORT || 3000
const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

];
app.post("/books", (req,res) =>{
   const {id, title,author,year}= req.body

   if( !id || !title || !author || !year){
    return res.status(400).json({
        error: "All book details are required."
    })
   }
   const newBook ={
    id,
    title,
    author,
    year
   }
   books.push(newBook)
   res.status(200).json({
    message: "Book added successfully.",
    book: newBook,
   })
})

app.get("/books",(req,res) =>{
    res.json({
        books: books
    })
})

const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

];


app.post("/todos",(req,res) =>{

    const {id,title,day} = req.body

    if(!id || !title || !day){
        return res.status(400).json({
            error: "All fields should be required"
        })
    }
    const todo ={
        id,
        title,
        day
    }
    todos.push(todo)

    res.status(201).json({
        message: "Successfully added todo",
        todos: todos
    })
})

app.get("/todos",(req,res) =>{
    res.json({
        todos: todos
    })
})
app.listen(PORT, ()=>{
    console.log("Server in running on PORT", PORT);
    
})