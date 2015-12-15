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

org.ranji.activiti.End = draw2d.shape.basic.Circle.extend({
	NAME: "org.ranji.activiti.End",
	init: function(){
		this._super();
		
		this.setStroke(3);
		this.setRadius(14);
		this.setBackgroundColor(new draw2d.util.Color("#ffffff"));
		
		var leftLocator = new draw2d.layout.locator.InputPortLocator();
		this.createPort("input",leftLocator);
		
		//this.getInputPort(0).setAlpha(0);
	}
});