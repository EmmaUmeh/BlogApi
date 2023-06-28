const mongoose = require('mongoose');

const CreateBlogModel = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
})

module.exports = mongoose.model('CreateBlog', CreateBlogModel);