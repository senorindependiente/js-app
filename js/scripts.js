//setting up an array list of objects for the profile of the diferent pokemons:
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
//forEach method to iterate over the Pokémon in the pokemonList array in order to print the details of each one
pokemonList.forEach( pokemon => {
  document.write(pokemon.name + " (" + pokemon.height + ") " + " <br>");
});

