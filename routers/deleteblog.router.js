const express = require('express');
const deleteblog = require('../controllers/Deleteblog.controllers')
const router = express.Router();

// FetchAllBlog Router

router.delete('/deleteblog', deleteblog)

module.exports = router;