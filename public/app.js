Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'ExtMVC',

    paths: { 'Ext.ux': 'ux' },

    controllers: [
        'MainController'
    ],
viewConfig  : {
    loadMask: true
},

    autoCreateViewport: true
});
