/**
 * Activiti5 Designer 0.0.1
 * 
 * Copyright (c) 2014 RanJi All rights reserved.
 * 
 * This program is free software, and you can follow the Free Software Foundation's GNU General Public License as published by the terms used to modify and redistribute the program. 
 * Or a second license, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY. 
 * Without even the implied warranty for a particular purpose. More detailed information, please refer to the GNU General Public License.
 * You should have received a copy of the GNU General Public License along with the program. If not,
 * Visit the WebSite:
 *	 Licensed under the GPL license: http://www.gnu.org/licenses/gpl.txt
 * 
 * To use it on other projects please contact me at jiran1221@163.com
 * Thanks for your using. Good Luck!
 * 
 */

/*
org.ranji.activiti.ManualTaskICON = draw2d.shape.icon.User.extend({
	NAME: "ManualTaskICON",
	
	init: function(){
		this._super();
		this.setDimension(16,16);
	}
});
*/

org.ranji.activiti.ManualTaskICON = draw2d.SetFigure.extend({
	NAME: "ManualTaskICON",
	
	
    init: function() {
		this._super();
		this.setDimension(16,16);
    },

    /**
     * @private
     * @returns
     */
    createSet : function() {
		var set = this._super();	
		
		//-- ManualTask ICON
		
		set.push(this.canvas.paper.path("M0.5,3.751l4.083-3.25c0,0,11.166,0.083,12.083,0.083s-2.417,2.917-1.5,2.917 s11.667,0,12.584,0c1.166,1.708-0.168,3.167-0.834,3.667s0.875,1.917-1,4.417c-0.75,0.25,0.75,1.875-1.333,3.333 c-1.167,0.583,0.583,1.542-1.25,2.833c-1.167,0-20.833,0.083-20.833,0.083l-2-1.333V3.751z").attr({opacity:1,fillOpacity:1,fill:"none",stroke:"#000000",strokeWidth:1}));
		set.push(this.canvas.paper.path("M 13.5 7 L 27 7").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:2}));
		set.push(this.canvas.paper.path("M 13.5 11 L 26 11").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:2}));
		set.push(this.canvas.paper.path("M 14 14.5 L 25 14.5").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		set.push(this.canvas.paper.path("M 8.2 3.1 L 15 3.1").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
			
		return set;
    }
});

org.ranji.activiti.ManualTaskText = draw2d.shape.basic.Text.extend({
	NAME: "ManualTaskText",
	
	init: function(text){
		this._super();
		this.setText(text);
		this.setFontFamily("微软雅黑");
		this.setStroke(0);
		
		this.installEditor(new draw2d.ui.LabelInplaceEditor({
		   onCommit: $.proxy(function(value){
			   //-- 更新数据
			   this.getParent().userData.name = value;
			   this.getParent().userData.id = 3;
			   
			   if(this.getWidth()>96)
				this.getParent().setWidth(this.getWidth());
			   else{
				this.getParent().setWidth(96);
			   }
			   this.getParent().setHeight(64);
		   },this),
		   onCancel: function(){
		   }
		}));
	}
});

org.ranji.activiti.ManualTask = draw2d.shape.basic.Rectangle.extend({
	NAME: "org.ranji.activiti.ManualTask",
	init: function(){
		this._super();
		
		this.setStroke(1);
		this.setDimension(96,64);
		this.setBackgroundColor(new draw2d.util.Color("#ffffcc"));
		this.setRadius(5);
		
		var manualTaskICON = new org.ranji.activiti.ManualTaskICON();
		var manualTaskText = new org.ranji.activiti.ManualTaskText("手工任务");
		
		var manualTaskICONLocation = new draw2d.layout.locator.XYRelPortLocator(5,5);
		var manualTaskTextLocation = new draw2d.layout.locator.CenterLocator();
		
		
		this.add(manualTaskICON,manualTaskICONLocation,0);
		this.add(manualTaskText,manualTaskTextLocation,1);
		
		var leftLocator = new draw2d.layout.locator.InputPortLocator();
		this.createPort("input",leftLocator);
		
		
		var rightLocator = new draw2d.layout.locator.OutputPortLocator();
		this.createPort("output",rightLocator);
		
		this.userData = {name:"手工任务"};
	},
	
	 /**
     *
     *  Called if the user drop this element onto the dropTarget. 
     * 
     *  will create a "smart insert" of an existing connection.
     * 	COOL and fast network editing.
     * 
     * @param {draw2d.Figure} dropTarget The drop target.
     * @param {Number} x the x coordinate of the drop
     * @param {Number} y the y coordinate of the drop
     * @param {Boolean} shiftKey true if the shift key has been pressed during this event
     * @param {Boolean} ctrlKey true if the ctrl key has been pressed during the event
     * @private
     **/
	onDrop: function(dropTarget,x,y,shiftKey,ctrlKey){
		// Activate a "smart insert" If the user drop this figure on connection
    	if(dropTarget instanceof draw2d.Connection){
		
			var oldSource = dropTarget.getSource();
			
			dropTarget.setSource(this.getOutputPort(0));
			
			
			//var additionalConnection = draw2d.Connection.createConnection();
			//this.getCanvas().add(additionalConnection);
			
			//additionalConnection.setSource(oldSource);
			//additionalConnection.setTarget(this.getInputPort(0));
			
			var cmd = new draw2d.command.CommandConnect(this.getCanvas(),oldSource,this.getInputPort(0));
			this.getCanvas().getCommandStack().execute(cmd);
			
    	}
	},
	
	onContextMenu:function(x,y){
		 $.contextMenu({
            selector: "body", 
            events:
            {  
               hide:function(){ $.contextMenu( 'destroy' ); }
            },
            callback: $.proxy(function(key, options) 
            {
               switch(key){
               case "red":
                   //this.setColor('#f3546a');
				   this.openPropertiesPanel();
                   break;
               case "green":
                   this.setColor('#b9dd69');
                   break;
               case "blue":
                   this.setColor('#00A8F0');
                   break;
               case "delete":
                   // without undo/redo support
              //     this.getCanvas().remove(this);
                   
                   // with undo/redo support
                   var cmd = new draw2d.command.CommandDelete(this);
                   this.getCanvas().getCommandStack().execute(cmd);
               default:
                   break;
               }
            
            },this),
            x:x,
            y:y,
            items: 
            {
                "red":    {name: "Red", icon: "edit"},
                "green":  {name: "Green", icon: "cut"},
                "blue":   {name: "Blue", icon: "copy"},
                "sep1":   "---------",
                "delete": {name: "Delete", icon: "delete"}
            }
        });
	},

	openPropertiesPanel: function(){
		var eastPanel = $("#bpm-layout").layout('panel','east');
		if(eastPanel.panel('options').collapsed)
			$("#bpm-layout").layout('expand','east');
		eastPanel.panel('refresh','properties/manualTaskProperties.html');
	},
	
	toXML: function(){
		return '<manualTask id="'+this.userData.id+'" name="'+this.userData.name+'" activiti:assignee="${applyUserID}">'
		+'</manualTask>';
	}
	
});









