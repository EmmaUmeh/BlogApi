const express = require('express');
const moongoose = require('mongoose');
const blogdb = require('./config/blogdb.config');
const createblog = require('./routers/createblog.router')

const app = express();

app.use(express.json());
moongoose.connect(blogdb.url,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/', createblog)

app.get('/', function(req, res) {
    res.status(200).json({servermsg : "Building a simple blog api"})
})


app.listen(process.env.port || 5000)

