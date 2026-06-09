
import { drizzle } from 'drizzle-orm/neon-http';
import { usersTable } from '../schema/users.js';
import { configDotenv } from 'dotenv';
import { db } from '../index.js';
import { desc, eq } from 'drizzle-orm';
configDotenv()
  export const createUser = async(userData)=>{   
  const userExists = await db.select().from(usersTable).where(eq(usersTable.email, userData.email))

  if(userExists.length > 0) {
     return { 
        success: false, 
        error: 'User already registered with this email' 
      }
  }

  const createdUser = await db.insert(usersTable).values(userData).returning();
  return {
        success: true, 
        newUser : createdUser
  }
}


export const listUsers = async()=>{
  const usersList = await db.select().from(usersTable).orderBy(desc(usersTable.created_at))
   console.log('db users from users actions ',usersList)
    return usersList
}
