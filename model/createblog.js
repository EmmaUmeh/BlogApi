import mongoose from "mongoose";

const CreateBlogSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
})

module.exports = mongoose.model('CreateAll', CreateBlogSchema);