const express = require('express');
const  createblog = require('../controllers/Createblog.controllers');

const router = express.Router();

// FetchAllBlog Router
router.post('/createblog', createblog);

module.exports = router;