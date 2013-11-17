Ext.define('ExtMVC.view.urls.UrlsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.urlsgrid',
    
    disableSelection: true,
    loadMask: true,

    initComponent: function() {

        this.store = 'Urls';

        this.columns = [
        {
            text: "_ID",
            dataIndex: '_id',
            width: 70,
            align: 'left',
            sortable: true,
            hidden:true
        },
        {
            text: "url",
            dataIndex: 'url',
            width: 500,
            align: 'left',
            sortable: true
        },
        {
            text: "protocol",
            dataIndex: 'protocol',
            width: 50,
            align: 'left',
            sortable: true
        },
        {
            text: "port",
            dataIndex: 'port',
            width: 50,
            align: 'left',
            sortable: true
        },
        {
            text: "fast",
            dataIndex: 'fast',
            width: 50,
            align: 'left',
            sortable: true
        },

        {
            text: "created",
            dataIndex: 'created',
            width: 150,
            align: 'left',
            sortable: true
        }                
        
        ];

         // paging bar on the bottom
        this.bbar = Ext.create('Ext.PagingToolbar', {
            store: this.store,
            displayInfo: true,
            displayMsg: 'Displaying {0} - {1} of {2}',
            emptyMsg: "No data to display",
            items:[
                '-'
            ]
        });

	

	
        this.callParent(arguments);
    }
 });   
