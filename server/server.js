
import {Hono} from 'hono'
import {serve} from '@hono/node-server'
import {cors} from 'hono/cors'
import {createUser, listUsers} from './db/actions/users.js'
import { usersTable } from './db/schema/users.js'

const app = new Hono()
app.use('*', cors())


app.get('/', async(c)=>{
    const usersList = await listUsers()
    console.log('users ', usersList)
    
    return c.json({users : usersList, message : 'message from the home route'})
})

app.post('/new-user', async(c)=>{
  const newUserData = await c.req.json()
usersTable

const userForDatabase = {
    ...newUserData,
    dob: newUserData.dob ? new Date(newUserData.dob) : null  // ← Convert string to Date
  };
  const newUser = await createUser(userForDatabase)
   return c.json({ message: 'User received', data: newUser }) 
})


serve({
    fetch: app.fetch,
    port: 3000
}, (info)=>{
    console.log(`Server running at ${info.port}`)
})


