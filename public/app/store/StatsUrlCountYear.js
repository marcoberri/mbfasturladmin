Ext.define('ExtMVC.store.StatsUrlCountYear', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsUrlCountYear',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/url/year/count',
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
