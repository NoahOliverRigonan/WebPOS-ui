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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart","wijmo/wijmo","wijmo/wijmo.chart.hierarchical"],function(n,t,i,r,u){"use strict";var e,f;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.hierarchical=u;e=function(n){function t(t,i){var r=n.call(this,t,i)||this;return r._processedData=[],r._legendLabels=[],r._level=1,r._sliceIndex=0,r._processedItem=[],r._selectionIndex=0,r.applyTemplate('wj-sunburst',null,null),r}return __extends(t,n),Object.defineProperty(t.prototype,"bindingName",{get:function(){return this._bindName},set:function(n){n!=this._bindName&&(r.assert(n==null||r.isArray(n)||r.isString(n),'bindingName should be an array or a string.'),this._bindName=n,this._bindChart())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childItemsPath",{get:function(){return this._childItemsPath},set:function(n){n!=this._childItemsPath&&(r.assert(n==null||r.isArray(n)||r.isString(n),'childItemsPath should be an array or a string.'),this._childItemsPath=n,this._bindChart())},enumerable:!0,configurable:!0}),t.prototype._initData=function(){n.prototype._initData.call(this);this._processedData=[];this._level=1;this._legendLabels=[];this._processedItem=[]},t.prototype._performBind=function(){var t=this,n;this._initData();this._cv&&(n=this._cv.items,this._cv.groups&&this._cv.groups.length?this._processedData=f.parseDataToHierarchical(this._cv,this.binding,this.bindingName,this.childItemsPath):n&&(this._processedData=f.parseDataToHierarchical(n,this.binding,this.bindingName,this.childItemsPath)),this._processedData&&this._processedData.length&&(this._sum=this._calculateValueAndLevel(this._processedData,1),this._processedData.forEach(function(n){t._legendLabels.push(n.name)})))},t.prototype._calculateValueAndLevel=function(n,t){var i=this,r=0,u=this._values,f=this._labels;return this._level<t&&(this._level=t),n.forEach(function(n){var e;n.items?(e=i._calculateValueAndLevel(n.items,t+1),n.value=e,u.push(e),f.push(n.name)):(e=i._getBindData(n,u,f,'value','name'),n.value=e);r+=e}),r},t.prototype._renderPie=function(n,t,i,r,u){var f=this._getCenter();this._sliceIndex=0;this._renderHierarchicalSlices(n,f.x,f.y,this._processedData,this._sum,t,i,r,2*Math.PI,u,1)},t.prototype._renderHierarchicalSlices=function(n,t,i,r,u,f,e,o,s,h,c){var rt=r.length,a=o,g=this.reversed==!0,nt,tt,d,l,y,p,it,w,b,k,v;for(d=(f-e)/this._level,nt=f-(this._level-c)*d,tt=e+(c-1)*d,v=0;v<rt;v++)w=t,b=i,it=n.startGroup('slice-level'+c),c===1&&(n.fill=this._getColorLight(v),n.stroke=this._getColor(v)),y=r[v],p=Math.abs(y.value),l=Math.abs(p-u)<1e-10?s:s*p/u,k=g?a-.5*l:a+.5*l,h>0&&l<s&&(w+=h*Math.cos(k),b+=h*Math.sin(k)),y.items&&this._renderHierarchicalSlices(n,w,b,y.items,p,f,e,a,l,0,c+1),this._renderSlice(n,w,b,k,this._sliceIndex,nt,tt,a,l,s),this._processedItem.push(y.item),this._sliceIndex++,g?a-=l:a+=l,n.endGroup(),this._pels.push(it)},t.prototype._getLabelsForLegend=function(){return this._legendLabels||[]},t.prototype._highlightCurrent=function(){this.selectionMode!=i.SelectionMode.None&&this._highlight(!0,this._selectionIndex)},t.prototype.hitTest=function(t,r){var u=n.prototype.hitTest.call(this,t,r),o=this._toControl(t,r);if(i.FlexChart._contains(this._rectChart,o)){var f=u.pointIndex,s=this._processedItem[f],e=new i._DataPoint(null,f,null,null);e.item=s;u._setDataPoint(e)}return u},t}(i.FlexPie);t.Sunburst=e;f=function(){function n(){}return n.parseDataToHierarchical=function(t,i,u,f){var e=[],o;return t instanceof r.CollectionView&&t.groups.length>0?e=n.parseGroupCV(t,i):t.length>0&&(r.isString(u)&&u.indexOf(',')>-1&&(u=u.split(',')),f?e=n.parseItems(t,i,u,f):(o=n.ConvertFlatData(t,i,u),e=n.parseItems(o,'value',u,'items'))),e},n.parseGroupCV=function(n,t){for(var u,r=[],i=0,f=n.groups.length;i<f;i++)u=this.parseGroups(n.groups[i],t),r.push(u);return r},n.parseGroups=function(n,t){var i={},u,f,e;if(i.name=n.name,i.nameField=n.groupDescription.propertyName,i.item=n.items,n.groups&&n.groups.length)for(i.items=[],u=0,f=n.groups.length;u<f;u++)e=this.parseGroups(n.groups[u],t),i.items.push(e);else n.isBottomLevel&&(i.value=n.getAggregate(r.Aggregate.Sum,t));return i},n.parseItems=function(t,i,r,u){for(var e=[],o=t.length,f=0;f<o;f++)e.push(n.parseItem(t[f],i,r,u));return e},n.isFlatItem=function(n,t){return r.isArray(n[t])?!1:!0},n.ConvertFlatData=function(t,i,r){for(var f=[],e={},o,s=t.length,u=0;u<s;u++)o=t[u],n.ConvertFlatItem(e,o,i,r);return n.ConvertFlatToHierarchical(f,e),f},n.ConvertFlatToHierarchical=function(t,i){var r=i.flatDataOrder;r&&r.forEach(function(r){var u={},f=i[r],e;u[i.field]=r;f.flatDataOrder?(e=[],n.ConvertFlatToHierarchical(e,f),u.items=e):u.value=f;t.push(u)})},n.ConvertFlatItem=function(t,i,r,u){var e,o,f,s,h;return(e=u.slice(),o=e.shift().trim(),f=i[o],f==null)?!1:(e.length===0?(t[f]=i[r],t.flatDataOrder?t.flatDataOrder.push(f):t.flatDataOrder=[f],t.field=o):(t[f]==null&&(t[f]={},t.flatDataOrder?t.flatDataOrder.push(f):t.flatDataOrder=[f],t.field=o),s=t[f],h=n.ConvertFlatItem(s,i,r,e),h||(t[f]=i[r])),!0)},n.parseItem=function(t,i,u,f){var e={},h,l,o,c,s;return r.isArray(f)?(s=f.slice(),c=s.length?s.shift().trim():''):(s=f,c=f),r.isArray(u)?(h=u.slice(),l=h.shift().trim(),e.nameField=l,e.name=t[l],o=t[c],h.length===0?e.value=t[i]:o&&r.isArray(o)&&o.length>0?e.items=n.parseItems(o,i,h,s):e.value=t[i]||0):(e.nameField=u,e.name=t[u],o=t[c],o!=null&&r.isArray(o)&&o.length>0?e.items=n.parseItems(o,i,u,s):e.value=t[i]),e.item=t,e},n.parseFlatItem=function(n){n.items||(n.items=[])},n}();t.HierarchicalUtil=f})