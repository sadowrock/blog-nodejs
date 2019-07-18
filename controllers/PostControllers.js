const Post = require('../routes/models/post')

exports.listPost = (req, res) => {
    const posttitle = 'title content poster created updated'
    Post.find({}, posttitle, (err, posts) => {
        if (err) {return res.json({err})}
        res.json({posts: posts})
    })
}

exports.detalPost = (req, res) => {
    Post.findById(res.params.id)
        .populate('user_id')
        .populate('tags')
        .exec((err, post) => {
            if (err) {return res.json({err})}
            res.json({
                title: post.title,
                content: post.content,
                user: post.user.user_id,
                tag: post.tag.tags,
                created: post.created,
                updated: post.updated
            })
        })
}

exports.createPost = (req, res) => {
    const post = new Post(req.body)
    post.user_id = req.session.user._id
    post.created = Date.now()
    post.save().then(result => {
        res.json({post: result})
    })
}

exports.editPost = (req, res) => {
    Post.findById(req.params.id, 'title content', (err, post) => {
        if (err) {return res.json({err})}
        post.title = req.body.title
        post.content = req.body.content
        post.update = Date.now()
        post.save().then(result => {
            res.json({post: result})
        })
    })
}

exports.deletePost = (req, res) => {
    Post.remove({_id: req.params.id}, (err) => {
        if (err) {return res.json({err})}
        res.json({'mess': 'Delete success'})
    })
}