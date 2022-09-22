const booking = require('../models/booking')

exports.index = (req, res, next) => {
    booking.find()
        .then(docs => {
            return res.status(200)
                .json({
                    status: 'Succes',
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

exports.show = (req, res, next) => {
    booking.findById(req.params.id)
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

exports.store = (req, res, next) => {
    const newBooking = new booking({
        name: req.body.name,
        email: req.body.email ?? null,
        phone: req.body.phone ?? null,
        date: req.body.date
    })

    newBooking.save()
        .catch(err => {
            return res.status(500)
                .json({
                    status: 'Failure',
                    error: err
                })
        })

    return res.status(200)
        .json({
            status: 'Success',
            data: newBooking
        })
}

exports.destroy = (req, res, next) => {
    booking.findByIdAndRemove(req.params.id)
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