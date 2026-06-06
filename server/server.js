
import {Hono} from 'hono'
import {serve} from '@hono/node-server'
import {cors} from 'hono/cors'

const app = new Hono()
app.use('*', cors())


app.get('/', (c)=>{
    return c.json({message : 'HELLO hono'})
})


serve({
    fetch: app.fetch,
    port: 3000
}, (info)=>{
    console.log(`Server running at ${info.port}`)
})


