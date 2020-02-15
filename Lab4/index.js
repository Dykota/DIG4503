const chalk = require("chalk");
const Express = require("express");
const App = Express();
const port = 80;

const pokemons = require("json-pokemon");
const pokemon = pokemons[0];
const getPokemons = require('json-pokemon/getPokemon');

App.get("/id/:id", (req, res) => {
    if(0 < parseInt(req.params.id) <= 890) {
        let id = parseInt(req.params.id);
        let mon = getPokemons.getPokemonById(id);
        res.send(mon);
        res.send(console.log(chalk.green(req.path)));
    } else {
        res.send("ID doesn't exist! Do you even Pokemon, bro?");
        res.send(console.log(chalk.red(req.path.id)));
    } 
});

App.get("/name/:name", (req, res) => {
    //just going to use simple conditions for this. Whenever I try to use forEach or any other function to match the names, it says "is not a function".
    let name = req.params.name;
    let monn = getPokemons.getPokemonByName(name);
    if (monn === null) {
        res.send("Name doesn't exist! Do you even Pokemon, bro?");
        res.send(console.log(chalk.red(req.path)));  
    } else {
        res.send(monn);
        res.send(console.log(chalk.green(req.path)));
    }
});

App.listen(port, () => {
    console.log("Server running!");
});