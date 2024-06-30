const express = require("express");
const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log("Server was conneceted successfully");

});
app.get("/",(req,res)=>{
    res.render("home.ejs");

});

app.use(express.static(path.join("Public")));
app.set("view engine", "ejs");
app.set("views", path.join( __dirname ,"/views"));
