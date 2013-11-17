Ext.define('ExtMVC.store.StatsUrlCountryCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsUrlCountryCount',
    pageSize: 4,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/url/country/count',
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
