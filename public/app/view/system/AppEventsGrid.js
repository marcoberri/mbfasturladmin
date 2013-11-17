Ext.define('ExtMVC.view.system.AppEventsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.appeventsgrid',
    
    title : 'System - App Events',

    disableSelection: true,

    loadMask: true,

    initComponent: function() {

        this.store = 'AppEvents';

        this.columns = [
        {
            text: "Date",
            dataIndex: 'date',
            width: 180,
            align: 'left',
            sortable: true
        },        
        {
            text: "Category",
            dataIndex: 'category',
            width: 120,
            align: 'left',
            sortable: true
        },        
        {
            text: "Action",
            dataIndex: 'action',
            width: 120,
            align: 'left',
            sortable: true
        },
        {
            text: "Result",
            dataIndex: 'result',
            width: 80,
            align: 'left',
            sortable: true
        },
        {
            text: "Note",
            dataIndex: 'note',
            width: 400,
            align: 'left',
            sortable: false
        },
        {
            text: "Time",
            dataIndex: 'time',
            width: 120,
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
