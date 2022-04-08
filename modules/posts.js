const path = require("path");

const postsroute = (req, res)=>{
    res.sendFile(path.join(__dirname, '../', 'posts.html'))
}

module.exports = {postsroute};