import useFetch from "../useFetch"
const Books = () => {
    const {data,loading,error } = useFetch("http://localhost:3000/books")

    if(loading) return <p>Loading</p>
    if(error) return <p>Error,{error}</p>
    return (
    <div> 

        <h1>All Books</h1>
        <ul>

    {
        data?.books?.map((b) =>(
            <li key={b._id}>{b.title}</li>
        ))
    }
    </ul>

    </div>

  )
}

export default Books