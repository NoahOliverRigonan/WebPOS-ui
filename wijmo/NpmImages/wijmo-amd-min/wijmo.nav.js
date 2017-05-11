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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo","wijmo/wijmo.nav"],function(n,t,i,r){"use strict";var u,f,c,e,l,o,h,s;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.nav=r;u=function(n){function t(r,u){var f=n.call(this,r)||this,o,e;return f._itmPath=new s('items'),f._dspPath=new s('header'),f._imgPath=new s,f._html=!1,f._animated=!0,f._xpndOnClick=!0,f._autoColl=!0,f._showChk=!1,f._srch='',f._isReadOnly=!0,f.itemsSourceChanged=new i.Event,f.loadingItems=new i.Event,f.loadedItems=new i.Event,f.itemClicked=new i.Event,f.selectedItemChanged=new i.Event,f.checkedItemsChanged=new i.Event,f.isCollapsedChanging=new i.Event,f.isCollapsedChanged=new i.Event,f.isCheckedChanging=new i.Event,f.isCheckedChanged=new i.Event,f.formatItem=new i.Event,f.dragStart=new i.Event,f.dragOver=new i.Event,f.drop=new i.Event,f.dragEnd=new i.Event,f.nodeEditStarting=new i.Event,f.nodeEditStarted=new i.Event,f.nodeEditEnding=new i.Event,f.nodeEditEnded=new i.Event,o=f.getTemplate(),f.applyTemplate('wj-control wj-content wj-treeview',o,{_root:'root'}),f.hostElement.setAttribute('role','tree'),i.addClass(f._root,t._CNDL),f._root.setAttribute('role','group'),e=f.hostElement,f.addEventListener(e,'mousedown',f._mousedown.bind(f)),f.addEventListener(e,'click',f._click.bind(f)),f.addEventListener(e,'keydown',f._keydown.bind(f)),f.addEventListener(e,'keypress',f._keypress.bind(f)),f.addEventListener(e,'wheel',function(n){e.scrollHeight>e.offsetHeight&&(n.deltaY<0&&e.scrollTop==0||n.deltaY>0&&e.scrollTop+e.offsetHeight>=e.scrollHeight)&&(n.preventDefault(),n.stopPropagation())}),f.addEventListener(e,'blur',function(){f._edtNode&&!i.contains(f._edtNode.element,i.getActiveElement())&&f.finishEditing()},!0),f.initialize(u),f.refresh(),f}return __extends(t,n),Object.defineProperty(t.prototype,"itemsSource",{get:function(){return this._items},set:function(n){this._items!=n&&(this._items=i.asArray(n),this.onItemsSourceChanged(),this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"childItemsPath",{get:function(){return this._itmPath.path},set:function(n){n!=this.childItemsPath&&(this._itmPath.path=n,this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"displayMemberPath",{get:function(){return this._dspPath.path},set:function(n){n!=this.displayMemberPath&&(this._dspPath.path=n,this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageMemberPath",{get:function(){return this._imgPath.path},set:function(n){n!=this.imageMemberPath&&(this._imgPath.path=n,this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isContentHtml",{get:function(){return this._html},set:function(n){n!=this._html&&(this._html=i.asBoolean(n),this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"showCheckboxes",{get:function(){return this._showChk},set:function(n){n!=this._showChk&&(this._showChk=i.asBoolean(n),this._reload())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoCollapse",{get:function(){return this._autoColl},set:function(n){this._autoColl=i.asBoolean(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isAnimated",{get:function(){return this._animated},set:function(n){n!=this._animated&&(this._animated=i.asBoolean(n))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isReadOnly",{get:function(){return this._isReadOnly},set:function(n){this._isReadOnly=i.asBoolean(n)},enumerable:!0,configurable:!0}),t.prototype.startEditing=function(n){var r,u,f,o;if(this.isReadOnly||(n||(n=this.selectedNode),!n||n.isDisabled)||!this.finishEditing()||(r=n.element.querySelector('.'+t._CNDT),!r)||(u=new e(n),!this.onNodeEditStarting(u)))return!1;r.tabIndex=0;r.focus();r.contentEditable='true';r.style.cursor='auto';f=document.createRange();f.selectNodeContents(r);o=getSelection();o.removeAllRanges();o.addRange(f);r.focus();i.setAttribute(r,'autocomplete','off');i.setAttribute(r,'autocorrect','off');this._edtNode=n;this.onNodeEditStarted(u);return!0},t.prototype.finishEditing=function(n){var r=this._edtNode,i,o,u,f,s,h;if(r){if((i=r.element.querySelector('.'+t._CNDT),!i)||(o=new e(r),!this.onNodeEditEnding(o)))return!1;u=r.dataItem;f=r.level;this.isContentHtml?n?i.innerHTML=this._dspPath.getValue(u,f):this._dspPath.setValue(u,f,i.innerHTML):n?i.textContent=this._dspPath.getValue(u,f):this._dspPath.setValue(u,f,i.textContent);s=document.createRange();s.selectNodeContents(i);h=getSelection();h.removeAllRanges();i.contentEditable='false';i.style.cursor='';this._edtNode=null;this.onNodeEditEnded(o)}return!0},Object.defineProperty(t.prototype,"allowDragging",{get:function(){return this._dd!=null},set:function(n){var u,r,f;if(n!=this.allowDragging)for(i.asBoolean(n)?this._dd=new h(this):(this._dd.dispose(),this._dd=null),u=this.hostElement.querySelectorAll('.'+t._CND),r=0;r<u.length;r++)f=u[r],i.setAttribute(f,'draggable',this._dd?!0:null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"expandOnClick",{get:function(){return this._xpndOnClick},set:function(n){this._xpndOnClick=i.asBoolean(n)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedItem",{get:function(){return this._selNode?this._selNode.dataItem:null},set:function(n){n!=this.selectedItem&&(this.selectedNode=n?this.getNode(n):null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedNode",{get:function(){return this._selNode},set:function(n){n!=this.selectedNode&&(this._prevSel=this._selNode,n?n.select():this._selNode&&(i.removeClass(this._selNode.element,t._CSEL),this._selNode=null,this.onSelectedItemChanged()))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedPath",{get:function(){for(var i,t=[],n=this.selectedNode;n;n=n.parentNode)i=this._dspPath.getValue(n.dataItem,n.level),t.splice(0,0,i);return t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"checkedItems",{get:function(){var i,u;if(this._chkItems==null){var n=t,f='.'+n._CND+'.'+n._CEMP+' > input:checked.'+n._CNDC,r=this._root.querySelectorAll(f);for(this._chkItems=[],i=0;i<r.length;i++)u=r[i].parentElement[n._DATAITEM_KEY],this._chkItems.push(u)}return this._chkItems},set:function(n){var i,r,u;if(this.showCheckboxes){var e=t,h='.'+e._CND+'.'+e._CEMP,o=this._root.querySelectorAll(h),s=!1;for(i=0;i<o.length;i++)r=new f(this,o[i]),u=n.indexOf(r.dataItem)>-1,r.isChecked!=u&&(r.isChecked=u,s=!0);s&&this.onCheckedItemsChanged()}},enumerable:!0,configurable:!0}),t.prototype.checkAllItems=function(n){var i,r;if(this.showCheckboxes){var u=t,s='.'+u._CND+'.'+u._CEMP,e=this._root.querySelectorAll(s),o=!1;for(i=0;i<e.length;i++)r=new f(this,e[i]),r.isChecked!=n&&(r.isChecked=n,o=!0);o&&this.onCheckedItemsChanged()}},Object.defineProperty(t.prototype,"totalItemCount",{get:function(){var n=this.hostElement.querySelectorAll('.'+t._CND);return n.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lazyLoadFunction",{get:function(){return this._lazyLoad},set:function(n){n!=this._lazyLoad&&(this._lazyLoad=i.asFunction(n),this._reload())},enumerable:!0,configurable:!0}),t.prototype.getFirstNode=function(n,i){var u=this.hostElement.querySelector('.'+t._CND),r=u?new f(this,u):null;return n&&r&&!r.element.offsetHeight&&(r=r.next(n,i)),i&&r&&r.isDisabled&&(r=r.next(n,i)),r},t.prototype.getLastNode=function(n,i){var u=this.hostElement.querySelectorAll('.'+t._CND+':last-child'),r=u.length?new f(this,u[u.length-1]):null;return n&&r&&!r.element.offsetHeight&&(r=r.previous(n,i)),i&&r&&r.isDisabled&&(r=r.previous(n,i)),r},Object.defineProperty(t.prototype,"nodes",{get:function(){return f._getChildNodes(this,this._root)},enumerable:!0,configurable:!0}),t.prototype.getNode=function(n){for(var r,u=this.hostElement.querySelectorAll('.'+t._CND),i=0;i<u.length;i++)if(r=u[i],r[t._DATAITEM_KEY]==n)return new f(this,r);return null},t.prototype.collapseToLevel=function(n){var t=this._animated,i=this._autoColl;this._animated=this._autoColl=!1;this._collapseToLevel(this.nodes,n,0);this._animated=t;this._autoColl=i},t.prototype.onItemsSourceChanged=function(n){this.itemsSourceChanged.raise(this,n)},t.prototype.onLoadingItems=function(n){this.loadingItems.raise(this,n)},t.prototype.onLoadedItems=function(n){this.loadedItems.raise(this,n)},t.prototype.onItemClicked=function(n){this.itemClicked.raise(this,n)},t.prototype.onSelectedItemChanged=function(n){this.selectedItemChanged.raise(this,n)},t.prototype.onCheckedItemsChanged=function(n){this._chkItems=null;this.checkedItemsChanged.raise(this,n)},t.prototype.onIsCollapsedChanging=function(n){return this.isCollapsedChanging.raise(this,n),!n.cancel},t.prototype.onIsCollapsedChanged=function(n){this.isCollapsedChanged.raise(this,n)},t.prototype.onIsCheckedChanging=function(n){return this.isCheckedChanging.raise(this,n),!n.cancel},t.prototype.onIsCheckedChanged=function(n){this.isCheckedChanged.raise(this,n)},t.prototype.onFormatItem=function(n){this.formatItem.raise(this,n)},t.prototype.onDragStart=function(n){return this.dragStart.raise(this,n),!n.cancel},t.prototype.onDragOver=function(n){return this.dragOver.raise(this,n),!n.cancel},t.prototype.onDrop=function(n){return this.drop.raise(this,n),!n.cancel},t.prototype.onDragEnd=function(n){this.dragEnd.raise(this,n)},t.prototype.onNodeEditStarting=function(n){return this.nodeEditStarting.raise(this,n),!n.cancel},t.prototype.onNodeEditStarted=function(n){this.nodeEditStarted.raise(this,n)},t.prototype.onNodeEditEnding=function(n){return this.nodeEditEnding.raise(this,n),!n.cancel},t.prototype.onNodeEditEnded=function(n){this.nodeEditEnded.raise(this,n)},t.prototype.refresh=function(){n.prototype.refresh.call(this);!this.isUpdating&&this._isDirty&&this._populateTree()},t.prototype._reload=function(){this._isDirty=!0;this.invalidate()},t.prototype._mousedown=function(n){if(!n.defaultPrevented){var u=i.closest(n.target,'input.'+t._CNDC),e=i.closest(n.target,'.'+t._CND),r=e?new f(this,e):null;r&&!r.isDisabled&&(this.selectedNode=r);this._dnIndet=u&&u.indeterminate}},t.prototype._click=function(n){var c=this,u,r,e;if(!n.defaultPrevented&&(u=i.closest(n.target,'.'+t._CND),u)){if(r=new f(this,u),e=i.closest(n.target,'input.'+t._CNDC),r.isDisabled)return;if(!e&&r.equals(this._edtNode))return;if(u.focus(),e&&(n.preventDefault(),n.stopPropagation(),setTimeout(function(){e.indeterminate=!1;r.isChecked=!r.isChecked;c.onCheckedItemsChanged()})),!e){var l=n.target,a=n.ctrlKey||n.metaKey,s=a&&!r.hasPendingChildren,h=u.getBoundingClientRect(),v=this.rightToLeft?h.right-n.clientX:n.clientX-h.left,o=!1;v<=l.offsetHeight?(s?this.collapseToLevel(r.isCollapsed?r.level+1:r.level):r.isCollapsed=!r.isCollapsed,o=!0):this.expandOnClick&&r.isCollapsed&&(s?this.collapseToLevel(r.level):r.isCollapsed=!1,o=!0);o&&s&&this.selectedNode&&this.selectedNode.ensureVisible();o||this.isReadOnly||this.selectedNode&&this.selectedNode.equals(this._prevSel)&&this.startEditing()}this.selectedItem&&this.onItemClicked()}},t.prototype._keydown=function(n){var f;if(!n.defaultPrevented){var t=this._selNode,r,u=n.keyCode,e=!0;if(t&&!t.isDisabled){switch(u){case i.Key.F2:this.startEditing();n.preventDefault();break;case i.Key.Escape:this.finishEditing(!0);n.preventDefault();break;case i.Key.Up:case i.Key.Down:this.finishEditing();break;case i.Key.Enter:this._edtNode?(this.finishEditing(),u=i.Key.Down):(this.startEditing(),n.preventDefault())}if(this._edtNode)return;if(this.rightToLeft)switch(u){case i.Key.Left:u=i.Key.Right;break;case i.Key.Right:u=i.Key.Left}switch(u){case i.Key.Left:!t.isCollapsed&&t.hasChildren?t.setCollapsed(!0):(t=t.parentNode,t&&t.select());break;case i.Key.Right:t.setCollapsed(!1);break;case i.Key.Up:r=t.previous(!0,!0);break;case i.Key.Down:r=t.next(!0,!0);break;case i.Key.Home:r=this.getFirstNode(!0,!0);break;case i.Key.End:r=this.getLastNode(!0,!0);break;case i.Key.Space:this.selectedItem&&(f=t.checkBox,f&&(t.isChecked=!f.checked,this.onCheckedItemsChanged()));break;case i.Key.Enter:this.selectedItem&&this.onItemClicked();break;default:e=!1}e&&(n.preventDefault(),r&&r.select())}}},t.prototype._keypress=function(n){var o=this,u,f,e,r;if(!n.defaultPrevented){if(n.target instanceof HTMLInputElement)return;if(this._edtNode)return;if(n.charCode>32&&this.startEditing(this.selectedNode)){u=i.getActiveElement();i.contains(this._edtNode.element,u)&&(u.textContent=String.fromCharCode(n.charCode),n.preventDefault(),f=document.createRange(),f.selectNodeContents(u),f.collapse(!1),e=getSelection(),e.removeAllRanges(),e.addRange(f));return}(n.charCode>32||n.charCode==32&&this._srch)&&(n.preventDefault(),this._srch+=String.fromCharCode(n.charCode).toLowerCase(),this._toSrch&&clearTimeout(this._toSrch),this._toSrch=setTimeout(function(){o._toSrch=null;o._srch=''},t._AS_DLY),r=this._findNext(),r==null&&this._srch.length>1&&(this._srch=this._srch[this._srch.length-1],r=this._findNext()),r!=null&&(this.selectedItem=r))}},t.prototype._findNext=function(){var f,t;if(this.hostElement&&this.selectedItem){var u=this.getNode(this.selectedItem),n=u,i=!1,r=!1;for(this._srch.length==1&&(r=!0);n;){if(!n.isDisabled&&!r&&(f=n.element.textContent.trim().toLowerCase(),f.indexOf(this._srch)==0))return n.dataItem;if(t=n.next(!0,!0),t==u&&i)break;t||i||(t=this.getFirstNode(!0,!0),i=!0);n=t;r=!1}}return null},t.prototype._populateTree=function(){var t=this._root,i,r,n;if(t){if(this._isDirty=!1,i=this.containsFocus(),r=this.selectedItem,this.selectedItem=null,this._chkItems=null,this._ldLvl=-1,this.onLoadingItems(),t.innerHTML='',this._items)for(n=0;n<this._items.length;n++)this._addItem(t,0,this._items[n]);i&&!this.containsFocus()&&this.focus();this.selectedItem=r;this.onLoadedItems();this._ldLvl=-1}},t.prototype._addItem=function(n,r,u){var y=this._dspPath.getValue(u,r),p=this._imgPath.getValue(u,r),e=i.asArray(this._itmPath.getValue(u,r),!0),f=document.createElement('div'),o,v,s,l,h,a;if(i.addClass(f,t._CND),f.tabIndex=0,f.setAttribute('role','treeitem'),o=document.createElement('span'),this.isContentHtml?o.innerHTML=y:o.textContent=y,i.addClass(o,t._CNDT),f.appendChild(o),p&&(v=document.createElement('img'),v.src=p,f.insertBefore(v,f.firstChild)),this._showChk&&!this._lazyLoad&&(s=document.createElement('input'),s.type='checkbox',s.tabIndex=-1,i.addClass(s,t._CNDC),f.insertBefore(s,f.firstChild)),this._dd&&f.setAttribute('draggable','true'),n.appendChild(f),f[t._DATAITEM_KEY]=u,e&&e.length==0&&!this.lazyLoadFunction&&(e=null),e){if(l=!0,r>this._ldLvl?(this._ldLvl=r,e.length==0&&(i.addClass(f,t._CCLD),l=!1)):(i.addClass(f,t._CCLD),l=!1,r<this._ldLvl&&(this._ldLvl=1e4)),e.length>0){for(h=document.createElement('div'),i.addClass(h,t._CNDL),a=0;a<e.length;a++)this._addItem(h,r+1,e[a]);n.appendChild(h);f.setAttribute('aria-expanded',l.toString());h.setAttribute('role','group')}}else i.addClass(f,t._CEMP);if(this.formatItem.hasHandlers)this.onFormatItem(new c(u,f,r))},t.prototype._collapseToLevel=function(n,t,i){for(var r,u=0;u<n.length;u++)(r=n[u],r.hasPendingChildren)||(r.isCollapsed=i>=t,r.hasChildren&&this._collapseToLevel(r.nodes,t,i+1))},t.prototype._lazyLoadNode=function(n){var r=this.hostElement;i.hasClass(r,t._CLDG)||(i.addClass(r,t._CLDG),i.addClass(n.element,t._CLDG),this.lazyLoadFunction(n,this._lazyLoadCallback.bind(n)))},t.prototype._lazyLoadCallback=function(n){var t=this,i=t.treeView;i._lazyLoadNodeDone(t,n)},t.prototype._lazyLoadNodeDone=function(n,r){var f=t,e,h,o;i.removeClass(n.element,f._CLDG);i.removeClass(this.hostElement,f._CLDG);var c=n.dataItem,s=n.level,u=i.asArray(r,!0);if(u==null||u.length==0)this._itmPath.setValue(c,s,null),i.addClass(n.element,f._CEMP);else if(u.length){for(this._itmPath.setValue(c,s,u),e=document.createElement('div'),h=n.element,i.addClass(e,f._CNDL),h.parentElement.insertBefore(e,h.nextSibling),o=0;o<u.length;o++)this._addItem(e,s+1,u[o]);n.isCollapsed=!1}},t}(i.Control);u._DATAITEM_KEY='wj-Data-Item';u._AS_DLY=600;u._AN_DLY=200;u._CND='wj-node';u._CNDL='wj-nodelist';u._CEMP='wj-state-empty';u._CNDT='wj-node-text';u._CNDC='wj-node-check';u._CSEL='wj-state-selected';u._CCLD='wj-state-collapsed';u._CCLG='wj-state-collapsing';u._CLDG='wj-state-loading';u.controlTemplate='<div wj-part="root"></div>';t.TreeView=u;f=function(){function n(t,r){i.hasClass(r,'wj-treeview')?(t=i.Control.getControl(r),r=null):n._assertNode(r);this._t=t;this._e=r}return Object.defineProperty(n.prototype,"dataItem",{get:function(){return this._e[u._DATAITEM_KEY]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"element",{get:function(){return this._e},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"treeView",{get:function(){return this._t},enumerable:!0,configurable:!0}),n.prototype.ensureVisible=function(){for(var n=this.parentNode;n;n=n.parentNode)n.isCollapsed=!1;var r=this.treeView.hostElement,t=this.element.getBoundingClientRect(),i=r.getBoundingClientRect();t.bottom>i.bottom?r.scrollTop+=t.bottom-i.bottom:t.top<i.top&&(r.scrollTop-=i.top-t.top)},n.prototype.equals=function(n){return n!=null&&n.element==this.element},n.prototype.select=function(){var n=this._t,t=n._selNode;this.equals(t)||(t&&i.removeClass(t.element,u._CSEL),n._selNode=this,i.addClass(this.element,u._CSEL),this.ensureVisible(),n.containsFocus()&&this.element.focus(),n.onSelectedItemChanged())},Object.defineProperty(n.prototype,"index",{get:function(){for(var i=0,t=this._pse(this.element);t;t=this._pse(t))n._isNode(t)&&i++;return i},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"parentNode",{get:function(){var t=null,i;return this._e&&(i=this._e.parentElement,n._assertNodeList(i),t=this._pse(i)),t?new n(this._t,t):null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"level",{get:function(){for(var t=-1,n=this;n;n=n.parentNode)t++;return t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasChildren",{get:function(){return n._isNode(this._e)&&!n._isEmpty(this._e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasPendingChildren",{get:function(){return this.isCollapsed&&this.hasChildren&&!n._isNodeList(this.element.nextElementSibling)&&i.isFunction(this._t.lazyLoadFunction)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"nodes",{get:function(){return this.hasChildren?n._getChildNodes(this._t,this._e.nextSibling):null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"checkBox",{get:function(){return this._e.querySelector('input.'+u._CNDC)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isCollapsed",{get:function(){return this.hasChildren&&i.hasClass(this._e,u._CCLD)},set:function(n){if(n!=this.isCollapsed){var t=this.treeView,r=new e(this);if(t.onIsCollapsedChanging(r)){this.setCollapsed(i.asBoolean(n),t.isAnimated,t.autoCollapse);t.onIsCollapsedChanged(r)}}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isChecked",{get:function(){var n=this.checkBox;return n&&!n.indeterminate?n.checked:null},set:function(n){if(n!=this.isChecked){var t=this.treeView,r=new e(this);if(t.onIsCheckedChanging(r)){this.setChecked(i.asBoolean(n),!0);t.onIsCheckedChanged(r)}}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isDisabled",{get:function(){return this._e&&this._e.getAttribute('disabled')!=null},set:function(n){n=i.asBoolean(n,!0);n!=this.isDisabled&&i.enable(this._e,!n)},enumerable:!0,configurable:!0}),n.prototype.previous=function(t,i){var r=this._pse(this._e),u;if(!r&&n._isNodeList(this._e.parentElement)&&(r=this._pse(this._e.parentElement)),n._isNodeList(r)){while(n._isNodeList(r)&&r.childElementCount)r=r.lastChild;n._isNodeList(r)&&(r=this._pse(r))}return u=n._isNode(r)?new n(this._t,r):null,t&&u&&!u.element.offsetHeight&&(u=u.previous(t,i)),i&&u&&u.isDisabled&&(u=u.previous(t,i)),u},n.prototype.next=function(t,i){var r=this._e.nextSibling,f,u;if(n._isNodeList(r)&&(r=r.childElementCount?r.firstChild:r.nextSibling),!r)for(f=this._e.parentElement;!r&&n._isNodeList(f);f=f.parentElement)r=f.nextSibling;return u=n._isNode(r)?new n(this._t,r):null,t&&u&&!u.element.offsetHeight&&(u=u.next(t,i)),i&&u&&u.isDisabled&&(u=u.next(t,i)),u},n.prototype.previousSibling=function(){var t=this._pse(this.element);return n._isNodeList(t)&&(t=this._pse(t)),t?new n(this.treeView,t):null},n.prototype.nextSibling=function(){var t=this.element.nextSibling;return n._isNodeList(t)&&(t=t.nextSibling),t?new n(this.treeView,t):null},n.prototype.setCollapsed=function(t,r,f){var o=this._e,s=this._e.nextElementSibling,a=n._isNodeList(s),c,e,l,h;if(a?o.setAttribute('aria-expanded',(!t).toString()):o.removeAttribute('aria-expanded'),t!=this.isCollapsed){if(!t&&!a&&i.isFunction(this._t.lazyLoadFunction)){this._t._lazyLoadNode(this);return}if(r==null&&(r=this.treeView.isAnimated),f==null&&(f=this.treeView.autoCollapse),r?a&&(t?(c=s.offsetHeight,e=s.style,i.toggleClass(o,u._CCLG,!0),i.animate(function(n){n<1?(n=1-n,e.height=(n*c).toFixed(0)+'px'):(e.height=e.opacity='',i.toggleClass(o,u._CCLD,!0),i.toggleClass(o,u._CCLG,!1))},u._AN_DLY)):(i.toggleClass(o,u._CCLD,!1),c=s.offsetHeight,e=s.style,e.height=e.opacity='0',i.animate(function(n){e.height=n>=1?e.opacity='':(n*c).toFixed(0)+'px'},u._AN_DLY))):i.toggleClass(o,u._CCLD,t),!t&&f&&(s=o.parentElement,n._isNodeList(s)))for(l=0;l<s.children.length;l++)h=s.children[l],h!=o&&n._isNode(h)&&(i.toggleClass(h,u._CCLD,!0),h.setAttribute('aria-expanded','false'))}},n.prototype.setChecked=function(n,t){var f=this.checkBox,r,i,e,u;if(f.checked=n,f.indeterminate=!1,this.hasChildren)for(r=this.nodes,i=0;i<r.length;i++)e=r[i],e.setChecked(n,!1);t&&(u=this.parentNode,u&&u._updateCheckedState())},n.prototype.move=function(n,t){var i,r,u,e,f,o;return this._contains(n)?!1:(i=this.parentNode,r=this._getArray(),this._moveElements(n,t),u=this.parentNode,e=this._getArray(),i&&i._updateState(),u&&u._updateState(),f=this.dataItem,o=r.indexOf(f),r.splice(o,1),e.splice(this.index,0,f),n.treeView&&(this._t=n.treeView),!0)},n.prototype._pse=function(n){return n.previousElementSibling},n.prototype._contains=function(n){for(;n;n=n.parentNode)if(n.element==this.element)return!0;return!1},n.prototype._getArray=function(){var r=this._t,t=this.parentNode,n=r.itemsSource,i;return t&&(i=r._itmPath,n=i.getValue(t.dataItem,this.level),n||(n=[],i.setValue(t.dataItem,this.level,n))),n},n.prototype._moveElements=function(t,r){var s=t.element,f=s?s.parentElement:t.treeView._root,c=o,h,e;n._assertNodeList(f);h=document.createDocumentFragment();e=this.hasChildren&&!this.hasPendingChildren?this.element.nextSibling:null;h.appendChild(this.element);e&&(n._assertNodeList(e),h.appendChild(e));switch(r){case c.Before:f.insertBefore(h,s);break;case c.After:t=t.nextSibling();s=t?t.element:null;f.insertBefore(h,s);break;case c.Into:(!t.hasChildren||t.hasPendingChildren)&&(e=document.createElement('div'),i.addClass(e,u._CNDL),f.insertBefore(e,s.nextSibling));f=t.element.nextSibling;n._assertNodeList(f);f.insertBefore(h,null)}},n.prototype._updateState=function(){this._updateEmptyState();this._updateCheckedState()},n.prototype._updateEmptyState=function(){var t=this.element.nextSibling,r=!1;n._isNodeList(t)&&(t.childElementCount?r=!0:t.parentElement.removeChild(t));i.toggleClass(this.element,u._CEMP,!r)},n.prototype._updateCheckedState=function(){var n=this.checkBox,t=this.nodes,u=0,f=0,i,e,r;if(n&&t){for(i=0;i<t.length;i++){e=t[i];switch(e.isChecked){case!0:u++;break;case!1:f++}}u==t.length?(n.checked=!0,n.indeterminate=!1):f==t.length?(n.checked=!1,n.indeterminate=!1):(n.checked=!1,n.indeterminate=!0)}r=this.parentNode;r&&r._updateCheckedState()},n._getChildNodes=function(t,i){var u,f,r,e;if(n._assertNodeList(i),u=[],n._isNodeList(i))for(f=i.children,r=0;r<f.length;r++)e=f[r],n._isNode(e)&&u.push(new n(t,e));return u},n._isNode=function(n){return n&&i.hasClass(n,u._CND)},n._isNodeList=function(n){return n&&i.hasClass(n,u._CNDL)},n._isEmpty=function(t){return n._isNode(t)&&i.hasClass(t,u._CEMP)},n._isCollapsed=function(t){return n._isNode(t)&&!n._isEmpty(t)&&i.hasClass(t,u._CCLD)},n._assertNode=function(t){i.assert(n._isNode(t),'node expected')},n._assertNodeList=function(t){i.assert(n._isNodeList(t),'nodeList expected')},n}();t.TreeNode=f;c=function(n){function t(t,r,u){var f=n.call(this)||this;return f._data=t,f._e=i.asType(r,HTMLElement),f._level=u,f}return __extends(t,n),Object.defineProperty(t.prototype,"dataItem",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this._e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"level",{get:function(){return this._level},enumerable:!0,configurable:!0}),t}(i.EventArgs);t.FormatNodeEventArgs=c;e=function(n){function t(t){var i=n.call(this)||this;return i._node=t,i}return __extends(t,n),Object.defineProperty(t.prototype,"node",{get:function(){return this._node},enumerable:!0,configurable:!0}),t}(i.CancelEventArgs);t.TreeNodeEventArgs=e;l=function(n){function t(t,r,u){var e=n.call(this)||this;return e._src=i.asType(t,f),e._tgt=i.asType(r,f),e._pos=u,e}return __extends(t,n),Object.defineProperty(t.prototype,"dragSource",{get:function(){return this._src},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dropTarget",{get:function(){return this._tgt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._pos},set:function(n){this._pos=i.asEnum(n,o)},enumerable:!0,configurable:!0}),t}(i.CancelEventArgs);t.TreeNodeDragDropEventArgs=l,function(n){n[n.Before=0]="Before";n[n.After=1]="After";n[n.Into=2]="Into"}(o=t.DropPosition||(t.DropPosition={}));h=function(){function n(n){this._tree=i.asType(n,u);this._dragstartBnd=this._dragstart.bind(this);this._dragoverBnd=this._dragover.bind(this);this._dropBnd=this._drop.bind(this);this._dragendBnd=this._dragend.bind(this);var t=this._tree,r=t.hostElement;t.addEventListener(r,'dragstart',this._dragstartBnd);t.addEventListener(r,'dragover',this._dragoverBnd);t.addEventListener(r,'dragleave',this._dragoverBnd);t.addEventListener(r,'drop',this._dropBnd);t.addEventListener(r,'dragend',this._dragendBnd);t.addEventListener(r,'keydown',this._keydown)}return n.prototype.dispose=function(){var n=this._tree,t=n.hostElement;n.removeEventListener(t,'dragstart',this._dragstartBnd);n.removeEventListener(t,'dragover',this._dragoverBnd);n.removeEventListener(t,'dragleave',this._dragoverBnd);n.removeEventListener(t,'drop',this._dropBnd);n.removeEventListener(t,'dragend',this._dragendBnd);n.removeEventListener(t,'keydown',this._keydown);this._showDragMarker()},n.prototype._dragstart=function(t){var h;if(!t.defaultPrevented){var r=n,o=this._tree,s=i.closest(t.target,'.'+u._CND);r._drgSrc=f._isNode(s)?new f(o,s):null;r._drgSrc&&(h=new e(r._drgSrc),o.onDragStart(h)||(r._drgSrc=null));r._drgSrc&&t.dataTransfer?(i._startDrag(t.dataTransfer,'copyMove'),t.stopPropagation()):t.preventDefault()}},n.prototype._dragover=function(n){this._handleDragDrop(n,!1)},n.prototype._drop=function(n){this._handleDragDrop(n,!0)},n.prototype._dragend=function(){n._drgSrc=null;this._showDragMarker();this._tree.onDragEnd()},n.prototype._keydown=function(n){n.defaultPrevented||n.keyCode==i.Key.Escape&&this._dragendBnd(null)},n.prototype._handleDragDrop=function(t,r){var y=n,h,b,e,p,k,d,g;if(!t.defaultPrevented&&y._drgSrc){if(b=document.elementFromPoint(t.clientX,t.clientY),e=i.closest(b,'.'+u._CND),e==null&&(p=i.Control.getControl(i.closest(b,'.wj-treeview')),p instanceof u&&p.totalItemCount==0&&(e=p.hostElement)),e==y._drgSrc.element&&(e=null),e){var w=this._tree,s=new f(w,e),v=o,c=v.Into,a=e.getBoundingClientRect(),nt=s.hasPendingChildren?a.height/2:a.height/3;s.element==null?(a=i.Rect.fromBoundingRect(a),a.inflate(-12,-12),c=v.Before):t.clientY<a.top+nt?c=v.Before:(t.clientY>a.bottom-nt||s.hasPendingChildren)&&(c=v.After,!s.hasChildren||s.isCollapsed||s.hasPendingChildren||(c=v.Before,s=s.next(!0,!1),e=s.element,a=e.getBoundingClientRect()));y._drgSrc._contains(s)?e=null:(h=new l(y._drgSrc,s,c),h.cancel=y._drgSrc.treeView!=s.treeView,w.onDragOver(h)||(e=null))}e&&(c=h.position,c==v.Before?(k=h.dragSource.next(!0,!1),k&&k.element==e&&(e=null)):c==v.After&&(d=h.dragSource.previous(!0,!1),d&&d.element==e&&(e=null)));e&&!r?(t.dataTransfer.dropEffect='move',t.preventDefault(),t.stopPropagation(),this._showDragMarker(a,c)):this._showDragMarker();e&&r&&w.onDrop(h)&&(w.hostElement.focus(),g=h.dragSource,g.move(h.dropTarget,h.position),g.select())}},n.prototype._showDragMarker=function(t,r){var u=this._tree,f=n._dMarker.parentElement;if(t){var e=u.hostElement.getBoundingClientRect(),h=r==o.After?t.bottom:t.top,s={top:Math.round(h-e.top+u.hostElement.scrollTop-2),width:'75%',height:r==o.Into?t.height:4,opacity:r==o.Into?'0.15':''};u.rightToLeft?s.right=Math.round(e.right-t.right):s.left=Math.round(t.left-e.left);i.setCss(n._dMarker,s);f!=u._root&&u._root.appendChild(n._dMarker)}else f&&f.removeChild(n._dMarker)},n}();h._dMarker=i.createElement('<div class="wj-marker">&nbsp;</div>');t._TreeDragDropManager=h;s=function(){function n(n){this.path=n}return Object.defineProperty(n.prototype,"path",{get:function(){return this._path},set:function(n){if(this._path=n,i.isString(n))this._bindings=[new i.Binding(n)];else if(i.isArray(n)){this._bindings=[];for(var t=0;t<n.length;t++)this._bindings.push(new i.Binding(n[t]))}else n!=null&&i.assert(!1,'Path should be a string or an array of strings.');this._maxLevel=this._bindings?this._bindings.length-1:-1},enumerable:!0,configurable:!0}),n.prototype.getValue=function(n,t){var i=Math.min(t,this._maxLevel);return i>-1?this._bindings[i].getValue(n):null},n.prototype.setValue=function(n,t,i){var r=Math.min(t,this._maxLevel);r>-1&&this._bindings[r].setValue(n,i)},n}();t._BindingArray=s})