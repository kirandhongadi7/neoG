import { useState } from "react"
const BookForm = () =>{
    const [book,setBook] = useState({
        title: "",
        author: "",
        publishedYear: "",
        genre: "", 
        language: "",
        country: "", 
        rating: "", 
        summary: "",
        coverImageUrl: ""
    })
    function handleChange(e){
        const {name,value} = e.target

        setBook((prevBook) =>({
            ...prevBook,
         [name] : value
        })
    )

    }
    async function handleSubmit(e){
        e.preventDefault()
        const bookData = {
            ...book,
            publishedYear : parseInt(book.publishedYear),
            rating: Number(book.rating),
            genre: book.genre.split(",").map((b) => b.trim())
        }


        try{
            const res = await fetch("http://localhost:3000/books",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(bookData)
            })
            const data = await res.json()
            if(res.ok){
                alert("Book added successfully")
                setBook({
                      title: "",
                      author: "",
                      publishedYear: "",
                      genre: "",
                      language: "",
                      country: "",
                      rating: "",
                      summary: "",
                      coverImageUrl: "",
                })
            }
            else{
                alert(data.message || "Failed to add book")
            }
        } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    }
    return (
        <div>
            <h1>Add New Book</h1>

            <div>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="title" >Title: </label>
                    <input
                    value={book.title}
                    onChange={handleChange}
                    name = "title"
                    type="text"
                    id = "title"/>
                    <br />
                    <br />
                    <label htmlFor="author">Author: </label>
                    <input 
                    value={book.author}
                    onChange={handleChange}
                    name = "author"
                    type="text" id="author" />
                    <br />
                    <br />

                    <label htmlFor="publishedYear">Published Year: </label>
                    <input
                    value={book.publishedYear}
                    onChange={handleChange}
                    name="publishedYear"
                    type="number" id="publishedYear" />
                    <br />
                    <br />
                    <label htmlFor="genre">Genre: </label>
                    <input
                    value={book.genre}
                    onChange={handleChange}
                    name= "genre"
                    type="text" id="genre" placeholder="Eg, Action, Comedy"/>
                    <br />
                    <br />
                    <label htmlFor="language">Language: </label>
                    <input
                    value={book.language}
                    onChange={handleChange}
                    name = "language"
                    type="text" id="language" />
                    <br />
                    <br />
                    <label htmlFor="country">Country: </label>
                    <input
                    value={book.country}
                    onChange={handleChange}
                    name = "country"
                    type="text" id="language" />
                    <br />
                    <br />
                    <label htmlFor="rating">Rating: </label>
                    <input
                    value={book.rating}
                    onChange={handleChange}
                    name="rating"
                    type="number" id="rating" />
                    <br />
                    <br />
                    <textarea 
                    value={book.summary}
                    onChange={handleChange}
                    name = "summary" placeholder="Summary"/>
                    <br />
                    <br />
                    <label htmlFor="coverImageUrl">Cover Image Url: </label>
                    <input
                    value={book.coverImageUrl}
                    onChange={handleChange}
                    name = "coverImageUrl"
                    type="text" id="coverImageUrl" />

                    <br />
                    <br />

                    <button type="submit">Save Book</button>

                </form>
            </div>


        </div>
    )
}

export default BookForm