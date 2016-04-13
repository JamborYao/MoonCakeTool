app.factory('columnChart', function () {
    var columnChart = {};
    columnChart.list = [];
    var data = [
          ["Element", "Density", { role: "style" }],
          ["Copper", 8.94, "#b87333"],
          ["Silver", 10.49, "silver"],
          ["Gold", 19.30, "gold"],
          ["Platinum", 21.45, "color: #e5e4e2"]
    ];
    columnChart.list = data;
    return columnChart;
});

app.factory('tableChart', function () {    
    var tableChart = {};
    var data = [
          ['Name', 'Salary', 'Full Time Employee'],
          ['Mike', { v: 10000, f: '$10,000' }, true],
          ['Jim', { v: 8000, f: '$8,000' }, false],
          ['Alice', { v: 12500, f: '$12,500' }, true],
          ['Bob', { v: 7000, f: '$7,000' }, true]
    ];
    tableChart.data = data;
    return tableChart;
});

app.factory('lineChart', function () {
    var lineChart = {};
    var data = [['X','Dogs'],
        [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
        [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
    ];
    lineChart.data = data;
    return lineChart;
});

app.factory('pieChart', function () {
    var pieChart = {};
    var data = [
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7]
    ];
    pieChart.data = data;
    return pieChart;
});