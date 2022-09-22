// Define router
const express = require('express')
const router = express.Router()

// Import controllers
const userController = require('./src/controllers/userController')
const authController = require("../JungleArch-api/src/controllers/authController")

// Time logger
router.use(function timeLog (req, res, next) {
    console.log('\x1b[36m%s\x1b[0m', `Request at: ${Date()}`)
    next()
})

router.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'Online'
    })
})

router.route('/users')
    .get(userController.index)

router.express.Router(), { login } = authController
router.post("/login", authController.login, function (req, res) { });

module.exports = router
