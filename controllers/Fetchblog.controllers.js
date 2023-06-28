const FetchBlog = require('../model/fetchblog.model')


const fetchblog = async (req, res) => {


    try{
       await FetchBlog.find({})

      res.status(200).json({msg: 'Blog Fetched Successfully'})

    }catch(error) {
        console.error('Error while while fetching blog:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

module.exports = fetchblog;