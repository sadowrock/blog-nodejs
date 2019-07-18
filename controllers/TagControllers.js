const Tag = require('../routes/models/tag')

exports.createTag = (req, res) => {
    const tag = new Tag(req.body)
    tag.user_id = req.session.user._id
    tag.created = Date.now()
    tag.save().then(result => {
        res.json({tag: result})
    })
}

exports.editTag = (req, res) => {
    Tag.findById(req.params.id, (err, tag) => {
        if (err) {return res.json({err})}
        tag.name = req.body.name
        tag.description = req.body.description
        tag.update = Date.now()
        tag.save().then(result => {
            res.json({tag: result})
        })
    })
}

exports.deleteTag = (req, res) => {
    Tag.remove({_id: req.params.id}, (err) => {
        if (err) {return res.json({err})}
        res.json({'mess': 'Delete success'})
    })
}