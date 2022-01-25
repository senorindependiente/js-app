//setting up an array list of objects for the profile of the diferent pokemons

// "pokemonList" is wrapped into an IIFE and created new variable "pokemonRepository"
let pokemonRepository = (function () {
  let pokemonList = [];
  //Pokemon API
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //added function to return the "pokemonList"
  function getAll() {
    return pokemonList;
  }

  //added function to add new pokemen to the "pokemonList"
  function add(pokemon) {
    //checks that only certain properties will be accepted when adding a new pokemon
    if(
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      //if property has been validated, new pokemon will be added
    pokemonList.push(pokemon);}
    else {
      // otherwise error message 
      console.log("error");
    }
  }

  //added function to create buttons which display each pokemon in HTML
  function addListItem(pokemon) {
// selecting elements
    let list = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    // creating text inside the button element
    button.innerHTML = pokemon.name;
    //adding a classlist of button
    button.classList.add("btn");
    //add button as a list item
    listItem.appendChild(button);
    //adding the list time to the main pokemon list
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
