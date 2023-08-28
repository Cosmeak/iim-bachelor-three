const User = require('../models/user')
const brycpt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.index = (req, res, next) => {
    User.find()
        .then(docs => {
            return res.status(200)
                .json({
                    status: 'Success',
                    data: docs
                })
        })
        .catch(err => {
            return res.status(500)
                .json({
                    status: 'Failure',
                    error: err
                })
        })
}