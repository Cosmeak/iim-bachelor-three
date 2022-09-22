// Define router
const express = require('express')
const router = express.Router()

// Import controllers
const userController = require('./src/controllers/userController')
const bookingController = require('./src/controllers/bookingController')

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

// Users routes
router.route('/users')
    .get(userController.index)

// Booking routes
router.route('/booking')
    .get(bookingController.index)
    .post(bookingController.store)

router.route('/booking/:id')
    .get(bookingController.show)
    .delete(bookingController.destroy)

module.exports = router
