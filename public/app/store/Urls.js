Ext.define('ExtMVC.store.Urls', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.Urls',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        url: '/api/urls',
        reader: {
            type:'json',
            root: 'data',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: 'fast',
        direction: 'DESC'
    }]
});
