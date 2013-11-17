Ext.define('ExtMVC.view.dashboard.ChartBarLastTotalIp', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.dashboard.chartBarLastTotalIp',
    store: 'Dashboard.StatsIpCount',
     width: 800,
        height: 600,
        animate: true,
        shadow: true,
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['value'],
            title: 'Number of Click/IP',
            grid: true,
            minimum: 0,
	   grid: true,
 	   label: {
            renderer: Ext.util.Format.numberRenderer('0'),
            }
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['_id'],
		label:{
			rotate:{degrees:270},
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
                this.setTitle('IP: ' + storeItem.get('_id') + ' - Click: ' + storeItem.get('value'));
            }
        },
            highlight: true,
            xField: '_id',
            yField: 'value'
        }]
    });
  





