Ext.define('ExtMVC.view.dashboard.Dashboard' ,{
    extend: 'Ext.form.Panel',
    alias : 'widget.dashboard',
    title : 'Dashboard',
    loadMask: true,
	layout: {
	    type: 'table',
	    columns: 3
	},

    items: [
    
        {
            height: 300,
            width: 300,
            layout: 'fit',
            margin: '5 5 5 5',
            padding: '5 5 5 5'//,
            //items: [{ xtype: 'dashboard.barDayClick'}]
        },
/*        {
            height: 300,
            width: 300,
            layout: 'fit',
            margin: '5 5 5 5',
            padding: '5 5 5 5',
            items: [{ xtype: 'dashboard.chartPieLastTotalBrowser'}]
        },
        {
            height: 300,
            width: 300,
            layout: 'fit',
            margin: '5 5 5 5',
            padding: '5 5 5 5',
            items: [{ xtype: 'dashboard.chartBarLastTotalIp'}]
        },
        {
            height: 300,
            width: 300,
            layout: 'fit',
            margin: '5 5 5 5',
            padding: '5 5 5 5',
            items: [{ xtype: 'dashboard.chartPieAllTotal'}]
        },*/
      /*  {
            height: 200,
            width: 200,
            layout: 'fit',
            margin: '5 5 5 5',
            padding: '5 5 25 25',
            items: [{ xtype: 'dashboard.listDetails'}]
        }*/

],

    initComponent: function() {

        this.callParent(arguments);
    }
 });   
