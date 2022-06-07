let pokemonsAnswers = [];
let randomPokemon = Math.floor((Math.random() * 100) + 1);
let randomPokemonTwo = Math.floor((Math.random() * 100) + 1);
let randomPokemonThree = Math.floor((Math.random() * 100) + 1);


let generateNumbers = (number) => {

pokemonsAnswers.push(randomPokemon);

if( randomPokemonTwo!= pokemonsAnswers && randomPokemonThree != pokemonsAnswers){

    pokemonsAnswers.push(randomPokemonTwo);
    pokemonsAnswers.push(randomPokemonThree);
} else {
    
    console.log("doubled")
}
return pokemonsAnswers

}



// pokemonsAnswers.push(randomPokemon);

// if( randomPokemonTwo!= pokemonsAnswers && randomPokemonThree != pokemonsAnswers){

//     pokemonsAnswers.push(randomPokemonTwo);
//     pokemonsAnswers.push(randomPokemonThree);
// } else {
    
//     console.log("doubled")
// }




// async function fetchPokemons(){
//     const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
//     const data = await response.json();
//     console.log(data) // Shows all objects containing in pokemon number 2 payload
//     console.log(data.forms[0].name) // get the name of the pokemon
//     console.log(data.sprites.back_default)  // Get the image of the pokemon

//    const responseTwo = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokemonTwo}`);
//    const dataTwo = await responseTwo.json();
//    console.log(dataTwo) // Shows all objects containing in pokemon number 2 payload
//    console.log(dataTwo.forms[0].name) // get the name of the pokemon

//     const responseThree = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokemonThree}`);
//     const dataThree = await responseThree.json();
//     console.log(dataThree) // Shows all objects containing in pokemon number 2 payload
//     console.log(dataThree.forms[0].name) // get the name of the pokemon
// }

// fetchPokemons()
console.log(generateNumbers(pokemonsAnswers))