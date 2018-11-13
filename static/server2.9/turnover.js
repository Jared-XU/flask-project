var ctx = document.getElementById("turnover");
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["02/11/2018", "03/11/2018", "04/11/2018", "05/11/2018", "06/11/2018", "07/11/2018", "08/11/2018"],
    datasets: [{
    label: 'Server 2.9 Turnover Time',
    data: [47, 55, 45, 45, 53, 50, 49],
    backgroundColor: 'transparent',
    borderColor: '#67abf5',
    borderWidth: 4,
    pointBackgroundColor: '#67abf5'
    }, {
        label: 'Server 2.8 Turnover Time',
        data: [44, 58, 49, 43, 52, 59, 69],
        backgroundColor: 'transparent',
        borderColor: '#de616d',
        borderWidth: 4,
        pointBackgroundColor: '#de616d'
    }
    ]   
},
options: {
    title: {
    display: true,
    text: 'Server 2.9 Pipeline Turnover Time',
    fontSize: 22
    },
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true
        },
        scaleLabel: {
        display: true,
        labelString: "Pipeline Speed in Minutes"
        }
    }]
    },
    legend: {
    display: true,
    }
}
});