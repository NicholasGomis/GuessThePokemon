let randomPokeId = [];
let randomPokemon = Math.floor((Math.random() * 100) + 1);
let randomPokemonTwo = Math.floor((Math.random() * 100) + 1);
let randomPokemonThree = Math.floor((Math.random() * 100) + 1);
let hardCodedAnswer = 5;

let generateNumbers = () => {

while(randomPokeId.length < 3){
    let r = Math.floor(Math.random() * 100) + 1;
    if(randomPokeId.indexOf(r) === -1) randomPokeId.push(r);
}
return randomPokeId;
}

let fetchRandomID = (nums) => {
let randoms = Math.floor(Math.random() * randomPokeId.length);
console.log(randoms, randomPokeId[randoms]);
}

async function fetchPokemons(){
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[0]}`);
    const data = await response.json();
    console.log(data) // Shows all objects containing in pokemon number 2 payload
    console.log(data.forms[0].name) // get the name of the pokemon
    console.log(data.sprites.back_default)  // Get the image of the pokemon

   const responseTwo = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[1]}`);
   const dataTwo = await responseTwo.json();
   console.log(dataTwo) // Shows all objects containing in pokemon number 2 payload
   console.log(dataTwo.forms[0].name) // get the name of the pokemon

    const responseThree = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[2]}`);
    const dataThree = await responseThree.json();
    console.log(dataThree) // Shows all objects containing in pokemon number 2 payload
    console.log(dataThree.forms[0].name) // get the name of the pokemon
}

fetchPokemons(generateNumbers())
console.log(generateNumbers())
fetchRandomID()