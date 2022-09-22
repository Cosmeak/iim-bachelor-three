const menu = require('../models/menu')

exports.index = (req, res, next) => {
    menu.find()
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

exports.show = (req, res, next) => {
    menu.findById(req.params.id)
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

exports.showByCategory = (req, res, next) => {
    menu.find({
        category: req.params.category
    }).then(docs => {
        return res.status(200)
            .json({
                status: 'Success',
                data: docs
            })
    }).catch(err => {
        return res.status(500)
            .json({
                status: 'Failure',
                error: err
            })
    })
}

exports.store = (req, res, next) => {
    const newMenu = new menu({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        prices: req.body.prices
    })

    newMenu.save()
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
            data: newMenu
        })
}

exports.update = (req, res, next) => {
    const update = {}
    if (req.body.name) update.name = req.body.name
    if (req.body.description) update.description = req.body.description
    if (req.body.category) update.category = req.body.category
    if (req.body.prices) update.prices = req.body.prices

    menu.findByIdAndUpdate(
        req.params.id,
        { $set: update },
        { new: true }
    ).then(docs => {
        return res.status(200)
            .json({
                status: 'Succes',
                data: docs
            })
    }).catch(err => {
        return res.status(500)
            .json({
                status: 'Failure',
                error: err
            })
    })
}

exports.destroy = (req, res, next) => {
    menu.findByIdAndRemove(req.params.id)
        .then(docs => {
            return res.status(200)
                .json({
                    status: 'Success'
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