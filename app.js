const express = require('express')
const dotenv = require('dotenv')
const bp = require('body-parser')
const cors = require('cors')
require('./config/database')
const router = require('./routes')

const app = express()
const uri = '/api/v1/'
const port = 3001

app.use(cors())

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

app.use(uri, router)

app.listen(port, () => {
    console.log('API is listenig!')
})