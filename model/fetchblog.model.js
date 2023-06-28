const mongoose = require('mongoose');

const FetchBlogSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
})

module.exports = mongoose.model('FetchAll', FetchBlogSchema);