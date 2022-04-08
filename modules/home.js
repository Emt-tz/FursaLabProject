const path = require("path");

const homeroute = (req, res) =>  {
res.sendFile(path.join(__dirname, '../', 'index.html'))
}

module.exports = {homeroute};