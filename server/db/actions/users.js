
import { drizzle } from 'drizzle-orm/neon-http';
import { usersTable } from '../schema/users.js';
import { configDotenv } from 'dotenv';
import { db } from '../index.js';
import { desc } from 'drizzle-orm';
configDotenv()
console.log(db, ' the db itself')
  export const createUser = async(userData)=>{
  const createdUser = await db.insert(usersTable).values(userData).returning();
  return createdUser
}


export const listUsers = async()=>{
  const usersList = await db.select().from(usersTable).orderBy(desc(usersTable.created_at))
   console.log('db users from users actions ',usersList)
    return usersList
}
