import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find type."};

    const type = toString(req.query.type);

    let pokemon = getPokemon.filter.type(type);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}

    // for(let i = 0; i < pokemon.length; i++) {

    //     for(let k = 0; k < pokemon[i].typeList.length; k++) {

    //         let result = {"error": "Could not find name."};

    //         let pokeman = (req.query.name);
        
    //         if(pokeman !== null) {
    //             result = pokeman;
    //         }

    //         res.json(result);

    //     }

    // }