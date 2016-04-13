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