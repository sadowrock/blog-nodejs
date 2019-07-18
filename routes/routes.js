const express = require('express')
const route = express.Router()
const {register, login, logout} = require('../controllers/UserControllers')
const {UserValidator, PostValidatior, CommentValidatior, TagValidatior, CategoryValidatior} = require('../validators/validator')
const {listPost, detailPost, createPost, editPost, deletePost} = require('../controllers/PostControllers')
const {createComment, editComment, deleteComment} = require('../controllers/CommentControllers')
const {createTag, editTag, deleteTag} = require('../controllers/TagControllers')
const {createCategory, editCategory, deleteCategory} = require('../controllers/CategoryControllers')

function requiresLogout(req, res, next){
    if (req.session && req.session.user) {
        return res.json({err: 'You must be Logout in to Login continue.'})
    } else {
        return next();
    }
}

function requiresLogin(req, res, next){
    if (res.session && req.session.user) {
        return next()
    } else {
        return res.json({err: 'You must be logged in to view this page.'})
    }
}

route.post('/register', UserValidator, register)
route.post('/login', requiresLogout, login)
route.get('/logout', requiresLogin, logout)
//post 
route.get('/posts', requiresLogin, listPost)
route.get('/post/:id', requiresLogin, detailPost)
route.post('/post/new', requiresLogin, PostValidatior, createPost)
route.put('/post/:id/edit', requiresLogin, PostValidatior, editPost)
route.delete('/post/:id', requiresLogin, deletePost)
//comment
route.post('/coment/:id', requiresLogin, CommentValidatior, createComment)
route.put('/comment/:id/edit', requiresLogin, CommentValidatior, editComment)
route.delete('/comment/:id', requiresLogin, deleteComment)
//tag
route.post('/tag/:id', requiresLogin, TagValidatior, createTag)
route.put('/tag/:id/edit', requiresLogin, TagValidatior, editTag)
route.delete('/tag/:id', requiresLogin, deleteTag)
//category
route.post('/category/:id', requiresLogin, CategoryValidatior, createCategory)
route.put('/category/:id/edit', requiresLogin, CategoryValidatior, editCategory)
route.delete('/category/:id', requiresLogin, deleteCategory)

module.exports = router;