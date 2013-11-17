Ext.define('ExtMVC.view.stats.UrlsCountGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.urlscountgrid',
    
    disableSelection: false,
    loadMask: true,
    
    initComponent: function() {

        this.store = 'StatsUrlCount';
        this.columns = [

        {
            text: "Url",
            dataIndex: '_id',
            width: 400,
            align: 'left',
            sortable: true,
            renderer: function (value, cell, doc, idx) {	
		return value[0].url;
		}
        }, 
        {
            text: "Fast",
            dataIndex: '_id',
            width: 50,
            align: 'left',
            renderer: function (value, cell, doc, idx) {	
		return value[0].fast;
		}
        },        
        {
            text: "Click",
            dataIndex: 'value',
            width: 50,
            align: 'left',
            sortable: true
        }
        ];

         // paging bar on the bottom
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: this.store,
            displayInfo: true,
            displayMsg: 'Page {0} - {1} of {2}',
            emptyMsg: "No data to display",
            items:[
                '-'
            ]
        });



        this.callParent(arguments);
    }
 });   
