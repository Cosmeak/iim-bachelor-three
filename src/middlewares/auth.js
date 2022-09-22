const jwt = require("jsonwebtoken")
const user = require("../models/user")

const verifToken = (req, res, next) => {
    if(req.headers && req.hearders.authorization && req.headers.authorization.split(' ')[0] === 'jwt'){
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.PRIVATE_KEY, function(error, decode){
            if(error) req.user = undefined
            user.findOne({
                _id: decode.id
            })
            .exec((error, user) => {
                if(error) {
                    res.status(500).send({message: "error"})
                } else {
                    req.user = user
                    next()
                }
            })
        })
    } else {
        req.user = undefined
        next()
    }
}
module.exports = verifToken