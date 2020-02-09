const chalk = require("chalk");
const Express = require("express");
const App = Express();
const port = 80;

const pokemons = require("json-pokemon");
const pokemon = pokemons[0];

App.get("/id/:id", (req, res) => {
    if(0 < req.params.id <= 890) {
        let x = req.params.id;
        res.send(console.log(chalk.green(pokemon.getPokemonById.x)));
    } else {
          res.send(console.log(chalk.red("ID doesn't exist! Do you even Pokemon, bro?")));
    } 
});

App.get("/name/:name", (req, res) => {
    if(req.params.name) {
        let y = req.params.name;
        res.send(console.log(chalk.green(pokemon.getPokemonByName.y)));
    } else {
        res.send(console.log(chalk.red("Name doesn't exist! Do you even Pokemon, bro?")));
    }
});

App.listen(port, () => {
    console.log("Server running!");
});