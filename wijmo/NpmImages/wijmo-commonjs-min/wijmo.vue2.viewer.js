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
var vue_1,
VueModule;
Object.defineProperty(exports, "__esModule", {value: !0});
var wjcVue2Base=require("wijmo/wijmo.vue2.base"),
wjcViewer=require("wijmo/wijmo.viewer"),
wjcSelf=require("wijmo/wijmo.vue2.viewer");
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.viewer = wjcSelf;
vue_1 = require("vue");
VueModule = require("vue");
exports.Vue = vue_1.default || VueModule;
exports.WjReportViewer = exports.Vue.component('wj-report-viewer', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.viewer.ReportViewer'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcViewer.ReportViewer(this.$el))
}
});
exports.WjPdfViewer = exports.Vue.component('wj-pdf-viewer', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.viewer.PdfViewer'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcViewer.PdfViewer(this.$el))
}
})