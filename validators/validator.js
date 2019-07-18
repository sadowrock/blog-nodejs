const User = require('../routes/models/user')

exports.UserValidatior = (req, res, next) => {
    //username
    req.check('username', 'Username is required.').not().isEmpty();
    req.check('username', 'Username must be more than 6 characters').isLength({min: 6});
    //password
    req.check('password', 'Password is required.').not().isEmpty();
    req.check('password', 'Password must be more than 6 characters').isLength({min: 6});
    //email
    req.check('email', 'Email is required.').not().isEmpty();
    req.check('email', 'Invalid email.').isEmaild();

    //check for errors
    const errors = res.validationErrors();
    if (errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}

exports.PostValidatior = (req, res, next) => {
    // Title
    req.check('title', 'Title is required.').notEmpty();
    req.check('title', 'Title must be between to 150 characters').isLength({max: 150});
    // Content
    req.check('content', 'Content is required.').notEmpty();
    req.check('content', 'Content must be between to 2000 characters').isLength({max: 2000});

    //check for errors
    const errors = res.validationErrors();
    if (errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}

exports.CommentValidatior = (req, res, next) => {
    //Content
    req.check('content', 'Content is required.').notEmpty();
    req.check('content', 'Content must be between to 800 charaters').isLength({max: 800});

    //check for errors
    const errors = res.validationErrors();
    if (errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}

exports.TagValidatior = (req, res, next) => {
    //name
    req.check('Tag_name', 'Tag_name is required.').notEmpty();
    req.check('Tag_name', 'Tag_name must be between to 80 charaters').isLength({max: 80});

    //description
    req.check('Tag_description', 'Tag_description is required.').notEmpty();
    req.check('Tag_description', 'Tag_description must be between to 80 charaters').isLength({max: 80});

    const errors = res.validationErrors();
    if (errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}

exports.CategoryValidatior = (req, res, next) => {
    //name
    req.check('category_name', 'category_name is required.').notEmpty();
    req.check('category_name', 'category_name must be between to 80 charaters').isLength({max: 80});

    const errors = res.validationErrors();
    if (errors){
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    next();
}