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
org.ranji.activiti.UserTaskICON = draw2d.shape.icon.User.extend({
	NAME: "UserTaskICON",
	
	init: function(){
		this._super();
		this.setDimension(16,16);
	}
});
*/

org.ranji.activiti.UserTaskICON = draw2d.SetFigure.extend({
	NAME: "UserTaskICON",
	
	
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
		
		//-- UserTask ICON
		
        set.push(this.canvas.paper.path("M0.585,24.167h24.083v-7.833c0,0-2.333-3.917-7.083-5.167h-9.25 c-4.417,1.333-7.833,5.75-7.833,5.75L0.585,24.167z").attr({opacity:1,fill:"#F4F6F7",stroke:"#000000"}));
		set.push(this.canvas.paper.path("M 6 20 L 6 24").attr({opacity:1,fill:"none",stroke:"#000000"}));
		set.push(this.canvas.paper.path("M 20 20 L 20 24").attr({opacity:1,fill:"none",stroke:"#000000"}));
		set.push(this.canvas.paper.circle(13.002,5.916,5.417).attr({fill:"#000000",stroke:"#000000"}));
		set.push(this.canvas.paper.path("M8.043,7.083c0,0,2.814-2.426,5.376-1.807s4.624-0.693,4.624-0.693 c0.25,1.688,0.042,3.75-1.458,5.584c0,0,1.083,0.75,1.083,1.5s0.125,1.875-1,3s-5.5,1.25-6.75,0S8.668,12.834,8.668,12 s0.583-1.25,1.25-1.917C8.835,9.5,7.419,7.708,8.043,7.083z").attr({opacity:1,fill:"#F0EFF0",stroke:"#000000"}));
		
		
		//-- ScriptTask ICON
		
		// set.push(this.canvas.paper.path("M6.402,0.5h14.5c0,0-5.833,2.833-5.833,5.583s4.417,6,4.417,9.167 s-4.167,5.083-4.167,5.083H0.235c0,0,5-2.667,5-5s-4.583-6.75-4.583-9.25S6.402,0.5,6.402,0.5z").attr({opacity:1,fill:"none",stroke:"#000000"}));
		// set.push(this.canvas.paper.path("M 3.5 4.5 L 13.5 4.5").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		// set.push(this.canvas.paper.path("M 3.8 8.5 L 13.8 8.5").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		// set.push(this.canvas.paper.path("M 6.3 12.5 L 16.3 12.5").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		// set.push(this.canvas.paper.path("M 6.5 16.5 L 16.5 16.5").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		
		
		//-- ManualTask ICON
		/*
		set.push(this.canvas.paper.path("M0.5,3.751l4.083-3.25c0,0,11.166,0.083,12.083,0.083s-2.417,2.917-1.5,2.917 s11.667,0,12.584,0c1.166,1.708-0.168,3.167-0.834,3.667s0.875,1.917-1,4.417c-0.75,0.25,0.75,1.875-1.333,3.333 c-1.167,0.583,0.583,1.542-1.25,2.833c-1.167,0-20.833,0.083-20.833,0.083l-2-1.333V3.751z").attr({opacity:1,fillOpacity:1,fill:"none",stroke:"#000000",strokeWidth:1}));
		set.push(this.canvas.paper.path("M 13.5 7 L 27 7").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:2}));
		set.push(this.canvas.paper.path("M 13.5 11 L 26 11").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:2}));
		set.push(this.canvas.paper.path("M 14 14.5 L 25 14.5").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		set.push(this.canvas.paper.path("M 8.2 3.1 L 15 3.1").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		*/
		
		//-- ServiceTask ICON
		/*
		set.push(this.canvas.paper.path("M26.974,16.514l3.765-1.991c-0.074-0.738-0.217-1.454-0.396-2.157l-4.182-0.579c-0.362-0.872-0.84-1.681-1.402-2.423l1.594-3.921c-0.524-0.511-1.09-0.977-1.686-1.406l-3.551,2.229c-0.833-0.438-1.73-0.77-2.672-0.984l-1.283-3.976c-0.364-0.027-0.728-0.056-1.099-0.056s-0.734,0.028-1.099,0.056l-1.271,3.941c-0.967,0.207-1.884,0.543-2.738,0.986L7.458,4.037C6.863,4.466,6.297,4.932,5.773,5.443l1.55,3.812c-0.604,0.775-1.11,1.629-1.49,2.55l-4.05,0.56c-0.178,0.703-0.322,1.418-0.395,2.157l3.635,1.923c0.041,1.013,0.209,1.994,0.506,2.918l-2.742,3.032c0.319,0.661,0.674,1.303,1.085,1.905l4.037-0.867c0.662,0.72,1.416,1.351,2.248,1.873l-0.153,4.131c0.663,0.299,1.352,0.549,2.062,0.749l2.554-3.283C15.073,26.961,15.532,27,16,27c0.507,0,1.003-0.046,1.491-0.113l2.567,3.301c0.711-0.2,1.399-0.45,2.062-0.749l-0.156-4.205c0.793-0.513,1.512-1.127,2.146-1.821l4.142,0.889c0.411-0.602,0.766-1.243,1.085-1.905l-2.831-3.131C26.778,18.391,26.93,17.467,26.974,16.514zM20.717,21.297l-1.785,1.162l-1.098-1.687c-0.571,0.22-1.186,0.353-1.834,0.353c-2.831,0-5.125-2.295-5.125-5.125c0-2.831,2.294-5.125,5.125-5.125c2.83,0,5.125,2.294,5.125,5.125c0,1.414-0.573,2.693-1.499,3.621L20.717,21.297z").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		*/
		
		//-- ReceiveTask ICON
		//set.push(this.canvas.paper.path("M0,3 L0,13 L16,13 L16,3z M0,3 L8,9 L16,3").attr({fill:"none",stroke:"#000000",strokeWidth:1}));
		
		//-- BussinessRuleTask ICON
		/*
		set.push(this.canvas.paper.rect(0,0,22,4).attr({opacity:1,fill:"#B3B1B3",fillOpacity:1,stroke:"#000000"}));
		set.push(this.canvas.paper.rect(0,4,22,12).attr({opacity:1,fill:"none",stroke:"#000000"}));
		set.push(this.canvas.paper.path("M 0 10 L 22 10").attr({opacity:1,fill:"none",stroke:"#000000"}));
		set.push(this.canvas.paper.path("M 7 4 L 7 16").attr({opacity:1,fill:"none",stroke:"#000000"}));
		*/
		//set.push(this.canvas.paper.path("").attr({opacity:1,fill:"none",stroke:"#000000",strokeWidth:1.5}));
		
		return set;
    }
});

org.ranji.activiti.UserTaskText = draw2d.shape.basic.Text.extend({
	NAME: "UserTaskText",
	
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

org.ranji.activiti.UserTask = draw2d.shape.basic.Rectangle.extend({
	NAME: "org.ranji.activiti.UserTask",
	init: function(){
		this._super();
		
		this.setStroke(1);
		this.setDimension(96,64);
		this.setBackgroundColor(new draw2d.util.Color("#ffffcc"));
		this.setRadius(5);
		
		var userTaskICON = new org.ranji.activiti.UserTaskICON();
		var userTaskText = new org.ranji.activiti.UserTaskText("人工任务");
		
		var userTaskICONLocation = new draw2d.layout.locator.XYRelPortLocator(5,5);
		var userTaskTextLocation = new draw2d.layout.locator.CenterLocator();
		
		
		this.add(userTaskICON,userTaskICONLocation,0);
		this.add(userTaskText,userTaskTextLocation,1);
		
		var leftLocator = new draw2d.layout.locator.InputPortLocator();
		this.createPort("input",leftLocator);
		
		
		var rightLocator = new draw2d.layout.locator.OutputPortLocator();
		this.createPort("output",rightLocator);
		
		this.userData = {name:"人工任务"};
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
		eastPanel.panel('refresh','properties/userTaskProperties.html');
	},
	
	toXML: function(){
		return '<userTask id="'+this.userData.id+'" name="'+this.userData.name+'" activiti:assignee="${applyUserID}">'
		+'</userTask>';
	}
	
});









