import useFetch from "../useFetch"

const BookByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/books/author/${author}`
  )

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
        <h1>Book by {author}</h1>
        <ul>
      {data?.book?.map((b) => (
        <li key={b._id}>{b.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default BookByAuthor