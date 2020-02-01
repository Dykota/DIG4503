const Express = require("express");
const App = Express();
const port = 80;

App.use(Express.static("public"));

App.get('/', (req, res) => {
    res.send("/index.html");
});

App.get('/', (req, res) => {
    res.send("Hello World!");
});


App.listen(port, () => {
    console.log("Server running!");
});