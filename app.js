const express = require('express')
const dotenv = require('dotenv')
const bp = require('body-parser')
require('./config/database')

const app = express()
const uri = '/api/v1/'
const port = 3001

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

app.get(uri, (req, res, next) => {
    res.status(200).json({
        status: 'Online'
    })
})

app.listen(port, () => {
    console.log('API is listenig!')
})