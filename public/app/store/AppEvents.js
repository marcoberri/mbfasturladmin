Ext.define('ExtMVC.store.AppEvents', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.AppEvents',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/system/appevents',
        reader: {
            type:'json',
            root: 'data',
            totalProperty: 'totalCount'
        },
        simpleSortMode: true
    },
    sorters: [{
        property: 'date',
        direction: 'ASC'
    }]
});
