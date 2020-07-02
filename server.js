//https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  })
const connection = mongoose.connection

connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
}) 

const wellRouter = require('./routes/well')
const canalRouter = require('./routes/canal')

app.use('/well', wellRouter)
app.use('/canal', canalRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})