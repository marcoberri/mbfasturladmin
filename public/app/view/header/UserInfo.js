Ext.define('ExtMVC.view.header.UserInfo', {
    extend: "Ext.form.Panel",
    alias: "widget.header.userInfo",

    config:{
	collapsible: false,
        items:[{
		xtype: 'component',
		width:'100%',
		align:'right',
		autoEl: {
		        tag: 'a',
		        href: '/logout',
		        html: 'Esci'
		    }
		} 
	       ]
    }});
