Ext.define('ExtMVC.store.StatsUrlCountMonth', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsUrlCountMonth',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/url/month/count',
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
