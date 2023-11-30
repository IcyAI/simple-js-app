
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


    document.write(Pokemon + '<br/>');
})();




}
    
