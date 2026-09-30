const {initializeDatabase} = require("./db/db.connect")
const dns = require("dns")
const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
// const fs = require("fs")
// const jsonData = fs.readFileSync("books.json", "utf-8")
// const bookData = JSON.parse(jsonData)
const Book = require("./models/bookSchema.model")
//Cors---------------------
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
dns.setServers(["1.1.1.1", "8.8.8.8"])

//Q1
async function createNewBook(newBook){
         return await new Book(newBook).save()
}

app.post("/books",async (req,res) =>{
    try{
        const {title,author,publishedYear,genre,language,country,rating,summary,coverImageUrl} = req.body

        if(!title || !author || !publishedYear || !genre || !language || !country ||  !rating){
            res.status(400).json({
                message: "All info must be required"
            })
            return
        }

        const newBook ={
            title,
            author,
            publishedYear,
            genre,
            language,
            country,
            rating,
            summary,
            coverImageUrl
        }

        const newBookAdded = await createNewBook(newBook)
        res.status(200).json({
            message: "successfully added new book",
            newBookAdded: newBookAdded
        })
    }catch(e){
        throw e
    }
})
//Q3
async function logBooks(){
    return await Book.find()
}
app.get("/books", async (req,res) =>{

    try{
        const allBooksData = await logBooks()
    if(allBooksData.length === 0){
        res.status(404).json({
            Error: "Failed to fetch and Error"
        })
        return
    }
    res.status(200).json({
        books: allBooksData
    })
    }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }

})

//Q4
async function logBookByTitle(bookTitle){
    return await Book.findOne({title:bookTitle})
}
app.get("/books/bookTitle/:title", async (req,res) =>{
    try{
        const bookTitle = req.params.title

    const book = await logBookByTitle(bookTitle)
    if(!book){
        res.status(404).json({
            message: "Book not found by that title."
        })
        return
    }
    res.status(200).json({
        book: book
    })
    }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }
})

//Q5
async function logByAuthor(author){
    return await Book.find({author:author})
}

app.get("/books/author/:author", async(req,res) =>{
    try{
        const author = req.params.author

        const book = await logByAuthor(author)

        if(book.length === 0){
            res.status(404).json({
                message: "Book not found by that author"
            })
            return
        }
        res.status(200).json({
            book: book
        })

    }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }


})

//6
async function logByGenre(){
    return await Book.find({genre: "Business"})
}

app.get("/books/business", async(req,res) =>{
    try{
        const businessGenre = await logByGenre()

    if(businessGenre.length ==0){
        res.status(404).json({
            message: "Not found Business genre"
        })
            return
    } 

    res.status(200).json({
        businessGenre: businessGenre
    })
    }
    catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }
})
//7

async function logBypublishedYear(year){
    return await Book.find({publishedYear: year})
}
app.get("/books/publishedYear/:year", async(req,res) =>{
    try{
        const year = await logBypublishedYear(Number(req.params.year))

    if(year.length === 0){
        res.status(404).send("Book Not Found Of That yearsOfService")
        return
    }

    res.status(200).json(
        {
            bookByYear: year
        }
    )
    }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }

})

//8

app.patch("/books/updateRating/:bookId", async (req,res) =>{
    try{
       const bookId = req.params.bookId
       const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {new:true})

       if(!updatedBook){
        res.status(404).send("Book does not exist")
        return 
       }
       res.status(200).json({
        updatedRatingBook: updatedBook
       })

    }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }
})

//9
app.patch("/books/updateByTitle/:title", async (req,res) =>{

   try{
    const title = req.params.title
    const {publishedYear,rating} = req.body

    const updatedBook = await Book.findOneAndUpdate({title}, {publishedYear,rating}, {new:true})

    if(!updatedBook){
        return res.status(404).send("Book does not found")
    }

    res.status(200).json({
        updatedBook: updatedBook
    })
   }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }
})
//10

app.delete("/books/delete/:id", async (req,res) =>{
    try{
        const id = req.params.id

    const deletedBook = await Book.findByIdAndDelete(id)
    if(!deletedBook){
        return res.status(404).json({
            message: "Book not found"
        })
    }
    res.status(200).json({
        message:"Book deleted successfully",
        deletedBook: deletedBook
    })
    }catch(e){
        res.status(500).json({
      message: "Failed",
      error: e.message
    });
    }
})
const PORT = process.env.PORT || 3000
initializeDatabase().then(() =>{
    app.listen(PORT,()=>{
        console.log("Server connected successfully");  
    })
}).catch((e)=>{
    console.log("Error while connecting DB");
})

// async function seedData(){

//     try{
//         for(const book of bookData){
//             const newBook = new Book({
//                 title: book.title,
//                 author: book.author,
//                 publishedYear:book.publishedYear,
//                 genre: book.genre,
//                 language: book.language,
//                 country: book.country,
//                 rating: book.rating,
//                 summary: book.summary,
//                 coverImageUrl: book.coverImageUrl
//             })
//             await newBook.save()
            
            
//         }
//         console.log("Data seed successfully");
//     }
//     catch(e){
//         console.log("Error while seeding",e);
        
//     }
// }

// seedData()