Ext.define('ExtMVC.view.stats.IpsCountGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.ipscountgrid',
    
    title : 'Stast - IP Count',

    disableSelection: true,

    loadMask: true,

    initComponent: function() {

        this.store = 'StatsIpCount';

        this.columns = [
        {
            text: "Ip",
            dataIndex: '_id',
            width: 500,
            align: 'left',
            sortable: true
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
            displayMsg: 'Displaying {0} - {1} of {2}',
            emptyMsg: "No data to display",
            items:[
                '-'
            ]
        });

        this.callParent(arguments);
    }
 });   
