const Post = require("../routes/models/post");

exports.listPost = (req, res) => {
  Post.find()
    .then(post => {
      res.send(post);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving post."
      });
    });
};

exports.detailPost = (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found with id" + req.params.id
        });
      }
      res.send(post);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Post not found with id" + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error retrieving note with id" + req.params.id
      });
    });
};

exports.createPost = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Post content can not be empty"
    });
  } else if (!req.body.title) {
    return res.status(400).send({
      message: "Post title can not be empty"
    });
  }
  // Create post
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // Save post in the database
  post
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Post."
      });
    });
};

exports.editPost = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty"
    });
  }
  Post.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      content: req.body.content
    },
    { new: true }
  )
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found with id " + req.params.id
        });
      }
      res.send(post);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Post node found with id. " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Error updating post with id " + req.params.id
      });
    });
};

exports.deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(404).send({
          message: "Post not found with id " + req.params.id
        });
      }
      res.send({ message: "Post deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Post not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete note with id " + req.params.id
      });
    });
};
