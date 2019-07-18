const Category = require('../routes/models/category')

exports.createCategory = (req, res) => {
    const category = new Tag(req.body)
    category.tags= req.session.tag._id
    category.created = Date.now()
    category.save().then(result => {
        res.json({category: result})
    })
}

exports.editCategory = (req, res) => {
    Category.findById(req.params.id, (err, tag) => {
        if (err) {return res.json({err})}
        category.name = req.body.name
        category.update = Date.now()
        category.save().then(result => {
            res.json({category: result})
        })
    })
}

exports.deleteCategory = (req, res) => {
    Category.remove({_id: req.params.id}, (err) => {
        if (err) {return res.json({err})}
        res.json({'mess': 'Delete success'})
    })
}