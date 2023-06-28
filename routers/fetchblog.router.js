const express = require('express');
const fetchblog = require('../controllers/Fetchblog.controllers')
const router = express.Router();

// FetchAllBlog Router

router.get('/fetchblog', fetchblog)

module.exports = router;