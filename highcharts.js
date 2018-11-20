document.addEventListener('DOMContentLoaded', function(){ 
'use strict';
var chartColumnRoundRadius = 5;
var data  = [0.06, 0.07, 0.08, 0.09, 1.12, 1.25];
            var max = 1.5;
            var invertedData = [];   
            
        //calculate max
        for (var i=0; i<data.length; i++){
            if(data[i] > max)
            max = data[i];          
        }
        max =  Math.ceil(max);  //just for chart design :)
        
        //generate inverted chart data
        for (var i=0; i<data.length; i++){
            invertedData.push(max - data[i]);               
        }
        
        createChart(data, invertedData,'container');
        createChart(data, invertedData,'container2');

        function createChart(data, invertedData, containerId)
        {
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo:containerId,
                    type:'column'
                },
                legend: {enabled:false},
                title: {text:''},
                
                plotOptions: {                    
                    series: {stacking:'normal' }
                },
                xAxis: {
                    minorTickLength: 0,
                    categories: [
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017F',
                    '2018F'                   
                    ],
                    title: {text:''},                        
                },
                yAxis: {
                    max:max,
                    tickInterval:max/2,                       
                },

                series:[{
                    name: 'Fill Series',                        
                    color:'#ecf0f7',
                    data:invertedData,
                    borderRadiusTopLeft: chartColumnRoundRadius,
                    borderRadiusTopRight: chartColumnRoundRadius,                        
                    dataLabels: {
                        formatter:function () { return (max - (this.y)).toFixed(2)},
                        enabled: true,
                        verticalAlign:'bottom'
                    }
                },{
                    name:'Data Series',    
                    style: {
                            fontWeight: 'bold'
                        },
                    LegendIndex:0,  
                    color:'#44b3c2',      
                    data,
                    borderRadiusBottomLeft: chartColumnRoundRadius,
                    borderRadiusBottomRight: chartColumnRoundRadius
                }]		
            });
        }

});
