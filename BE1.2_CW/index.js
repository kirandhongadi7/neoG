const {initializeDatabase}= require("./db/db.connect")
const dns = require('dns')
const fs = require("fs")
const Movie= require("./models/movies.model")
dns.setServers(["1.1.1.1","8.8.8.8"]);
const jsonData = fs.readFileSync("movies.json", "utf-8")
const moviesData = JSON.parse(jsonData)
initializeDatabase()
function seedData(){
try{
for(const movData of moviesData){
    const newMovie = new Movie({
        title: movData.title,
        releaseYear: movData.releaseYear,
        genre: movData.genre,
        director: movData.director,
        actors: movData.actors,
        language: movData.language,
        country: movData.country,
        rating: movData.rating,
        plot: movData.plot,
        awards: movData.awards,
        posterUrl: movData.posterUrl,
        trailerUrl: movData.trailerUrl
    })

    newMovie.save()
}
}catch(error){
console.log("Error while seed",error)
}
}


seedData()