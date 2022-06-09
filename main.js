let randomPokeId = [];


let generateNumbers = () => {

while(randomPokeId.length < 3){
    let randomNumb = Math.floor(Math.random() * 100) + 1;
    if(randomPokeId.indexOf(randomNumb) === -1) randomPokeId.push(randomNumb);
}
return randomPokeId;
}


let shuffleRandomID = () => {

 let result  = randomPokeId.sort( function() { return 0.5 - Math.random() } );
 console.log(`this is result`, result)
  return result;
}


async function fetchPokeImage(){
    console.log(`img`, randomPokeId[0])
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[0]}`);
    const dataFour = await response.json();
   
    console.log(dataFour.sprites.back_default)  // Get the image of the pokemon

}

async function fetchPokemons(){
    // console.log(`fetchedPoke`,result[0])
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[0]}`);
    const data = await response.json();
    console.log(data) // Shows all objects containing in pokemon number 2 payload
    console.log(data.forms[0].name) // get the name of the pokemon
    // console.log(data.sprites.back_default)  // Get the image of the pokemon

   const responseTwo = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[1]}`);
   const dataTwo = await responseTwo.json();
   console.log(dataTwo) // Shows all objects containing in pokemon number 2 payload
   console.log(dataTwo.forms[0].name) // get the name of the pokemon

    const responseThree = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomPokeId[2]}`);
    const dataThree = await responseThree.json();
    console.log(dataThree) // Shows all objects containing in pokemon number 2 payload
    console.log(dataThree.forms[0].name) // get the name of the pokemon
}



fetchPokeImage(generateNumbers())
fetchPokemons(shuffleRandomID())
// console.log(`generated`,generateNumbers())
// console.log('shuffled',shuffleRandomID())