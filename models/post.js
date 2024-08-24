const mongoose = require('mongoose');
const moment =  require('moment');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    title: String,
    detail: String,
    dateCreated: { 
        type: String, 
        default: moment().format('DD-MM-YYYY')
    },
});

const Post = mongoose.model('Post', BlogPost);

module.exports = Post;