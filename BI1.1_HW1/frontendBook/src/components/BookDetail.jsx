import useFetch from "../useFetch"
const BookDetail = ({title}) => {
    const {data, loading, error} =useFetch(`https://neo-g-kdc8.vercel.app/books/bookTitle/${title}`)
    
  return data ? (
    <div>
        <h1>{data.book.title}</h1>
        <p><strong>Author:- </strong>{data.book.author}</p>
        <p><strong>Release Year:- </strong>{data.book.publishedYear}</p>
        <p><strong>Genre:- </strong>{data.book.genre.join(", ")}</p>
        <p><strong>Language:- </strong>{data.book.language}</p>
        <p><strong>Rating:- </strong>{data.book.rating}</p>
        <p><strong>Country:- </strong>{data.book.country}</p>

    </div>
  ): loading && <p>Loading...</p>
}

export default BookDetail