Ext.define('ExtMVC.model.StatsUrlCountMonth', {
    extend: 'Ext.data.Model',
    fields: [
        '_id',
	'_id.fast',
	'_id.url',
	'_id.time',
        'value',

    ],
    idProperty: '_id.fast'
});
