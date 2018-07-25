function mkDynamicPlot(containerid, plottitle, xlabel, ylabel, theseries, ymin, ymax){
        Highcharts.chart(containerid, {title:{text:plottitle}, 
                                       xAxis:{title:{text:xlabel}}, 
                                       yAxis:{title:{text:ylabel},
                                              floor:ymin,
                                              ceiling:ymax},
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalalign: 'middle'
        },

        plotoptions: {
            series: {
                label: {
                    connectorallowed: false
                },
            }
        },
    
        // for each crate, build a time-series by iterating over each run
        series:theseries,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}
