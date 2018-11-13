var ctx = document.getElementById("failperc");
var myChart = new Chart(ctx, {
type: 'pie',
data: {
    labels: ["Failure", "Success" ],
    datasets: [{
    label: 'Global Fail Rate',
    data: [39, 61],
    backgroundColor: [
            "red",
            "green"
    ],
    borderColor: [
            "red",
            "green",
    ],
    }]
},
options: {
    title: {
    display: true,
    text: 'Global 2.9 Pipeline Fail Percentage',
    fontSize: 22
    },
    legend: {
    display: false,
    position: 'right'
    }
}
}); 

var ctx = document.getElementById("failperc2");
var myChart = new Chart(ctx, {
type: 'pie',
data: {
    labels: ["Failure", "Success" ],
    datasets: [{
    label: 'Global Fail Rate',
    data: [45, 55],
    backgroundColor: [
            "red",
            "green"
    ],
    borderColor: [
            "red",
            "green",
    ],
    }]
},
options: {
    title: {
    display: true,
    text: 'Global 2.8 Pipeline Fail Percentage',
    fontSize: 22
    },
    legend: {
    display: false,
    position: 'right'
    }
}
}); 