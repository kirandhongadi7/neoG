const {initializeDatabase} = require("./db/db.connect")
const dns = require("dns")
const fs = require("fs")
const jsonData = fs.readFileSync("books.json", "utf-8")
const bookData = JSON.parse(jsonData)
const Book = require("./models/bookSchema.model")

dns.setServers(["1.1.1.1", "8.8.8.8"])


initializeDatabase()

async function seedData(){

    try{
        for(const book of bookData){
            const newBook = new Book({
                title: book.title,
                author: book.author,
                publishedYear:book.publishedYear,
                genre: book.genre,
                language: book.language,
                country: book.country,
                rating: book.rating,
                summary: book.summary,
                coverImageUrl: book.coverImageUrl
            })
            await newBook.save()
            
            
        }
        console.log("Data seed successfully");
    }
    catch(e){
        console.log("Error while seeding",e);
        
    }
}

seedData()