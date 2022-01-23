//setting up an array list of objects for the profile of the diferent pokemons

// "pokemonList" is wrapped into an IIFE and created new variable "pokemonRepository"
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Liepard",
      height: 1.1,
      types: ["dark", "fairy", "fighting", "ghost", "psychic", "bug"],
    },
    { name: "Pikachu", height: 0.4, types: ["electric", "steel", "flying"] },
    { name: "Persian", height: 1, types: ["normal", "fighting", "ghost"] },
    {
      name: "Chimchar",
      height: 0.5,
      types: ["fire", "ground", "rock", "water", "steel", "ice", "fairy"],
    },
    {
      name: "Wailord",
      height: 14.5,
      types: ["water", "grass", "rock", "electric", "steel", "fire", "ice"],
    },
    {
      name: "Beartic",
      height: 2.6,
      types: ["fighting", "rock", "steel", "fire", "ice"],
    },
  ];

  //added function to return the "pokemonList"
  function getAll() {
    return pokemonList;
  }

  //added function to add new pokemen to the "pokemonList"
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //added function to create buttons which display each pokemon in HTML
  function addListItem(pokemon) {
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = pokemon.name;
    button.classList.add("btn");
    listItem.appendChild(button);
    list.appendChild(listItem);

    //adding eventhandler to the button that will show the logged pokemon  on click
    button.addEventListener("click", () => {
      showDetails(pokemon.name);
    });
  }

  //adding function to log the name of the pokemon
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  
  //IIFE will return an object with  methods "getAll" and "add" and "addListItem"
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

// IIFE returned function to retrieve "pokemonList"
//forEach method iterate trough each pokemon to display button with pokemon name in the browser
pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
