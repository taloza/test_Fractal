var data  = [5,8,7,9,8,6,3,2,1,4,5,8,9,7,8];
var max   = 12;
var nData = [];
for (var i=0; i<data.length; i++){
    nData.push(max - data[i])
}

var chart = new Highcharts.Chart({
    chart: {
        renderTo:'container',
        type:'column'
    },
    credits: {},
    exporting: {},
    legend: {},
    title: {},
    tooltip: {},
    plotOptions: {
        series: {
            stacking:'normal'
        }
    },
    xAxis: {
    },
    yAxis: {
        max:max,
        maxPadding:0,
        allowDecimals:false
    },
    series:[{
        name: 'Fill Series',
        legendIndex:1,
        color:'#ddd',
        data:nData,
        
        dataLabels: {
        formatter:function () { return (max - this.y) + '%'; },
          enabled: true,
          verticalAlign:'bottom'
          //format: '{(12-y):.1f}%'//,
          //y:'point.y'//,
          //x:'this.point.x'
        }
    },{
        name:'Data Series',
        LegendIndex:0,        
        data:data
    }]		
});
