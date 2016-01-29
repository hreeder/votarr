var ChartJS = require('chart.js');
var React = require('react');

var PieChart = require('react-chartjs').Pie;

var ResultChart = React.createClass({
    render: function() {
        var chartData = [];
        this.props.data.forEach(function(choice){
            chartData.push({
                label: choice.choice,
                value: choice.count
            })
        });
        var chartOptions = {
            animation: false
        };
        return <PieChart data={chartData} options={chartOptions} width="600" height="250" redraw />
    }
});

module.exports = ResultChart;
