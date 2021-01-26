import { getPokeStats } from '../localStorageUtils.js';
var ctx = document.getElementById('myChart').getContext('2d');

const pokeStats = getPokeStats();

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: ['pikachu', 'charmander', 'bulbasaur'], // LABELS ARRAY GOES HERE
        datasets: [
            {
                label: '# of times seen',
                data: [12, 19, 3], // DATA ARRAY GOES HERE
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2
            },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});