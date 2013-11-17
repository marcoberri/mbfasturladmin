Ext.define('ExtMVC.store.StatsIpCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsIpCount',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/ip/count',
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
