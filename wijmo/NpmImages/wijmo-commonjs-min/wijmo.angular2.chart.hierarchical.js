﻿/*
    *
    * Wijmo Library 5.20171.293
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
"use strict";
var __extends=this && this.__extends || function()
{
var extendStatics=Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d, b)
{
d.__proto__ = b
} || function(d, b)
{
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p])
};
return function(d, b)
{
function __()
{
this.constructor = d
}
extendStatics(d, b);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
}
}(),
WjSunburst,
moduleExports,
WjChartHierarchicalModule;
Object.defineProperty(exports, "__esModule", {value: !0});
var wjcChartHierarchical=require("wijmo/wijmo.chart.hierarchical"),
core_1=require("@angular/core"),
core_2=require("@angular/core"),
core_3=require("@angular/core"),
common_1=require("@angular/common"),
forms_1=require("@angular/forms"),
wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase");
exports.wjSunburstMeta = {
selector: 'wj-sunburst', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'binding', 'footer', 'header', 'selectionMode', 'palette', 'plotMargin', 'footerStyle', 'headerStyle', 'tooltipContent', 'itemsSource', 'bindingName', 'innerRadius', 'isAnimated', 'offset', 'reversed', 'startAngle', 'selectedItemPosition', 'selectedItemOffset', 'itemFormatter', 'labelContent', 'childItemsPath', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'renderingNg: rendering', 'renderedNg: rendered', 'selectionChangedNg: selectionChanged', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjSunburst = function(_super)
{
function WjSunburst(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.renderingNg = new core_1.EventEmitter(!1), _this.renderedNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjSunburst, _super), WjSunburst.prototype.created = function(){}, WjSunburst.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjSunburst.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjSunburst.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, Object.defineProperty(WjSunburst.prototype, "tooltipContent", {
get: function()
{
return this.tooltip.content
}, set: function(value)
{
this.tooltip.content = value
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjSunburst.prototype, "labelContent", {
get: function()
{
return this.dataLabel.content
}, set: function(value)
{
this.dataLabel.content = value
}, enumerable: !0, configurable: !0
}), WjSunburst
}(wjcChartHierarchical.Sunburst);
WjSunburst.meta = {outputs: exports.wjSunburstMeta.outputs};
WjSunburst.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjSunburstMeta.selector, template: exports.wjSunburstMeta.template, inputs: exports.wjSunburstMeta.inputs, outputs: exports.wjSunburstMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjSunburst
})
}].concat(exports.wjSunburstMeta.providers)
}, ]
}, ];
WjSunburst.ctorParameters = function()
{
return [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ]
};
exports.WjSunburst = WjSunburst;
moduleExports = [WjSunburst];
WjChartHierarchicalModule = function()
{
function WjChartHierarchicalModule(){}
return WjChartHierarchicalModule
}();
WjChartHierarchicalModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjChartHierarchicalModule.ctorParameters = function()
{
return []
};
exports.WjChartHierarchicalModule = WjChartHierarchicalModule