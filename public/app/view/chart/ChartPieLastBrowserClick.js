Ext.define('ExtMVC.view.chart.ChartPieLastBrowserClick', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.chart.chartPieLastBrowserClick',

    store: 'StatsUrlBrowserCount',
    animate: true,
    shadow: true,
    insetPadding: 15,
    theme: 'Base:gradients',
    series: [{
        type: 'pie',
        field: 'value',
        showInLegend: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,

          renderer: function(storeItem, item) {
                var store = Ext.data.StoreManager.lookup('StatsUrlBrowserCount');
	        var total = 0;

                store.each(function(rec) {
                    total += rec.get('value');
                });

                this.setTitle(storeItem.get('_id')[0]['browser']+ ': ' + Math.round(storeItem.get('value') / total * 100) + '%' + " (" + storeItem.get('value') +")");
          }
        },
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
            field: '_id',
        renderer: function(value) {
          return value[0]['browser'];
   	 },
            display: 'rotate',
            contrast: true,
            font: '10px Arial'
        }
    }]
          
});    



