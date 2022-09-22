const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    date: {
        type: Date,
        required: true,
        unique: true
    }
})