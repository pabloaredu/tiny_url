var exports = module.exports = {};

var urlDatabase = {
    "b2xVn2": "http://www.lighthouselabs.ca",
    "9sm5xK": "http://www.google.com"
}

exports.helloWorld = (req, res) => {
    let templateVars = { greeting: 'Hello World!' };
    res.render("hello_world", templateVars);
};

exports.urls = (req, res) => {
    let templateVars = { urls: urlDatabase };
    res.render("urls_index", templateVars);
};

exports.urlsId = (req, res) => {
    let shortURL = req.params.shortURL;
    let templateVars = { shortURL, longURL: urlDatabase[shortURL] };
    console.log("params", templateVars);
    res.render("urls_show", templateVars);
};

exports.urlsNew = (req, res ) => {
    res.render("urls_new");
}