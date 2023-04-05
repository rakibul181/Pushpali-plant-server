const  express = require('express') 
const cors = require('cors')
const {}= require('mongodb')

require('dotenv').config()

const app = express()
const port = process.env.PORT||5000

app.use(express.json())
app.use(cors())

app.get('/', async (req,res)=>{
    res.send({
        Server:'Pushpali',
        Status:'Running',
        Port:port
    })
})

app.listen(port,()=>{
    console.log(`Pushpali server is Running on ${port}`)
})