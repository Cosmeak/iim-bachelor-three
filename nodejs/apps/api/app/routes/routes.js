const express = require('express')
const router = express.Router()

const AppController = require('../controllers/AppController')
const UserController = require('../controllers/UserController')

router.post('/user/create', UserController.create)

module.exports = router
