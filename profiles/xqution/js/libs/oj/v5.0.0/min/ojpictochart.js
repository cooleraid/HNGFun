/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtPictoChart"],function(t,e,n,o,i){t.__registerWidget("oj.ojPictoChart",e.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{animationDuration:void 0,animationOnDataChange:"none",animationOnDisplay:"none",columnCount:null,columnWidth:null,data:null,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,items:null,layout:"horizontal",layoutOrigin:"topStart",rowCount:null,rowHeight:null,selection:[],selectionMode:"none",tooltip:{renderer:null},drill:null},_CreateDvtComponent:function(t,e,n){return i.PictoChart.newInstance(t,e,n)},_ConvertLocatorToSubId:function(t){var e=t.subId;return"oj-pictochart-item"==e?e="item["+t.index+"]":"oj-pictochart-tooltip"==e&&(e="tooltip"),e},_ConvertSubIdToLocator:function(t){var e={};return 0==t.indexOf("item")?(e.subId="oj-pictochart-item",e.index=this._GetFirstIndex(t)):"tooltip"==t&&(e.subId="oj-pictochart-tooltip"),e},_GetComponentStyleClasses:function(){var t=this._super();return t.push("oj-pictochart"),t},_GetChildStyleClasses:function(){var t=this._super();return t["oj-pictochart-item"]={path:"_defaultColor",property:"background-color"},t["oj-dvtbase oj-pictochart"]={path:"animationDuration",property:"ANIM_DUR"},t},_GetEventTypes:function(){return["optionChange"]},_HandleEvent:function(t){"drill"===t.type?this._trigger("drill",null,{id:t.id}):this._super(t)},getItem:function(t){return this._component.getAutomation().getItem(t)},getItemCount:function(){return this._component.getAutomation().getItemCount()},getContextByNode:function(t){var e=this.getSubIdByNode(t);return e&&"oj-pictochart-tooltip"!==e.subId?e:null},_GetComponentDeferredDataPaths:function(){return{root:["items","data"]}},_IsFlowingLayoutSupported:function(){return!0}}),t.CustomElementBridge.registerMetadata("oj-picto-chart","dvtBaseComponent",{properties:{animationDuration:{type:"number"},animationOnDataChange:{type:"string",enumValues:["auto","none"]},animationOnDisplay:{type:"string",enumValues:["auto","popIn","alphaFade","zoom","none"]},columnCount:{type:"number"},columnWidth:{type:"number"},drilling:{type:"string",enumValues:["on","off"]},hiddenCategories:{type:"Array<string>",writeback:!0},highlightedCategories:{type:"Array<string>",writeback:!0},highlightMatch:{type:"string",enumValues:["any","all"]},hoverBehavior:{type:"string",enumValues:["dim","none"]},hoverBehaviorDelay:{type:"number"},items:{type:"Array<object>|Promise"},layout:{type:"string",enumValues:["horizontal","vertical"]},layoutOrigin:{type:"string",enumValues:["topEnd","bottomStart","bottomEnd","topStart"]},rowCount:{type:"number"},rowHeight:{type:"number"},selection:{type:"Array<string>",writeback:!0},selectionMode:{type:"string",enumValues:["single","multiple","none"]},tooltip:{type:"object",properties:{renderer:{}}},translations:{type:"Object",properties:{componentName:{type:"string",value:"Picture Chart"},labelAndValue:{type:"string",value:"{0}: {1}"},labelClearSelection:{type:"string",value:"Clear Selection"},labelCountWithTotal:{type:"string",value:"{0} of {1}"},labelDataVisualization:{type:"string",value:"Data Visualization"},labelInvalidData:{type:"string",value:"Invalid data"},labelNoData:{type:"string",value:"No data to display"},stateCollapsed:{type:"string",value:"Collapsed"},stateDrillable:{type:"string",value:"Drillable"},stateExpanded:{type:"string",value:"Expanded"},stateHidden:{type:"string",value:"Hidden"},stateIsolated:{type:"string",value:"Isolated"},stateMaximized:{type:"string",value:"Maximized"},stateMinimized:{type:"string",value:"Minimized"},stateSelected:{type:"string",value:"Selected"},stateUnselected:{type:"string",value:"Unselected"},stateVisible:{type:"string",value:"Visible"}}}},events:{drill:{}},methods:{getContextByNode:{},getItem:{},getItemCount:{}},extension:{_WIDGET_NAME:"ojPictoChart"}}),t.CustomElementBridge.register("oj-picto-chart",{metadata:t.CustomElementBridge.getMetadata("oj-picto-chart")})});