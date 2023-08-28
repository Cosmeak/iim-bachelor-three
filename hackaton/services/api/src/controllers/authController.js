const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const user = require("../models/user")

exports.login = (req, res) => {
    user.findOne({
        email: req.body.email
    })
    .exec((error, user)=> {
        if(error) {
            res.status(500).json({message: "error"})
            return
        }
        if(!user) {
            res.status(404).json({message: "User not found"})
        }
    })
    //password verification
    var passwordValid = async () => {
        const result = await bcrypt.compare(req.body.password, user.password)
    }

    if(!passwordValid) {
        return res.status(401).json({accesToken: null, message: "Invalid password"})
    }

    var token = jwt.sign(
        { id: user.id },
        process.env.PRIVATE_KEY, 
        { expiresIn: 3600 }
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