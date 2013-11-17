Ext.define('ExtMVC.store.StatsUrlBrowserCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsUrlBrowserCount',
    pageSize: 4,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/url/browser/count',
        reader: {
            type:'json',
            root: 'data',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: '_id.time',
        direction: 'ASC'
    }]
});
