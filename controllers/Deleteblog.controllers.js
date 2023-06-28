const DeleteBlog = require('../model/deleteblog.model')


const deleteblog  = async (req, res) => {
    const {author, title, content} = req.body;

    try{
      const deleteall =  DeleteBlog.deleteMany({author, title, content});

      await deleteall;

      res.status(500).json({msg: 'Blog Deleted Succefully'})
    }catch(error) {
        console.error('Error while while deleting blog:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}

module.exports = deleteblog;