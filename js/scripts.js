
//array list of all my pokemon and attributes
let pokemonList = [
    { name: 'Charmander', height: 2, types: ['fire'] },
    { name: 'Squirtle', height: 3, types: ['water'] },
    { name: 'Bulbasaur', height: 1, types: ['grass', 'poison'] }
];

//for loop to print out all pokemon in list
for (let i = 0; i < pokemonList.length; i++) {

    let Pokemon = pokemonList[i].name + ',' + ' ' + 'height' + ' ' + pokemonList[i].height;

    if (pokemonList[i].height <= 2) { 

    document.write(Pokemon + '<br/>');

    }

//if statment to check if pokemon are taller then 2 units
else if (pokemonList[i].height > 2) {

    document.write(Pokemon + ' - Wow, that\'s big!' + '<br/>');

}
    
}