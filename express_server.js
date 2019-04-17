var express = require("express");
var app = express();
var PORT = 8080;

var handlers = require("./handlers");

app.set("view engine", "ejs");



app.get("/", (req, res) => {
    res.send("Hello!");
});

app.get("/urls.json", (req, res) => {
    res.json(urlDatabase);
});

app.get("/hello", handlers.helloWorld);

app.get("/urls", handlers.urls);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

