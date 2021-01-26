const POKESTATS = 'POKESTATS';
import pokemon from './data.js';
import { findByUnderscoreId } from './utils.js';
/*
const pokeStats = [
    {
        _id: 2342,
        caught: 2,
        seen: 5
    }
];
*/

export function getPokeStats() { // list of seen/caught
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }

    return stats; 
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementSeen(_id) {
    const stats = getPokeStats();

    // check to see if i've seen this before
    // GO LOOK IN THE CARTS
    const poke = findByUnderscoreId(stats, _id);

    // if not initialize a new object
    if (!poke) {
        // SEARCH THROUGH ORIGINAL POKE DATA -- where the name and other data lives
        const dataPokemon = findByUnderscoreId(pokemon, _id);

        const newStat = {
            name: dataPokemon.pokebase,
            _id: _id,
            seen: 1,
            caught: 0,
        };

        stats.push(newStat);
    } else {
        // if i've seen it, increment the seen
        poke.seen++;
    }

    setPokeStats(stats);
}

export function incrementCaught(_id) {
    const stats = getPokeStats();

    // check to see if i've seen this before
    const poke = findByUnderscoreId(stats, _id);

    poke.caught++;

    setPokeStats(stats);
}