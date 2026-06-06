
import {create, type StateCreator} from 'zustand'
import { users } from '../db/data'
import type User from '../db/data'


const useUserStore = create((set)=>({
    users : users,

    // add user
      addUser : (user : User) =>{
       set((state : StateCreator) =>({
        users : [user, ...state.users]
       }))
    }
}))


export default useUserStore
