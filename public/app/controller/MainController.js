Ext.define('ExtMVC.controller.MainController', {
    
    extend: 'Ext.app.Controller',

    stores: [
		'Urls',
		'Logs',
		'AppEvents',
		'StatsUrlCount',
		'StatsSiteCount',
		'StatsBrowserCount',
		'StatsAllCount',
		'StatsIpCount',

		'StatsUrlCountryCount',
		'StatsUrlBrowserCount',

		'StatsUrlCountMonth',
		'StatsUrlCountDay',
		'StatsUrlCountYear',

//		'Dashboard.StatsSiteCount',
//		'Dashboard.StatsAllCount',
//		'Dashboard.StatsBrowserCount',
//		'Dashboard.StatsIpCount'
	],

    models: [
		'Urls',
		'Logs',
		'AppEvents',
		'StatsUrlCount',
		'StatsSiteCount',
		'StatsAllCount',
		'StatsBrowserCount',
		'StatsIpCount',
		'StatsUrlBrowserCount',
		'StatsUrlCountryCount'
	],

    views: ['urls.UrlsGrid',
	    'logs.LogsGrid',
	    'system.AppEventsGrid',
	    'stats.UrlsCountGrid',
	    'stats.IpsCountGrid',
            'stats.SitesCountGrid',
            'stats.BrowsersCountGrid',
	
            'chart.ChartBarLastMonthClick',
            'chart.ChartBarLastYearClick',
            'chart.ChartBarLastDayClick',
	    'chart.ChartPieLastYearClick',
	    'chart.ChartPieLastYearBrowser',
	    'chart.ChartPieLastBrowserClick',
	    'chart.ChartPieLastCountryClick',

//	    'dashboard.Dashboard',
//  	    'dashboard.BarLastTotal',
//	    'dashboard.ChartPieLastTotal',
//	    'dashboard.ChartPieAllTotal',
//	    'dashboard.ChartPieLastTotalBrowser',
//	    'dashboard.ChartBarLastTotalIp',
//	    'dashboard.ListDetails',


	    'header.UserInfo'],


    init: function() {
		   this.control({

				'urlsgrid' : {
						activate: function(e) { 
							this.getUrlsStore().reload();
						}
					     }, 
				'logsgrid' : {
						activate: function(e) { 
							this.getLogsStore().reload();
						}
					     }, 
			'sitescountgrid' : {
						activate: function(e) { 
							this.getStatsSiteCountStore().reload();
						}
					     }, 

			'browserscountgrid' : {
						activate: function(e) { 
							this.getStatsBrowserCountStore().reload();
						}
					     }, 
			'ipscountgrid' : {
						activate: function(e) { 
							this.getStatsIpCountStore().reload();
						}
					     }, 

			'appeventsgrid':{
						activate: function(e) { 
							this.getAppEventsStore().reload();
						}

					},

		            'urlscountgrid': {

					  activate: function(e) {

					},

					selectionchange: function(model, records){
					   
					   this.getStatsUrlCountMonthStore().proxy.extraParams.fast = records[0].data["_id"][0]['fast'];
					   this.getStatsUrlCountMonthStore().reload();

					   this.getStatsUrlCountDayStore().proxy.extraParams.fast =records[0].data["_id"][0]['fast'];
					   this.getStatsUrlCountDayStore().proxy.extraParams.incache = false;
					   this.getStatsUrlCountDayStore().reload();					   
					   
					   this.getStatsUrlCountDayStore().reload();
					   
					   this.getStatsUrlCountYearStore().proxy.extraParams.fast =records[0].data["_id"][0]['fast'];					   
					   this.getStatsUrlCountYearStore().proxy.extraParams.incache = false;
					   this.getStatsUrlCountYearStore().reload();

					   this.getStatsUrlBrowserCountStore().proxy.extraParams.fast =records[0].data["_id"][0]['fast'];
					   this.getStatsUrlBrowserCountStore().proxy.extraParams.incache = false;					   
					   this.getStatsUrlBrowserCountStore().reload();
					   
					   this.getStatsUrlCountryCountStore().proxy.extraParams.fast =records[0].data["_id"][0]['fast'];
					   this.getStatsUrlCountryCountStore().reload();


					}

		            },
		});
	},

  

  

});
