Ext.define('ExtMVC.model.Logs', {
    extend: 'Ext.data.Model',
    fields: [
        '_id', 
        {name:'ip', type:'string'},
        {name:'fast', type:'string'},        
        {name:'url', type:'string'},        
        {name:'created', type:'string'},        
        {name:'headers', type:'auto'},
        {name:'ipSpecify', type:'auto'},
        {name:'agent', type:'auto'}                
    ],
    idProperty: '_id'
});
