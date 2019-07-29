const User = require('../routes/models/user')
const bcrypt = require('bcrypt')
let numSaltRounds = 10;

exports.register = (req, res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (user === null){
            bcrypt.genSalt(numSaltRounds, (err, salt) => {
                bcrypt.hash('someplaintextpassword', salt, (err, hash) => {
                    if (err) {return next (err); }
                         const user = new User(req.body)
                         user.password = hash
                         user.save((err, result) => {
                             if (err) {return res.json({err})}
                             res.json({user: result})
                         })
                });
            });
        } else {
            res.json({err: 'username has been used'})
        }
    });
}


exports.login = (req, res) => {
    User.findOne({username: req.body.username})
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
        req.session.destroy((err) => {
            if (err) {
                return res.json({err});
            } else {
                return res.json({'logout': 'Success'})
            }
        })
    }
}
