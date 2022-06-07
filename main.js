let arr = [];
let randomPokemon = Math.floor((Math.random() * 100) + 1);
let randomPokemonTwo = Math.floor((Math.random() * 100) + 1);
let randomPokemonThree = Math.floor((Math.random() * 100) + 1);


let generateNumbers = () => {

while(arr.length < 3){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
return arr;
}


async function fetchPokemons(){
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${arr[0]}`);
    const data = await response.json();
    console.log(data) // Shows all objects containing in pokemon number 2 payload
    console.log(data.forms[0].name) // get the name of the pokemon
    console.log(data.sprites.back_default)  // Get the image of the pokemon

   const responseTwo = await fetch (`https://pokeapi.co/api/v2/pokemon/${arr[1]}`);
   const dataTwo = await responseTwo.json();
   console.log(dataTwo) // Shows all objects containing in pokemon number 2 payload
   console.log(dataTwo.forms[0].name) // get the name of the pokemon

    const responseThree = await fetch (`https://pokeapi.co/api/v2/pokemon/${arr[2]}`);
    const dataThree = await responseThree.json();
    console.log(dataThree) // Shows all objects containing in pokemon number 2 payload
    console.log(dataThree.forms[0].name) // get the name of the pokemon
}

fetchPokemons(generateNumbers())
console.log(generateNumbers())