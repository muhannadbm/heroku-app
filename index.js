require('dotenv').config() //this allows to stash "artificial env variables in a file"
const express = require('express')
const cors = require('cors')
const server = express()


const PORT = process.env.PORT || 4000


server.use(express.json())
server.use(cors())

server.get('/', (req,res)=> {
    res.send('<h1>I am awesome </h1>')
})

server.get('/api', (req,res)=>{
    res.json({message: 'i Rock'})
})

server.listen(PORT, ()=>{
    console.log('Listening on Port',PORT)
})