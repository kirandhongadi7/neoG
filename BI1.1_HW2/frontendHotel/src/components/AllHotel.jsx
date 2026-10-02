import { useState } from "react"
import useFetch from "../useFetch"

const AllHotel = () => {
    const {data, loading, error} = useFetch("http://localhost:3000/hotels")
    const [sucessfullyMessage,setSucessfullyMessage]  = useState("")

    if(loading) return <p>Loading</p>

    if(error) return <p>Error, {error}</p>
    console.log(data);

    const handleDelete = async (id) =>{
        try{
           const response =  await fetch(`http://localhost:3000/hotels/${id}`,{
          method: "DELETE"
         })

         const data = await response.json()

         if(response.ok && data){
            setSucessfullyMessage("Hotel Deleted Successfully")
            window.location.reload()
         }else{
          alert("Failed to Delete")
         }
        }catch(e){
          console.log(e);
          
          
        }
    }

    
  return (
    <div>
        
        <h1>All Hotel</h1>
        <ul>
        {
            data && data?.map((h) =>(
              <>
                 <li key={h._id}>{h.name}  <button onClick={() => handleDelete(h._id)}>Delete</button></li> 
                 
              </>
            ))
        }
        </ul>

        <p>{sucessfullyMessage}</p>
    
    </div>
  )
}

export default AllHotel