
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }
    }
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      listpokemon.classList.add("list-group-item");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      //button.classList.add("button-class");
      button.classList.add("btn", "btn-primary");
      button.setAttribute("data-toggle","modal");
      button.setAttribute("data-target","#exampleModal");
      button.classList.add("row");
      button.classList.add("col-2");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
     button.addEventListener("click", function(event) {
       showDetails(pokemon);
     });
    }
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
  

    function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
   }
  
  function showModal(pokemon) {

    let modalbody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    
    modalTitle.empty();
    modalbody.empty();
    

    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", pokemon.imageUrl);

    let heightElement = $("<p>" + "height :" + pokemon.height + "<p>");

    modalTitle.append(nameElement);
    modalbody.append(imageElementFront);
    modalbody.append(heightElement);

}

function hideModal() {
    let modalContainer= document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
    let modalContainer= document.querySelector('#modal-container');
    if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
    }
});


    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal: showModal,
      hideModal: hideModal
    };

  })();
  
  
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });

  });