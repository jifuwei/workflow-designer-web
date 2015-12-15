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

//-- declare the namespace for this app
if(typeof org == "undefined")
	var org = {};
org.ranji = {};
org.ranji.activiti = {};

/**
 *
 *	Init App Layout
 *	
 *	@author RanJi
 *  @date 2014-12-03
 */
org.ranji.activiti.Application = Class.extend({
	appName: "org.ranji.activiti.Application",
	/**
	 * @constructor
	 * 
	 * @param Option param {String} canvasID the id of the DOM element to use as paint container.
	 */
	init: function(canvasID){
		//-- 1. activiti-designer的画布
		this.canvas = new org.ranji.activiti.Canvas('activitiCanvas');
		
		//-- 2. activiti-designer的连接器(全局)
		draw2d.Connection.createConnection = this.createConnection;
		
		//-- 3. activiti-designer的手风琴导航菜单
		this.accordion = new org.ranji.activiti.Accordion(this.canvas);
		
		//-- 4. activiti-designer的工具条
		this.toolbar = new org.ranji.activiti.ToolBar(this.canvas);
		
	},
	
	loadFigure: function(){
		this.canvas.clear();
	
		this.canvas.add(new org.ranji.activiti.Start(),200,80);
		// this.canvas.add(new org.ranji.activiti.End(),350,250);
		
		
	},	
	createConnection: function(sourcePort, targetPort){
		//-- 1. 连接
		//var conn = new draw2d.Connection();
		var conn = new draw2d.Connection(new draw2d.policy.line.VertexSelectionFeedbackPolicy());
		conn.setStroke(1);
		
		//-- 2. 设置连接的锚
		var targetDecorator = new draw2d.decoration.connection.ArrowDecorator(12,12);
		targetDecorator.setBackgroundColor("#000000");
		conn.setTargetDecorator(targetDecorator);
		
		//-- 3. 设置路由
	    conn.setRouter(new draw2d.layout.connection.VertexRouter());
		//conn.setRouter(new draw2d.layout.connection.InteractiveManhattanConnectionRouter());
		
		conn.installEditPolicy(new draw2d.policy.line.VertexSelectionFeedbackPolicy());
		
	    return conn;
	}
});