var ctx = document.getElementById("failrate");
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["02/11/2018", "03/11/2018", "04/11/2018", "05/11/2018", "06/11/2018", "07/11/2018", "08/11/2018"],
    datasets: [{
    label: 'Server 2.9 Fail Rate',
    data: [20, 21, 19, 34, 17, 45, 22],
    backgroundColor: 'transparent',
    lineTension: 0,
    borderColor: '#fd7e14',
    borderWidth: 4,
    pointBackgroundColor: '#fd7e14'
    }, {
        label: 'Server 2.8 Fail Rate',
        data: [22, 25, 23, 38, 32, 42, 25],
        backgroundColor: 'transparent',
        lineTension: 0,
        borderColor: '#20c997',
        borderWidth: 4,
        pointBackgroundColor: '#20c997'
    }
    ]
},
options: {
    title: {
    display: true,
    text: 'Server 2.9 Pipeline Fail Rate',
    fontSize: 22
    },
    scales: {
    yAxes: [{
        ticks: {
        min: 0,
        max: 100,
        beginAtZero: false,
        stepSize: 20,
        callback: function (value) {
            return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
        },
        },
        scaleLabel: {
        display: true,
        labelString: 'Daily Fail Rate %',
        },
    }]
    },
    legend: {
        display: true,
        
    }
}
});  