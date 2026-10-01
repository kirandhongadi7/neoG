import useFetch from "../useFetch"
const Hotels = () => {
    const {data,loading,error} = useFetch("http://localhost:3000/hotels")

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    console.log(data);
    
  return (
    <div>
        <h1>Hotels</h1>
        <ul>
       {
        data?.map((h) =>(
            <li  key={h._id}>{h.name}</li>
        ))
       }
       </ul>

    </div>

  )
}

export default Hotels