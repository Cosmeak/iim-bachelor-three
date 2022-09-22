// Define router
const express = require('express')
const router = express.Router()

// Import controllers
const userController = require('./src/controllers/userController')
const authController = require("./src/controllers/authController")
const verifToken = require('./src/middlewares/auth')

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

//login and token routes
router.post("/login", authController.login, function (req, res) { 
    res.status(200).json({ message: "login OK" })
})

router.get('/hiddenToken', verifToken, function (req, res) {
    if(!user)
        res.status(403).json({ message: "Invalid JsonWebToken" })
    if(req.user == "admin") {
        res.status(200).json({ message: "Congrats you are here" })
    } else {
        res.status(403).json({ message: "Unauthorised to log you" })
    }
})

module.exports = router
