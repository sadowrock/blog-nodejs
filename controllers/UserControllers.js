const User = require('../routes/models/user')
const bcrypt = require('bcrypt')

exports.register = (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (user === null){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {return next (err); }
                const user = new User(req.body)
                user.password = hash;
                user.save((err, result) => {
                    if (err) {return res.json({err})}
                    res.json({user: result})
                })
            })
        } else {
            res.json({err: 'email hass been used'})
        }
    });
}

exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .exec((err, user) => {
        if (err) {
            return res.json({err})
        } else if (!user){
            return res.json({err: 'Username and Password are incorrect'})
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result === true) {
                res.session.user = user
                res.json({
                    user: user,
                    'login': 'success'
              })
            } else {
                return res.json({err: 'Username and Password are incorrect'})
            }
        })
    })
}

exports.logout = (req, res) => {
    if (req.session) {
        //delete session object
        req.sessio.destroy((err) => {
            if (err) {
                return res.json({err});
            } else {
                return res.json({'logout': 'Success'})
            }
        })
    }
}
