
    var getdata_2_9 = $.get('/turnover2.9');
    var getdata_2_8 = $.get('/turnover2.8');

    $.when(getdata_2_9, getdata_2_8).done(function(result1, result2) {
        console.log(result1);
        console.log(result2);
        console.log(result1[0].turnover);
        console.log(result1[0].labels);
        console.log(result2[0].turnover);
        var ctx = $('#turnover')[0];
        console.log(ctx);
        
        var turnover_data = {
            labels: result1[0].labels,
            datasets: [{
            label: 'Server 2.9 Turnover Time',
            data: result1[0].turnover,
            backgroundColor: 'transparent',
            borderColor: '#67abf5',
            borderWidth: 4,
            pointBackgroundColor: '#67abf5'
            }, {
                label: 'Server 2.8 Turnover Time',
                data: result2[0].turnover,
                backgroundColor: 'transparent',
                borderColor: '#de616d',
                borderWidth: 4,
                pointBackgroundColor: '#de616d'
            }           
        ]   
        };

        var chart_options = {
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
        };

        myChart = new Chart(ctx, {
            type: 'line',
            data: turnover_data,
            options: chart_options

        });


        // function addData() {
        //     myChart.data.datasets[0].data[7] = 100;
        //     myChart.data.labels[7] = "09/11/2018";
        //     myChart.update();
        // }

        // $("#update").on('click', addData);
    });


    function generateRandomInteger(min, max) {
        return Math.floor(min + Math.random()*(max + 1 - min))
      }

    function addData() {
        var len = myChart.data.datasets[0].data.length
        myChart.data.datasets[0].data[len] = generateRandomInteger(45, 65);
        myChart.data.datasets[1].data[len] = generateRandomInteger(45, 65);
        var d = new Date()
        var label = d.toISOString();
        myChart.data.labels[len] = label.slice(0, -5);
        myChart.update();
    }

    $("#update").on('click', addData);
    $("#stop").on('click', stopUpdate);
    id = setInterval('addData();', 5000);

    function stopUpdate() { 
        clearInterval(id);
     }
