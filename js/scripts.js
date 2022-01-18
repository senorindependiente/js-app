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

for (i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " )");

  if (pokemonList[i].height > 3) {



    document.write("So tall!")
  }

}
