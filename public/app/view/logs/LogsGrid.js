Ext.define('ExtMVC.view.logs.LogsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.logsgrid',
    
    title : 'ExtJS.com - Browse Forums',

    disableSelection: true,

    loadMask: true,

    initComponent: function() {

        this.store = 'Logs';

        this.columns = [
        {
            text: "_ID",
            dataIndex: '_id',
            width: 70,
            align: 'left',
            sortable: true,
            hidden: true
        },
        {
            text: "ip",
            dataIndex: 'ip',
            width: 90,
            align: 'left',
            sortable: true
        },
        {
            text: "fast",
            dataIndex: 'fast',
            width: 90,
            align: 'left',
            sortable: true
        },
        {
            text: "url",
            dataIndex: 'url',
            width: 200,
            align: 'left',
            sortable: true
        },
        
        
        {
            text: "created",
            dataIndex: 'created',
            width: 150,
            align: 'left',
            sortable: true
        },
        {
            text: "Agent - name",
            dataIndex: 'agent',
            renderer: function(value){
            
                if(value && value['name'])
                    return value['name'];
                
            },
            width: 150,
            align: 'left',
            sortable: true
        },        

        {
            text: "Country",
            dataIndex: 'ipSpecify',
            renderer: function(value){
            
                if(value && value['country'])
                    return value['country'];
                
            },
            width: 150,
            align: 'left',
            sortable: true
        },        
        {
            text: "City",
            dataIndex: 'ipSpecify',
            renderer: function(value){
            
                if(value && value['city'])
                    return value['city'];
                
            },
            width: 150,
            align: 'left',
            sortable: true
        },        
        
/*        {
            text: "Accept",
            dataIndex: 'headers',
            renderer: function(value){
                if(value['Accept'])
                    return value['Accept'];
                else
                    return value['accept'];
                
            },
            width: 300,
            align: 'left',
            sortable: true
        },
        {
            text: "User-Agent",
            dataIndex: 'headers',
            renderer: function(value){
                if(value['User-Agent'])
                    return value['User-Agent'];
                else
                    return value['user-agent'];
                    
            },
            width: 300,
            align: 'left',
            sortable: true
        },

        {
            text: "From",
            dataIndex: 'headers',
            renderer: function(value){
                if(value['From'])
                    return value['From'];
                else
                    return value['from'];
            },
            width: 200,
            align: 'left',
            sortable: true
        },        
        {
            text: "Via",
            dataIndex: 'headers',
            renderer: function(value){
                if(value['Via'])
                    return value['Via'];
                else
                    return value['via']
                
            },
            width: 150,
            align: 'left',
            sortable: true
        },        

        {
            text: "Connection",
            dataIndex: 'headers',
            renderer: function(value){
                return value['connection'];
            },
            width: 80,
            align: 'left',
            sortable: true
        },        
        
        {
            text: "Host",
            dataIndex: 'headers',
            renderer: function(value){
                return value['host'];
            },
            width: 150,
            align: 'left',
            sortable: true
        },
        {
            text: "X-Forwarded-Server",
            dataIndex: 'headers',
            renderer: function(value){
                return value['x-forwarded-server'];
            },
            width: 150,
            align: 'left',
            sortable: true
        },
        {
            text: "X-Forwarded-For",
            dataIndex: 'headers',
            renderer: function(value){
                return value['x-forwarded-for'];
            },
            width: 90,
            align: 'left',
            sortable: true
        },
        {
            text: "X-Forwarded-Host",
            dataIndex: 'headers',
            renderer: function(value){
                return value['x-forwarded-host'];
            },
            width: 150,
            align: 'left',
            sortable: true
        }        
  */      
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
