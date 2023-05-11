const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ip0tsyu.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// function verifyJWT(req, res, next) {
//     const authHeader = req.headers?.authoraization

//     if (!authHeader) {
//         res.status(401).send('Unauthoraize access')
//     }

//     const token = authHeader.split(' ')[1]

//     jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
//         if (err) {
//             return res.status(403).send({ message: 'Forbidden Access' })
//         }
//         req.decoded = decoded
//         next()
//     })
// }

async function run(){
    try{
        const categoryCollection = client.db('pushpaliPlant').collection('plantCategories')

        // const verifyBuyer = async (req, res, next) => {
        //     const decodedEmail = req.decoded.email
        //     const query = { email: decodedEmail }

        //     const user = await userCollection.findOne(query)
        //     if (user.role !== "buyer") {
        //         return res.status(403).send({ message: 'Forbidden Access' })
        //     }
        //     next()
        // }
        // const verifyAdmin = async (req, res, next) => {
        //     const decodedEmail = req.decoded.email
        //     const query = { email: decodedEmail }

        //     const user = await userCollection.findOne(query)
        //     if (user.role !== "admin") {
        //         return res.status(403).send({ message: 'Forbidden Access' })
        //     }
        //     next()
        // }
        // const verifySeller = async (req, res, next) => {
        //     const decodedEmail = req.decoded.email
        //     const query = { email: decodedEmail }

        //     const user = await userCollection.findOne(query)
        //     if (user.role !== "seller") {
        //         return res.status(403).send({ message: 'Forbidden Access' })
        //     }
        //     next()
        // }

        app.post('/categories',async(req, res)=>{
            const query = {}
            const result = await Collection.insertOne(product)
            res.send(result)
            console.log(result)
        })
    }
    finally{

    }
}
run().catch(console.log)

app.get('/', async (req, res) => {
    res.send({
        Server: 'Pushpali',
        Status: 'Running',
        Port: port
    })
})

app.listen(port, () => {
    console.log(`Pushpali server is Running on ${port}`)
})