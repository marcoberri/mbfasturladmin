Ext.define('ExtMVC.model.StatsUrlBrowserCount', {
    extend: 'Ext.data.Model',
    fields: [

        '_id',
	'_id.fast',
	'_id.url',
	'_id.browser',
        'value',
    ],
    idProperty: '_id.fast'
});
