Ext.define('ExtMVC.model.StatsUrlCountryCount', {
    extend: 'Ext.data.Model',
    fields: [

        '_id',
	'_id.fast',
	'_id.url',
	'_id.country',
	'_id.countryIso',
        'value',
    ],
    idProperty: '_id.fast'
});
