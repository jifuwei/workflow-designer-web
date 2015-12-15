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



/**
 * Define ToolBar For ProcessDesigner
 *
 * @author RanJi (����Ҳ����)
 * @date 2014-12-09
 */
 org.ranji.activiti.ToolBar = Class.extend({
	toolBarName: 'org.ranji.activiti.ToolBar',
	/**
	 * view: ��������Ҫ�����Ļ���
	 */
	init: function(view){
		this.view = view;
		
		this.editMenu = $('#edit-menu');
		this.undoMenuItem = $('#undoButton');
		this.redoMenuItem = $('#redoButton');
		
		view.getCommandStack().addEventListener(this);
		
		this.undoMenuItem.click($.proxy(function(){
			this.view.getCommandStack().undo();
			
		},this));
		this.redoMenuItem.click($.proxy(function(){
			this.view.getCommandStack().redo();
		},this));
		
	},

	stackChanged: function(event){
		 this.disableMenuItem(this.undoMenuItem, !event.getStack().canUndo());
		 this.disableMenuItem(this.redoMenuItem, !event.getStack().canRedo());
	},
	
	disableMenuItem: function(menuItem,flag){
		if(flag){
			this.editMenu.menu('disableItem',menuItem);
		}else{
			this.editMenu.menu('enableItem',menuItem);
		}
	}
 });