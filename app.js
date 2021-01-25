import { getRandomPokemon } from './utils.js';

// go grab three random pokemon
let pokeOne = getRandomPokemon();
let pokeTwo = getRandomPokemon();
let pokeThree = getRandomPokemon();

// check one by one to see if any of the random pokemon has the same _id as any  of the others. We do this becaise we want to guarantee unique pokemon
// while any of the pokemon are not unique, go grab three more and replace the originals. do this until we have three unique pokemon.,

while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {

    pokeOne = getRandomPokemon();
    pokeTwo = getRandomPokemon();
    pokeThree = getRandomPokemon();  
}

function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    return image;
}

const img1 = renderPokeImage(pokeOne);
const img2 = renderPokeImage(pokeTwo);
const img3 = renderPokeImage(pokeThree);

const div = document.getElementById('pokemon');

console.log(div);
div.append(img1, img2, img3);
