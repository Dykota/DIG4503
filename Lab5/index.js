const chalk = require("chalk");
const Express = require("express");
const App = Express();
const port = 80;

const pokemons = require("json-pokemon");
const pokemon = pokemons[0];
const getPokemons = require('json-pokemon/getPokemon');

App.use("/", Express.static("public"));

App.get("/api/pokemon/id/:id", (req, res) => {
    let result = {"error": "ID doesn't exist! Do you even Pokemon, bro?"};
    //just going to use simple conditions for this. Whenever I try to use forEach or any other function to match the names, it says "is not a function".
    let id = parseInt(req.params.id);
    let mon = getPokemons.getPokemonById(id);
    if(mon === null) {
        res.json(result);
        res.send(console.log(chalk.red(req.path)));
    } else {
        result = mon;
        res.json(result);
        res.send(console.log(chalk.green(req.path)));
    } 
});

App.get("/api/pokemon/name/:name", (req, res) => {
    let result = {"error": "Name doesn't exist! Do you even Pokemon, bro?"};
    //just going to use simple conditions for this. Whenever I try to use forEach or any other function to match the names, it says "is not a function".
    let name = req.params.name;
    let monn = getPokemons.getPokemonByName(name);
    if (monn === null) {
        res.json(result);
        res.send(console.log(chalk.red(req.path)));  
    } else {
        result = monn;
        res.json(result);
        res.send(console.log(chalk.green(req.path)));
    }
});

App.listen(port, () => {
    console.log("Server running!");
});