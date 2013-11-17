Ext.define('ExtMVC.store.StatsUrlCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsUrlCount',
    pageSize: 40,
    autoLoad: true,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/url/count',
        reader: {
            type:'json',
            root: 'data',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: 'value',
        direction: 'ASC'
    }]
});
