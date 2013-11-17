Ext.define('ExtMVC.store.Logs', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Logs',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/logs',
        reader: {
            type:'json',
            root: 'data',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: 'url',
        direction: 'DESC'
    }]
});
