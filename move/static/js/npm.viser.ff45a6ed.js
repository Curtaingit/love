(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.viser"],{3617:function(e,t,r){"use strict";r.d(t,"d",(function(){return I})),r.d(t,"e",(function(){return B})),r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return M}));var i=r("2ef0"),n=/on(.+)(MouseEnter|MouseMove|MouseLeave|Click|DdlClick|MouseDown|MouseUp|TouchStart|TouchMove|TouchEnd)/;function a(e,t,r,a){if(!i.isEmpty(r)){var o=n.exec(r);if(o&&!(o.length<=2)){var s=o[1].toLowerCase(),c=o[2].toLowerCase(),l=t+"-"+s;e.on(l+":"+c,(function(t){a&&a(t,e)}))}}}function o(e,t,r){if(!i.isEmpty(r)){var n=Object.keys(r).filter((function(e){return/^on/.test(e)}));i.isEmpty(n)||n.forEach((function(i){var n=i.slice(2,i.length).toLowerCase(),a=r[i];if(r.gemo&&n.indexOf("label")>=0){var o=n.replace("label","");e.on("label:"+o,(function(t){a&&a(t,e)}))}else t?e.on(t+":"+n,(function(t){a&&a(t,e)})):e.on(n,(function(t){a&&a(t,e)}))}))}}var s=r("1231"),c=function(e){var t=i.get(e,"formatter");if(i.isString(t))return e.formatter=function(e){return s.a(t)(e)},e;var r=function(t){if(e.hasOwnProperty(t)){var r=i.get(e[t],"formatter");i.isString(r)&&(e[t].formatter=function(e){return s.a(r)(e)})}};for(var n in e)r(n);return e},l=function(){return(l=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var p=function(e,t,r){void 0===r&&(r=!1);var n=i.cloneDeep(t.axis),o=i.isArray(n);if(i.isNil(n)||!1===n||o&&0===n.length)return e.axis(!1);if(!0===n)return e.axis();for(var s=o?n:[n],p=t.coord,u=t.data,f=function(t){if(p&&"polar"===p.type&&"rotate"===p.direction&&function(e,t,r,n){var a=i.get(t,"polarLabel"),o=i.get(t,"polarLabel.rotate");if(o){var s={};"parallel"===o?s={rotate:r.startAngle,textAlign:"center"}:"normal"===o&&(s={rotate:r.startAngle+90,textAlign:"right"});var c=i.get(t,"polarLabel.offsetX"),p=i.get(t,"polarLabel.offsetY");n.forEach((function(r,i){e.guide().text(l({position:[i,0],content:n[i][t.dataKey],style:l({polarLabel:a},s)},c,p))}))}}(e,t,p,u),t.label&&(t.label=c(t.label)),!r)for(var n in t){if(t.hasOwnProperty(n))a(e,"axis","tickLine"===n?"ticks":n,t[n])}if(t.dataKey)if(!1===t.show)e.axis(t.dataKey,!1);else{var o=i.omit(t,["show","dataKey"]),s=o.label;if(s&&i.isNumber(s.density)&&0<s.density&&s.density<1&&i.isFunction(s.formatter)){var f=Math.floor(1/s.density),h=s.formatter;o.label.formatter=function(e,t,r){return r%f?" ":h(e,t,r)}}e.axis(t.dataKey,o)}else e.axis(t)},h=0,d=s;h<d.length;h++){f(d[h])}return e},u=function(e){return e*Math.PI/180},f=function(){return(f=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var h=function(e,t){var r=i.cloneDeep(t.coord);if(!r||!r.type)return e.coord("rect");var n=r.type;return"polar"===n||"theta"===n||"helix"===n?function(e,t){var r={};if(t.radius&&(t.radius<0||t.radius>1)||t.innerRadius&&(t.innerRadius<0||t.innerRadius>1))throw new Error("please set correct radius or innerRadius");if(t.radius&&(r=f({},r,{radius:t.radius})),t.innerRadius&&(r=f({},r,{innerRadius:t.innerRadius})),t.startAngle||t.endAngle){if(t.startAngle&&(t.startAngle<-360||t.startAngle>360))throw new Error("please set correct starAngle");if(r=f({},r,{startAngle:u(t.startAngle)}),t.endAngle&&(t.endAngle<-360||t.endAngle>360))throw new Error("please set correct endAngle");r=f({},r,{endAngle:u(t.endAngle)})}var i=e.coord(t.type,f({},r));switch(t.direction){case"rotate":i.transpose();break;case"xReverse":i.reflect("x");break;case"yReverse":i.reflect("y");break;case"reverse":i.reflect()}return t.rotate&&i.rotate(t.rotate),i}(e,r):"rect"===n?function(e,t){if(!t.direction)return e.coord("rect");switch(t.direction){case"BL":e.coord("rect");break;case"BR":e.coord("rect").scale(-1,1);break;case"LT":e.coord("rect").transpose().scale(1,-1);break;case"LB":e.coord("rect").transpose();break;case"RB":e.coord("rect").transpose().reflect();break;case"RT":e.coord("rect").transpose().reflect().scale(-1,1);break;case"TL":e.coord("rect").reflect();break;case"TR":e.coord("rect").reflect().scale(-1,1);break;default:e.coord("rect")}return e}(e,r):e.coord(n)},d=function(){return(d=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var y=function(e,t,r){void 0===r&&(r=!1);var n=i.cloneDeep(t.guide),a=Array.isArray(n);if(!i.isNil(n)&&!i.isEmpty(n))return(a?n:[n]).forEach((function(t){r||o(e,"guide-"+t.type,t),"line"===t.type?function(e,t){if("parallel"===t.quickType){var r=t.data;e.guide().line(d({start:["min",r],end:["max",r]},t))}else if("normal"===t.quickType){r=t.data;e.guide().line(d({start:[r,"min"],end:[r,"max"]},t))}else e.guide().line(t)}(e,t):"region"===t.type?e.guide().region(t):"arc"===t.type?function(e,t){if("parallel"===t.quickType){var r=t.data;e.guide().arc(d({start:["min",r],end:["max",r]},t)),e.guide().arc(d({start:["max",r],end:["min",r]},t))}else if("normal"===t.quickType){r=t.data;e.guide().line(d({start:[r,"min"],end:[r,"max"]},t))}else e.guide().arc(t)}(e,t):"text"===t.type?e.guide().text(t):"image"===t.type?e.guide().image(t):"html"===t.type?e.guide().html(t):"dataMarker"===t.type?e.guide().dataMarker(t):"regionFilter"===t.type?e.guide().regionFilter(t):"dataRegion"===t.type&&e.guide().dataRegion(t)})),e};function g(e){return e.onHover=function(e){var t=e.shapes;e.geom.highlightShapes(t)},e}var v=function(){return(v=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},m=[{type:"pie",series:{gemo:"interval",adjust:"stack"},coord:{type:"theta"}},{type:"sector",series:{gemo:"interval"},coord:{type:"polar"}},{type:"line",series:{gemo:"line"}},{type:"smoothLine",series:{gemo:"line",shape:"smooth"}},{type:"dashLine",series:{gemo:"line",shape:"dash"}},{type:"stackLine",series:{gemo:"line",adjust:"stack"}},{type:"area",series:{gemo:"area"}},{type:"stackArea",series:{gemo:"area",adjust:"stack"}},{type:"smoothArea",series:{gemo:"area",shape:"smooth"}},{type:"interval",series:{gemo:"interval"}},{type:"stackInterval",series:{gemo:"interval",adjust:"stack"}},{type:"dodgeInterval",series:{gemo:"interval",shape:"interval",adjust:"dodge"}},{type:"bar",series:{gemo:"interval"}},{type:"stackBar",series:{gemo:"interval",shape:"interval",adjust:"stack"}},{type:"dodgeBar",series:{gemo:"interval",shape:"interval",adjust:"dodge"}},{type:"point",series:{gemo:"point",shape:"hollowCircle"}},{type:"funnel",series:{gemo:"interval",adjust:"symmetric",shape:"funnel"}},{type:"pyramid",series:{gemo:"interval",adjust:"symmetric",shape:"pyramid"}},{type:"schema",series:{gemo:"schema",shape:"box"}},{type:"box",series:{gemo:"schema",shape:"box"}},{type:"candle",series:{gemo:"schema",shape:"candle"}},{type:"polygon",series:{gemo:"polygon"}},{type:"contour",series:{gemo:"contour"}},{type:"heatmap",series:{gemo:"heatmap"}},{type:"edge",series:{gemo:"edge"}},{type:"sankey",series:{gemo:"edge",shape:"sankey"}},{type:"errorBar",series:{gemo:"schema",shape:"errorbar"}},{type:"jitterPoint",series:{gemo:"point",adjust:"jitter"}},{type:"path",series:{gemo:"path"}},{type:"venn",series:{gemo:"venn"}}];var w=function(e,t,r){void 0===r&&(r=!1);var n=i.cloneDeep(t.series),s=i.isArray(n);if(i.isNil(n)||i.isEmpty(n))return e;var l,p=s?n:[n];return p=function(e,t){for(var r={},n=0,a=m;n<a.length;n++){var o=a[n];r[o.type]=o}for(var s=0;s<e.length;s++){var c=r[e[s].quickType];if(c&&(e[s]=v({},c.series,e[s]),t&&t.type&&i.get(c,"coord.type")&&i.get(c,"coord.type")!==t.type))throw new Error("quickType and coord had conflicted.")}return e}(p,t.coord),(p=i.sortBy(p,"zIndex")).forEach((function(t){for(var n in r||o(e,t.gemo,t),t)t.hasOwnProperty(n)&&a(e,"label",name,t[n]);l=function(e,t){var r=t.animate;return i.isEmpty(r)?e:e.animate(r)}(l=function(e,t){var r=t.active;return i.isArray(r)?e.active.apply(e,r):i.isBoolean(r)||i.isPlainObject(r)?e.active(r):e}(l=function(e,t){var r=t.select;return i.isBoolean(r)?e.select(r):i.isArray(r)&&r.length>=1?r[1]?e.select(r[0],r[1]):e.select(r[0]):e}(l=function(e,t){var r=t.style;return i.isArray(r)&&r.length>=1?r[1]?e.style(r[0],r[1]):e.style(r[0]):i.isPlainObject(r)?e.style(r):e}(l=function(e,t){var r=t.tooltip;return i.isBoolean(r)||i.isString(r)?e.tooltip(r):i.isArray(r)&&r.length>=1?r[1]?e.tooltip(r[0],r[1]):e.tooltip(r[0]):e}(l=function(e,t){var r=t.label;if(i.isString(r))return e.label(r);if(i.isArray(r)&&r.length>=2){if(i.isNumber(r[1].density)&&0<r[1].density&&r[1].density<1&&(i.isFunction(r[1].formatter)||i.isString(r[1].formatter))){var n=Math.floor(1/r[1].density),a=i.isString(r[1].formatter)?c(r[1]).formatter:r[1].formatter;r[1].formatter=function(e,t,r){return r%n?" ":a(e,t,r)}}return e.label.apply(e,r)}return e}(l=function(e,t){var r=t.size;return i.isNumber(r)||i.isString(r)?e.size(r):i.isArray(r)&&r.length>=1?r[1]?e.size(r[0],r[1]):e.size(r[0]):e}(l=function(e,t){var r=t.opacity;return i.isNumber(r)||i.isString(r)?e.opacity(r):i.isArray(r)&&r.length>=1?r[1]?e.opacity(r[0],r[1]):e.opacity(r[0]):e}(l=function(e,t){var r=t.color;return i.isString(r)?e.color(r):i.isArray(r)&&r.length>=1?r[1]?e.color(r[0],r[1]):e.color(r[0]):e}(l=function(e,t){var r=t.shape;return i.isString(r)?e.shape(r):i.isArray(r)&&r.length>=1?r[1]?e.shape(r[0],r[1]):e.shape(r[0]):e}(l=function(e,t){var r=t.adjust;return i.isNil(r)?e:e.adjust(r)}(l=function(e,t){var r=t.position;return i.isNil(r)?e:e.position(r)}(l=function(e,t){switch(t.gemo){case"line":e=e.line();break;case"area":e=e.area();break;case"bar":case"interval":e=e.interval();break;case"point":e=e.point();break;case"schema":e=e.schema();break;case"polygon":e=e.polygon();break;case"contour":e=e.contour();break;case"heatmap":e=e.heatmap();break;case"edge":e=e.edge();break;case"path":e=e.path();break;case"venn":e=e.venn();break;default:e=e.line()}return e}(e,t),t),t),t),t),t),t),t),t),t),t),t),t)})),l},b=r("7f1a"),k=function(e,t,r){b.Shape.registerShape(e,t,r)},x=function(){return(x=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function A(e){return[["M",e[1].x,e[1].y],["L",e[2].x,e[2].y],["Z"],["M",((e[1].x||0)+(e[2].x||0))/2,((e[1].y||0)+(e[2].y||0))/2],["L",((e[0].x||0)+(e[3].x||0))/2,((e[0].y||0)+(e[3].y||0))/2],["Z"],["M",e[0].x,e[0].y],["L",e[3].x,e[3].y],["Z"]]}function L(e,t,r){var i,n,a,o,s=(i=e.x,n=t.x,o=n-(a=+i),function(e){return a+o*e}),c=s(r),l=s(1-r);return["C",c,e.y,l,t.y,t.x,t.y]}var T=function(){k("edge","sankey",{drawShape:function(e,t){var r=e.points,i=e.style.curvature||.5,n=this.parsePath(function(e,t){var r=[["M",e[0].x,e[0].y],["L",e[1].x,e[1].y]],i=L(e[1],e[3],t);r.push(i),r.push(["L",e[3].x,e[3].y]),r.push(["L",e[2].x,e[2].y]);var n=L(e[2],e[0],t);return r.push(n),r.push(["Z"]),r}(r,i));return t.addShape("path",{attrs:{stroke:"none",strokeOpacity:0,fill:e.color,opacity:e.opacity,path:n}})}})},E=function(){T(),k("schema","errorbar",{getPoints:function(e){var t=e.x,r=void 0===t?0:t,i=e.y,n=void 0===i?[0,0,0]:i,a=e.size,o=void 0===a?0:a;return[{x:r-o/2*1,y:n[0]},{x:r-o/2*1,y:n[2]},{x:r+o/2*1,y:n[2]},{x:r+o/2*1,y:n[0]},{x:r,y:n[1]},{x:r-o/2*1,y:n[1]}]},drawShape:function(e,t){var r=t,i=e.points;return r.addShape("path",{attrs:x({stroke:e.color,strokeOpacity:e.opacity||1,lineWidth:e.style.lineWidth||1,fill:e.color,opacity:e.opacity||1,path:this.parsePath(A(i))},e.style)}),r}})},O=function(){return(O=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},j=r("7f1a"),C=r("b44f");var N=function(){function e(e){this.viewInstance={},this.config=i.cloneDeep(e),this.checkChartConfig(this.config),this.chartInstance=new j.Chart(this.config.chart)}return e.prototype.getWidth=function(){return this.chartInstance.get("width")},e.prototype.getHeight=function(){return this.chartInstance.get("height")},e.prototype.render=function(){var e=this.config,t=this.chartInstance;E(),this.setEvents(t,e),this.setDataSource(t,e.data),this.setCoord(t,e),this.setTooltip(t,e),this.setAxis(t,e),this.setContent(t,e),this.setLegend(t,e),this.setViews(t,e),this.setFacet(t,e),t.render(),this.setDefaultTooltip(t,e),this.setBrush(t,e)},e.prototype.repaint=function(e){var t=i.cloneDeep(e);this.checkChartConfig(t),this.renderDiffConfig(t)},e.prototype.destroy=function(e){e&&e.destroy()},e.prototype.clear=function(e){e&&e.clear()},e.prototype.checkChartConfig=function(e){var t=e.chart;if(!t||!t.height)throw new Error("please set correct chart option")},e.prototype.createView=function(e,t){var r={};t.start&&(r.start=t.start),t.end&&(r.end=t.end);var i=e.view(r);if(!t.viewId)throw new Error("you must set viewId");return this.viewInstance[t.viewId]=i,i},e.prototype.setEvents=function(e,t){o(e,"",t.chart)},e.prototype.setDataSource=function(e,t){i.isNil(t)||i.isEmpty(t)||e.source(t)},e.prototype.setFilter=function(e,t){return function(e,t){var r=i.cloneDeep(t.filter),n=i.isArray(r);if(!i.isEmpty(r)){for(var a=0,o=n?r:[r];a<o.length;a++){var s=o[a];s.dataKey&&s.callback&&e.filter(s.dataKey,s.callback)}return e}}(e,t)},e.prototype.setScale=function(e,t){return function(e,t){var r=i.cloneDeep(t.scale),n=i.isArray(r);if(!i.isEmpty(r)){for(var a={},o=0,s=n?r:[r];o<s.length;o++){var l=s[o];if(l.dataKey){var p=i.omit(l,"dataKey");a[l.dataKey]=p}}return a=c(a),e.scale(a)}}(e,t)},e.prototype.setCoord=function(e,t){return h(e,t)},e.prototype.setSeries=function(e,t,r){return void 0===r&&(r=!1),w(e,t,r)},e.prototype.setAxis=function(e,t,r){return void 0===r&&(r=!1),p(e,t,r)},e.prototype.setTooltip=function(e,t,r){return void 0===r&&(r=!1),function(e,t,r){void 0===r&&(r=!1);var n=i.cloneDeep(t.tooltip);if(i.isNil(n)||!1===n||!1===n.show)return e.tooltip(!1);for(var a in n)n.hasOwnProperty(a)&&("g2Tooltip"===a&&(n["g2-tooltip"]=n[a],n=i.omit(n,"g2Tooltip")),"g2TooltipTitle"===a&&(n["g2-tooltip-title"]=n[a],n=i.omit(n,"g2TooltipTitle")),"g2TooltipList"===a&&(n["g2-tooltip-list"]=n[a],n=i.omit(n,"g2TooltipList")),"g2TooltipListItem"===a&&(n["g2-tooltip-list-item"]=n[a],n=i.omit(n,"g2TooltipListItem")),"g2TooltipMaker"===a&&(n["g2-tooltip-maker"]=n[a],n=i.omit(n,"g2TooltipMaker")));return r||o(e,"tooltip",n),e.tooltip(n)}(e,t,r)},e.prototype.setDefaultTooltip=function(e,t){return function(e,t){var r=i.cloneDeep(t.tooltip);if(!i.isNil(r)&&!1!==r&&!1!==r.show&&r.defaultPoint){var n=r.defaultPoint,a=e.getXY(n);a&&e.showTooltip(a)}}(e,t)},e.prototype.setGuide=function(e,t,r){return void 0===r&&(r=!1),y(e,t,r)},e.prototype.setLegend=function(e,t,r){return void 0===r&&(r=!1),function(e,t,r){void 0===r&&(r=!1);var n=i.cloneDeep(t.legend),o=Array.isArray(n);if(i.isNil(n)||!1===n||o&&0===n.length)return e.legend(!1);if(!0===n)return e.legend();for(var s=0,c=o?n:[n];s<c.length;s++){var l=c[s];l.highlight&&(l=g(l));var p=function(t){if(l.hasOwnProperty(t)){if("onClick"===t){var i=l.onClick;l.onClick=function(t){i(t,e)}}r||a(e,"legend",t,l[t])}};for(var u in l)p(u);if(i.isNil(l.legendMarker)||(l["g2-legend-marker"]=l.legendMarker),i.isNil(l.legendListItem)||(l["g2-legend-list-item"]=l.legendListItem),i.isNil(l.legendTitle)||(l["g2-legend-title"]=l.legendTitle),i.isNil(l.legendList)||(l["g2-legend-list"]=l.legendList),(l=i.omit(l,["legendMarker","legendListItem","legendTitle","legendList"])).dataKey)if(!1===l.show)e.legend(l.dataKey,!1);else{var f=i.omit(l,["dataKey","show"]);e.legend(l.dataKey,f)}else e.legend(l)}return e}(e,t,r)},e.prototype.setContent=function(e,t,r){void 0===r&&(r=!1),this.setScale(e,t),this.setFilter(e,t),this.setSeries(e,t,r),this.setGuide(e,t,r)},e.prototype.setView=function(e,t,r,n){void 0===n&&(n=!1);var a=this.createView(t,e),o=e.data?e.data:r.data;return this.setDataSource(a,o),i.isNil(e.coord)||this.setCoord(a,e),i.isNil(e.tooltip)||this.setTooltip(a,e,n),i.isNil(e.axis)||this.setAxis(a,e,n),i.isNil(e.guide)||this.setGuide(a,e,n),this.setContent(a,e,n),a},e.prototype.setViews=function(e,t,r){void 0===r&&(r=!1);var n=i.cloneDeep(t.views),a=Array.isArray(n);if(!i.isNil(n)&&!i.isEmpty(n))for(var o=0,s=a?n:[n];o<s.length;o++){var c=s[o];this.setView(c,e,t,r)}},e.prototype.setFacetViews=function(e,t,r,n){void 0===n&&(n=!1),this.setDataSource(e,r.data),i.isNil(r.coord)||this.setCoord(e,r),i.isNil(r.tooltip)||this.setTooltip(e,r,n),i.isNil(r.axis)||this.setAxis(e,r,n),i.isNil(r.guide)||this.setGuide(e,r,n),this.setContent(e,r)},e.prototype.setFacet=function(e,t,r){var n=this;void 0===r&&(r=!1);var a=i.cloneDeep(t.facet);if(!i.isNil(a)&&!i.isEmpty(a)){var o=i.omit(a,["type","views"]);return i.isEmpty(a.views)&&!i.isFunction(a.views)||(i.isFunction(a.views)?o.eachView=function(e,t){n.setFacetViews(e,t,a.views(e,t),r)}:(a.views=Array.isArray(a.views)?a.views:[a.views],o.eachView=function(e,t){n.setFacetViews(e,t,a.views[0],r)})),e.facet(a.type,o)}},e.prototype.setBrush=function(e,t){if(!i.isNil(t.brush)&&!i.isEmpty(t.brush)){var r=t.brush,n=O({},t.brush,{canvas:e.get("canvas"),chart:e}),a=/on(BrushStart|BrushMove|BrushEnd|DragStart|DragMove|DragEnd)/;Object.keys(r).filter((function(e){return a.test(e)})).forEach((function(t){var i=a.exec(t);if(i&&i.length){var o="on"+i[0].toLowerCase().replace(/( |^)[a-z]/g,(function(e){return e.toUpperCase()}));n[o]=function(i){r[t](i,e)}}})),new C(n)}},e.prototype.repaintWidthHeight=function(e,t){var r=i.get(t,"chart.width");r&&e.changeWidth(r);var n=i.get(t,"chart.height");n&&e.changeHeight(n)},e.prototype.renderDiffConfig=function(e){var t=this.chartInstance;this.clear(t),this.setScale(t,e),this.setCoord(t,e),this.setFilter(t,e),this.setAxis(t,e,!0),this.setSeries(t,e,!0),this.setTooltip(t,e,!0),this.setGuide(t,e,!0),this.setViews(t,e,!0),this.setLegend(t,e,!0),this.setFacet(t,e,!0),this.repaintWidthHeight(t,e),e.data&&t.changeData(e.data),t.repaint(),this.setBrush(t,e)},e}(),S=(r("7f1a"),r("dcb1")),D=function(e){var t=document.getElementById(e.container);if(t){t.innerHTML="";var r=new S(e);return r.render(),r}console.error("plugin slider container not defined")},M=function(e){var t={};for(var r in e)if(e.hasOwnProperty(r)){var i=e[r];switch(r){case"slider":t.slider=D(i)}}return t},P=r("7f1a"),I=function(e,t,r){b.Animate.registerAnimation(e,t,r)},B=k,F=P.Global;t.c=function(e){if(!i.isNil(e)&&!i.isEmpty(e)&&function(e){var t=!1;if(i.isEmpty(e.data)||(t=!0),!i.isNil(e.views)&&(i.isPlainObject(e.views)&&!i.isEmpty(e.views.data)&&(t=!0),i.isArray(e.views)))for(var r=0,n=e.views;r<n.length;r++){var a=n[r];i.isEmpty(a.data)||(t=!0)}return t}(e)){var t=new N(e);return t.render(),t}}}}]);