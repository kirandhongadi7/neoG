import { useFetch } from "../Hooks/useFetch"

const UserList =()=>{
   const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")
   if(loading) return <p>Loading</p>
   if(error) return <p>Error: {error.message}</p>
   
   
    return(
        <div>
           <ul>
            {
                data?.map((u) =>(
                    <li key={u.id}>{u.name}</li>
                ))
            }
           </ul>
        </div>
    )
}

export default UserList