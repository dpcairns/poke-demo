// import functions and grab DOM elements
import pokemon from './data.js';

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}