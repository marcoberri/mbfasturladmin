Ext.define('ExtMVC.view.dashboard.BarLastTotal', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.dashboard.barLastTotal',
    store: 'Dashboard.StatsSiteCount',
    animate: true,
    shadow: true,
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['value'],
        minimum: 0,
        hidden: true,
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['_id'],
        label: {
            renderer: function(v) {
                return Ext.String.ellipsis(v, 25, false);
            },
            font: '9px Arial',
            rotate: {
                degrees: 270
            }
        }
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        style: {
            fill: '#456d9f'
        },
        highlightCfg: {
            fill: '#a2b5ca'
        },
        label: {
            contrast: true,
            display: 'insideEnd',
            field: 'value',
            color: '#000',
            orientation: 'vertical',
            'text-anchor': 'middle'
        },
        xField: '_id',
        yField: ['value']
    }]        
});    

