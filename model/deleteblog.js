import mongoose from "mongoose";

const DeleteBlogSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
})

module.exports = mongoose.model('FetchAll', DeleteBlogSchema);