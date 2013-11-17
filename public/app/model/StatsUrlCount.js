Ext.define('ExtMVC.model.StatsUrlCount', {
    extend: 'Ext.data.Model',
    fields: [
	{name: '_id'},
	{ name: '_id.fast',  type: 'string' },
	{ name : '_id.url', type: 'string' },
	{ name : 'value', type: 'int' }

    ],
    idProperty: '_id.fast'
});
