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
 * Define WorkSpace's Canvas For ProcessDesigner
 *
 * @author RanJi (����Ҳ����)
 * @date 2014-12-09
 */
org.ranji.activiti.Canvas = draw2d.Canvas.extend({
	canvasName: "org.ranji.activiti.Canvas",

	init: function(id){
		this._super(id);
		this.setScrollArea("#"+id);
		this.id = id;
		
		//-- �����������м�����һ�������ڵ��ı༭����
		var MyInterceptorPolicy = draw2d.policy.canvas.ConnectionInterceptorPolicy.extend({

			init : function()
			{
				this._super();
			},

			delegateDrop: function(draggedFigure, dropTarget){
				if(draggedFigure instanceof org.ranji.activiti.UserTask && dropTarget instanceof draw2d.Connection){
					return dropTarget;
				}
				return this._super(draggedFigure, dropTarget);
			}

		});
		this.installEditPolicy(new MyInterceptorPolicy());
	}
});