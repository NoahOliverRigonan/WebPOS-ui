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
wjcNav=require("wijmo/wijmo.nav"),
wjcSelf=require("wijmo/wijmo.vue2.nav");
window.wijmo = window.wijmo || {};
window.wijmo.vue2 = window.wijmo.vue2 || {};
window.wijmo.vue2.nav = wjcSelf;
vue_1 = require("vue");
VueModule = require("vue");
exports.Vue = vue_1.default || VueModule;
exports.WjTreeView = exports.Vue.component('wj-tree-view', {
template: '<div/>', props: wjcVue2Base._getProps('wijmo.nav.TreeView'), mounted: function()
{
wjcVue2Base._initialize(this, new wjcNav.TreeView(this.$el))
}
})