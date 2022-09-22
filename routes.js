// Define router
const express = require('express')
const router = express.Router()

// Import controllers
const userController = require('./src/controllers/userController')
const menuController = require('./src/controllers/menuController')

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

// Menu routes
router.route('/menu')
    .get(menuController.index)
    .post(menuController.store)

router.route('/menu/:category')
    .get(menuController.showByCategory)

router.route('/menu/:id')
    .get(menuController.show)
    .put(menuController.update)
    .path(menuController.update)

module.exports = router
