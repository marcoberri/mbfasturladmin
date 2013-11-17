Ext.define('ExtMVC.model.StatsUrlCountDay', {
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
