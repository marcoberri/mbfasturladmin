Ext.define('ExtMVC.store.StatsSiteCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsSiteCount',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/site/count',
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
