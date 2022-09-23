const moment = require('moment')
const booking = require('../models/booking')

// Read json and parse it
const fs = require('fs')
const TIMESLOTS_PATH = './config/timeslots.json'
const timeslots = (JSON.parse(fs.readFileSync(TIMESLOTS_PATH))).timeslots

// Set nb of seat/table available
const table = 24

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
        let unavailableDate = {}
        docs.forEach(element => {
            const date = element.date
            if (unavailableDate[date]) {
                unavailableDate[date].push(element)
            } else {
                unavailableDate[date] = [element]
            }
        })

        // let availableDate = {}
        // unavailableDate.forEach(element => {
        //     let nb_people
        //     element.forEach(el => {
        //         nb_people += el.nb_people
        //     })
        //     const nb_table_available = table - (Math.ceil(nb_people/2))

        //     if (nb_table_available) {
        //         availableDate.push(Object.keys(element))
        //     }
        // })

        return res.status(200)
            .json({
                status: 'Success',
                data: unavailableDate
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