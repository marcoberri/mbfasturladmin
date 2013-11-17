Ext.define('ExtMVC.store.StatsBrowserCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsBrowserCount',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/browser/count',
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
