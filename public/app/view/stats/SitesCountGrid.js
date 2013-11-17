Ext.define('ExtMVC.view.stats.SitesCountGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.sitescountgrid',

    disableSelection: true,

    loadMask: true,

    initComponent: function() {

        this.store = 'StatsSiteCount';

        this.columns = [
        {
            text: "Url",
            dataIndex: '_id',
            width: 400,
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
