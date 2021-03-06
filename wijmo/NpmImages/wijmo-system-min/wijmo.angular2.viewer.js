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
System.register(["wijmo/wijmo.viewer", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(exports_1, context_1)
{
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
__moduleName=context_1 && context_1.id,
wjcViewer,
core_1,
core_2,
core_3,
common_1,
forms_1,
wijmo_angular2_directiveBase_1,
wjReportViewerMeta,
WjReportViewer,
wjPdfViewerMeta,
WjPdfViewer,
moduleExports,
WjViewerModule;
return {
setters: [function(wjcViewer_1)
{
wjcViewer = wjcViewer_1
}, function(core_1_1)
{
core_1 = core_1_1;
core_2 = core_1_1;
core_3 = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(forms_1_1)
{
forms_1 = forms_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
exports_1("wjReportViewerMeta", wjReportViewerMeta = {
selector: 'wj-report-viewer', template: "", inputs: ['wjModelProperty', 'serviceUrl', 'filePath', 'fullScreen', 'zoomFactor', 'selectMouseMode', 'viewMode', 'paginated', 'reportName', ], outputs: ['initialized', 'pageIndexChangedNg: pageIndexChanged', 'viewModeChangedNg: viewModeChanged', 'viewModeChangePC: viewModeChange', 'selectMouseModeChangedNg: selectMouseModeChanged', 'selectMouseModeChangePC: selectMouseModeChange', 'fullScreenChangedNg: fullScreenChanged', 'fullScreenChangePC: fullScreenChange', 'zoomFactorChangedNg: zoomFactorChanged', 'zoomFactorChangePC: zoomFactorChange', 'queryLoadingDataNg: queryLoadingData', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjReportViewer = function(_super)
{
function WjReportViewer(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.pageIndexChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangePC = new core_1.EventEmitter(!1), _this.selectMouseModeChangedNg = new core_1.EventEmitter(!1), _this.selectMouseModeChangePC = new core_1.EventEmitter(!1), _this.fullScreenChangedNg = new core_1.EventEmitter(!1), _this.fullScreenChangePC = new core_1.EventEmitter(!1), _this.zoomFactorChangedNg = new core_1.EventEmitter(!1), _this.zoomFactorChangePC = new core_1.EventEmitter(!1), _this.queryLoadingDataNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjReportViewer, _super), WjReportViewer.prototype.created = function(){}, WjReportViewer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjReportViewer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjReportViewer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjReportViewer
}(wjcViewer.ReportViewer);
WjReportViewer.meta = {
outputs: wjReportViewerMeta.outputs, changeEvents: {
viewModeChanged: ['viewMode'], selectMouseModeChanged: ['selectMouseMode'], fullScreenChanged: ['fullScreen'], zoomFactorChanged: ['zoomFactor']
}
};
WjReportViewer.decorators = [{
type: core_1.Component, args: [{
selector: wjReportViewerMeta.selector, template: wjReportViewerMeta.template, inputs: wjReportViewerMeta.inputs, outputs: wjReportViewerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjReportViewer
})
}].concat(wjReportViewerMeta.providers)
}, ]
}, ];
WjReportViewer.ctorParameters = function()
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
exports_1("WjReportViewer", WjReportViewer);
exports_1("wjPdfViewerMeta", wjPdfViewerMeta = {
selector: 'wj-pdf-viewer', template: "", inputs: ['wjModelProperty', 'serviceUrl', 'filePath', 'fullScreen', 'zoomFactor', 'selectMouseMode', 'viewMode', ], outputs: ['initialized', 'pageIndexChangedNg: pageIndexChanged', 'viewModeChangedNg: viewModeChanged', 'viewModeChangePC: viewModeChange', 'selectMouseModeChangedNg: selectMouseModeChanged', 'selectMouseModeChangePC: selectMouseModeChange', 'fullScreenChangedNg: fullScreenChanged', 'fullScreenChangePC: fullScreenChange', 'zoomFactorChangedNg: zoomFactorChanged', 'zoomFactorChangePC: zoomFactorChange', 'queryLoadingDataNg: queryLoadingData', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjPdfViewer = function(_super)
{
function WjPdfViewer(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.pageIndexChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangedNg = new core_1.EventEmitter(!1), _this.viewModeChangePC = new core_1.EventEmitter(!1), _this.selectMouseModeChangedNg = new core_1.EventEmitter(!1), _this.selectMouseModeChangePC = new core_1.EventEmitter(!1), _this.fullScreenChangedNg = new core_1.EventEmitter(!1), _this.fullScreenChangePC = new core_1.EventEmitter(!1), _this.zoomFactorChangedNg = new core_1.EventEmitter(!1), _this.zoomFactorChangePC = new core_1.EventEmitter(!1), _this.queryLoadingDataNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPdfViewer, _super), WjPdfViewer.prototype.created = function(){}, WjPdfViewer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPdfViewer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPdfViewer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPdfViewer
}(wjcViewer.PdfViewer);
WjPdfViewer.meta = {
outputs: wjPdfViewerMeta.outputs, changeEvents: {
viewModeChanged: ['viewMode'], selectMouseModeChanged: ['selectMouseMode'], fullScreenChanged: ['fullScreen'], zoomFactorChanged: ['zoomFactor']
}
};
WjPdfViewer.decorators = [{
type: core_1.Component, args: [{
selector: wjPdfViewerMeta.selector, template: wjPdfViewerMeta.template, inputs: wjPdfViewerMeta.inputs, outputs: wjPdfViewerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPdfViewer
})
}].concat(wjPdfViewerMeta.providers)
}, ]
}, ];
WjPdfViewer.ctorParameters = function()
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
exports_1("WjPdfViewer", WjPdfViewer);
moduleExports = [WjReportViewer, WjPdfViewer];
WjViewerModule = function()
{
function WjViewerModule(){}
return WjViewerModule
}();
WjViewerModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjViewerModule.ctorParameters = function()
{
return []
};
exports_1("WjViewerModule", WjViewerModule)
}
}
})