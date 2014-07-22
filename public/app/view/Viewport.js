/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtMVC.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'border',
    
    requires: [
        'ExtMVC.view.urls.UrlsGrid',
        'ExtMVC.view.logs.LogsGrid',
        'ExtMVC.view.dashboard.Dashboard'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    region: 'south', 
                    height: 20,
                    html: '<div style="width:100%;text-align:center">MbfastUrl - Admin - <a href="http://tecnicume.blogspot.it" target="_blank">Marco Berri</a></div>'
                    },


                    {
                    region: 'north', 
                    height: 80,
                    xtype: 'container',
	            layout      : 'column',
		    labelAlign : 'right',
		    bodylStyle: 'background-color: transparent',
		    items: [
				{
				   xtype : 'image', src : '/images/banner.jpg', 
  				   width: 435,
			           height: 75
				},
				{
		                    xtype: 'header.userInfo', 
				 bodyStyle: 'background-color: transparent'
  				}
			]
                    },                    
                    {
                    xtype: 'tabpanel', 
                    region: 'center',

                    items: [
                       {
                        title: 'Dashboard',
                        xtype: 'dashboard'
                        },                   
                        
                       {
			
			title: 'Click',
			layout: {type: 'hbox', align: 'stretch',autoScroll:false},
				border: false,
				bodyStyle: 'background-color: transparent',
	
			items: [
				{
				 width: 520,
        			 xtype: 'urlscountgrid'
				},
				{
					layout: {type: 'vbox', align: 'stretch'},
					border: false,
					autoScroll: true,
					bodyStyle: 'background-color: transparent',
					items:[
						{xtype: 'chart.chartBarLastDayClick', height:200},
						{xtype: 'chart.chartBarLastMonthClick',  height:200},
						{

							layout: {type: 'hbox', align: 'stretch'},
							border: false,
							autoScroll: true,
							bodyStyle: 'background-color: transparent',
							items:[
							{flex:1,xtype: 'chart.chartPieLastYearClick',  height:200, width:200},
							{flex:2,xtype: 'chart.chartPieLastBrowserClick',  height:200, width:200},
							{flex:3,xtype: 'chart.chartPieLastCountryClick',  height:200, width:200}
							]

						}
					]
				}]
                	},
                        {
                        title: 'Short Url',
                        xtype: 'urlsgrid'
                        },
                        {
                        title: 'Complete Log'
                        ,xtype: 'logsgrid'
                        },
                        {
                        title: 'Stats - Site'
                        ,xtype: 'sitescountgrid'
                        },
                        {
                        title: 'Stats - Browser'
                        ,xtype: 'browserscountgrid'
                        },
                        {
                        title: 'Stats - Ip'
                        ,xtype: 'ipscountgrid'
                        },
                        {
                        title: 'System - App Events'
                        ,xtype: 'appeventsgrid'
                        }                                                                       
                               
                        
                    ]
                }
            ]
        });
                
        me.callParent(arguments);
    }
});
