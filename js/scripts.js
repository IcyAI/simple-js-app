
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

function addListItem(pokemon) {

    let pokemonList = document.querySelector(".pokemon-list");

    let listpokemon = document.createElement("li");

    let button = document.createElement("button");

    button.innerText = pokemon.name;
    button.classList.add("button-class");

    listpokemon.appendChild(button);

    pokemonList.appendChild(listpokemon);


}

function showDetails(pokemon) {
    console.log(pokemon.name)
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
};

})();



