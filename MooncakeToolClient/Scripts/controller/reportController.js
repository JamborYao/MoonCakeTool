controllers.controller('reportController', ['$scope', '$routeParams', 'columnChart', 'tableChart', 'lineChart', 'pieChart', function ($scope, $routeParams, columnChart, tableChart, lineChart, pieChart) {
    //load chart
    google.charts.load("current", { packages: ['corechart', 'table', 'line', 'corechart'] });
    //column chart    
    //google.charts.setOnLoadCallback(drawColumnChart);
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        drawColumnChart();
        drawTableChart();
        drawLineChart();
        drawPieChart();
    }
    function drawColumnChart() {
        var data = google.visualization.arrayToDataTable(columnChart.list);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         {
                             calc: "stringify",
                             sourceColumn: 1,
                             type: "string",
                             role: "annotation"
                         },
                         2]);

        var options = {
            title: "Density of Precious Metals, in g/cm^3",
            width: 600,
            height: 400,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("column_chart"));
        chart.draw(view, options);
    }

    //table chart   
    //google.charts.setOnLoadCallback(drawTableChart);

    function drawTableChart() {
        var data = new google.visualization.DataTable();
        var data =google.visualization.arrayToDataTable(tableChart.data);
        //var data = new google.visualization.DataTable();
        //data.addColumn('string', 'Name');
        //data.addColumn('number', 'Salary');
        //data.addColumn('boolean', 'Full Time Employee');
        //data.addRows([
        //  ['Mike', { v: 10000, f: '$10,000' }, true],
        //  ['Jim', { v: 8000, f: '$8,000' }, false],
        //  ['Alice', { v: 12500, f: '$12,500' }, true],
        //  ['Bob', { v: 7000, f: '$7,000' }, true]
        //]);
        var table = new google.visualization.Table(document.getElementById('table_chart'));

        table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
    }

    //line chart
    //google.charts.setOnLoadCallback(drawLineChart);
    function drawLineChart() {
        var data = google.visualization.arrayToDataTable(lineChart.data);
        var options = {
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Popularity'
            }
        };

        var chart = new google.visualization.LineChart(document.getElementById('line_Chart'));

        chart.draw(data, options);
    }

    //pie chart
    //google.charts.setOnLoadCallback(drawPieChart);
    function drawPieChart() {
        var data = google.visualization.arrayToDataTable(pieChart.data);

        var options = {
            title: 'My Daily Activities',
            width: '100%',
            height:'100%',
            is3D: true,
        };
        var chart = new google.visualization.PieChart(document.getElementById('pie_Chart'));
        chart.draw(data, options);
    }
}]);