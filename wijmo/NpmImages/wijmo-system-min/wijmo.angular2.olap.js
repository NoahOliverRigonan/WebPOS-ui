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
System.register(["wijmo/wijmo.olap", "@angular/core", "@angular/common", "@angular/forms", "wijmo/wijmo.angular2.directiveBase"], function(exports_1, context_1)
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
wjcOlap,
core_1,
core_2,
core_3,
common_1,
forms_1,
wijmo_angular2_directiveBase_1,
wjPivotGridMeta,
WjPivotGrid,
wjPivotChartMeta,
WjPivotChart,
wjPivotPanelMeta,
WjPivotPanel,
moduleExports,
WjOlapModule;
return {
setters: [function(wjcOlap_1)
{
wjcOlap = wjcOlap_1
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
exports_1("wjPivotGridMeta", wjPivotGridMeta = {
selector: 'wj-pivot-grid', template: "", inputs: ['wjModelProperty', 'isDisabled', 'newRowAtTop', 'allowAddNew', 'allowDelete', 'allowDragging', 'allowMerging', 'allowResizing', 'allowSorting', 'autoSizeMode', 'autoGenerateColumns', 'childItemsPath', 'groupHeaderFormat', 'headersVisibility', 'showSelectedHeaders', 'showMarquee', 'itemFormatter', 'isReadOnly', 'imeEnabled', 'mergeManager', 'selectionMode', 'showGroups', 'showSort', 'showAlternatingRows', 'showErrors', 'validateEdits', 'treeIndent', 'itemsSource', 'autoClipboard', 'frozenRows', 'frozenColumns', 'deferResizing', 'sortRowIndex', 'stickyHeaders', 'preserveSelectedState', 'preserveOutlineState', 'showDetailOnDoubleClick', 'customContextMenu', 'collapsibleSubtotals', 'centerHeadersVertically', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'beginningEditNg: beginningEdit', 'cellEditEndedNg: cellEditEnded', 'cellEditEndingNg: cellEditEnding', 'prepareCellForEditNg: prepareCellForEdit', 'formatItemNg: formatItem', 'resizingColumnNg: resizingColumn', 'resizedColumnNg: resizedColumn', 'autoSizingColumnNg: autoSizingColumn', 'autoSizedColumnNg: autoSizedColumn', 'draggingColumnNg: draggingColumn', 'draggingColumnOverNg: draggingColumnOver', 'draggedColumnNg: draggedColumn', 'sortingColumnNg: sortingColumn', 'sortedColumnNg: sortedColumn', 'resizingRowNg: resizingRow', 'resizedRowNg: resizedRow', 'autoSizingRowNg: autoSizingRow', 'autoSizedRowNg: autoSizedRow', 'draggingRowNg: draggingRow', 'draggingRowOverNg: draggingRowOver', 'draggedRowNg: draggedRow', 'deletingRowNg: deletingRow', 'loadingRowsNg: loadingRows', 'loadedRowsNg: loadedRows', 'rowEditStartingNg: rowEditStarting', 'rowEditStartedNg: rowEditStarted', 'rowEditEndingNg: rowEditEnding', 'rowEditEndedNg: rowEditEnded', 'rowAddedNg: rowAdded', 'groupCollapsedChangedNg: groupCollapsedChanged', 'groupCollapsedChangingNg: groupCollapsedChanging', 'itemsSourceChangedNg: itemsSourceChanged', 'selectionChangingNg: selectionChanging', 'selectionChangedNg: selectionChanged', 'scrollPositionChangedNg: scrollPositionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', 'updatingLayoutNg: updatingLayout', 'updatedLayoutNg: updatedLayout', 'pastingNg: pasting', 'pastedNg: pasted', 'pastingCellNg: pastingCell', 'pastedCellNg: pastedCell', 'copyingNg: copying', 'copiedNg: copied', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjPivotGrid = function(_super)
{
function WjPivotGrid(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.beginningEditNg = new core_1.EventEmitter(!1), _this.cellEditEndedNg = new core_1.EventEmitter(!1), _this.cellEditEndingNg = new core_1.EventEmitter(!1), _this.prepareCellForEditNg = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.resizingColumnNg = new core_1.EventEmitter(!1), _this.resizedColumnNg = new core_1.EventEmitter(!1), _this.autoSizingColumnNg = new core_1.EventEmitter(!1), _this.autoSizedColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnOverNg = new core_1.EventEmitter(!1), _this.draggedColumnNg = new core_1.EventEmitter(!1), _this.sortingColumnNg = new core_1.EventEmitter(!1), _this.sortedColumnNg = new core_1.EventEmitter(!1), _this.resizingRowNg = new core_1.EventEmitter(!1), _this.resizedRowNg = new core_1.EventEmitter(!1), _this.autoSizingRowNg = new core_1.EventEmitter(!1), _this.autoSizedRowNg = new core_1.EventEmitter(!1), _this.draggingRowNg = new core_1.EventEmitter(!1), _this.draggingRowOverNg = new core_1.EventEmitter(!1), _this.draggedRowNg = new core_1.EventEmitter(!1), _this.deletingRowNg = new core_1.EventEmitter(!1), _this.loadingRowsNg = new core_1.EventEmitter(!1), _this.loadedRowsNg = new core_1.EventEmitter(!1), _this.rowEditStartingNg = new core_1.EventEmitter(!1), _this.rowEditStartedNg = new core_1.EventEmitter(!1), _this.rowEditEndingNg = new core_1.EventEmitter(!1), _this.rowEditEndedNg = new core_1.EventEmitter(!1), _this.rowAddedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangingNg = new core_1.EventEmitter(!1), _this.itemsSourceChangedNg = new core_1.EventEmitter(!1), _this.selectionChangingNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), _this.scrollPositionChangedNg = new core_1.EventEmitter(!1), _this.updatingViewNg = new core_1.EventEmitter(!1), _this.updatedViewNg = new core_1.EventEmitter(!1), _this.updatingLayoutNg = new core_1.EventEmitter(!1), _this.updatedLayoutNg = new core_1.EventEmitter(!1), _this.pastingNg = new core_1.EventEmitter(!1), _this.pastedNg = new core_1.EventEmitter(!1), _this.pastingCellNg = new core_1.EventEmitter(!1), _this.pastedCellNg = new core_1.EventEmitter(!1), _this.copyingNg = new core_1.EventEmitter(!1), _this.copiedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPivotGrid, _super), WjPivotGrid.prototype.created = function(){}, WjPivotGrid.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotGrid.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotGrid.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotGrid
}(wjcOlap.PivotGrid);
WjPivotGrid.meta = {outputs: wjPivotGridMeta.outputs};
WjPivotGrid.decorators = [{
type: core_1.Component, args: [{
selector: wjPivotGridMeta.selector, template: wjPivotGridMeta.template, inputs: wjPivotGridMeta.inputs, outputs: wjPivotGridMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotGrid
})
}].concat(wjPivotGridMeta.providers)
}, ]
}, ];
WjPivotGrid.ctorParameters = function()
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
exports_1("WjPivotGrid", WjPivotGrid);
exports_1("wjPivotChartMeta", wjPivotChartMeta = {
selector: 'wj-pivot-chart', template: "", inputs: ['wjModelProperty', 'chartType', 'showHierarchicalAxes', 'showTotals', 'stacking', 'maxSeries', 'maxPoints', 'itemsSource', ], outputs: ['initialized', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjPivotChart = function(_super)
{
function WjPivotChart(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPivotChart, _super), WjPivotChart.prototype.created = function(){}, WjPivotChart.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotChart.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotChart.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotChart
}(wjcOlap.PivotChart);
WjPivotChart.meta = {outputs: wjPivotChartMeta.outputs};
WjPivotChart.decorators = [{
type: core_1.Component, args: [{
selector: wjPivotChartMeta.selector, template: wjPivotChartMeta.template, inputs: wjPivotChartMeta.inputs, outputs: wjPivotChartMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotChart
})
}].concat(wjPivotChartMeta.providers)
}, ]
}, ];
WjPivotChart.ctorParameters = function()
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
exports_1("WjPivotChart", WjPivotChart);
exports_1("wjPivotPanelMeta", wjPivotPanelMeta = {
selector: 'wj-pivot-panel', template: "", inputs: ['wjModelProperty', 'autoGenerateFields', 'viewDefinition', 'engine', 'itemsSource', ], outputs: ['initialized', 'itemsSourceChangedNg: itemsSourceChanged', 'viewDefinitionChangedNg: viewDefinitionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjPivotPanel = function(_super)
{
function WjPivotPanel(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.itemsSourceChangedNg = new core_1.EventEmitter(!1), _this.viewDefinitionChangedNg = new core_1.EventEmitter(!1), _this.updatingViewNg = new core_1.EventEmitter(!1), _this.updatedViewNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjPivotPanel, _super), WjPivotPanel.prototype.created = function(){}, WjPivotPanel.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjPivotPanel.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjPivotPanel.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjPivotPanel
}(wjcOlap.PivotPanel);
WjPivotPanel.meta = {outputs: wjPivotPanelMeta.outputs};
WjPivotPanel.decorators = [{
type: core_1.Component, args: [{
selector: wjPivotPanelMeta.selector, template: wjPivotPanelMeta.template, inputs: wjPivotPanelMeta.inputs, outputs: wjPivotPanelMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjPivotPanel
})
}].concat(wjPivotPanelMeta.providers)
}, ]
}, ];
WjPivotPanel.ctorParameters = function()
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
exports_1("WjPivotPanel", WjPivotPanel);
moduleExports = [WjPivotGrid, WjPivotChart, WjPivotPanel];
WjOlapModule = function()
{
function WjOlapModule(){}
return WjOlapModule
}();
WjOlapModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjOlapModule.ctorParameters = function()
{
return []
};
exports_1("WjOlapModule", WjOlapModule)
}
}
})