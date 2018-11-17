document.addEventListener('DOMContentLoaded', function(){ 
	'use strict';
(function(factory) {
	if(typeof module === 'object' && module.exports) {
		module.exports = factory;
	} else {
		factory(Highcharts);
	}
}(function(Highcharts) {
	(function(H) {
		H.wrap(H.seriesTypes.column.prototype, 'translate', function(proceed) {
			const options = this.options;
			const topMargin = options.topMargin || 0;
			const bottomMargin = options.bottomMargin || 0;

			proceed.call(this);

			H.each(this.points, function(point) {
				if(options.borderRadiusTopLeft || options.borderRadiusTopRight || options.borderRadiusBottomRight || options.borderRadiusBottomLeft) {
					const w = point.shapeArgs.width;
					const h = point.shapeArgs.height;
					const x = point.shapeArgs.x;
					const y = point.shapeArgs.y;

					var radiusTopLeft = H.relativeLength(options.borderRadiusTopLeft || 0, w);
					var radiusTopRight = H.relativeLength(options.borderRadiusTopRight || 0, w);
					var radiusBottomRight = H.relativeLength(options.borderRadiusBottomRight || 0, w);
					var radiusBottomLeft = H.relativeLength(options.borderRadiusBottomLeft || 0, w);

					const maxR = Math.min(w, h) / 2

					radiusTopLeft = radiusTopLeft > maxR ? maxR : radiusTopLeft;
					radiusTopRight = radiusTopRight > maxR ? maxR : radiusTopRight;
					radiusBottomRight = radiusBottomRight > maxR ? maxR : radiusBottomRight;
					radiusBottomLeft = radiusBottomLeft > maxR ? maxR : radiusBottomLeft;

					point.dlBox = point.shapeArgs;

					point.shapeType = 'path';
					point.shapeArgs = {
						d: [
							'M', x + radiusTopLeft, y + topMargin,
							'L', x + w - radiusTopRight, y + topMargin,
							'C', x + w - radiusTopRight / 2, y, x + w, y + radiusTopRight / 2, x + w, y + radiusTopRight,
							'L', x + w, y + h - radiusBottomRight,
							'C', x + w, y + h - radiusBottomRight / 2, x + w - radiusBottomRight / 2, y + h, x + w - radiusBottomRight, y + h + bottomMargin,
							'L', x + radiusBottomLeft, y + h + bottomMargin,
							'C', x + radiusBottomLeft / 2, y + h, x, y + h - radiusBottomLeft / 2, x, y + h - radiusBottomLeft,
							'L', x, y + radiusTopLeft,
							'C', x, y + radiusTopLeft / 2, x + radiusTopLeft / 2, y, x + radiusTopLeft, y,
							'Z'
						]
					};
				}

			});
		});
	}(Highcharts));
}));


var data  = [1,8,7,9,8,6];
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
                    categories: [
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017F',
                    '2018F'                   
                    ],
                    crosshair: true
                },
                yAxis: {
                    max:max,
                    allowDecimals:false
                },
                series:[{
                    name: 'Fill Series',
                    legendIndex:1,
                    color:'#ddd',
                    data:nData,
                    borderRadiusTopLeft: 10,
                    borderRadiusTopRight: 10,
                    
                    dataLabels: {
                    formatter:function () { return (max - this.y) + '%'; },
                      enabled: true,
                      verticalAlign:'bottom'
                    }
                },{
                    name:'Data Series',
                    LegendIndex:0,        
                    data:data,
                    borderRadiusBottomLeft: 10,
                    borderRadiusBottomRight: 10
                }]		
            });





});
