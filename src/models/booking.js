const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        minLength: 10,
        maxLength: 10,
    },
    phone: {
        type: String,
        trim: true
    },
    nb_people: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Booking', BookingSchema)