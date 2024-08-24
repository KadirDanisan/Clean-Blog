const Post = require('../models/post');

const newPost =  (req, res) => {
    Post.create(req.body);
    res.redirect('/');
}

const postId =  async (req,res)=> {
    const id = req.params.id;
    const posts = await Post.find({_id: id});
    res.render('site/post.ejs', {posts});
}

module.exports = {
    newPost,
    postId
}