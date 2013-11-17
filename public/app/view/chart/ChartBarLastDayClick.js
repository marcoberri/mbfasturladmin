Ext.define('ExtMVC.view.chart.ChartBarLastDayClick', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.chart.chartBarLastDayClick',
    store: 'StatsUrlCountDay',
     width: 800,
        height: 600,
        animate: true,
        shadow: true,
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['value'],
            title: 'Click',
            grid: true,
            minimum: 0,
	   grid: true,
 	   label: {
            renderer: Ext.util.Format.numberRenderer('0'),
            }
        }, {
            type: 'Category',
	    title: 'Day',
            position: 'bottom',
            fields: ['_id'],
            label:{
  	        renderer: function(value) {
	          return value[0]['time'];
	        },
		rotate:{degrees:270}
            }
        }],
        series: [{
            type: 'column',
            axis: 'bottom',
	  highlight: true,
        tips: {
            trackMouse: true,
            width: 180,
            height: 28,
            renderer: function(storeItem, item) {
                this.setTitle('Period : ' + storeItem.get('_id')[0]['time'] + ' - Click: ' + storeItem.get('value'));
            }
        },
            highlight: true,
            xField: 'time',
            yField: 'value'
        }]
    });
  





