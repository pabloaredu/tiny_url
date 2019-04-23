var express = require("express");
var app = express();
var PORT = 8080;

var handler = require("./handlers");

app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/urls/:shortURL", handler.url);

app.get("/urls", handler.urls);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
