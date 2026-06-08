
import {create} from 'zustand'
import type User from '../../../server/db/data'
import axios from 'axios'
type UserState = {
  users : User[]
}

const useUserStore = create<UserState>(()=>({
    users : [],
}))


export const fetchUsers  = async()=>{
    const BaseUrl = 'http://localhost:3000'

          const response = await axios.get(BaseUrl + '/')
          const fetchedData = response.data
          const dbUsers = fetchedData.users;

          useUserStore.setState({users : dbUsers})
          return dbUsers
    }

export const addUser = (user:User)=>{
  // useUserStore.setState(state => ({users : [user, ...state.users]}))
  
  // the above is the  short version of this 
  useUserStore.setState(state => {
    const newusers = [user, ...state.users]
    return {users : newusers}
})
  
}


export default useUserStore
