const Comment = require('../routes/models/comment')

exports.createComment = (req, res) => {
    const comment = new Comment(req.body)
    comment.user_id = req.session.user._id
    comment.created = Date.now()
    comment.save().then(result => {
        res.json({comment: result})
    })
}

exports.editComment = (req, res) => {
    Comment.findById(req.params.id, (err, comment) => {
        if (err) {return res.json({err})}
        comment.content = req.body.content
        comment.update = Date.now()
        comment.save().then(result =>{
            res.json({comment: result})
        })
    })
}

exports.deleteComment = (req, res) => {
    Comment.remove({_id: req.params.id}, (err) => {
        if (err) {return res.json({err})}
        res.json({'mess': 'Delete success'})
    })
}