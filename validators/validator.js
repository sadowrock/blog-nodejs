const User = require('../routes/models/user')
const { check, validationResult } = require('express-validator');
exports.UserValidator = (req, res, next) => {
    //username
    check('username', 'Username is required.').not().isEmpty();
    check('username', 'Username must be more than 6 characters').isLength({min: 6});
    //password
    check('password', 'Password is required.').not().isEmpty();
    check('password', 'Password must be more than 6 characters').isLength({min: 6});
    //email
    check('email', 'Email is required.').not().isEmpty();
    check('email', 'Invalid email.').isEmail();

    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

exports.PostValidatior = (req, res, next) => {
    // Title
    check('title', 'Title is required.').not().isEmpty();
    check('title', 'Title must be between to 150 characters').isLength({max: 150});
    // Content
    check('content', 'Content is required.').not().isEmpty();
    check('content', 'Content must be between to 2000 characters').isLength({max: 2000});

    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

exports.CommentValidatior = (req, res, next) => {
    //Content
    check('content', 'Content is required.').not().isEmpty();
    check('content', 'Content must be between to 800 charaters').isLength({max: 800});

    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

exports.TagValidatior = (req, res, next) => {
    //name
    check('Tag_name', 'Tag_name is required.').not().isEmpty();
    check('Tag_name', 'Tag_name must be between to 80 charaters').isLength({max: 80});

    //description
    check('Tag_description', 'Tag_description is required.').not().isEmpty();
    check('Tag_description', 'Tag_description must be between to 80 charaters').isLength({max: 80});

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

exports.CategoryValidatior = (req, res, next) => {
    //name
    check('category_name', 'category_name is required.').not().isEmpty();
    check('category_name', 'category_name must be between to 80 charaters').isLength({max: 80});

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}