//setting up an array list of objects for the profile of the diferent pokemons

// "pokemonList" is wrapped into an IIFE and created new variable "pokemonRepository"
let pokemonRepository = (function () {
  let pokemonList = [];
  //Pokemon API
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //added function to return the "pokemonList"
  function getAll() {
    return pokemonList;
  }

  //added function to add new pokemen to the "pokemonList"
  function add(pokemon) {
    //checks that only certain properties will be accepted when adding a new pokemon
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      //if property has been validated, new pokemon will be added
      pokemonList.push(pokemon);
    } else {
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
    button.addEventListener("click", (event) => {
      showDetails(pokemon);
    });
  }

  //adding promise function
  function loadList() {
    //using the fetch method to get pokemon API "apiUrl", the result will be the "response", which is a promise
    return (
      fetch(apiUrl)
        .then(function (response) {
          // the reponse is in a json file which will be converted from strings to objects
          return response.json();
        })
        //we run a forEach loop on the json
        .then(function (json) {
          //"json" object is the file with all the pokemon . the "results" is a json key taken from the json file list,
          //the forEach loop will iterate trough all the different pokemon in the json file.
          json.results.forEach(function (item) {
            //for each of these pokemon item a variable will be created "pokemon" and turned into an object with two key-value pairs
            let pokemon = {
              //"item." here is the parameter of function, "name" and "url" are keys taken from the json file list
              name: item.name,
              detailsUrl: item.url,
            };
            //calling add function to
            add(pokemon);
          });
        })
        .catch(function (e) {
          console.error(e);
        })
    );
  }

  // use the "detailsUrl" property to load the detailed data for a given Pokémon.
  //for this, you add a loadDetails() function, which takes a Pokémon item as an argument
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        //"item." is from the loadDetails parameter, "imageUrl" is a variable that was just created, "details."
        //is the parameter of this function, "sprites.height.types." are thaken from the second  json file list when you click on the "url" in the first json file list
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //adding a modal Window that will open and display name+heigh+and picture of pokemon
  let modalContainer = document.querySelector("#modal-container");
  //creating function to show modal window
  function showModal(title, text) {
    //setting the modal windwo to blank
    modalContainer.innerHTML = "";

    //adding elements to the modal window
    let modal = document.createElement("div");
    modal.classList.add("modal");

    let imageElement = document.createElement("img");
    imageElement.classList.add("pic");
    imageElement.src = "";

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = title;

    let contentElement = document.createElement("p");
    contentElement.innerText = text;
    // adding all the created elements to the modal window
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    //adding  css class of "is-visible" to remove the default state of display=none
    modalContainer.classList.add("is-visible");
  }
  //creae function to hide the modal window by removing the css class "is-visible"
  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }
  //creating an event that will close the modal window with Escape button
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  //creating an event that will close the modal window when clicking on it
  modalContainer.addEventListener("click", (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  //creating and event that whill execute the showModal function to display information on click
  document.querySelector("#show-modal").addEventListener("click", () => {
    showModal();
  });

  //the showDetails() function is executed when a user clicks on a Pokémon and you get the Pokémon’s details from the server.
  //showDetails function will execute
  function showDetails(item) {
    //the loadDetails function with pokemon as parameter and adds a function as a promise and then to return a console log
    loadDetails(item).then(function () {
      //added name and height to display in the modal window dynamically
      showModal(item.name, " Height: " + item.height, item.imageUrl);
    });
  }

  //IIFE will return an object with  methods to have access to these previously created functions
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

//this will call the api to display
pokemonRepository.loadList().then(function () {
  // IIFE returned function to retrieve "pokemonList"
  //forEach method iterate trough each pokemon to display button with pokemon name in the browser
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
