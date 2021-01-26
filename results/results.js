var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: ['pikachu', 'charmander', 'bulbasaur'],
        datasets: [{
            label: '# of times seen',
            data: [12, 19, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        },
        {
            label: '# of times caught',
            data: [12, 19, 3],
            backgroundColor:'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 2
        }
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