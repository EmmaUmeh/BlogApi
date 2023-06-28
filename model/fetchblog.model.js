const mongoose = require('mongoose');

const FetchBlogModel = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
})

module.exports = mongoose.model('FetchBlog', FetchBlogModel);