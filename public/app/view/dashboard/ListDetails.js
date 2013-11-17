Ext.define('ExtMVC.view.dashboard.ListDetails', {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.dashboard.listDetails",
    config:{
        scrollable:'vertical',
	collapsible: false,
	store:'StatsAllCount',
        items:[
           { 
                xtype: "fieldset",
	        title: 'Details',
                items: [
                    {
                         xtype: 'textfield',
           		 fieldLabel: 'Field 2',
             		 name: '_id',
			 id:'id'
                    },
                    {
                         xtype: 'textfield',
           		    fieldLabel: 'Field 2',
            		    name: 'url',
			    id:'url'
                    }

                  ]
             }
        ]
    },


     launch: function() {
        var me = this;
	this.find('name','_id')[0].setValue('New value')


  }


});
