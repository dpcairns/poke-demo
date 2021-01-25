// import functions and grab DOM elements
import pokemon from './data.js';
import { incrementCaught, incrementSeen } from './localStorageUtils.js';

let numberOfTurns = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}

export function setThreePokemon() { 
    numberOfTurns++;
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

    const img1 = renderPokeImage(pokeOne);
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree);

    incrementSeen(pokeOne._id);
    incrementSeen(pokeTwo._id);
    incrementSeen(pokeThree._id);

    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(img1, img2, img3);
}

export function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);

        if (numberOfTurns < 5) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    });

    return image;
}