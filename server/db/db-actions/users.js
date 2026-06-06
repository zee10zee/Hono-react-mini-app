import { sql } from "..";

const getUsers = async()=>{
    const result = await sql`SELECT * FROM users`
}