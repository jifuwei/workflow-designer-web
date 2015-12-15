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
 * Define Navigation Accordion Menu For ProcessDesigner
 *
 * @author RanJi (泥鳅也是鱼)
 * @date 2014-12-09
 */
org.ranji.activiti.Accordion = Class.extend({
	accordionName: "org.ranji.activiti.Accordion",

	init: function(view){
		this.view = view;
		$('.easyui-accordion .easyui-linkbutton').draggable({
			// 代理
			proxy:function(source){
				var p = $('<div class="draggable-model-proxy"></div>');
				p.html($(source).html()).appendTo('body');
				return p;
			},
			deltaX: -5,// 拖拽元素相对于光标的位置X
			deltaY: -5,// 拖拽元素相对于光标的位置Y
			revert: true,// 设置为true,拖拽结束后元素返回起始位置
			cursor: 'pointer',// 手形
			onStartDrag: function(){
				$(this).draggable('options').cursor = "not-allowed";
			},
			onStopDrag: function(){
				$(this).draggable('options').cursor = "pointer";
			}
		});
		
		$('#'+view.id).droppable({
			accept: '.easyui-linkbutton',
			onDragEnter: function(e,source){
				$(source).draggable('options').cursor = 'move';
			},
			onDragLeave: function(e,source){
				$(source).draggable('options').cursor = 'not-allowed';
			},
			onDrop: function(e,source){
				var nodeType = $(source).attr('nodeType');// 图元类型
				console.log(nodeType);
				
				var x = $(source).draggable('proxy').offset().left;
				var y = $(source).draggable('proxy').offset().top;
				//console.log("["+x+":"+y+"]");
				
				var xOffset = view.getAbsoluteX();
				var yOffset = view.getAbsoluteY();
				//console.log("["+xOffset+":"+yOffset+"]");
				
				var scrollLeft = view.getScrollLeft();
				var scrollTop = view.getScrollTop();
				//console.log("["+scrollLeft+":"+scrollTop+"]");
				
				var shape = eval("new org.ranji.activiti."+nodeType+"()");
				//view.add(shape,x,y);
				var command = new draw2d.command.CommandAdd(view,shape,x-xOffset+scrollLeft,y-yOffset+scrollTop);
				view.getCommandStack().execute(command);// 放入堆栈，撤销或者重做
			}
		});
	}
});