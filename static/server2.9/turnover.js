var ctx = document.getElementById("turnover");
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["02/11/2018", "03/11/2018", "04/11/2018", "05/11/2018", "06/11/2018", "07/11/2018", "08/11/2018"],
    datasets: [{
    label: 'Turnover Time',
    data: [47, 55, 45, 45, 53, 50, 49],
    backgroundColor: 'transparent',
    borderColor: '#007bff',
    borderWidth: 4,
    pointBackgroundColor: '#007bff'
    }]
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
    display: false,
    position: 'right'
    }
}
});