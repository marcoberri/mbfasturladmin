Ext.define('ExtMVC.view.dashboard.ChartPieAllTotal', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.dashboard.chartPieAllTotal',
    store: 'Dashboard.StatsAllCount',
    title: 'All Data',
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
                var store = Ext.data.StoreManager.lookup('Dashboard.StatsAllCount');
	        var total = 0;

                store.each(function(rec) {
                    total += rec.get('value');
                });

                this.setTitle(storeItem.get('label') + ': ' + Math.round(storeItem.get('value') / total * 100) + '%' + " (" + storeItem.get('value') +")");
          }
        },
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
            field: 'label',
            display: 'rotate',
            contrast: true,
            font: '10px Arial'
        }
    }]
          
});    

