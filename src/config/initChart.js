const configChart = (chart) => {
    return {
        chart: {
            animation: {
                duration: 1000
            },
            marginRight: 100
        },
        title: {
            text: 'COVID CASES',
            align: 'center'
        },
        subtitle: {
            useHTML: true,
            text: "",
            floating: true,
            align: 'right',
            verticalAlign: 'middle',
            y: -20,
            x: -100
        },
        legend: {
            enabled: false
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            visible: false,
            opposite: true,
            tickPixelInterval: 150,
            title: {
                text: null
            }
        },
        plotOptions: {
            series: {
                animation: true,
                groupPadding: 0,
                pointPadding: 0.1,
                borderWidth: 0,
                colorByPoint: true,
                dataSorting: {
                    enabled: true,
                    matchByName: true
                },
                type: 'bar',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [
            {
                type: 'bar',
                data: chart
            }
        ],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 550
                },
                chartOptions: {
                    xAxis: {
                        visible: true
                    },
                    subtitle: {
                        x: 0
                    },
                    plotOptions: {
                        series: {
                            dataLabels: [{
                                enabled: false,
                                y: 8
                            }, {
                                enabled: false,
                                format: '{point.name}',
                                y: -8,
                                style: {
                                    fontWeight: 'normal',
                                    opacity: 0.7
                                }
                            }]
                        }
                    }
                }
            }]
        }
    }
}


export default configChart