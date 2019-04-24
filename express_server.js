var express = require("express");
var app = express();
var PORT = 8080;

var handler = require("./handlers");

app.set("view engine", "ejs");


// Home test
app.get("/", (req, res) => {
    res.send("Hello!");
});

// Routes
app.get("/urls", handler.urls);
app.get("/urls/new", handler.urlsNew)
app.get("/urls/:shortURL", handler.urlsId);



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
