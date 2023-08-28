const mongoose = require('mongoose')

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        enum: ['appetizer', 'starter', 'dish', 'drink'],
        required: true
    },
    prices: [{
        price: {
            type: Number,
            required: true,
        },
        cl: {
            type: Number,
            required: false
        }
    }]
}, {
    timestamps: true
})