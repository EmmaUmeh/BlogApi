const express = require('express');
import createblog from '../controllers/createblog';

const app = express.Router();

// FetchAllBlog Router
app.post('/createblog', createblog);