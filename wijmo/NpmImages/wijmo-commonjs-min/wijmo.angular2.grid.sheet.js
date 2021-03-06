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
WjFlexSheet,
WjSheet,
moduleExports,
WjGridSheetModule;
Object.defineProperty(exports, "__esModule", {value: !0});
var wjcGridSheet=require("wijmo/wijmo.grid.sheet"),
core_1=require("@angular/core"),
core_2=require("@angular/core"),
core_3=require("@angular/core"),
common_1=require("@angular/common"),
forms_1=require("@angular/forms"),
wijmo_angular2_directiveBase_1=require("wijmo/wijmo.angular2.directiveBase");
exports.wjFlexSheetMeta = {
selector: 'wj-flex-sheet', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'newRowAtTop', 'allowAddNew', 'allowDelete', 'allowDragging', 'allowMerging', 'allowResizing', 'allowSorting', 'autoSizeMode', 'autoGenerateColumns', 'childItemsPath', 'groupHeaderFormat', 'headersVisibility', 'showSelectedHeaders', 'showMarquee', 'itemFormatter', 'isReadOnly', 'imeEnabled', 'mergeManager', 'selectionMode', 'showGroups', 'showSort', 'showAlternatingRows', 'showErrors', 'validateEdits', 'treeIndent', 'itemsSource', 'autoClipboard', 'frozenRows', 'frozenColumns', 'deferResizing', 'sortRowIndex', 'stickyHeaders', 'preserveSelectedState', 'preserveOutlineState', 'isTabHolderVisible', 'selectedSheetIndex', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'beginningEditNg: beginningEdit', 'cellEditEndedNg: cellEditEnded', 'cellEditEndingNg: cellEditEnding', 'prepareCellForEditNg: prepareCellForEdit', 'formatItemNg: formatItem', 'resizingColumnNg: resizingColumn', 'resizedColumnNg: resizedColumn', 'autoSizingColumnNg: autoSizingColumn', 'autoSizedColumnNg: autoSizedColumn', 'draggingColumnNg: draggingColumn', 'draggingColumnOverNg: draggingColumnOver', 'draggedColumnNg: draggedColumn', 'sortingColumnNg: sortingColumn', 'sortedColumnNg: sortedColumn', 'resizingRowNg: resizingRow', 'resizedRowNg: resizedRow', 'autoSizingRowNg: autoSizingRow', 'autoSizedRowNg: autoSizedRow', 'draggingRowNg: draggingRow', 'draggingRowOverNg: draggingRowOver', 'draggedRowNg: draggedRow', 'deletingRowNg: deletingRow', 'loadingRowsNg: loadingRows', 'loadedRowsNg: loadedRows', 'rowEditStartingNg: rowEditStarting', 'rowEditStartedNg: rowEditStarted', 'rowEditEndingNg: rowEditEnding', 'rowEditEndedNg: rowEditEnded', 'rowAddedNg: rowAdded', 'groupCollapsedChangedNg: groupCollapsedChanged', 'groupCollapsedChangingNg: groupCollapsedChanging', 'itemsSourceChangedNg: itemsSourceChanged', 'selectionChangingNg: selectionChanging', 'selectionChangedNg: selectionChanged', 'scrollPositionChangedNg: scrollPositionChanged', 'updatingViewNg: updatingView', 'updatedViewNg: updatedView', 'updatingLayoutNg: updatingLayout', 'updatedLayoutNg: updatedLayout', 'pastingNg: pasting', 'pastedNg: pasted', 'pastingCellNg: pastingCell', 'pastedCellNg: pastedCell', 'copyingNg: copying', 'copiedNg: copied', 'selectedSheetChangedNg: selectedSheetChanged', 'selectedSheetIndexChangePC: selectedSheetIndexChange', 'draggingRowColumnNg: draggingRowColumn', 'droppingRowColumnNg: droppingRowColumn', 'loadedNg: loaded', 'unknownFunctionNg: unknownFunction', 'sheetClearedNg: sheetCleared', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
};
WjFlexSheet = function(_super)
{
function WjFlexSheet(elRef, injector, parentCmp)
{
var _this=_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef)) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.gotFocusNg = new core_1.EventEmitter(!1), _this.lostFocusNg = new core_1.EventEmitter(!1), _this.beginningEditNg = new core_1.EventEmitter(!1), _this.cellEditEndedNg = new core_1.EventEmitter(!1), _this.cellEditEndingNg = new core_1.EventEmitter(!1), _this.prepareCellForEditNg = new core_1.EventEmitter(!1), _this.formatItemNg = new core_1.EventEmitter(!1), _this.resizingColumnNg = new core_1.EventEmitter(!1), _this.resizedColumnNg = new core_1.EventEmitter(!1), _this.autoSizingColumnNg = new core_1.EventEmitter(!1), _this.autoSizedColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnNg = new core_1.EventEmitter(!1), _this.draggingColumnOverNg = new core_1.EventEmitter(!1), _this.draggedColumnNg = new core_1.EventEmitter(!1), _this.sortingColumnNg = new core_1.EventEmitter(!1), _this.sortedColumnNg = new core_1.EventEmitter(!1), _this.resizingRowNg = new core_1.EventEmitter(!1), _this.resizedRowNg = new core_1.EventEmitter(!1), _this.autoSizingRowNg = new core_1.EventEmitter(!1), _this.autoSizedRowNg = new core_1.EventEmitter(!1), _this.draggingRowNg = new core_1.EventEmitter(!1), _this.draggingRowOverNg = new core_1.EventEmitter(!1), _this.draggedRowNg = new core_1.EventEmitter(!1), _this.deletingRowNg = new core_1.EventEmitter(!1), _this.loadingRowsNg = new core_1.EventEmitter(!1), _this.loadedRowsNg = new core_1.EventEmitter(!1), _this.rowEditStartingNg = new core_1.EventEmitter(!1), _this.rowEditStartedNg = new core_1.EventEmitter(!1), _this.rowEditEndingNg = new core_1.EventEmitter(!1), _this.rowEditEndedNg = new core_1.EventEmitter(!1), _this.rowAddedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangedNg = new core_1.EventEmitter(!1), _this.groupCollapsedChangingNg = new core_1.EventEmitter(!1), _this.itemsSourceChangedNg = new core_1.EventEmitter(!1), _this.selectionChangingNg = new core_1.EventEmitter(!1), _this.selectionChangedNg = new core_1.EventEmitter(!1), _this.scrollPositionChangedNg = new core_1.EventEmitter(!1), _this.updatingViewNg = new core_1.EventEmitter(!1), _this.updatedViewNg = new core_1.EventEmitter(!1), _this.updatingLayoutNg = new core_1.EventEmitter(!1), _this.updatedLayoutNg = new core_1.EventEmitter(!1), _this.pastingNg = new core_1.EventEmitter(!1), _this.pastedNg = new core_1.EventEmitter(!1), _this.pastingCellNg = new core_1.EventEmitter(!1), _this.pastedCellNg = new core_1.EventEmitter(!1), _this.copyingNg = new core_1.EventEmitter(!1), _this.copiedNg = new core_1.EventEmitter(!1), _this.selectedSheetChangedNg = new core_1.EventEmitter(!1), _this.selectedSheetIndexChangePC = new core_1.EventEmitter(!1), _this.draggingRowColumnNg = new core_1.EventEmitter(!1), _this.droppingRowColumnNg = new core_1.EventEmitter(!1), _this.loadedNg = new core_1.EventEmitter(!1), _this.unknownFunctionNg = new core_1.EventEmitter(!1), _this.sheetClearedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this.created(), _this
}
return __extends(WjFlexSheet, _super), WjFlexSheet.prototype.created = function(){}, WjFlexSheet.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexSheet.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexSheet.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexSheet
}(wjcGridSheet.FlexSheet);
WjFlexSheet.meta = {
outputs: exports.wjFlexSheetMeta.outputs, changeEvents: {selectedSheetChanged: ['selectedSheetIndex']}
};
WjFlexSheet.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjFlexSheetMeta.selector, template: exports.wjFlexSheetMeta.template, inputs: exports.wjFlexSheetMeta.inputs, outputs: exports.wjFlexSheetMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexSheet
})
}].concat(exports.wjFlexSheetMeta.providers)
}, ]
}, ];
WjFlexSheet.ctorParameters = function()
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
exports.WjFlexSheet = WjFlexSheet;
exports.wjSheetMeta = {
selector: 'wj-sheet', template: "", inputs: ['wjProperty', 'name', 'itemsSource', 'visible', 'rowCount', 'columnCount', ], outputs: ['initialized', 'nameChangedNg: nameChanged', ], providers: []
};
WjSheet = function(_super)
{
function WjSheet(elRef, injector, parentCmp)
{
var _this=_super.call(this, parentCmp) || this,
behavior;
return _this.isInitialized = !1, _this.initialized = new core_1.EventEmitter(!0), _this.nameChangedNg = new core_1.EventEmitter(!1), behavior = _this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(_this, elRef, injector, parentCmp), _this._flexSheet = parentCmp, _this.created(), _this
}
return __extends(WjSheet, _super), WjSheet.prototype.created = function(){}, WjSheet.prototype.ngOnInit = function()
{
return this._wjBehaviour.ngOnInit(), this.itemsSource ? this._flexSheet.addBoundSheet(this.name, this.itemsSource) : this._flexSheet.addUnboundSheet(this.name, this.boundRowCount != null ? +this.boundRowCount : null, this.boundColumnCount != null ? +this.boundColumnCount : null)
}, WjSheet.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjSheet.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjSheet.prototype.ngOnChanges = function(changes)
{
var chg;
(chg = changes.rowCount) && chg.isFirstChange && (this.boundRowCount = chg.currentValue);
(chg = changes.columnCount) && chg.isFirstChange && (this.boundColumnCount = chg.currentValue)
}, WjSheet
}(wjcGridSheet.Sheet);
WjSheet.meta = {outputs: exports.wjSheetMeta.outputs};
WjSheet.decorators = [{
type: core_1.Component, args: [{
selector: exports.wjSheetMeta.selector, template: exports.wjSheetMeta.template, inputs: exports.wjSheetMeta.inputs, outputs: exports.wjSheetMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjSheet
})
}].concat(exports.wjSheetMeta.providers)
}, ]
}, ];
WjSheet.ctorParameters = function()
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
exports.WjSheet = WjSheet;
moduleExports = [WjFlexSheet, WjSheet];
WjGridSheetModule = function()
{
function WjGridSheetModule(){}
return WjGridSheetModule
}();
WjGridSheetModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ];
WjGridSheetModule.ctorParameters = function()
{
return []
};
exports.WjGridSheetModule = WjGridSheetModule