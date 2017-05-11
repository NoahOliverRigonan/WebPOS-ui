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
System.register(["wijmo/wijmo","wijmo/wijmo.chart","wijmo/wijmo.chart.finance"],function(n,t){"use strict";function nt(n){return i.asNumber(n,!0,!1),n>0?Math.floor(n):Math.ceil(n)}function tt(n){return arguments.length>1&&(n=Array.prototype.slice.call(arguments)),i.asArray(n,!1),n.reduce(function(n,t){return n+i.asNumber(t)},0)}function o(n){return arguments.length>1&&(n=Array.prototype.slice.call(arguments)),i.asArray(n,!1),tt(n)/n.length}function st(n){return arguments.length>1&&(n=Array.prototype.slice.call(arguments)),i.asArray(n,!1),Math.min.apply(null,n)}function ht(n){return arguments.length>1&&(n=Array.prototype.slice.call(arguments)),i.asArray(n,!1),Math.max.apply(null,n)}function it(n){arguments.length>1&&(n=Array.prototype.slice.call(arguments));i.asArray(n,!1);var t=o(n),r=n.map(function(n){return Math.pow(n-t,2)});return o(r)}function ct(n){return arguments.length>1&&(n=Array.prototype.slice.call(arguments)),i.asArray(n,!1),Math.sqrt(it(n))}function rt(n,t,r,u){var f;u===void 0&&(u=14);i.asArray(n,!1);i.asArray(t,!1);i.asArray(r,!1);i.asInt(u,!1,!0);var s=ut(n,t,r,u),h=Math.min(n.length,t.length,r.length,s.length),e=[];for(i.assert(h>u&&u>1,"Average True Range period must be an integer less than the length of the data and greater than one."),f=0;f<h;f++)i.asNumber(n[f],!1),i.asNumber(t[f],!1),i.asNumber(r[f],!1),i.asNumber(s[f],!1),f+1===u?e.push(o(s.slice(0,u))):f+1>u&&e.push(((u-1)*e[e.length-1]+s[f])/u);return e}function ut(n,t,r,u){var o,e,f;for(u===void 0&&(u=14),i.asArray(n,!1),i.asArray(t,!1),i.asArray(r,!1),i.asInt(u,!1,!0),o=Math.min(n.length,t.length,r.length),e=[],i.assert(o>u&&u>1,"True Range period must be an integer less than the length of the data and greater than one."),f=0;f<o;f++)i.asNumber(n[f],!1),i.asNumber(t[f],!1),i.asNumber(r[f],!1),f===0?e.push(n[f]-t[f]):e.push(Math.max(n[f]-t[f],Math.abs(n[f]-r[f-1]),Math.abs(t[f]-r[f-1])));return e}function ft(n,t){var u,r;for(i.asArray(n,!1),i.asNumber(t,!1,!0),i.assert(n.length>t&&t>1,"Simple Moving Average period must be an integer less than the length of the data and greater than one."),u=[],r=t;r<=n.length;r++)u.push(o(n.slice(r-t,r)));return u}function lt(n,t){var r;i.asArray(n,!1);i.asNumber(t,!1,!0);i.assert(n.length>t&&t>1,"Exponential Moving Average period must be an integer less than the length of the data and greater than one.");var u=[],f=2/(t+1),e=ft(n,t);for(n=n.slice(t-1),r=0;r<n.length;r++)r===0?u.push(e[0]):u.push((n[r]-u[r-1])*f+u[r-1]);return u}function at(n,t,r){var f,u;for(r===void 0&&(r=1),i.asNumber(n,!1),i.asNumber(t,!1),i.asNumber(r,!1),i.assert(n<t,"begin argument must be less than end argument."),f=[],u=n;u<=t;u+=r)f.push(u);return f}var e=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),vt=t&&t.id,i,u,et,r,ot,a,l,v,h,y,p,w,b,c,f,s,k,d,g;return n("_trunc",nt),n("_sum",tt),n("_average",o),n("_minimum",st),n("_maximum",ht),n("_variance",it),n("_stdDeviation",ct),n("_avgTrueRng",rt),n("_trueRng",ut),n("_sma",ft),n("_ema",lt),n("_range",at),{setters:[function(n){i=n},function(n){u=n},function(n){et=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.chart=window.wijmo.chart||{};window.wijmo.chart.finance=et,function(n){n[n.Column=0]="Column";n[n.Scatter=1]="Scatter";n[n.Line=2]="Line";n[n.LineSymbols=3]="LineSymbols";n[n.Area=4]="Area";n[n.Candlestick=5]="Candlestick";n[n.HighLowOpenClose=6]="HighLowOpenClose";n[n.HeikinAshi=7]="HeikinAshi";n[n.LineBreak=8]="LineBreak";n[n.Renko=9]="Renko";n[n.Kagi=10]="Kagi";n[n.ColumnVolume=11]="ColumnVolume";n[n.EquiVolume=12]="EquiVolume";n[n.CandleVolume=13]="CandleVolume";n[n.ArmsCandleVolume=14]="ArmsCandleVolume"}(r||(r={}));n("FinancialChartType",r);ot=function(n){function t(t,i){var u=n.call(this,t,null)||this;return u._chartType=r.Line,u.__heikinAshiPlotter=null,u.__lineBreakPlotter=null,u.__renkoPlotter=null,u.__kagiPlotter=null,u.initialize(i),u}return e(t,n),Object.defineProperty(t.prototype,"chartType",{get:function(){return this._chartType},set:function(n){n!=this._chartType&&(this._chartType=i.asEnum(n,r),this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this._options},set:function(n){n!=this._options&&(this._options=n,this.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_heikinAshiPlotter",{get:function(){return this.__heikinAshiPlotter===null&&(this.__heikinAshiPlotter=new b,this._initPlotter(this.__heikinAshiPlotter)),this.__heikinAshiPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_lineBreakPlotter",{get:function(){return this.__lineBreakPlotter===null&&(this.__lineBreakPlotter=new k,this._initPlotter(this.__lineBreakPlotter)),this.__lineBreakPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_renkoPlotter",{get:function(){return this.__renkoPlotter===null&&(this.__renkoPlotter=new d,this._initPlotter(this.__renkoPlotter)),this.__renkoPlotter},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_kagiPlotter",{get:function(){return this.__kagiPlotter===null&&(this.__kagiPlotter=new g,this._initPlotter(this.__kagiPlotter)),this.__kagiPlotter},enumerable:!0,configurable:!0}),t.prototype._getChartType=function(){var n=null;switch(this.chartType){case r.Area:n=u.ChartType.Area;break;case r.Line:case r.Kagi:n=u.ChartType.Line;break;case r.Column:case r.ColumnVolume:n=u.ChartType.Column;break;case r.LineSymbols:n=u.ChartType.LineSymbols;break;case r.Scatter:n=u.ChartType.Scatter;break;case r.Candlestick:case r.Renko:case r.HeikinAshi:case r.LineBreak:case r.EquiVolume:case r.CandleVolume:case r.ArmsCandleVolume:n=u.ChartType.Candlestick;break;case r.HighLowOpenClose:n=u.ChartType.HighLowOpenClose}return n},t.prototype._getPlotter=function(t){var e=this.chartType,u=null,o=!1,f;t&&(f=t.chartType,f&&!i.isUndefined(f)&&f!=e&&(e=f,o=!0));switch(e){case r.HeikinAshi:u=this._heikinAshiPlotter;break;case r.LineBreak:u=this._lineBreakPlotter;break;case r.Renko:u=this._renkoPlotter;break;case r.Kagi:u=this._kagiPlotter;break;case r.ColumnVolume:u=n.prototype._getPlotter.call(this,t);u.isVolume=!0;u.width=1;break;case r.EquiVolume:u=n.prototype._getPlotter.call(this,t);u.isEqui=!0;u.isCandle=!1;u.isArms=!1;u.isVolume=!0;u.symbolWidth="100%";break;case r.CandleVolume:u=n.prototype._getPlotter.call(this,t);u.isEqui=!1;u.isCandle=!0;u.isArms=!1;u.isVolume=!0;u.symbolWidth="100%";break;case r.ArmsCandleVolume:u=n.prototype._getPlotter.call(this,t);u.isEqui=!1;u.isCandle=!1;u.isArms=!0;u.isVolume=!0;u.symbolWidth="100%";break;default:u=n.prototype._getPlotter.call(this,t)}return u},t.prototype._createSeries=function(){return new a},t}(u.FlexChartCore);n("FinancialChart",ot);a=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return e(t,n),Object.defineProperty(t.prototype,"chartType",{get:function(){return this._finChartType},set:function(n){n!=this._finChartType&&(this._finChartType=i.asEnum(n,r,!0),this._invalidate())},enumerable:!0,configurable:!0}),t.prototype._getChartType=function(){var n=null;switch(this.chartType){case r.Area:n=u.ChartType.Area;break;case r.Line:case r.Kagi:n=u.ChartType.Line;break;case r.Column:case r.ColumnVolume:n=u.ChartType.Column;break;case r.LineSymbols:n=u.ChartType.LineSymbols;break;case r.Scatter:n=u.ChartType.Scatter;break;case r.Candlestick:case r.Renko:case r.HeikinAshi:case r.LineBreak:case r.EquiVolume:case r.CandleVolume:case r.ArmsCandleVolume:n=u.ChartType.Candlestick;break;case r.HighLowOpenClose:n=u.ChartType.HighLowOpenClose}return n},t}(u.SeriesBase);n("FinancialSeries",a);l=function(){function n(n,t,i,r){this.highs=n;this.lows=t;this.opens=i;this.closes=r}return n.prototype.calculate=function(){},n}();n("_BaseCalculator",l);v=function(n){function t(t,i,r,u){return n.call(this,t,i,r,u)||this}return e(t,n),t.prototype.calculate=function(){var e=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),u,f,t,r,i=[],n;if(e<=0)return i;for(n=0;n<e;n++)r=o(this.highs[n],this.lows[n],this.opens[n],this.closes[n]),n===0?(t=o(this.opens[n],this.closes[n]),u=this.highs[n],f=this.lows[n]):(t=o(i[n-1].open,i[n-1].close),u=Math.max(this.highs[n],t,r),f=Math.min(this.lows[n],t,r)),i.push({high:u,low:f,close:r,open:t,pointIndex:n,x:null});return i},t}(l);n("_HeikinAshiCalculator",v);h=function(n){function t(t,i,r,u,f,e,o,s){var h=n.call(this,t,i,r,u)||this;return h.xs=f,h.size=e,h.unit=o,h.fields=s,h}return e(t,n),t.prototype._getValues=function(){var t=[],i=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),n;switch(this.fields){case f.High:t=this.highs;break;case f.Low:t=this.lows;break;case f.Open:t=this.opens;break;case f.HL2:for(n=0;n<i;n++)t.push(o(this.highs[n],this.lows[n]));break;case f.HLC3:for(n=0;n<i;n++)t.push(o(this.highs[n],this.lows[n],this.closes[n]));break;case f.HLOC4:for(n=0;n<i;n++)t.push(o(this.highs[n],this.lows[n],this.opens[n],this.closes[n]));break;case f.Close:default:t=this.closes}return t},t.prototype._getSize=function(){var n=this.unit===s.ATR?rt(this.highs,this.lows,this.closes,this.size):null;return this.unit===s.ATR?n[n.length-1]:this.size},t}(l);n("_BaseRangeCalculator",h);y=function(n){function t(t,i,r,u,f,e){return n.call(this,t,i,r,u,f,e)||this}return e(t,n),t.prototype.calculate=function(){var a=this.xs!==null&&this.xs.length>0,o=this.closes.length,f=[],n=[[],[]],e,t,s,i,h,u,c,l,r;if(o<=0)return f;for(e=[],r=1;r<o;r++){if(h=f.length,u=h-1,s=a?this.xs[r]:r,i=this.closes[r],u===-1){if(t=this.closes[0],t===i)continue}else if(e=this._trendExists(n)||this.size===1?n[0].slice(-this.size).concat(n[1].slice(-this.size)):n[0].slice(1-this.size).concat(n[1].slice(1-this.size)),c=Math.max.apply(null,e),l=Math.min.apply(null,e),i>c)t=Math.max(n[0][u],n[1][u]);else if(i<l)t=Math.min(n[0][u],n[1][u]);else continue;n[0].push(t);n[1].push(i);f.push({high:Math.max(t,i),low:Math.min(t,i),open:t,close:i,x:s,pointIndex:r})}return f},t.prototype._trendExists=function(n){if(n[1].length<this.size)return!1;for(var i=!1,r=n[1].slice(-this.size),t=1;t<this.size;t++)if(i=r[t]>r[t-1],!i)break;if(!i)for(t=1;t<this.size;t++)if(i=r[t]<r[t-1],!i)break;return i},t}(h);n("_LineBreakCalculator",y);p=function(n){function t(t,i,r,u,f,e,o,s){return n.call(this,t,i,r,u,f,e,o,s)||this}return e(t,n),t.prototype.calculate=function(){var h=this._getSize(),p=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),w=this._getValues(),b=this.xs!==null&&this.xs.length>0,u=[],r=[[],[]],o,v,t,k,n,c,l,e,a,y,i;if(p<=0)return u;for(i=1;i<p;i++){if(k=u.length,n=k-1,v=b?this.xs[i]:i,y=i,a=!1,this.fields===f.HighLow)if(n===-1)if(this.highs[i]>this.highs[0])t=this.highs[i];else if(this.lows[i]<this.lows[0])t=this.lows[i];else continue;else if(e=r[1][n]-r[0][n],e>0)if(this.highs[i]>r[1][n])t=this.highs[i];else if(this.lows[i]<r[1][n])t=this.lows[i];else continue;else if(this.lows[i]<r[1][n])t=this.lows[i];else if(this.highs[i]>r[1][n])t=this.highs[i];else continue;else t=w[i];if(this.unit===s.Percentage&&(h=t*this.size),n===-1){if(v=b?this.xs[0]:0,y=0,o=this.fields===f.HighLow?this.highs[0]:w[0],e=Math.abs(o-t),e<h)continue}else if(e=r[1][n]-r[0][n],l=Math.max(r[0][n],r[1][n]),c=Math.min(r[0][n],r[1][n]),e>0)if(t>l)a=!0;else if(e=l-t,e>=h)o=l;else continue;else if(t<c)a=!0;else if(e=t-c,e>=h)o=c;else continue;a?(r[1][n]=t,u[n].close=t,u[n].high=Math.max(u[n].open,u[n].close),u[n].low=Math.min(u[n].open,u[n].close)):(r[0].push(o),r[1].push(t),u.push({high:Math.max(o,t),low:Math.min(o,t),open:o,close:t,x:v,pointIndex:y}))}return u},t}(h);n("_KagiCalculator",p);w=function(n){function t(t,i,r,u,f,e,o,s,h){h===void 0&&(h=!1);var c=n.call(this,t,i,r,u,f,e,o,s)||this;return c.rounding=h,c}return e(t,n),t.prototype.calculate=function(){var e=this._getSize(),v=Math.min(this.highs.length,this.lows.length,this.opens.length,this.closes.length),b=this.xs!==null&&this.xs.length>0,y=this._getValues(),l=[],u=[[],[]],n,p,o,w,r,s,h,c,t,a,i;if(v<=0)return l;for(t=1;t<v;t++){if(w=l.length,r=w-1,p=b?this.xs[t]:t,this.fields===f.HighLow)if(r===-1)if(this.highs[t]-this.highs[0]>e)n=this.highs[0],o=this.highs[t];else if(this.lows[0]-this.lows[t]>e)n=this.lows[0],o=this.lows[t];else continue;else if(s=Math.min(u[0][r],u[1][r]),h=Math.max(u[0][r],u[1][r]),this.highs[t]-h>e)n=h,o=this.highs[t];else if(s-this.lows[t]>e)n=s,o=this.lows[t];else continue;else if(o=y[t],r===-1)n=y[0];else if(s=Math.min(u[0][r],u[1][r]),h=Math.max(u[0][r],u[1][r]),o>h)n=h;else if(o<s)n=s;else continue;if(c=o-n,!(Math.abs(c)<e))for(c=nt(c/e),a=0;a<Math.abs(c);a++)i={},this.rounding&&(n=this._round(n,e)),u[0].push(n),i.open=n,n=c>0?n+e:n-e,u[1].push(n),i.close=n,i.x=p,i.pointIndex=t,i.high=Math.max(i.open,i.close),i.low=Math.min(i.open,i.close),l.push(i)}return l},t.prototype._round=function(n,t){return Math.round(n/t)*t},t}(h);n("_RenkoCalculator",w);b=function(n){function t(){var t=n.call(this)||this;return t._symFactor=.7,t.clear(),t}return e(t,n),t.prototype.clear=function(){n.prototype.clear.call(this);this._haValues=null;this._calculator=null},t.prototype.plotSeries=function(n,t,r,f){var et=this,k,e,b;this._calculate(f);var c=i.asType(f,u.SeriesBase),s=this.chart.series.indexOf(f),h=f.getValues(1),g=this._symFactor,v=this._haValues.length,nt=!0;h?(k=this.dataInfo.getDeltaX(),k>0&&(g*=k)):h=this.dataInfo.getXVals();h?v=Math.min(v,h.length):(nt=!1,h=new Array(v));var ot=this._DEFAULT_WIDTH,st=c._getSymbolFill(s),ht=c._getAltSymbolFill(s)||"transparent",tt=c._getSymbolStroke(s),ct=c._getAltSymbolStroke(s)||tt,it=g,rt=f.getDataType(1)||f.chart._xDataType;n.strokeWidth=ot;var lt=t.actualMin,at=t.actualMax,ut=0,y,ft,o,p,w,d,l,a;for(e=0;e<v;e++)o=nt?h[e]:e,u._DataInfo.isValid(o)&&lt<=o&&o<=at&&(w=this._haValues[e].high,d=this._haValues[e].low,l=this._haValues[e].open,a=this._haValues[e].close,y=l<a?ht:st,ft=l<a?ct:tt,n.fill=y,n.stroke=ft,n.startGroup(),p=this._getDataPoint(s,e,o,f),this.chart.itemFormatter?(b=new u.HitTestInfo(this.chart,new i.Point(t.convert(o),r.convert(w)),u.ChartElement.SeriesSymbol),b._setData(c,e),b._setDataPoint(p),this.chart.itemFormatter(n,b,function(){et._drawSymbol(n,t,r,s,e,y,it,o,w,d,l,a,p,rt)})):this._drawSymbol(n,t,r,s,e,y,it,o,w,d,l,a,p,rt),n.endGroup(),f._setPointIndex(e,ut),ut++)},t.prototype._drawSymbol=function(n,t,r,f,e,o,s,h,c,l,a,v,y,p){var g,w=null,d=null,b=null,k=null,nt=p===i.DataType.Date?432e5:.5,tt;b=t.convert(h-nt*s);k=t.convert(h+nt*s);b>k&&(tt=b,b=k,k=tt);h=t.convert(h);u._DataInfo.isValid(a)&&u._DataInfo.isValid(v)&&(a=r.convert(a),v=r.convert(v),w=Math.min(a,v),d=w+Math.abs(a-v),n.drawRect(b,w,k-b,d-w),g=new u._RectArea(new i.Rect(b,w,k-b,d-w)),g.tag=y,this.hitTester.add(g,f));u._DataInfo.isValid(c)&&(c=r.convert(c),w!==null&&n.drawLine(h,w,h,c));u._DataInfo.isValid(l)&&(l=r.convert(l),d!==null&&n.drawLine(h,d,h,l))},t.prototype._getDataPoint=function(n,t,i,r){var f=new u._DataPoint(n,t,i,this._haValues[t].high),e=r._getItem(t),o=r._getBinding(0),s=r._getBinding(1),h=r._getBinding(2),c=r._getBinding(3),l=r._getAxisY();return f.item=u._BasePlotter.cloneStyle(e,[]),f.item[o]=this._haValues[t].high,f.item[s]=this._haValues[t].low,f.item[h]=this._haValues[t].open,f.item[c]=this._haValues[t].close,f.y=this._haValues[t].high,f.yfmt=l._formatValue(this._haValues[t].high),f},t.prototype._calculate=function(n){var t=n._getBindingValues(0),r=n._getBindingValues(1),u=n._getBindingValues(2),f=n._getBindingValues(3);this._calculator=new v(t,r,u,f);this._haValues=this._calculator.calculate();(this._haValues===null||i.isUndefined(this._haValues))&&this._init()},t.prototype._init=function(){this._haValues=[]},t}(u._FinancePlotter);n("_HeikinAshiPlotter",b);c=function(n){function t(){var t=n.call(this)||this;return t._symFactor=.7,t.clear(),t}return e(t,n),t.prototype.clear=function(){n.prototype.clear.call(this);this._rangeValues=null;this._rangeXLabels=null;this._calculator=null},t.prototype.unload=function(){var r,t,i;for(n.prototype.unload.call(this),i=0;i<this.chart.series.length;i++)(r=this.chart.series[i],r)&&(t=r._getAxisX(),t&&t.itemsSource&&(t.itemsSource=null))},t.prototype.adjustLimits=function(){var u,n,f,t=0,o=0,e=0,s=0,h,c=this.chart._xDataType===i.DataType.Date?.5:0,r;for(i.assert(this.chart.series.length<=1,"Current FinancialChartType only supports a single series"),r=0;r<this.chart.series.length;r++)(u=this.chart.series[r],this._calculate(u),this._rangeValues.length<=0||this._rangeXLabels.length<=0)||(n=this._rangeValues.map(function(n){return n.open}),n.push.apply(n,this._rangeValues.map(function(n){return n.close})),f=this._rangeXLabels.map(function(n){return n.value}),e=Math.min.apply(null,n),s=Math.max.apply(null,n),t=Math.min.apply(null,f),o=Math.max.apply(null,f),h=u._getAxisX(),h.itemsSource=this._rangeXLabels);return t-=c,new i.Rect(t,e,o-t+c,s-e)},t.prototype.plotSeries=function(n,t,r,f){var w=this,l,s,c,h,a,e,v;this._calculate(f);var o=this.chart.series.indexOf(f),b=this._rangeValues.length,k=t.actualMin,d=t.actualMax,g=this._DEFAULT_WIDTH,y=this._symFactor,nt=f._getSymbolFill(o),tt=f._getAltSymbolFill(o)||"transparent",p=f._getSymbolStroke(o),it=f._getAltSymbolStroke(o)||p;for(n.strokeWidth=g,l=0,e=0;e<b;e++)s=e,u._DataInfo.isValid(s)&&k<=s&&s<=d&&(c=this._rangeValues[e].open,h=this._rangeValues[e].close,n.fill=c>h?nt:tt,n.stroke=c>h?p:it,a=this._getDataPoint(o,e,f,Math.max(c,h)),n.startGroup(),this.chart.itemFormatter?(v=new u.HitTestInfo(this.chart,new i.Point(t.convert(s),r.convert(h)),u.ChartElement.SeriesSymbol),v._setData(f,e),v._setDataPoint(a),this.chart.itemFormatter(n,v,function(){w._drawSymbol(n,t,r,o,l,y,s,c,h,a)})):this._drawSymbol(n,t,r,o,l,y,s,c,h,a),n.endGroup(),f._setPointIndex(e,l),l++)},t.prototype._drawSymbol=function(n,t,r,f,e,o,s,h,c,l){var v,p,a,y,w,b;a=t.convert(s-.5*o);y=t.convert(s+.5*o);a>y&&(b=a,a=y,y=b);u._DataInfo.isValid(h)&&u._DataInfo.isValid(c)&&(h=r.convert(h),c=r.convert(c),v=Math.min(h,c),p=v+Math.abs(h-c),n.drawRect(a,v,y-a,p-v),w=new u._RectArea(new i.Rect(a,v,y-a,p-v)),w.tag=l,this.hitTester.add(w,f))},t.prototype._getDataPoint=function(n,t,i,r){var e=t,f=new u._DataPoint(n,t,e,r),o=i._getItem(this._rangeValues[t].pointIndex),s=i.bindingX||this.chart.bindingX,h=i._getBinding(0),c=i._getBinding(1),l=i._getBinding(2),a=i._getBinding(3),v=i._getAxisY();return f.item=u._BasePlotter.cloneStyle(o,[]),f.item[h]=this._rangeValues[t].high,f.item[c]=this._rangeValues[t].low,f.item[l]=this._rangeValues[t].open,f.item[a]=this._rangeValues[t].close,f.y=this._rangeValues[t].close,f.yfmt=v._formatValue(this._rangeValues[t].close),f.x=f.item[s],f.xfmt=this._rangeXLabels[t]._text,f},t.prototype._init=function(){this._rangeValues=[];this._rangeXLabels=[]},t.prototype._calculate=function(){},t.prototype._generateXLabels=function(n){var f=this,t,e=n._getAxisX(),r=n.getDataType(1)||this.chart._xDataType;this._rangeValues.forEach(function(n,o){var s=n.x;t=r===i.DataType.Date?i.Globalize.format(u.FlexChart._fromOADate(s),e.format||"d"):r===i.DataType.Number?e._formatValue(s):(r===null||r===i.DataType.String)&&f.chart._xlabels?f.chart._xlabels[s]:s.toString();f._rangeXLabels.push({value:o,text:t,_text:t})},this)},t.prototype.getOption=function(n,t){var r=this.chart.options;return(t&&(r=r?r[t]:null),r&&!i.isUndefined(r[n])&&r[n]!==null)?r[n]:undefined},t}(u._BasePlotter);n("_BaseRangePlotter",c),function(n){n[n.Close=0]="Close";n[n.High=1]="High";n[n.Low=2]="Low";n[n.Open=3]="Open";n[n.HighLow=4]="HighLow";n[n.HL2=5]="HL2";n[n.HLC3=6]="HLC3";n[n.HLOC4=7]="HLOC4"}(f||(f={}));n("DataFields",f),function(n){n[n.Fixed=0]="Fixed";n[n.ATR=1]="ATR";n[n.Percentage=2]="Percentage"}(s||(s={}));n("RangeMode",s);k=function(n){function t(){return n.call(this)||this}return e(t,n),t.prototype.clear=function(){n.prototype.clear.call(this);this._newLineBreaks=null},t.prototype._calculate=function(n){this._init();var t=n._getBindingValues(3),r=n.getValues(1)||this.chart._xvals;this._calculator=new y(null,null,null,t,r,this._newLineBreaks);this._rangeValues=this._calculator.calculate();(this._rangeValues===null||i.isUndefined(this._rangeValues))&&(this._rangeValues=[]);this._generateXLabels(n)},t.prototype._init=function(){n.prototype._init.call(this);this._newLineBreaks=i.asInt(this.getNumOption("newLineBreaks","lineBreak"),!0,!0)||3;i.assert(this._newLineBreaks>=1,"Value must be greater than 1")},t}(c);n("_LineBreakPlotter",k);d=function(n){function t(){return n.call(this)||this}return e(t,n),t.prototype.clear=function(){n.prototype.clear.call(this);this._boxSize=null;this._rangeMode=null},t.prototype._calculate=function(n){this._init();var t=n._getBindingValues(0),r=n._getBindingValues(1),u=n._getBindingValues(2),f=n._getBindingValues(3),e=n.getValues(1)||this.chart._xvals;this._calculator=new w(t,r,u,f,e,this._boxSize,this._rangeMode,this._fields,this._rounding);this._rangeValues=this._calculator.calculate();(this._rangeValues===null||i.isUndefined(this._rangeValues))&&(this._rangeValues=[]);this._generateXLabels(n)},t.prototype._init=function(){n.prototype._init.call(this);this._boxSize=this.getNumOption("boxSize","renko")||14;this._rangeMode=this.getOption("rangeMode","renko")||s.Fixed;this._rangeMode=i.asEnum(this._rangeMode,s,!0);i.assert(this._rangeMode!==s.Percentage,"RangeMode.Percentage is not supported");this._fields=this.getOption("fields","renko")||f.Close;this._fields=i.asEnum(this._fields,f,!0);i.assert(this._fields!==f.HighLow,"DataFields.HighLow is not supported");this._rounding=i.asBoolean(this.getOption("rounding","renko"),!0)},t.prototype._generateXLabels=function(t){var i=this;n.prototype._generateXLabels.call(this,t);this._rangeXLabels.forEach(function(n,t){t>0&&i._rangeXLabels[t-1]._text===n.text&&(n.text="")},this)},t}(c);n("_RenkoPlotter",d);g=function(n){function t(){return n.call(this)||this}return e(t,n),t.prototype._calculate=function(n){this._init();var t=n._getBindingValues(0),r=n._getBindingValues(1),u=n._getBindingValues(2),f=n._getBindingValues(3),e=n.getValues(1)||this.chart._xvals;this._calculator=new p(t,r,u,f,e,this._reversalAmount,this._rangeMode,this._fields);this._rangeValues=this._calculator.calculate();(this._rangeValues===null||i.isUndefined(this._rangeValues))&&(this._rangeValues=[]);this._generateXLabels(n)},t.prototype.plotSeries=function(n,t,r,f){var b,e,s,o,l,a,k,nt,h;this._calculate(f);var v=this.chart.series.indexOf(f),d=this._rangeValues.length,tt=t.actualMin,it=t.actualMax,c=this._DEFAULT_WIDTH,y=f._getSymbolStroke(v),g=f._getAltSymbolStroke(v)||y,p=[],w=[];for(n.stroke=y,n.strokeWidth=c,b=0,n.startGroup(),h=0;h<d;h++)e=h,u._DataInfo.isValid(e)&&tt<=e&&e<=it&&(s=this._rangeValues[h].open,o=this._rangeValues[h].close,h===0?(l=Math.min(s,o),a=Math.max(s,o),n.strokeWidth=s>o?c:c*2,n.stroke=s>o?y:g,n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(o)),n.drawLine(t.convert(e-1)-n.strokeWidth/2,r.convert(s),t.convert(e)+n.strokeWidth/2,r.convert(s))):n.strokeWidth===c?o>s?(o>a?(n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(a)),n.strokeWidth=c*2,n.stroke=g,n.drawLine(t.convert(e),r.convert(a),t.convert(e),r.convert(o)),l=s):n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(o)),a=o):n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(o)):n.strokeWidth/2===c&&(o<s?(o<l?(n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(l)),n.strokeWidth=c,n.stroke=y,n.drawLine(t.convert(e),r.convert(l),t.convert(e),r.convert(o)),a=s):n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(o)),l=o):n.drawLine(t.convert(e),r.convert(s),t.convert(e),r.convert(o))),h<d-1&&n.drawLine(t.convert(e)-n.strokeWidth/2,r.convert(o),t.convert(e+1)+n.strokeWidth/2,r.convert(o)),nt=this._getDataPoint(v,h,f,o),k=new u._CircleArea(new i.Point(t.convert(e),r.convert(o)),.5*n.strokeWidth),k.tag=nt,this.hitTester.add(k,v),f._setPointIndex(h,b),b++,p.push(t.convert(e)),w.push(r.convert(s)),p.push(t.convert(e)),w.push(r.convert(o)));n.endGroup();this.hitTester.add(new u._LinesArea(p,w),v)},t.prototype._init=function(){n.prototype._init.call(this);this._reversalAmount=this.getNumOption("reversalAmount","kagi")||14;this._rangeMode=this.getOption("rangeMode","kagi")||s.Fixed;this._rangeMode=i.asEnum(this._rangeMode,s,!0);this._fields=this.getOption("fields","kagi")||f.Close;this._fields=i.asEnum(this._fields,f,!0)},t.prototype.clear=function(){n.prototype.clear.call(this);this._reversalAmount=null;this._rangeMode=null},t}(c);n("_KagiPlotter",g)}}})