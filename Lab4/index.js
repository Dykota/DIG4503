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
        res.send(console.log(chalk.green(mon)));
    } else {
          res.send(console.log(chalk.red("ID doesn't exist! Do you even Pokemon, bro?")));
    } 
});

App.get("/name/:name", (req, res) => {
    if(req.params.name == pokemon.value) {
        let name = req.params.name;
        let monn = getPokemons.getPokemonByName(name);
        res.send(console.log(chalk.green(getPokemons.getPokemonByName(monn))));
    } else {
        res.send(console.log(chalk.red("Name doesn't exist! Do you even Pokemon, bro?")));
    }
});

App.listen(port, () => {
    console.log("Server running!");
});