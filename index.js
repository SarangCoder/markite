const express = require("express");
const app = express();
const port = 8000;
const path = require("path");


app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));

app.get("/" , (req,res) => {
    res.render("index.ejs");
});


app.listen(port , () => {
    console.log(`Listening to port : ${port}`);
});