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