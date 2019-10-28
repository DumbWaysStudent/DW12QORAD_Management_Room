const models = require('../models')
const User = models.user
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    //check if email and pass match in db tbl user
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!

    User.findOne({ where: { email, password } }).then(user => {
        console.log(user)
        if (user) {
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                user,
                token
            })
        } else {
            res.send({
                code: "ERR_WRONG_EMAIL_PASS",
                message: "Wrong Email or Password!"
            })
        }
    })
}