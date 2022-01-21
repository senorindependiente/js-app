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

  //IIFE will return an object with two methods "getAll" and "add"

  return {
    getAll: getAll,
    add: add,
  };
})();

// IIFE returned function to retrieve "pokemonList"
console.log(pokemonRepository.getAll());

//forEach method to iterate over the Pokémon in the pokemonList array in order to print the details of each one
//pokemonList.forEach( pokemon => {
//document.write(pokemon.name + " (" + pokemon.height + ") " + " <br>");
//});
