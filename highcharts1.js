document.addEventListener('DOMContentLoaded', function(){ 
'use strict';
var chartColumnRoundRadius = 5;
var data  = [1,8,7,9,8,6];
            var max   = 12;
            var nData = [];
            for (var i=0; i<data.length; i++){
                nData.push(max - data[i])
            }
           
            var chart = new Highcharts.Chart({
                chart: {
                    renderTo:'container1',
                    type:'column'
                },
                credits: {},
                exporting: {},
                legend: {enabled:false},
                title: {text:''},
                tooltip: {enabled: false },
                plotOptions: {                    
                    series: {                        
                        stacking:'normal'
                    }
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
                    crosshair: true
                },
                yAxis: {
                    max:max,
                    tickInterval:max/2,
                    allowDecimals:false
                },
                series:[{
                    name: 'Fill Series',
                    legendIndex:1,
                    color:'#ecf0f7',
                    data:nData,
                    borderRadiusTopLeft: chartColumnRoundRadius,
                    borderRadiusTopRight: chartColumnRoundRadius,
                    
                    dataLabels: {
                    formatter:function () { return (max - this.y) + '%'; },
                      enabled: true,
                      verticalAlign:'bottom'
                    }
                },{
                    name:'Data Series',
                    LegendIndex:0,  
                    color:'#44b3c2',      
                    data:data,
                    borderRadiusBottomLeft: chartColumnRoundRadius,
                    borderRadiusBottomRight: chartColumnRoundRadius
                }]		
            });





});
