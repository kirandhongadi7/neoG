const express = require("express")
const app = express()

require("dotenv").config()

app.use(express.json())

//only get

app.get("/",(req,res) =>{
    res.send("Hello, This is Express Assignment Server")
})

const albums = [

  { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },

  { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },

  { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }

];
//add new album to albums using post method for it
app.post("/albums",(req,res) =>{
    const {id,title,artist,year} = req.body

    if(!id || !title || !artist || !year){
        res.status(401).json({
            message: "id, title, artist and year are required"
        })
        return
    }

    const newAlbum ={
        id,
        title,
        artist,
        year
    }

    albums.push(newAlbum)
    res.status(200).json({
        message: "New album is added successfully",
        newAlbum: newAlbum
    })
})

//Deleting the album
app.delete("/album/:id",(req,res) =>{
    const albumId = parseInt(req.params.id)

    const index = albums.findIndex((a) => a.id == albumId)

    if(index == -1){
        res.status(404).json({
            message: "album not found"
        })
        return
    }

    albums.splice(index,1)
    res.status(200).json({
        message: "Successfully deleted",
        
    })
})
// updating the album
app.post("/albums/:id",(req,res) =>{
    const albumId = parseInt(req.params.id)

    const {id,title,artist,year} = req.body

    const toUpdate = albums.find((a) => a.id == albumId)


    if(!toUpdate){
        res.status(404).json({
            message: "album not found"
        })
        return
    }

    if(!title || !artist || !year){
        res.status(401).json({
            message: "title, artist, year are required"
        })
        return
    }

    const updatedAlbum ={
        id,
        title,
        artist,
        year
    }

    Object.assign(toUpdate,updatedAlbum)

    res.status(200).json({
        message: "Successfully updated",
        updatedAlbum: updatedAlbum
    })

})
app.get("/albums",(req,res) =>{
    res.json({
        albums:albums
    })
})




const PORT = process.env.PORT || 3000
app.listen(PORT,() =>{
    console.log("Successfully connected");
})