Ext.define('ExtMVC.model.StatsUrlCountYear', {
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
