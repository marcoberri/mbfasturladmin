Ext.define('ExtMVC.model.AppEvents', {
    extend: 'Ext.data.Model',
    fields: [
        '_id', 
        {name:'date', type:'string'},
        {name:'action', type:'string'},        
        {name:'result', type:'string'},        
        {name:'date', type:'string'},
	{name:'note', type:'string'},
	{name:'category', type:'string'},
	{name:'time',type:'string'}
    ],
    idProperty: '_id'
});
