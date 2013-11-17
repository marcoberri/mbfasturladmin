Ext.define('ExtMVC.store.StatsAllCount', {
    extend: 'Ext.data.Store',
    model: 'ExtMVC.model.StatsAllCount',
    autoLoad: false,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        
        url: '/api/stats/all/count',
        reader: {
            type:'json',
            root: 'data',
        }
     
    }

});
