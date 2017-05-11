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
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo.chart","wijmo/wijmo","wijmo/wijmo.chart.radar"],function(n,t,i,r,u){"use strict";var f,c,o,e,s,h;Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.radar=u,function(n){n[n.Column=0]="Column";n[n.Scatter=1]="Scatter";n[n.Line=2]="Line";n[n.LineSymbols=3]="LineSymbols";n[n.Area=4]="Area"}(f=t.RadarChartType||(t.RadarChartType={}));c=function(n){function t(t,i){var r=n.call(this,t,i)||this;return r._chartType=f.Line,r._startAngle=0,r._totalAngle=360,r._reversed=!1,r._areas=[],r}return __extends(t,n),Object.defineProperty(t.prototype,"_radarLinePlotter",{get:function(){return this.__radarLinePlotter==null&&(this.__radarLinePlotter=new s,this._initPlotter(this.__radarLinePlotter)),this.__radarLinePlotter},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_radarColumnPlotter",{get:function(){return this.__radarColumnPlotter==null&&(this.__radarColumnPlotter=new h,this._initPlotter(this.__radarColumnPlotter)),this.__radarColumnPlotter},enumerable:!0,configurable:!0}),t.prototype._initAxes=function(){n.prototype._initAxes.call(this);this.axes.pop();this.axes.pop();this.axisX=new e(i.Position.Bottom);this.axisX.majorGrid=!0;this.axisY=new e(i.Position.Left);this.axisY.majorTickMarks=i.TickMark.Outside;this.axes.push(this.axisX);this.axes.push(this.axisY)},t.prototype._layout=function(t,i,u){var e,f;n.prototype._layout.call(this,t,i,u);e=this.axisX._height;this._plotRect.top+=e/2;f=this._plotRect;this._radius=Math.min(f.width,f.height)/2;this._center=new r.Point(f.left+f.width/2,f.top+f.height/2)},Object.defineProperty(t.prototype,"chartType",{get:function(){return this._chartType},set:function(n){n!=this._chartType&&(this._chartType=r.asEnum(n,f),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"startAngle",{get:function(){return this._startAngle},set:function(n){n!=this._startAngle&&(this._startAngle=r.asNumber(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"totalAngle",{get:function(){return this._totalAngle},set:function(n){n!=this._totalAngle&&n>=0&&(this._totalAngle=r.asNumber(n,!0),this._totalAngle<=0&&(r.assert(!1,"totalAngle must be greater than 0."),this._totalAngle=0),this._totalAngle>360&&(r.assert(!1,"totalAngle must be less than or equal to 360."),this._totalAngle=360),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"reversed",{get:function(){return this._reversed},set:function(n){n!=this._reversed&&(this._reversed=r.asBoolean(n,!0),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stacking",{get:function(){return this._stacking},set:function(n){n!=this._stacking&&(this._stacking=r.asEnum(n,i.Stacking),this.invalidate())},enumerable:!0,configurable:!0}),t.prototype._getChartType=function(){var n=i.ChartType.Line;switch(this.chartType){case f.Area:n=i.ChartType.Area;break;case f.Line:n=i.ChartType.Line;break;case f.Column:n=i.ChartType.Column;break;case f.LineSymbols:n=i.ChartType.LineSymbols;break;case f.Scatter:n=i.ChartType.Scatter}return n},t.prototype._getPlotter=function(t){var u=this.chartType,i=null,e=!1,r;t&&(r=t.chartType,r!=null&&r!=u&&(u=r,e=!0));switch(u){case f.Line:this._radarLinePlotter.hasSymbols=!1;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!1;i=this._radarLinePlotter;break;case f.LineSymbols:this._radarLinePlotter.hasSymbols=!0;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!1;i=this._radarLinePlotter;break;case f.Area:this._radarLinePlotter.hasSymbols=!1;this._radarLinePlotter.hasLines=!0;this._radarLinePlotter.isArea=!0;i=this._radarLinePlotter;break;case f.Scatter:this._radarLinePlotter.hasSymbols=!0;this._radarLinePlotter.hasLines=!1;this._radarLinePlotter.isArea=!1;i=this._radarLinePlotter;break;case f.Column:this._radarColumnPlotter.isVolume=!1;this._radarColumnPlotter.width=.8;i=this._radarColumnPlotter;break;default:i=n.prototype._getPlotter.call(this,t)}return i},t.prototype._convertPoint=function(n,t){var i=new r.Point,u=this._center;return i.x=u.x+n*Math.sin(t),i.y=u.y-n*Math.cos(t),i},t.prototype._createSeries=function(){return new o},t.prototype._clearCachedValues=function(){n.prototype._clearCachedValues.call(this);this._isPolar=!1;this._areas=[]},t.prototype._performBind=function(){n.prototype._performBind.call(this);this._xDataType===r.DataType.Number&&(this._isPolar=!0)},t.prototype._render=function(t,i){i===void 0&&(i=!0);this._areas=[];n.prototype._render.call(this,t,i)},t}(i.FlexChartCore);t.FlexRadar=c;o=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),Object.defineProperty(t.prototype,"chartType",{get:function(){return this._finChartType},set:function(n){n!=this._finChartType&&(this._finChartType=r.asEnum(n,f,!0),this._invalidate())},enumerable:!0,configurable:!0}),t.prototype._getChartType=function(){var n;switch(this.chartType){case f.Area:n=i.ChartType.Area;break;case f.Line:n=i.ChartType.Line;break;case f.Column:n=i.ChartType.Column;break;case f.LineSymbols:n=i.ChartType.LineSymbols;break;case f.Scatter:n=i.ChartType.Scatter}return n},t}(i.SeriesBase);t.FlexRadarSeries=o;e=function(n){function t(){var t=n!==null&&n.apply(this,arguments)||this;return t._points=[],t._axisLabels=[],t}return __extends(t,n),t.prototype._render=function(t){var r=this,u,f;n.prototype._render.call(this,t);u=this._axisLabels;u.length&&(f=function(){var n=r.axisType==i.AxisType.X?'wj-axis-x-labels '+i.FlexChart._CSS_AXIS_X:'wj-axis-y-labels '+i.FlexChart._CSS_AXIS_Y;t.startGroup(n);u.forEach(function(n){var u=n.labelAngle;u>0?u==90?i.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,u,n.class):i.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,u,n.class):u<0?u==-90?i.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,u,n.class):i.FlexChart._renderRotatedText(t,n.text,n.pos,n.align,n.vAlign,n.pos,u,n.class):r._renderLabel(t,n.val,n.text,n.pos,n.align,n.vAlign,n.class)});t.endGroup();r._axisLabels=[];r._chart.rendered.removeHandler(f)},this._chart.rendered.addHandler(f,this))},t.prototype._getHeight=function(t,r){var u=n.prototype._getHeight.call(this,t,r);return this._axisType==i.AxisType.Y&&(u=4),this._height=u*2,u*2},t.prototype._updateActualLimits=function(t,i,r,u,f){var h=this;u===void 0&&(u=null);f===void 0&&(f=null);n.prototype._updateActualLimits.call(this,t,i,r,u,f);var e=this._chart,s=this._lbls,c=this.actualMin.valueOf?this.actualMin.valueOf():this.actualMin,l=this.actualMax.valueOf?this.actualMax.valueOf():this.actualMax,o;this._lbls&&this===e.axisX&&(e._angles=[],this._isTimeAxis&&this._lbls.length===0&&this._values.forEach(function(n){s.push(h._formatValue(n))}),o=s.length,e.totalAngle<360&&(o-=1),s.forEach(function(n,t){var i=c+t/o*(l-c),r=e.startAngle+t/o*e.totalAngle;isNaN(r)||isNaN(i)||e._angles.push({value:h.convert(i),angle:r})}))},t.prototype._updateActualLimitsByChartType=function(n,t,r){var f=this._chart,e=f._getChartType(),u;return e!=i.ChartType.Column&&f.totalAngle===360&&this.axisType===i.AxisType.X&&(this._isTimeAxis?(u=(f._xlabels.length||f._xvals.length)-1,u=u<1?1:u,r+=(r-t)/u):r+=1),{min:t,max:r}},t.prototype.convert=function(n,t,r){var e=t==null?this.actualMax:t,u=r==null?this.actualMin:r,f=this._chart,o,s;return f?e==u?0:this.axisType===i.AxisType.X?f.reversed?(f.startAngle-(n-u)/(e-u)*f.totalAngle)*Math.PI/180:(f.startAngle+(n-u)/(e-u)*f.totalAngle)*Math.PI/180:(o=this.logBase,o?n<=0?NaN:(s=Math.log(e/u),Math.log(n/u)/s*f._radius):(n-u)/(e-u)*f._radius):NaN},t.prototype._renderLineAndTitle=function(n){var t=this._chart,u=i.FlexChart._CSS_LINE,r=(t.startAngle-90)*Math.PI/180,f=t.totalAngle*Math.PI/180,e=t._radius;this.axisType===i.AxisType.X&&this.axisLine&&(n.stroke=i.FlexChart._FG,t._isPolar?(r=t.reversed?r-f:r,n.drawPieSegment(t._center.x,t._center.y,e,r,f,u)):this._renderPolygon(n,e,u))},t.prototype._renderPolygon=function(n,t,i){var r=this._chart,u=r._angles,o=u.length,h=r.axisX.minorGrid,f=[],e=[],s;u.forEach(function(n,i){var o,s;h&&i>0&&(o=r._convertPoint(t,n.value-(n.value-u[i-1].value)/2),f.push(o.x),e.push(o.y));s=r._convertPoint(t,n.value);f.push(s.x);e.push(s.y)});r.totalAngle<360?(f.push(r._center.x),e.push(r._center.y)):h&&o>=2&&(s=r._convertPoint(t,u[o-1].value-(u[o-2].value-u[o-1].value)/2),f.push(s.x),e.push(s.y));n.drawPolygon(f,e,i)},t.prototype._renderMinors=function(n,t){var f=this,r=this._chart,l=i.FlexChart._CSS_GRIDLINE_MINOR,a=this.minorGrid,e=r._angles,s=e.length,v=r.axisX.minorGrid,y=i.FlexChart._FG,p=this._GRIDLINE_WIDTH,w=r.startAngle*Math.PI/180,b=r.totalAngle*Math.PI/180,o=this._TICK_OVERLAP,h=this.minorTickMarks,c=!0,u;this._vals.minor=t;h==i.TickMark.Outside?o=1:h==i.TickMark.Inside?o=-1:h==i.TickMark.Cross?o=0:c=!1;this.axisType==i.AxisType.Y?(n.stroke=y,n.strokeWidth=p,t.forEach(function(t){var i=f.convert(t),h;a&&f._renderYGridLine(n,r,i,l);c&&(e.forEach(function(t,s){var h,c;v&&s>0&&(u=t.value-(t.value-e[s-1].value)/2,h=r._convertPoint(i,u),f._drawMinorTickLength(n,o,u,h));u=t.value;c=r._convertPoint(i,u);f._drawMinorTickLength(n,o,u,c)}),v&&s>=2&&(u=e[s-1].value-(e[s-2].value-e[s-1].value)/2,h=r._convertPoint(i,u),f._drawMinorTickLength(n,o,u,h)))})):(n.stroke=y,n.strokeWidth=p,t.forEach(function(t){var i=f.convert(t);a&&f._renderXGridLine(n,r,i,l);c}))},t.prototype._drawMinorTickLength=function(n,t,r,u){var f=this._TICK_HEIGHT,e=i.FlexChart._CSS_TICK_MINOR,o=.5*(t-1)*f*Math.cos(r),s=.5*(1+t)*f*Math.cos(r),h=.5*(t-1)*f*Math.sin(r),c=.5*(1+t)*f*Math.sin(r);n.drawLine(u.x+o,u.y+h,u.x+s,u.y+c,e)},t.prototype._renderLabelsAndTicks=function(n,t,u,f,e,o,s,h,c){var d,y,g,a,v,w,b;this._points=[];e=this.labelAngle||0;var nt=!0,l=this._chart,tt=this.labelPadding||2,p=i.FlexChart._CSS_LABEL,it=i.FlexChart._CSS_GRIDLINE,ot=i.FlexChart._CSS_TICK,rt=i.FlexChart._FG,ut=this._TICK_WIDTH,k=this.majorGrid,ft=i.FlexChart._FG,et=this._GRIDLINE_WIDTH,st=l.startAngle*Math.PI/180,ht=l.totalAngle*Math.PI/180;return this.axisType==i.AxisType.Y?(k=u!=this.actualMin&&k&&u!=this.actualMax,d=this.convert(u),y=l._convertPoint(d,st),k&&(n.stroke=ft,n.strokeWidth=et,this._renderYGridLine(n,l,d,it)),n.stroke=rt,n.strokeWidth=ut,s&&(a=new r.Point(y.x-tt-Math.abs(h-c),y.y),this._axisLabels.push({val:u,text:f,pos:a,align:2,vAlign:1,labelAngle:e,class:p})),o!=i.TickMark.None&&nt&&n.drawLine(y.x-c,y.y,y.x-h,y.y,ot)):(g=this.convert(u),k&&(n.stroke=ft,n.strokeWidth=et,this._renderXGridLine(n,l,g,it)),n.stroke=rt,n.strokeWidth=ut,s&&(a=l._convertPoint(l._radius+tt,g),v=l._angles&&l._angles.length?l._angles[t].angle:l.startAngle+(u-this.actualMin)*l.totalAngle/(this.actualMax-this.actualMin),v=v%360,v=v>=0?v:v+360,w=this._getXLabelVAlign(v),b=this._getXLabelAlign(v),l._isPolar&&(f=this._formatValue(v)),e>0?e==90?i.FlexChart._renderRotatedText(n,f,a,b,w,a,e,p):i.FlexChart._renderRotatedText(n,f,a,b,w,a,e,p):e<0?e==-90?i.FlexChart._renderRotatedText(n,f,a,b,w,a,e,p):i.FlexChart._renderRotatedText(n,f,a,b,w,a,e,p):this._renderLabel(n,u,f,a,b,w,p))),nt},t.prototype._renderXGridLine=function(n,t,i,r){var u=t._center,f=t._convertPoint(t._radius,i);n.drawLine(u.x,u.y,f.x,f.y,r)},t.prototype._renderYGridLine=function(n,t,i,r){var o=t._angles,f=t._center,u=t.startAngle*Math.PI/180,e=t.totalAngle*Math.PI/180;t._isPolar?(u=(t.startAngle-90)*Math.PI/180,u=t.reversed?u-e:u,n.drawPieSegment(f.x,f.y,i,u,e,r)):this._renderPolygon(n,i,r)},t.prototype._getXLabelVAlign=function(n){var t=1,i=this._chart,r=i.startAngle,u=i.reversed;return u&&(n=(360+r+(r%360-n%360))%360),n===0?t=2:n===180&&(t=0),t},t.prototype._getXLabelAlign=function(n){var t=0,i=this._chart,r=i.startAngle,u=i.reversed;return u&&(n=(360+r+(r%360-n%360))%360),n>0&&n<180?t=-1:n>180&&n<360&&(t=1),t+1},t.prototype._createTimeLabels=function(t,r,u,f){var o=this,e,s;if(this._axisType==i.AxisType.Y)n.prototype._createTimeLabels.call(this,t,r,u,f);else{if(e=this._values,s=this.format,!e||e.length===0)return;e.forEach(function(n){u.push(n);f.push(o._formatValue(n))})}},t}(i.Axis);t.FlexRadarAxis=e;s=function(n){function t(){var t=n!==null&&n.apply(this,arguments)||this;return t.isArea=!1,t}return __extends(t,n),t.prototype._getLabelPoint=function(n,t){var i=n._getAxisX(),r=n._getAxisY(),u=i.convert(t.dataX),f=r.convert(t.dataY);return this.chart._convertPoint(f,u)},t.prototype.plotSeries=function(n,t,u,f,e){var c=r.asType(f,i.SeriesBase),l=this.chart,st=c._getChartType()||l._getChartType(),v=l.series.indexOf(f),d=f.getValues(0),b=f.getValues(1),it,rt,at,ut,vt,ot,g,p,w,o,s,h;if(d){b||(b=this.dataInfo.getXVals());var nt=i._BasePlotter.cloneStyle(f.style,['fill']),k=d.length,ht=!0;b?k=Math.min(k,b.length):(ht=!1,b=new Array(k));var pt=this._DEFAULT_WIDTH,tt=c._getSymbolFill(v),wt=c._getAltSymbolFill(v)||tt,ft=c._getSymbolStroke(v),bt=c._getAltSymbolStroke(v)||ft,et=c._getSymbolSize();n.stroke=ft;n.strokeWidth=pt;n.fill=tt;var a=[],y=[],ct=this.stacking!=i.Stacking.None&&!c._isCustomAxisY(),lt=this.stacking==i.Stacking.Stacked100pc&&!c._isCustomAxisY();for(c._getChartType()!==undefined&&(ct=lt=!1),it=this.chart.interpolateNulls,rt=!1,o=0;o<k;o++)if(s=ht?b[o]:o,h=d[o],i._DataInfo.isValid(s)&&i._DataInfo.isValid(h)){ct&&(lt&&(at=this.dataInfo.getStackedAbsSum(s),h=h/at),h>=0?(ut=isNaN(this.stackPos[s])?0:this.stackPos[s],h=this.stackPos[s]=ut+h):(ut=isNaN(this.stackNeg[s])?0:this.stackNeg[s],h=this.stackNeg[s]=ut+h));vt=new i._DataPoint(v,o,s,h);var kt=t.convert(s),dt=u.convert(h),yt=this.chart._convertPoint(dt,kt);s=yt.x;h=yt.y;isNaN(s)||isNaN(h)?(rt=!0,it!==!0&&(a.push(undefined),y.push(undefined))):(a.push(s),y.push(h),ot=new i._CircleArea(new r.Point(s,h),.5*et),ot.tag=vt,this.hitTester.add(ot,v))}else rt=!0,it!==!0&&(a.push(undefined),y.push(undefined));if(g=0,this.hasLines)if(n.fill=this.isArea?e._getColorLight(v):'none',rt&&it!==!0){for(p=[],w=[],o=0;o<k;o++)a[o]===undefined?(p.push(undefined),w.push(0)):(p.push(a[o]),w.push(y[o]));p.length>1&&(l._isPolar&&st!==i.ChartType.Area?this._drawLines(n,p,w,null,nt,this.chart._plotrectId):(l.totalAngle<360&&(p.push(l._center.x),w.push(l._center.y)),n.drawPolygon(p,w,null,nt,this.chart._plotrectId)),this.hitTester.add(new i._LinesArea(p,w),v),g++)}else l._isPolar&&st!==i.ChartType.Area?this._drawLines(n,a,y,null,nt,this.chart._plotrectId):(l.totalAngle<360&&(a.push(l._center.x),y.push(l._center.y)),n.drawPolygon(a,y,null,nt,this.chart._plotrectId)),this.hitTester.add(new i._LinesArea(a,y),v),g++;for(n.fill=tt,o=0;o<k;o++)s=a[o],h=y[o],this.hasLines===!1&&(n.fill=d[o]>0?tt:wt,n.stroke=d[o]>0?ft:bt),this.isValid(s,h,t,u)&&((this.hasSymbols||this.chart.itemFormatter)&&et>0&&this._drawSymbol(n,s,h,et,c,o),f._setPointIndex(o,g),g++)}},t}(i._LinePlotter);t._RadarLinePlotter=s;h=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return __extends(t,n),t.prototype.adjustLimits=function(n){this.dataInfo=n;var f=n.getMinX(),t=n.getMinY(),e=n.getMaxX(),u=n.getMaxY(),i=n.getDeltaX();return i<=0&&(i=1),this.chart.totalAngle<360&&(i=0),this.unload(),this.chart.axisY.logBase||(this.origin>u?u=this.origin:this.origin<t&&(t=this.origin)),new r.Rect(f,t,e-f+i,u-t)},t.prototype._getLabelPoint=function(n,t){var i=n._getAxisX(),r=n._getAxisY(),u=i.convert(t.dataX),f=r.convert(t.dataY);return this.chart._convertPoint(f,u)},t.prototype.plotSeries=function(n,t,u,f,e,o){var l=this.chart.series.indexOf(f),p=r.asType(f,i.SeriesBase),fi=this.chart.options,a=this.width,s=this.chart,rt=Math.PI/-2,ft,d,vt,wt,bt,v,c,y,h,g,nt,gt,ni,ti,it;o=o||0;var pt=p._getAxisY()._uniqueId,k,ei=this.stackNegMap[pt],st=this.stackPosMap[pt],ut=this.stacking!=i.Stacking.None,ht=this.stacking==i.Stacking.Stacked100pc,ct=f.getValues(0),b=f.getValues(1);if(ct){b||(b=this.dataInfo.getXVals());ft=b?s.totalAngle/b.length:s.totalAngle/(t.actualMax-t.actualMin);ft>0&&(a=ut?ft*a*Math.PI/180:ft*Math.pow(a,o+1)*Math.PI/180);var et=p._getSymbolFill(l),lt=p._getAltSymbolFill(l)||et,ot=p._getSymbolStroke(l),at=p._getAltSymbolStroke(l)||ot,tt=ct.length;b!=null&&(tt=Math.min(tt,b.length));d=this.origin;vt=0;p._getChartType()!==undefined&&(ut=ht=!1);d<u.actualMin?d=u.actualMin:d>u.actualMax&&(d=u.actualMax);var ui=u.convert(d),kt=t.actualMin,dt=t.actualMax;for(p._isCustomAxisY()&&(ut=ht=!1),s._areas[l]||(s._areas[l]=[]),v=0;v<tt;v++)if(c=b?b[v]:v,y=ct[v],this._getSymbolOrigin&&(ui=u.convert(this._getSymbolOrigin(d,v,tt))),this._getSymbolStyles&&(h=this._getSymbolStyles(v,tt),et=h&&h.fill?h.fill:et,lt=h&&h.fill?h.fill:lt,ot=h&&h.stroke?h.stroke:ot,at=h&&h.stroke?h.stroke:at),wt=y>0?et:lt,bt=y>0?ot:at,n.fill=wt,n.stroke=bt,i._DataInfo.isValid(c)&&i._DataInfo.isValid(y)){if(ut){if(g=c-.5*a,nt=c+.5*a,g<kt&&nt<kt||g>dt&&nt>dt)continue;if(g=t.convert(g),nt=t.convert(nt),!i._DataInfo.isValid(g)||!i._DataInfo.isValid(nt))continue;ht&&(ti=this.dataInfo.getStackedAbsSum(c),y=y/ti);it=isNaN(st[c])?0:st[c];gt=it;ni=it+y;st[c]=it+y;var w=t.convert(c),ii=u.convert(gt),ri=u.convert(ni);w=w-a/2;n.drawDonutSegment(s._center.x,s._center.y,ri,ii,w+rt,a,null,p.symbolStyle);k=new i._DonutSegment(new r.Point(s._center.x,s._center.y),ri,ii,w+rt,a);k.tag=new i._DataPoint(l,v,c,it+y);this.hitTester.add(k,l)}else{var w=t.convert(c),yt=u.convert(y),oi=s._convertPoint(yt,w);w=w-a/2;n.drawPieSegment(s._center.x,s._center.y,yt,w+rt,a,null,p.symbolStyle);k=new i._PieSegment(new r.Point(s._center.x,s._center.y),yt,w+rt,a);k.tag=new i._DataPoint(l,v,c,y);this.hitTester.add(k,l)}s._areas[l].push(k);f._setPointIndex(v,vt);vt++}}},t}(i._BarPlotter);t._RadarBarPlotter=h})