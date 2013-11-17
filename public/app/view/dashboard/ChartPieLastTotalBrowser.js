Ext.define('ExtMVC.view.dashboard.ChartPieLastTotalBrowser', {
    extend: 'Ext.chart.Chart',
    alias : 'widget.dashboard.chartPieLastTotalBrowser',
    store: 'Dashboard.StatsBrowserCount',
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
                var store = Ext.data.StoreManager.lookup('Dashboard.StatsBrowserCount');
	        var total = 0;

                store.each(function(rec) {
                    total += rec.get('value');
                });

                this.setTitle(storeItem.get('_id') + ': ' + Math.round(storeItem.get('value') / total * 100) + '%');
          }
        },
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
            field: '_id',
            display: 'rotate',
            contrast: true,
            font: '10px Arial'
        }
    }]
          
});    

