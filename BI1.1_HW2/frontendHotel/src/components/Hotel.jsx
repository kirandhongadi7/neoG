import useFetch from "../useFetch"
const Hotel = ({name}) => {
    const {data,loading,error} = useFetch(`http://localhost:3000/hotels/${name}`)
    if(loading) return <p>Loading</p>
    if (error) return <p>Error, {error}</p>
    console.log(data);

    
  return (
    <div>
        <h1>{data?.name}</h1>
        <p><strong>Location:- </strong> {data?.location}</p>
        <p><strong>Rating:-  </strong>{data?.rating}</p>
        <p><strong>Price Range:-  </strong>{data?.priceRange}</p>
    </div>
  )
}

export default Hotel