import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "./ui/card"
import useUserStore, { fetchUsers } from "../store/useUserStore"

const LoadUsers = () => {

  const [loading, setLoading] = useState(false)

  const users = useUserStore(s => s.users)

   useEffect(() => {
        try {
          setLoading(true)
          const loadUsers = async () => {
            const users = await fetchUsers();
            setLoading(false)
            console.log('Fetched users:', users);  
        };

        loadUsers();


        } catch (error) {
          console.log(error)
          setLoading(false)
        }
    }, []);



  return (
    <div className="my-10 mx-auto w-[80%]">

      {loading && <p className="text-center">Looading ...</p>}

    <h3 className="text-left my-5 text-3xl font-bold">Users</h3>
    <div className="users flex flex-row gap-4 flex-wrap">
       {users.map(user =>(
         <Card key={user.id}>
          <CardHeader>
               <p className="font-bold">{user.name}</p>
              <p> {user.email}</p>
          </CardHeader>
        <CardContent>
          
            <p>City: {user.city}</p>
            <p>Date of Birth: {new Date(user.dob).toLocaleString('en-US', {weekday : 'long', month : 'short', year : 'numeric' })}</p>
        </CardContent>
        
      </Card>  
       ))}
      
    </div>
    </div>
  )
 
  // return ( <div className="my-10 mx-auto w-[80%]">
  //    <p>OOops ! No user yet !</p>
  //  </div>)
 
}

export default LoadUsers