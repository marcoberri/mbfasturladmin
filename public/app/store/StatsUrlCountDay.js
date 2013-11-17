Ext.define('ExtMVC.store.StatsUrlCountDay', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsUrlCountDay',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/url/day/count',
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
