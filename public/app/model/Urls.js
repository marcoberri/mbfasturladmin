Ext.define('ExtMVC.model.Urls', {
    extend: 'Ext.data.Model',
    fields: [
        '_id', 
        'fast', 
        'url',
        'protocol',
        'port',
        'created'        
    ],
    idProperty: '_id'
});
