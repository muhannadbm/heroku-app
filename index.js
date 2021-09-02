require('dotenv').config() //this allows to stash "artificial env variables in a file"
const express = require('express')
const cors = require('cors')
const server = express()
const path = require('path')


const PORT = process.env.PORT || 4000


server.use(express.json())
server.use(cors())

//For deployment so heroku knows where static files are
server.use(express.static(path.join(__dirname, 'client/build')))



server.get('/api', (req,res)=>{
    res.json({message: 'i Rock'})
})

server.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname,'client/build', 'index.html'))
})
server.listen(PORT, ()=>{
    console.log('Listening on Port',PORT)
})