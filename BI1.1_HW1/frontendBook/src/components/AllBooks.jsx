import { useState } from "react"
import useFetch from "../useFetch"
const AllBooks =()=>{
 const { data, loading, error} = useFetch("http://localhost:3000/books")
const [success,setSuccess] = useState("")
 const handleDelete = async(id) =>{
  try{
    const res = await fetch(`http://localhost:3000/books/delete/${id}`,{method: "DELETE"})
    const data = await res.json()
    if(res.ok && data){
      setSuccess("Deleted Successfully")
      window.location.reload()
    }else{
      alert("Failed to Delete")
    }
  }catch(e){
    console.log(e);
    
  }
 }


 if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>All Books</h1>

      <ul>
        {data?.books?.map((b) => (
          <li key={b._id}>{b.title} <button onClick={() => handleDelete(b._id)}>Delete</button></li>
        ))}
      </ul>
      <p>{success}</p>
    </div>
  )

}

export default AllBooks