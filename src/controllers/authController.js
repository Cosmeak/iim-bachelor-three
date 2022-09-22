const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const user = require("../models/user")

exports.login = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .exec((error, user)=> {
        if(error) {
            res.status(500).send({message: "error"})
            return
        }
        if(!user) {
            res.status(404).send({message: "User not found"})
        }
    })
    //password verification
    var passwordValid = bcrypt.compareSync(
        req.body.password,
        user.password
    )

    if(!passwordValid) {
        return res.status(401).send({accesToken: null, message: "Invalid password"})
    }

    var token = jwt.sign(
        { id: user.id },
        process.env.PRIVATE_KEY, 
        { expiresIn: 86400 }
    )

    //logged in
    res.status(200).send({
        user: {
            id: user._id,
            email:  user.email,
        },
        message: "You're logged in",
        accessToken: token
    })
}