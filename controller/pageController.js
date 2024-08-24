const Post = require('../models/post');

// home includes
const home = async (req, res) => {
    const posts = (await Post.find({})).reverse();
    res.render('site/index', {posts});
};

// about includes
const about = (req, res) => {
    res.render('site/about');
};

// add_post includes
const addPost = (req, res) => {
    res.render('site/add_post');
};

// post includes
const post = (req, res) => {
    res.render('site/post');
};

module.exports = {
    home,
    about,
    addPost,
    post
}