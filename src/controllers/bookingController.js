const moment = require('moment')
const booking = require('../models/booking')

// Set nb of seat/table available
const table = 24
const seat = table * 2

exports.index = (req, res, next) => {
    const query = req.query
    const gte = query.gte ?? moment().startOf('day').toDate()
    const lte = query.lte ?? moment(gte).endOf('day').toDate()

    booking.find({
        date: {
            $gte: gte,
            $lte: lte
        }
    })
    .then(docs => {
        console.log(docs, gte, lte)
        return docs
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
        nb_people: req.body.nb_people,
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