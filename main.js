
let randomPokemon = Math.floor((Math.random() * 10) + 1);

async function getPokemon(){
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
    const data = await response.json();
    console.log(data) // Shows all objects containing in pokemon number 2 payload
    console.log(data.forms[0].name) // get the name of the pokemon
    console.log(data.sprites.back_default)  // Get the image of the pokemon
   
}

getPokemon()