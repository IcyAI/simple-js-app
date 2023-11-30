
let pokemonRepository = (function () {

//array list of all my pokemon and attributes
let pokemonList = [
    { name: 'Charmander', height: 2, types: ['fire'] },
    { name: 'Squirtle', height: 3, types: ['water'] },
    { name: 'Bulbasaur', height: 1, types: ['grass', 'poison'] }
];

function getAll () {
    return pokemonList;
}

function add (item) {
    pokemonList.push(item);
}

return {
    getAll: getAll,
    add: add
};

})();


function printpokemonList(pokemon) {

    let currentpokemon = pokemon.name + ',' + ' ' + 'height' + ' ' + pokemon.height;

    if (pokemon.height <= 2) { 

        document.write(currentpokemon + '<br/>');
    
        }
    
    //if statment to check if pokemon are taller then 2 units
    else if (pokemon.height > 2) {
    
        document.write(currentpokemon + ' - Wow, that\'s big!' + '<br/>');
    
    }
}
    
   let list = pokemonRepository.getAll()

    list.forEach(printpokemonList);


