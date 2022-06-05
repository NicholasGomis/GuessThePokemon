async function getPokemon(){
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/2`);
    const data = await response.json();
    console.log(data)
}

getPokemon()