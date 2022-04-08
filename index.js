const express = require("express");
const bodyParser=require("body-parser");
const { homeroute, loginauth, registerauth } = require("./modules/home");
const { forumroute } = require("./modules/forum");
const { postsroute } = require("./modules/posts");


const app = express();
const port = 3000;

//ejs view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use("/assets", express.static(__dirname + "/assets"));

//home and auth
app.get("/",(req,res)=>{
    homeroute(req, res);
});

app.post("/login",(req,res)=>{
   loginauth(req, res);
})

app.post("/register", (req, res)=>{
    registerauth(req, res);
})

//forums
app.get("/forums",(req, res)=>{
    forumroute(req, res);
})
//posts
app.get("/posts",(req, res)=>{
    postsroute(req, res);
})

app.listen(port,()=>{
    console.log("app running on port 3000");
})

//index routes