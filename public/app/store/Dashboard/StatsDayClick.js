Ext.define('ExtMVC.store.dashboard.StatsDayClick', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsDayClick',
    pageSize: 40,
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/click/day/count',
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
