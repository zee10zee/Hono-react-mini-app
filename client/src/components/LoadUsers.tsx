import { useState } from "react"
import type User from "../db/data"
import { Card, CardContent, CardHeader } from "./ui/card"

const LoadUsers = ({ users }: { users: User[] }) => {

  const [loading, setLoading] = useState(false)

  if(users.length > 0){
  return (
    <div className="my-10 mx-auto w-[80%]">
    <h3 className="text-left">Users</h3>
    <div className="users flex flex-row gap-4 flex-wrap  ">
       
       {loading && (
        <p>Looading ...</p>
       )}
        
       {users.map(user =>(
         <Card key={user.id}>
          <CardHeader>
               <h2>{user.name}</h2>
              <p>Email: {user.email}</p>
          </CardHeader>
        

        <CardContent>
          
            <p>City: {user.city}</p>
            <p>Date of Birth: {user.dob}</p>
        </CardContent>
        
      </Card>  
       ))}
    </div>
    </div>
  )}

  return ( <div className="my-10 mx-auto w-[80%]">
     <p>OOops ! No user yet !</p>
   </div>)
 
}

export default LoadUsers