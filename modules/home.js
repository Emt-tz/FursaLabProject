const path = require("path");

const homeroute = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'index.html'))
}


const loginauth = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    //run sql statement here
    let validation = true;//validates the data
    //return response
    if (validation) {
        res.redirect("/forums")
    } else {
        res.send("invalid credentials");
    }

}

const registerauth = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let confirmpassword = req.body.confirmpassword;

    //check if confirmpassword is equal to password;
    if (password === confirmpassword) {
        //run sql statement
        let validation = true;

        //return reponse
        if (validation) {
            res.redirect("/forums");
        } else {
            res.send("either user exists or something went wrong");
        }
    }else{
        res.send("passwords input not match")
    }

}

module.exports = { homeroute, loginauth, registerauth };