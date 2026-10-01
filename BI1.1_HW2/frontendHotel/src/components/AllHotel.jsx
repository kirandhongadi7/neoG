import useFetch from "../useFetch"
const AllHotel = () => {
    const {data, loading, error} = useFetch("http://localhost:3000/hotels")

    if(loading) return <p>Loading</p>

    if(error) return <p>Error, {error}</p>
    console.log(data);
    
  return (
    <div>
        
        <h1>All Hotel</h1>
        <ul>
        {
            data && data?.map((h) =>(
                 <li>{h.name}</li>
            ))
        }
        </ul>
    
    </div>
  )
}

export default AllHotel