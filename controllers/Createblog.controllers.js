// const express = require('express')
const CreateBlog = require('../model/createblog.model.js')


const createblog = async (req, res) => {
// const CreateAll = req.body
const createblog = new CreateBlog({
    author: req.body.author,
    title: req.body.title,
    content: req.body.content
})

try{

await createblog.save();

res.status(201).json({msg: 'Blog created succesfully'});

}catch(error) {
    console.error('Error while while creating blog:', error);
      res.status(500).json({ error: 'Internal server error' });
}
}

module.exports = createblog;



