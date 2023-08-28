// Define router
const express = require('express')
const router = express.Router()
const cors = require('cors')

// Import controllers
const userController = require('./controllers/userController')
const menuController = require('./controllers/menuController')
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
    .get(userController.index, cors())

// Menu routes
router.route('/menu')
    .get(menuController.index)
    .post(menuController.store)

router.route('/menu/:category')
    .get(menuController.showByCategory)

router.route('/menu/:id')
    .get(menuController.show)
    .put(menuController.update)
    .patch(menuController.update)
router.express.Router(), { login } = authController

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

// router.get('/logout', function (req, res, next) {
//     if(req.user.loggedin) {
//         req.session.loggedin = false
//         res.redirect('/')
//     }else{
//     res.redirect('/')
//     }
// })

module.exports = router
