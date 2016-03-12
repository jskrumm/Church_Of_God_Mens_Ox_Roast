/*
 RequireJS 2.1.17 Copyright (c) 2010-2015, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;
(function(ba){function G(b){return"[object Function]"===K.call(b)}function H(b){return"[object Array]"===K.call(b)}function v(b,c){if(b){var d;for(d=0;d<b.length&&(!b[d]||!c(b[d],d,b));d+=1);}}function T(b,c){if(b){var d;for(d=b.length-1;-1<d&&(!b[d]||!c(b[d],d,b));d-=1);}}function t(b,c){return fa.call(b,c)}function m(b,c){return t(b,c)&&b[c]}function B(b,c){for(var d in b)if(t(b,d)&&c(b[d],d))break}function U(b,c,d,e){c&&B(c,function(c,g){if(d||!t(b,g))e&&"object"===typeof c&&c&&!H(c)&&!G(c)&&!(c instanceof
RegExp)?(b[g]||(b[g]={}),U(b[g],c,d,e)):b[g]=c});return b}function u(b,c){return function(){return c.apply(b,arguments)}}function ca(b){throw b;}function da(b){if(!b)return b;var c=ba;v(b.split("."),function(b){c=c[b]});return c}function C(b,c,d,e){c=Error(c+"\nhttp://requirejs.org/docs/errors.html#"+b);c.requireType=b;c.requireModules=e;d&&(c.originalError=d);return c}function ga(b){function c(a,k,b){var f,l,c,d,e,g,i,p,k=k&&k.split("/"),h=j.map,n=h&&h["*"];if(a){a=a.split("/");l=a.length-1;j.nodeIdCompat&&
Q.test(a[l])&&(a[l]=a[l].replace(Q,""));"."===a[0].charAt(0)&&k&&(l=k.slice(0,k.length-1),a=l.concat(a));l=a;for(c=0;c<l.length;c++)if(d=l[c],"."===d)l.splice(c,1),c-=1;else if(".."===d&&!(0===c||1===c&&".."===l[2]||".."===l[c-1])&&0<c)l.splice(c-1,2),c-=2;a=a.join("/")}if(b&&h&&(k||n)){l=a.split("/");c=l.length;a:for(;0<c;c-=1){e=l.slice(0,c).join("/");if(k)for(d=k.length;0<d;d-=1)if(b=m(h,k.slice(0,d).join("/")))if(b=m(b,e)){f=b;g=c;break a}!i&&(n&&m(n,e))&&(i=m(n,e),p=c)}!f&&i&&(f=i,g=p);f&&(l.splice(0,
g,f),a=l.join("/"))}return(f=m(j.pkgs,a))?f:a}function d(a){z&&v(document.getElementsByTagName("script"),function(k){if(k.getAttribute("data-requiremodule")===a&&k.getAttribute("data-requirecontext")===i.contextName)return k.parentNode.removeChild(k),!0})}function e(a){var k=m(j.paths,a);if(k&&H(k)&&1<k.length)return k.shift(),i.require.undef(a),i.makeRequire(null,{skipMap:!0})([a]),!0}function n(a){var k,c=a?a.indexOf("!"):-1;-1<c&&(k=a.substring(0,c),a=a.substring(c+1,a.length));return[k,a]}function p(a,
k,b,f){var l,d,e=null,g=k?k.name:null,j=a,p=!0,h="";a||(p=!1,a="_@r"+(K+=1));a=n(a);e=a[0];a=a[1];e&&(e=c(e,g,f),d=m(r,e));a&&(e?h=d&&d.normalize?d.normalize(a,function(a){return c(a,g,f)}):-1===a.indexOf("!")?c(a,g,f):a:(h=c(a,g,f),a=n(h),e=a[0],h=a[1],b=!0,l=i.nameToUrl(h)));b=e&&!d&&!b?"_unnormalized"+(O+=1):"";return{prefix:e,name:h,parentMap:k,unnormalized:!!b,url:l,originalName:j,isDefine:p,id:(e?e+"!"+h:h)+b}}function s(a){var k=a.id,b=m(h,k);b||(b=h[k]=new i.Module(a));return b}function q(a,
k,b){var f=a.id,c=m(h,f);if(t(r,f)&&(!c||c.defineEmitComplete))"defined"===k&&b(r[f]);else if(c=s(a),c.error&&"error"===k)b(c.error);else c.on(k,b)}function w(a,b){var c=a.requireModules,f=!1;if(b)b(a);else if(v(c,function(b){if(b=m(h,b))b.error=a,b.events.error&&(f=!0,b.emit("error",a))}),!f)g.onError(a)}function x(){R.length&&(ha.apply(A,[A.length,0].concat(R)),R=[])}function y(a){delete h[a];delete V[a]}function F(a,b,c){var f=a.map.id;a.error?a.emit("error",a.error):(b[f]=!0,v(a.depMaps,function(f,
d){var e=f.id,g=m(h,e);g&&(!a.depMatched[d]&&!c[e])&&(m(b,e)?(a.defineDep(d,r[e]),a.check()):F(g,b,c))}),c[f]=!0)}function D(){var a,b,c=(a=1E3*j.waitSeconds)&&i.startTime+a<(new Date).getTime(),f=[],l=[],g=!1,h=!0;if(!W){W=!0;B(V,function(a){var i=a.map,j=i.id;if(a.enabled&&(i.isDefine||l.push(a),!a.error))if(!a.inited&&c)e(j)?g=b=!0:(f.push(j),d(j));else if(!a.inited&&(a.fetched&&i.isDefine)&&(g=!0,!i.prefix))return h=!1});if(c&&f.length)return a=C("timeout","Load timeout for modules: "+f,null,
f),a.contextName=i.contextName,w(a);h&&v(l,function(a){F(a,{},{})});if((!c||b)&&g)if((z||ea)&&!X)X=setTimeout(function(){X=0;D()},50);W=!1}}function E(a){t(r,a[0])||s(p(a[0],null,!0)).init(a[1],a[2])}function I(a){var a=a.currentTarget||a.srcElement,b=i.onScriptLoad;a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1);b=i.onScriptError;(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1);return{node:a,id:a&&a.getAttribute("data-requiremodule")}}function J(){var a;
for(x();A.length;){a=A.shift();if(null===a[0])return w(C("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));E(a)}}var W,Z,i,L,X,j={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},h={},V={},$={},A=[],r={},S={},aa={},K=1,O=1;L={require:function(a){return a.require?a.require:a.require=i.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?r[a.map.id]=a.exports:a.exports=r[a.map.id]={}},module:function(a){return a.module?
a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return m(j.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}};Z=function(a){this.events=m($,a.id)||{};this.map=a;this.shim=m(j.shim,a.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};Z.prototype={init:function(a,b,c,f){f=f||{};if(!this.inited){this.factory=b;if(c)this.on("error",c);else this.events.error&&(c=u(this,function(a){this.emit("error",a)}));this.depMaps=a&&a.slice(0);this.errback=
c;this.inited=!0;this.ignore=f.ignore;f.enabled||this.enabled?this.enable():this.check()}},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0;i.startTime=(new Date).getTime();var a=this.map;if(this.shim)i.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()}},load:function(){var a=
this.map.url;S[a]||(S[a]=!0,i.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var f=this.exports,l=this.factory;if(this.inited)if(this.error)this.emit("error",this.error);else{if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(G(l)){if(this.events.error&&this.map.isDefine||g.onError!==ca)try{f=i.execCb(c,l,b,f)}catch(d){a=d}else f=i.execCb(c,l,b,f);this.map.isDefine&&void 0===f&&((b=this.module)?f=b.exports:this.usingExports&&
(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",w(this.error=a)}else f=l;this.exports=f;if(this.map.isDefine&&!this.ignore&&(r[c]=f,g.onResourceLoad))g.onResourceLoad(i,this.map,this.depMaps);y(c);this.defined=!0}this.defining=!1;this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=
this.map,b=a.id,d=p(a.prefix);this.depMaps.push(d);q(d,"defined",u(this,function(f){var l,d;d=m(aa,this.map.id);var e=this.map.name,P=this.map.parentMap?this.map.parentMap.name:null,n=i.makeRequire(a.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(f.normalize&&(e=f.normalize(e,function(a){return c(a,P,!0)})||""),f=p(a.prefix+"!"+e,this.map.parentMap),q(f,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),d=m(h,f.id)){this.depMaps.push(f);
if(this.events.error)d.on("error",u(this,function(a){this.emit("error",a)}));d.enable()}}else d?(this.map.url=i.nameToUrl(d),this.load()):(l=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),l.error=u(this,function(a){this.inited=!0;this.error=a;a.requireModules=[b];B(h,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&y(a.map.id)});w(a)}),l.fromText=u(this,function(f,c){var d=a.name,e=p(d),P=M;c&&(f=c);P&&(M=!1);s(e);t(j.config,b)&&(j.config[d]=j.config[b]);try{g.exec(f)}catch(h){return w(C("fromtexteval",
"fromText eval for "+b+" failed: "+h,h,[b]))}P&&(M=!0);this.depMaps.push(e);i.completeLoad(d);n([d],l)}),f.load(a.name,n,l,j))}));i.enable(d,this);this.pluginMaps[d.id]=d},enable:function(){V[this.map.id]=this;this.enabling=this.enabled=!0;v(this.depMaps,u(this,function(a,b){var c,f;if("string"===typeof a){a=p(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap);this.depMaps[b]=a;if(c=m(L,a.id)){this.depExports[b]=c(this);return}this.depCount+=1;q(a,"defined",u(this,function(a){this.defineDep(b,
a);this.check()}));this.errback?q(a,"error",u(this,this.errback)):this.events.error&&q(a,"error",u(this,function(a){this.emit("error",a)}))}c=a.id;f=h[c];!t(L,c)&&(f&&!f.enabled)&&i.enable(a,this)}));B(this.pluginMaps,u(this,function(a){var b=m(h,a.id);b&&!b.enabled&&i.enable(a,this)}));this.enabling=!1;this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]);c.push(b)},emit:function(a,b){v(this.events[a],function(a){a(b)});"error"===a&&delete this.events[a]}};i={config:j,contextName:b,
registry:h,defined:r,urlFetched:S,defQueue:A,Module:Z,makeModuleMap:p,nextTick:g.nextTick,onError:w,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=j.shim,c={paths:!0,bundles:!0,config:!0,map:!0};B(a,function(a,b){c[b]?(j[b]||(j[b]={}),U(j[b],a,!0,!0)):j[b]=a});a.bundles&&B(a.bundles,function(a,b){v(a,function(a){a!==b&&(aa[a]=b)})});a.shim&&(B(a.shim,function(a,c){H(a)&&(a={deps:a});if((a.exports||a.init)&&!a.exportsFn)a.exportsFn=i.makeShimExports(a);
b[c]=a}),j.shim=b);a.packages&&v(a.packages,function(a){var b,a="string"===typeof a?{name:a}:a;b=a.name;a.location&&(j.paths[b]=a.location);j.pkgs[b]=a.name+"/"+(a.main||"main").replace(ia,"").replace(Q,"")});B(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=p(b))});if(a.deps||a.callback)i.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;a.init&&(b=a.init.apply(ba,arguments));return b||a.exports&&da(a.exports)}},makeRequire:function(a,e){function j(c,d,m){var n,
q;e.enableBuildCallback&&(d&&G(d))&&(d.__requireJsBuild=!0);if("string"===typeof c){if(G(d))return w(C("requireargs","Invalid require call"),m);if(a&&t(L,c))return L[c](h[a.id]);if(g.get)return g.get(i,c,a,j);n=p(c,a,!1,!0);n=n.id;return!t(r,n)?w(C("notloaded",'Module name "'+n+'" has not been loaded yet for context: '+b+(a?"":". Use require([])"))):r[n]}J();i.nextTick(function(){J();q=s(p(null,a));q.skipMap=e.skipMap;q.init(c,d,m,{enabled:!0});D()});return j}e=e||{};U(j,{isBrowser:z,toUrl:function(b){var d,
e=b.lastIndexOf("."),k=b.split("/")[0];if(-1!==e&&(!("."===k||".."===k)||1<e))d=b.substring(e,b.length),b=b.substring(0,e);return i.nameToUrl(c(b,a&&a.id,!0),d,!0)},defined:function(b){return t(r,p(b,a,!1,!0).id)},specified:function(b){b=p(b,a,!1,!0).id;return t(r,b)||t(h,b)}});a||(j.undef=function(b){x();var c=p(b,a,!0),e=m(h,b);d(b);delete r[b];delete S[c.url];delete $[b];T(A,function(a,c){a[0]===b&&A.splice(c,1)});e&&(e.events.defined&&($[b]=e.events),y(b))});return j},enable:function(a){m(h,a.id)&&
s(a).enable()},completeLoad:function(a){var b,c,d=m(j.shim,a)||{},g=d.exports;for(x();A.length;){c=A.shift();if(null===c[0]){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);E(c)}c=m(h,a);if(!b&&!t(r,a)&&c&&!c.inited){if(j.enforceDefine&&(!g||!da(g)))return e(a)?void 0:w(C("nodefine","No define call for "+a,null,[a]));E([a,d.deps||[],d.exportsFn])}D()},nameToUrl:function(a,b,c){var d,e,h;(d=m(j.pkgs,a))&&(a=d);if(d=m(aa,a))return i.nameToUrl(d,b,c);if(g.jsExtRegExp.test(a))d=a+(b||"");else{d=j.paths;
a=a.split("/");for(e=a.length;0<e;e-=1)if(h=a.slice(0,e).join("/"),h=m(d,h)){H(h)&&(h=h[0]);a.splice(0,e,h);break}d=a.join("/");d+=b||(/^data\:|\?/.test(d)||c?"":".js");d=("/"===d.charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+d}return j.urlArgs?d+((-1===d.indexOf("?")?"?":"&")+j.urlArgs):d},load:function(a,b){g.load(i,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||ja.test((a.currentTarget||a.srcElement).readyState))N=null,a=I(a),i.completeLoad(a.id)},
onScriptError:function(a){var b=I(a);if(!e(b.id))return w(C("scripterror","Script error for: "+b.id,a,[b.id]))}};i.require=i.makeRequire();return i}var g,x,y,D,I,E,N,J,s,O,ka=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,la=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,Q=/\.js$/,ia=/^\.\//;x=Object.prototype;var K=x.toString,fa=x.hasOwnProperty,ha=Array.prototype.splice,z=!!("undefined"!==typeof window&&"undefined"!==typeof navigator&&window.document),ea=!z&&"undefined"!==typeof importScripts,ja=
z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!==typeof opera&&"[object Opera]"===opera.toString(),F={},q={},R=[],M=!1;if("undefined"===typeof define){if("undefined"!==typeof requirejs){if(G(requirejs))return;q=requirejs;requirejs=void 0}"undefined"!==typeof require&&!G(require)&&(q=require,require=void 0);g=requirejs=function(b,c,d,e){var n,p="_";!H(b)&&"string"!==typeof b&&(n=b,H(c)?(b=c,c=d,d=e):b=[]);n&&n.context&&(p=n.context);(e=m(F,p))||(e=F[p]=g.s.newContext(p));
n&&e.configure(n);return e.require(b,c,d)};g.config=function(b){return g(b)};g.nextTick="undefined"!==typeof setTimeout?function(b){setTimeout(b,4)}:function(b){b()};require||(require=g);g.version="2.1.17";g.jsExtRegExp=/^\/|:|\?|\.js$/;g.isBrowser=z;x=g.s={contexts:F,newContext:ga};g({});v(["toUrl","undef","defined","specified"],function(b){g[b]=function(){var c=F._;return c.require[b].apply(c,arguments)}});if(z&&(y=x.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0]))y=
x.head=D.parentNode;g.onError=ca;g.createNode=function(b){var c=b.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");c.type=b.scriptType||"text/javascript";c.charset="utf-8";c.async=!0;return c};g.load=function(b,c,d){var e=b&&b.config||{};if(z)return e=g.createNode(e,c,d),e.setAttribute("data-requirecontext",b.contextName),e.setAttribute("data-requiremodule",c),e.attachEvent&&!(e.attachEvent.toString&&0>e.attachEvent.toString().indexOf("[native code"))&&
!Y?(M=!0,e.attachEvent("onreadystatechange",b.onScriptLoad)):(e.addEventListener("load",b.onScriptLoad,!1),e.addEventListener("error",b.onScriptError,!1)),e.src=d,J=e,D?y.insertBefore(e,D):y.appendChild(e),J=null,e;if(ea)try{importScripts(d),b.completeLoad(c)}catch(m){b.onError(C("importscripts","importScripts failed for "+c+" at "+d,m,[c]))}};z&&!q.skipDataMain&&T(document.getElementsByTagName("script"),function(b){y||(y=b.parentNode);if(I=b.getAttribute("data-main"))return s=I,q.baseUrl||(E=s.split("/"),
s=E.pop(),O=E.length?E.join("/")+"/":"./",q.baseUrl=O),s=s.replace(Q,""),g.jsExtRegExp.test(s)&&(s=I),q.deps=q.deps?q.deps.concat(s):[s],!0});define=function(b,c,d){var e,g;"string"!==typeof b&&(d=c,c=b,b=null);H(c)||(d=c,c=null);!c&&G(d)&&(c=[],d.length&&(d.toString().replace(ka,"").replace(la,function(b,d){c.push(d)}),c=(1===d.length?["require"]:["require","exports","module"]).concat(c)));if(M){if(!(e=J))N&&"interactive"===N.readyState||T(document.getElementsByTagName("script"),function(b){if("interactive"===
b.readyState)return N=b}),e=N;e&&(b||(b=e.getAttribute("data-requiremodule")),g=F[e.getAttribute("data-requirecontext")])}(g?g.defQueue:R).push([b,c,d])};define.amd={jQuery:!0};g.exec=function(b){return eval(b)};g(q)}})(this);
define("requireLib", function(){});

define('module/registerGuest',[],function () {
	"use strict";

	var publicMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("click", "button.yes", publicMembers.showGuestInputs);
			$(settings.scope).on("click", "button.no", publicMembers.hideGuestInputs);
		},
		"showGuestInputs": function () {
			$("#hasGuests").val(true);
			$("#guests").removeClass("hidden");

			$("#guest_firstname", "#guests").rules( "add", {
				required: true,
			  	maxlength: 100,
			  	messages: {
			    	required: "First name is required.",
			    	maxlength: jQuery.format("Must be {0} characters or less.")
			  	}
			});

			$("#guest_lastname", "#guests").rules( "add", {
				required: true,
			  	maxlength: 100,
			  	messages: {
			    	required: "Last name is required.",
			    	maxlength: jQuery.format("Must be {0} characters or less.")
			  	}
			});

			$("input[name='eventGuestPass']", "#guests").rules( "add", {
				required: true,
			  	messages: {
			    	required: "Please select an event pass."
			  	}
			});
		},
		"hideGuestInputs": function () {
			$("#hasGuests").val(false);
			$("#guests").addClass("hidden");

			$("#guest_firstname", "#guests").rules("remove");
			$("#guest_lastname", "#guests").rules("remove");
			$("input[name='eventGuestPass']", "#guests").rules("remove");
		}
	};

	return publicMembers;
});
/**
 * @license
 * lodash 3.7.0 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=n===n,e=t===t;if(n>t||!r||n===w&&e)return 1;if(n<t||!e||t===w&&r)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return typeof n=="string"?n:null==n?"":n+""}function o(n){return n.charCodeAt(0)}function i(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function f(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function a(t,r){return n(t.a,r.a)||t.b-r.b}function c(n){return $n[n]}function l(n){return Ln[n]}function s(n){return"\\"+Mn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);

}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=B,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Bn[n]}function m(_){function $n(n){if(h(n)&&!(Io(n)||n instanceof zn)){if(n instanceof Bn)return n;if(Ke.call(n,"__chain__")&&Ke.call(n,"__wrapped__"))return Fr(n)}return new Bn(n)}function Ln(){}function Bn(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=null,this.__dir__=1,this.__filtered__=false,this.__iteratees__=null,this.__takeCount__=ju,this.__views__=null}function Mn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:_u(null),set:new iu};t--;)this.push(n[t])}function Pn(n,t){var r=n.data;return(typeof t=="string"||ae(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Ce(e));++r<e;)t[r]=n[r];return t}function Kn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Vn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Gn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Jn(n,t){for(var r=-1,e=n.length,u=Ce(e);++r<e;)u[r]=t(n[r],r,n);return u}function Xn(n){for(var t=-1,r=n.length,e=Au;++t<r;){var u=n[t];u>e&&(e=u)}return e}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;return false}function Qn(n,t){return n===w?t:n}function nt(n,t,r,e){return n!==w&&Ke.call(e,r)?n:t;

}function tt(n,t,r){var e=zo(t);eu.apply(e,qu(t));for(var u=-1,o=e.length;++u<o;){var i=e[u],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function rt(n,t){for(var r=-1,e=n.length,u=Er(e),o=t.length,i=Ce(o);++r<o;){var f=t[r];i[r]=u?Ar(f,e)?n[f]:w:n[f]}return i}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Oe:"object"==e?wt(n):t===w?Re(n):bt(n,t);

}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ae(n))return n;if(e=Io(n)){if(f=mr(n),!t)return qn(n,f)}else{var a=Ye.call(n),c=a==K;if(a!=Y&&a!=z&&(!c||u))return Nn[a]?br(n,a,t):u?n:{};if(f=wr(c?{}:n),!t)return Tu(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Kn:ht)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){if(typeof n!="function")throw new Be(L);return fu(function(){n.apply(w,r)},t)}function ft(n,t){
var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=dr(),f=i==r,a=f&&200<=t.length?zu(t):null,c=t.length;a&&(i=Pn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Nu(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t){var r=[];return Nu(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function lt(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function st(n,t,r){
for(var e=-1,u=n.length,o=-1,i=[];++e<u;){var f=n[e];if(h(f)&&Er(f.length)&&(Io(f)||oe(f))){t&&(f=st(f,t,r));var a=-1,c=f.length;for(i.length+=c;++a<c;)i[++o]=f[a]}else r||(i[++o]=f)}return i}function pt(n,t){$u(n,t,ge)}function ht(n,t){return $u(n,t,zo)}function _t(n,t){return Lu(n,t,zo)}function vt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];Co(n[i])&&(o[++u]=i)}return o}function gt(n,t,r){if(null!=n){r!==w&&r in Ur(n)&&(t=[r]),r=-1;for(var e=t.length;null!=n&&++r<e;)var u=n=n[t[r]];

return u}}function yt(n,t,r,e,u,o){if(n===t)return 0!==n||1/n==1/t;var i=typeof n,f=typeof t;if("function"!=i&&"object"!=i&&"function"!=f&&"object"!=f||null==n||null==t)n=n!==n&&t!==t;else n:{var i=yt,f=Io(n),a=Io(t),c=M,l=M;f||(c=Ye.call(n),c==z?c=Y:c!=Y&&(f=he(n))),a||(l=Ye.call(t),l==z?l=Y:l!=Y&&he(t));var s=c==Y,a=l==Y,l=c==l;if(!l||f||s){if(!e&&(c=s&&Ke.call(n,"__wrapped__"),a=a&&Ke.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){
n=o[c]==t;break n}u.push(n),o.push(t),n=(f?hr:vr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=_r(n,t,c)}return n}function dt(n,t,r,e,u){for(var o=-1,i=t.length,f=!u;++o<i;)if(f&&e[o]?r[o]!==n[t[o]]:!(t[o]in n))return false;for(o=-1;++o<i;){var a=t[o],c=n[a],l=r[o];if(f&&e[o]?a=c!==w||a in n:(a=u?u(c,l,a):w,a===w&&(a=yt(l,c,u,true))),!a)return false}return true}function mt(n,t){var r=-1,e=Pu(n),u=Er(e)?Ce(e):[];return Nu(n,function(n,e,o){u[++r]=t(n,e,o)}),u}function wt(n){var t=zo(n),r=t.length;if(!r)return ke(true);

if(1==r){var e=t[0],u=n[e];if(Ir(u))return function(n){return null==n?false:n[e]===u&&(u!==w||e in Ur(n))}}for(var o=Ce(r),i=Ce(r);r--;)u=n[t[r]],o[r]=u,i[r]=Ir(u);return function(n){return null!=n&&dt(Ur(n),t,o,i)}}function bt(n,t){var r=Io(n),e=kr(n)&&Ir(t),u=n+"";return n=Nr(n),function(o){if(null==o)return false;var i=u;if(o=Ur(o),!(!r&&e||i in o)){if(o=1==n.length?o:gt(o,It(n,0,-1)),null==o)return false;i=Mr(n),o=Ur(o)}return o[i]===t?t!==w||i in o:yt(t,o[i],null,true)}}function xt(n,t,r,e,u){if(!ae(n))return n;

var o=Er(t.length)&&(Io(t)||he(t));if(!o){var i=zo(t);eu.apply(i,qu(t))}return Kn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_.length)&&(Io(_)||he(_))?v=Io(p)?p:Pu(p)?qn(p):[]:So(_)||oe(_)?v=oe(p)?_e(p):So(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=xt(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),!o&&l===w||!s&&(l===l?l===c:c!==c)||(n[a]=l);

}),n}function At(n){return function(t){return null==t?w:t[n]}}function jt(n){var t=n+"";return n=Nr(n),function(r){return gt(r,n,t)}}function kt(n,t){for(var r=t.length;r--;){var e=parseFloat(t[r]);if(e!=u&&Ar(e)){var u=e;au.call(n,e,1)}}}function Ot(n,t){return n+nu(xu()*(t-n+1))}function Et(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function It(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Ce(u);++e<u;)r[e]=n[e+t];

return r}function Rt(n,t){var r;return Nu(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ct(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function St(t,r,e){var u=yr(),o=-1;return r=Jn(r,function(n){return u(n)}),t=mt(t,function(n){return{a:Jn(r,function(t){return t(n)}),b:++o,c:n}}),Ct(t,function(t,r){var u;n:{u=-1;for(var o=t.a,i=r.a,f=o.length,a=e.length;++u<f;){var c=n(o[u],i[u]);if(c){u=u<a?c*(e[u]?1:-1):c;break n}}u=t.b-r.b}return u})}function Wt(n,t){var r=0;return Nu(n,function(n,e,u){
r+=+t(n,e,u)||0}),r}function Tt(n,t){var e=-1,u=dr(),o=n.length,i=u==r,f=i&&200<=o,a=f?zu():null,c=[];a?(u=Pn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ut(n,t){for(var r=-1,e=t.length,u=Ce(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););return r?It(n,e?0:o,e?o+1:u):It(n,e?o+1:0,e?u:o);

}function Ft(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var r=[r],o=t[e];eu.apply(r,o.args),r=o.func.apply(o.thisArg,r)}return r}function $t(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)?e=o+1:u=o}return u}return Lt(n,t,Oe,r)}function Lt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=t===w;u<o;){var a=nu((u+o)/2),c=r(n[a]),l=c===c;(i?l||e:f?l&&(e||c!==w):e?c<=t:c<t)?u=a+1:o=a}return du(o,Ou)}function Bt(n,t,r){
if(typeof n!="function")return Oe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function zt(n){return Xe.call(n,0)}function Mt(n,t,r){for(var e=r.length,u=-1,o=yu(n.length-e,0),i=-1,f=t.length,a=Ce(o+f);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];

return a}function Dt(n,t,r){for(var e=-1,u=r.length,o=-1,i=yu(n.length-u,0),f=-1,a=t.length,c=Ce(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=yr(e,u,3),Io(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Nu(r,function(t,r,u){n(o,t,e(t,r,u),u)});return o}}function qt(n){return ue(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u&&r[u-2],i=2<u&&r[2],f=1<u&&r[u-1];for(typeof o=="function"?(o=Bt(o,f,5),
u-=2):(o=typeof f=="function"?f:null,u-=o?1:0),i&&jr(r[0],r[1],i)&&(o=3>u?null:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Kt(n,t){return function(r,e){var u=r?Pu(r):0;if(!Er(u))return n(r,e);for(var o=t?u:-1,i=Ur(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Vt(n){return function(t,r,e){var u=Ur(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Yn&&this instanceof r?e:n).apply(t,arguments);

}var e=Gt(n);return r}function Zt(n){return function(t){var r=-1;t=Ae(de(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Gt(n){return function(){var t=Uu(n.prototype),r=n.apply(t,arguments);return ae(r)?r:t}}function Jt(n){function t(r,e,u){return u&&jr(r,e,u)&&(e=null),r=pr(r,n,null,null,null,null,null,e),r.placeholder=t.placeholder,r}return t}function Xt(n,t){return function(r,e,u){u&&jr(r,e,u)&&(e=null);var i=yr(),f=null==e;if(i===ut&&f||(f=false,e=i(e,u,3)),f){if(e=Io(r),e||!pe(r))return n(e?r:Tr(r));

e=o}return gr(r,e,t)}}function Ht(n,r){return function(e,u,o){return u=yr(u,o,3),Io(e)?(u=t(e,u,r),-1<u?e[u]:w):lt(e,u,n)}}function Qt(n){return function(r,e,u){return r&&r.length?(e=yr(e,u,3),t(r,e,n)):-1}}function nr(n){return function(t,r,e){return r=yr(r,e,3),lt(t,r,n,true)}}function tr(n){return function(){var t=arguments.length;if(!t)return function(){return arguments[0]};for(var r,e=n?t:-1,u=0,o=Ce(t);n?e--:++e<t;){var i=o[u++]=arguments[e];if(typeof i!="function")throw new Be(L);var f=r?"":Du(i);

r="wrapper"==f?new Bn([]):r}for(e=r?-1:t;++e<t;)i=o[e],f=Du(i),r=(u="wrapper"==f?Mu(i):null)&&Or(u[0])?r[Du(u[0])].apply(r,u[3]):1==i.length&&Or(i)?r[f]():r.thru(i);return function(){var n=arguments;if(r&&1==n.length&&Io(n[0]))return r.plant(n[0]).value();for(var e=0,n=o[e].apply(this,n);++e<t;)n=o[e].call(this,n);return n}}}function rr(n,t){return function(r,e,u){return typeof e=="function"&&u===w&&Io(r)?n(r,e):t(r,Bt(e,u,3))}}function er(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),
n(t,r,ge)}}function ur(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function or(n){return function(t,r,e){return(t=u(t))&&(n?t:"")+cr(t,r,e)+(n?"":t)}}function ir(n){var t=ue(function(r,e){var u=v(e,t.placeholder);return pr(r,n,null,e,u)});return t}function fr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Io(r)?n(r,e,u,i):Et(r,yr(e,o,4),u,i,t)}}function ar(n,t,r,e,u,o,i,f,a,c){function l(){for(var b=arguments.length,j=b,k=Ce(b);j--;)k[j]=arguments[j];

if(e&&(k=Mt(k,e,u)),o&&(k=Dt(k,o,i)),_||y){var j=l.placeholder,O=v(k,j),b=b-O.length;if(b<c){var R=f?qn(f):null,b=yu(c-b,0),C=_?O:null,O=_?null:O,S=_?k:null,k=_?null:k;return t|=_?E:I,t&=~(_?I:E),g||(t&=~(x|A)),k=[n,t,r,S,C,k,O,R,a,b],R=ar.apply(w,k),Or(n)&&Ku(R,k),R.placeholder=j,R}}if(j=p?r:this,h&&(n=j[m]),f)for(R=k.length,b=du(f.length,R),C=qn(k);b--;)O=f[b],k[b]=Ar(O,R)?C[O]:w;return s&&a<k.length&&(k.length=a),(this&&this!==Yn&&this instanceof l?d||Gt(n):n).apply(j,k)}var s=t&R,p=t&x,h=t&A,_=t&k,g=t&j,y=t&O,d=!h&&Gt(n),m=n;

return l}function cr(n,t,r){return n=n.length,t=+t,n<t&&vu(t)?(t-=n,r=null==r?" ":r+"",be(r,He(t/r.length)).slice(0,t)):""}function lr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Ce(f+c);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];return(this&&this!==Yn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Gt(n);return u}function sr(n){return function(t,r,e,u){var o=yr(e);return o===ut&&null==e?$t(t,r,n):Lt(t,r,o(e,u,1),n)}}function pr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Be(L);

var c=e?e.length:0;if(c||(t&=~(E|I),e=u=null),c-=u?u.length:0,t&I){var l=e,s=u;e=u=null}var p=a?null:Mu(n);return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==R&&e==k||t==R&&e==C&&r[7].length<=p[8]||t==(R|C)&&e==k,(f<R||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],B):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?Dt(u,e,p[6]):qn(e),r[6]=u?v(r[5],B):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&R&&(r[8]=null==r[8]?p[8]:du(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],
r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:yu(f-c,0)||0,(p?Bu:Ku)(t==x?Yt(r[0],r[2]):t!=E&&t!=(x|E)||r[4].length?ar.apply(w,r):lr.apply(w,r),r)}function hr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length,l=true;if(a!=c&&(!u||c<=a))return false;for(;l&&++f<a;){var s=n[f],p=t[f],l=w;if(e&&(l=u?e(p,s,f):e(s,p,f)),l===w)if(u)for(var h=c;h--&&(p=t[h],!(l=s&&s===p||r(s,p,e,u,o,i))););else l=s&&s===p||r(s,p,e,u,o,i)}return!!l}function _r(n,t,r){switch(r){case D:case P:return+n==+t;case q:return n.name==t.name&&n.message==t.message;

case V:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case Z:case G:return n==t+""}return false}function vr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;if(a!=c&&!u)return false;for(var c=u,l=-1;++l<a;){var s=f[l],p=u?s in t:Ke.call(t,s);if(p){var h=n[s],_=t[s],p=w;e&&(p=u?e(_,h,s):e(h,_,s)),p===w&&(p=h&&h===_||r(h,_,e,u,o,i))}if(!p)return false;c||(c="constructor"==s)}return c||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false;

}function gr(n,t,r){var e=r?ju:Au,u=e,o=u;return Nu(n,function(n,i,f){i=t(n,i,f),((r?i<u:i>u)||i===e&&i===o)&&(u=i,o=n)}),o}function yr(n,t,r){var e=$n.callback||je,e=e===je?ut:e;return r?e(n,t,r):e}function dr(n,t,e){var u=$n.indexOf||zr,u=u===zr?r:u;return n?u(n,t,e):u}function mr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&Ke.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function wr(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Fe),new n;

}function br(n,t,r){var e=n.constructor;switch(t){case J:return zt(n);case D:case P:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?zt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Z:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function xr(n,t,r){return null==n||kr(t,n)||(t=Nr(t),n=1==t.length?n:gt(n,It(t,0,-1)),t=Mr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Ar(n,t){return n=+n,t=null==t?Ru:t,
-1<n&&0==n%1&&n<t}function jr(n,t,r){if(!ae(r))return false;var e=typeof t;return"number"==e?(e=Pu(r),e=Er(e)&&Ar(t,e)):e="string"==e&&t in r,e?(t=r[t],n===n?n===t:t!==t):false}function kr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Io(n)?false:!yn.test(n)||null!=t&&n in Ur(t)}function Or(n){var t=Du(n);return!!t&&n===$n[t]&&t in zn.prototype}function Er(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Ru}function Ir(n){return n===n&&(0===n?0<1/n:!ae(n))}function Rr(n,t){n=Ur(n);for(var r=-1,e=t.length,u={};++r<e;){
var o=t[r];o in n&&(u[o]=n[o])}return u}function Cr(n,t){var r={};return pt(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Sr(n){var t;if(!h(n)||Ye.call(n)!=Y||!(Ke.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return pt(n,function(n,t){r=t}),r===w||Ke.call(n,r)}function Wr(n){for(var t=ge(n),r=t.length,e=r&&n.length,u=$n.support,u=e&&Er(e)&&(Io(n)||u.nonEnumArgs&&oe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Ar(f,e)||Ke.call(n,f))&&i.push(f)}return i}
function Tr(n){return null==n?[]:Er(Pu(n))?ae(n)?n:Fe(n):ye(n)}function Ur(n){return ae(n)?n:Fe(n)}function Nr(n){if(Io(n))return n;var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Fr(n){return n instanceof zn?n.clone():new Bn(n.__wrapped__,n.__chain__,qn(n.__actions__))}function $r(n,t,r){return n&&n.length?((r?jr(n,t,r):null==t)&&(t=1),It(n,0>t?0:t)):[]}function Lr(n,t,r){var e=n?n.length:0;return e?((r?jr(n,t,r):null==t)&&(t=1),t=e-(+t||0),It(n,0,0>t?0:t)):[];

}function Br(n){return n?n[0]:w}function zr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?yu(u+e,0):e;else if(e)return e=$t(n,t),n=n[e],(t===t?t===n:n!==n)?e:-1;return r(n,t,e||0)}function Mr(n){var t=n?n.length:0;return t?n[t-1]:w}function Dr(n){return $r(n,1)}function Pr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=jr(n,t,u)?null:t,t=false);var o=yr();if((o!==ut||null!=e)&&(e=o(e,u,3)),t&&dr()==r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){
var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=Tt(n,e);return n}function qr(n){for(var t=-1,r=(n&&n.length&&Xn(Jn(n,Pu)))>>>0,e=Ce(r);++t<r;)e[t]=Jn(n,At(t));return e}function Kr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Io(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Vr(n){return n=$n(n),n.__chain__=true,n}function Yr(n,t,r){return t.call(r,n)}function Zr(n,t,r){var e=Io(n)?Vn:at;return r&&jr(n,t,r)&&(t=null),(typeof t!="function"||r!==w)&&(t=yr(t,r,3)),
e(n,t)}function Gr(n,t,r){var e=Io(n)?Gn:ct;return t=yr(t,r,3),e(n,t)}function Jr(n,t,r,e){var u=n?Pu(n):0;return Er(u)||(n=ye(n),u=n.length),u?(r=typeof r!="number"||e&&jr(t,r,e)?0:0>r?yu(u+r,0):r||0,typeof n=="string"||!Io(n)&&pe(n)?r<u&&-1<n.indexOf(t,r):-1<dr(n,t,r)):false}function Xr(n,t,r){var e=Io(n)?Jn:mt;return t=yr(t,r,3),e(n,t)}function Hr(n,t,r){return(r?jr(n,t,r):null==t)?(n=Tr(n),t=n.length,0<t?n[Ot(0,t-1)]:w):(n=Qr(n),n.length=du(0>t?0:+t||0,n.length),n)}function Qr(n){n=Tr(n);for(var t=-1,r=n.length,e=Ce(r);++t<r;){
var u=Ot(0,t);t!=u&&(e[t]=e[u]),e[u]=n[t]}return e}function ne(n,t,r){var e=Io(n)?Hn:Rt;return r&&jr(n,t,r)&&(t=null),(typeof t!="function"||r!==w)&&(t=yr(t,r,3)),e(n,t)}function te(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Be(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}}function re(n,t,r){function e(){var r=t-(_o()-c);0>=r||r>t?(f&&Qe(f),r=p,f=s=p=w,r&&(h=_o(),a=n.apply(l,i),s||f||(i=l=null))):s=fu(e,r)}function u(){
s&&Qe(s),f=s=p=w,(v||_!==t)&&(h=_o(),a=n.apply(l,i),s||f||(i=l=null))}function o(){if(i=arguments,c=_o(),l=this,p=v&&(s||!g),false===_)var r=g&&!s;else{f||g||(h=c);var o=_-(c-h),y=0>=o||o>_;y?(f&&(f=Qe(f)),h=c,a=n.apply(l,i)):f||(f=fu(u,o))}return y&&s?s=Qe(s):s||t===_||(s=fu(e,t)),r&&(y=true,a=n.apply(l,i)),!y||s||f||(i=l=null),a}var i,f,a,c,l,s,p,h=0,_=false,v=true;if(typeof n!="function")throw new Be(L);if(t=0>t?0:+t||0,true===r)var g=true,v=false;else ae(r)&&(g=r.leading,_="maxWait"in r&&yu(+r.maxWait||0,t),v="trailing"in r?r.trailing:v);

return o.cancel=function(){s&&Qe(s),f&&Qe(f),f=s=p=w},o}function ee(n,t){function r(){var e=arguments,u=r.cache,o=t?t.apply(this,e):e[0];return u.has(o)?u.get(o):(e=n.apply(this,e),u.set(o,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Be(L);return r.cache=new ee.Cache,r}function ue(n,t){if(typeof n!="function")throw new Be(L);return t=yu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=yu(r.length-t,0),o=Ce(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);

case 1:return n.call(this,r[0],o);case 2:return n.call(this,r[0],r[1],o)}for(u=Ce(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function oe(n){return Er(h(n)?n.length:w)&&Ye.call(n)==z}function ie(n){return!!n&&1===n.nodeType&&h(n)&&-1<Ye.call(n).indexOf("Element")}function fe(n){return h(n)&&typeof n.message=="string"&&Ye.call(n)==q}function ae(n){var t=typeof n;return"function"==t||!!n&&"object"==t}function ce(n){return null==n?false:Ye.call(n)==K?Ge.test(qe.call(n)):h(n)&&En.test(n)}function le(n){
return typeof n=="number"||h(n)&&Ye.call(n)==V}function se(n){return h(n)&&Ye.call(n)==Z||false}function pe(n){return typeof n=="string"||h(n)&&Ye.call(n)==G}function he(n){return h(n)&&Er(n.length)&&!!Un[Ye.call(n)]}function _e(n){return et(n,ge(n))}function ve(n){return vt(n,ge(n))}function ge(n){if(null==n)return[];ae(n)||(n=Fe(n));for(var t=n.length,t=t&&Er(t)&&(Io(n)||Wu.nonEnumArgs&&oe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Ce(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Ar(i,t)||"constructor"==i&&(r||!Ke.call(n,i))||u.push(i);

return u}function ye(n){return Ut(n,zo(n))}function de(n){return(n=u(n))&&n.replace(In,c).replace(xn,"")}function me(n){return(n=u(n))&&bn.test(n)?n.replace(wn,"\\$&"):n}function we(n,t,r){return r&&jr(n,t,r)&&(t=0),bu(n,t)}function be(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!vu(t))return r;do t%2&&(r+=n),t=nu(t/2),n+=n;while(t);return r}function xe(n,t,r){var e=n;return(n=u(n))?(r?jr(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(i(n,t),f(n,t)+1)):n}function Ae(n,t,r){return r&&jr(n,t,r)&&(t=null),
n=u(n),n.match(t||Sn)||[]}function je(n,t,r){return r&&jr(n,t,r)&&(t=null),ut(n,t)}function ke(n){return function(){return n}}function Oe(n){return n}function Ee(n,t,r){if(null==r){var e=ae(t),u=e&&zo(t);((u=u&&u.length&&vt(t,u))?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=vt(t,zo(t)));var o=true,e=-1,i=Co(n),f=u.length;false===r?o=false:ae(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);

return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return r=[this.value()],eu.apply(r,arguments),t.apply(n,r)}}(a))}return n}function Ie(){}function Re(n){return kr(n)?At(n):jt(n)}_=_?Zn.defaults(Yn.Object(),_,Zn.pick(Yn,Tn)):Yn;var Ce=_.Array,Se=_.Date,We=_.Error,Te=_.Function,Ue=_.Math,Ne=_.Number,Fe=_.Object,$e=_.RegExp,Le=_.String,Be=_.TypeError,ze=Ce.prototype,Me=Fe.prototype,De=Le.prototype,Pe=(Pe=_.window)&&Pe.document,qe=Te.prototype.toString,Ke=Me.hasOwnProperty,Ve=0,Ye=Me.toString,Ze=_._,Ge=$e("^"+me(Ye).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Je=ce(Je=_.ArrayBuffer)&&Je,Xe=ce(Xe=Je&&new Je(0).slice)&&Xe,He=Ue.ceil,Qe=_.clearTimeout,nu=Ue.floor,tu=ce(tu=Fe.getOwnPropertySymbols)&&tu,ru=ce(ru=Fe.getPrototypeOf)&&ru,eu=ze.push,uu=ce(Fe.preventExtensions=Fe.preventExtensions)&&uu,ou=Me.propertyIsEnumerable,iu=ce(iu=_.Set)&&iu,fu=_.setTimeout,au=ze.splice,cu=ce(cu=_.Uint8Array)&&cu,lu=ce(lu=_.WeakMap)&&lu,su=function(){
try{var n=ce(n=_.Float64Array)&&n,t=new n(new Je(10),0,1)&&n}catch(r){}return t}(),pu=function(){var n={1:0},t=uu&&ce(t=Fe.assign)&&t;try{t(uu(n),"xo")}catch(r){}return!n[1]&&t}(),hu=ce(hu=Ce.isArray)&&hu,_u=ce(_u=Fe.create)&&_u,vu=_.isFinite,gu=ce(gu=Fe.keys)&&gu,yu=Ue.max,du=Ue.min,mu=ce(mu=Se.now)&&mu,wu=ce(wu=Ne.isFinite)&&wu,bu=_.parseInt,xu=Ue.random,Au=Ne.NEGATIVE_INFINITY,ju=Ne.POSITIVE_INFINITY,ku=Ue.pow(2,32)-1,Ou=ku-1,Eu=ku>>>1,Iu=su?su.BYTES_PER_ELEMENT:0,Ru=Ue.pow(2,53)-1,Cu=lu&&new lu,Su={},Wu=$n.support={};

!function(n){function t(){this.x=n}var r=[];t.prototype={valueOf:n,y:n};for(var e in new t)r.push(e);Wu.funcDecomp=/\bthis\b/.test(function(){return this}),Wu.funcNames=typeof Te.name=="string";try{Wu.dom=11===Pe.createDocumentFragment().nodeType}catch(u){Wu.dom=false}try{Wu.nonEnumArgs=!ou.call(arguments,1)}catch(o){Wu.nonEnumArgs=true}}(1,0),$n.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:$n}};var Tu=pu||function(n,t){return null==t?n:et(t,qu(t),et(t,zo(t),n))},Uu=function(){
function n(){}return function(t){if(ae(t)){n.prototype=t;var r=new n;n.prototype=null}return r||_.Object()}}(),Nu=Kt(ht),Fu=Kt(_t,true),$u=Vt(),Lu=Vt(true),Bu=Cu?function(n,t){return Cu.set(n,t),n}:Oe;Xe||(zt=Je&&cu?function(n){var t=n.byteLength,r=su?nu(t/Iu):0,e=r*Iu,u=new Je(t);if(r){var o=new su(u,0,r);o.set(new su(n,0,r))}return t!=e&&(o=new cu(u,e),o.set(new cu(n,e))),u}:ke(null));var zu=_u&&iu?function(n){return new Dn(n)}:ke(null),Mu=Cu?function(n){return Cu.get(n)}:Ie,Du=function(){return Wu.funcNames?"constant"==ke.name?At("name"):function(n){
for(var t=n.name,r=Su[t],e=r?r.length:0;e--;){var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}:ke("")}(),Pu=At("length"),qu=tu?function(n){return tu(Ur(n))}:ke([]),Ku=function(){var n=0,t=0;return function(r,e){var u=_o(),o=U-(u-t);if(t=u,0<o){if(++n>=T)return r}else n=0;return Bu(r,e)}}(),Vu=ue(function(n,t){return Io(n)||oe(n)?ft(n,st(t,false,true)):[]}),Yu=Qt(),Zu=Qt(true),Gu=ue(function(t,r){t||(t=[]),r=st(r);var e=rt(t,r);return kt(t,r.sort(n)),e}),Ju=sr(),Xu=sr(true),Hu=ue(function(n){return Tt(st(n,false,true));

}),Qu=ue(function(n,t){return Io(n)||oe(n)?ft(n,t):[]}),no=ue(qr),to=ue(function(n,t){var r=n?Pu(n):0;return Er(r)&&(n=Tr(n)),rt(n,st(t))}),ro=Pt(function(n,t,r){Ke.call(n,r)?++n[r]:n[r]=1}),eo=Ht(Nu),uo=Ht(Fu,true),oo=rr(Kn,Nu),io=rr(function(n,t){for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),fo=Pt(function(n,t,r){Ke.call(n,r)?n[r].push(t):n[r]=[t]}),ao=Pt(function(n,t,r){n[r]=t}),co=ue(function(n,t,r){var e=-1,u=typeof t=="function",o=kr(t),i=Pu(n),f=Er(i)?Ce(i):[];return Nu(n,function(n){
var i=u?t:o&&null!=n&&n[t];f[++e]=i?i.apply(n,r):xr(n,t,r)}),f}),lo=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),so=fr(function(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r},Nu),po=fr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),ho=ue(function(n,t){if(null==n)return[];var r=t[2];return r&&jr(t[0],t[1],r)&&(t.length=1),St(n,st(t),[])}),_o=mu||function(){return(new Se).getTime()},vo=ue(function(n,t,r){
var e=x;if(r.length)var u=v(r,vo.placeholder),e=e|E;return pr(n,e,t,r,u)}),go=ue(function(n,t){t=t.length?st(t):ve(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=pr(n[u],x,n)}return n}),yo=ue(function(n,t,r){var e=x|A;if(r.length)var u=v(r,yo.placeholder),e=e|E;return pr(t,e,n,r,u)}),mo=Jt(k),wo=Jt(O),bo=ue(function(n,t){return it(n,1,t)}),xo=ue(function(n,t,r){return it(n,t,r)}),Ao=tr(),jo=tr(true),ko=ir(E),Oo=ir(I),Eo=ue(function(n,t){return pr(n,C,null,null,null,st(t))}),Io=hu||function(n){return h(n)&&Er(n.length)&&Ye.call(n)==M;

};Wu.dom||(ie=function(n){return!!n&&1===n.nodeType&&h(n)&&!So(n)});var Ro=wu||function(n){return typeof n=="number"&&vu(n)},Co=e(/x/)||cu&&!e(cu)?function(n){return Ye.call(n)==K}:e,So=ru?function(n){if(!n||Ye.call(n)!=Y)return false;var t=n.valueOf,r=ce(t)&&(r=ru(t))&&ru(r);return r?n==r||ru(n)==r:Sr(n)}:Sr,Wo=qt(function(n,t,r){return r?tt(n,t,r):Tu(n,t)}),To=ue(function(n){var t=n[0];return null==t?t:(n.push(Qn),Wo.apply(w,n))}),Uo=nr(ht),No=nr(_t),Fo=er($u),$o=er(Lu),Lo=ur(ht),Bo=ur(_t),zo=gu?function(n){
if(n)var t=n.constructor,r=n.length;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(r)?Wr(n):ae(n)?gu(n):[]}:Wr,Mo=qt(xt),Do=ue(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Jn(st(t),Le),Rr(n,ft(ge(n),t));var r=Bt(t[0],t[1],3);return Cr(n,function(n,t,e){return!r(n,t,e)})}),Po=ue(function(n,t){return null==n?{}:"function"==typeof t[0]?Cr(n,Bt(t[0],t[1],3)):Rr(n,st(t))}),qo=Zt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);

}),Ko=Zt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=or(),Yo=or(true);8!=bu(Wn+"08")&&(we=function(n,t,r){return(r?jr(n,t,r):null==t)?t=0:t&&(t=+t),n=xe(n),bu(n,t||(On.test(n)?16:10))});var Zo=Zt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Zt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=ue(function(n,t){try{return n.apply(w,t)}catch(r){return fe(r)?r:new We(r)}}),Xo=ue(function(n,t){return function(r){return xr(r,n,t)}}),Ho=ue(function(n,t){
return function(r){return xr(n,r,t)}}),Qo=Xt(Xn),ni=Xt(function(n){for(var t=-1,r=n.length,e=ju;++t<r;){var u=n[t];u<e&&(e=u)}return e},true);return $n.prototype=Ln.prototype,Bn.prototype=Uu(Ln.prototype),Bn.prototype.constructor=Bn,zn.prototype=Uu(Ln.prototype),zn.prototype.constructor=zn,Mn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Mn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Mn.prototype.has=function(n){return"__proto__"!=n&&Ke.call(this.__data__,n);

},Mn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ae(n)?t.set.add(n):t.hash[n]=true},ee.Cache=Mn,$n.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Be(L);var r=n;n=t,t=r}return n=vu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},$n.ary=function(n,t,r){return r&&jr(n,t,r)&&(t=null),t=n&&null==t?n.length:yu(+t||0,0),pr(n,R,null,null,null,null,t)},$n.assign=Wo,
$n.at=to,$n.before=te,$n.bind=vo,$n.bindAll=go,$n.bindKey=yo,$n.callback=je,$n.chain=Vr,$n.chunk=function(n,t,r){t=(r?jr(n,t,r):null==t)?1:yu(+t||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Ce(He(e/t));r<e;)o[++u]=It(n,r,r+=t);return o},$n.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},$n.constant=ke,$n.countBy=ro,$n.create=function(n,t,r){var e=Uu(n);return r&&jr(n,t,r)&&(t=null),t?Tu(e,t):e},$n.curry=mo,$n.curryRight=wo,$n.debounce=re,$n.defaults=To,
$n.defer=bo,$n.delay=xo,$n.difference=Vu,$n.drop=$r,$n.dropRight=Lr,$n.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,yr(t,r,3),true,true):[]},$n.dropWhile=function(n,t,r){return n&&n.length?Nt(n,yr(t,r,3),true):[]},$n.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&jr(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},$n.filter=Gr,$n.flatten=function(n,t,r){var e=n?n.length:0;

return r&&jr(n,t,r)&&(t=false),e?st(n,t):[]},$n.flattenDeep=function(n){return n&&n.length?st(n,true):[]},$n.flow=Ao,$n.flowRight=jo,$n.forEach=oo,$n.forEachRight=io,$n.forIn=Fo,$n.forInRight=$o,$n.forOwn=Lo,$n.forOwnRight=Bo,$n.functions=ve,$n.groupBy=fo,$n.indexBy=ao,$n.initial=function(n){return Lr(n,1)},$n.intersection=function(){for(var n=[],t=-1,e=arguments.length,u=[],o=dr(),i=o==r,f=[];++t<e;){var a=arguments[t];(Io(a)||oe(a))&&(n.push(a),u.push(i&&120<=a.length?zu(t&&a):null))}if(e=n.length,2>e)return f;

var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Pn(s,a):o(f,a,0))){for(t=e;--t;){var p=u[t];if(0>(p?Pn(p,a):o(n[t],a,0)))continue n}s&&s.push(a),f.push(a)}return f},$n.invert=function(n,t,r){r&&jr(n,t,r)&&(t=null),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?Ke.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},$n.invoke=co,$n.keys=zo,$n.keysIn=ge,$n.map=Xr,$n.mapValues=function(n,t,r){var e={};return t=yr(t,r,3),ht(n,function(n,r,u){e[r]=t(n,r,u)}),e},$n.matches=function(n){
return wt(ot(n,true))},$n.matchesProperty=function(n,t){return bt(n,ot(t,true))},$n.memoize=ee,$n.merge=Mo,$n.method=Xo,$n.methodOf=Ho,$n.mixin=Ee,$n.negate=function(n){if(typeof n!="function")throw new Be(L);return function(){return!n.apply(this,arguments)}},$n.omit=Do,$n.once=function(n){return te(2,n)},$n.pairs=function(n){for(var t=-1,r=zo(n),e=r.length,u=Ce(e);++t<e;){var o=r[t];u[t]=[o,n[o]]}return u},$n.partial=ko,$n.partialRight=Oo,$n.partition=lo,$n.pick=Po,$n.pluck=function(n,t){return Xr(n,Re(t));

},$n.property=Re,$n.propertyOf=function(n){return function(t){return gt(n,Nr(t),t+"")}},$n.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=dr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)au.call(t,o,1);return t},$n.pullAt=Gu,$n.range=function(n,t,r){r&&jr(n,t,r)&&(t=r=null),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=yu(He((t-n)/(r||1)),0);for(var u=Ce(t);++e<t;)u[e]=n,n+=r;return u},$n.rearg=Eo,$n.reject=function(n,t,r){var e=Io(n)?Gn:ct;

return t=yr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},$n.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=yr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return kt(n,o),e},$n.rest=Dr,$n.restParam=ue,$n.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||kr(t,n)?[e]:Nr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ae(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Ar(t[e+1])?[]:{})),i=i[f]}return n},$n.shuffle=Qr,$n.slice=function(n,t,r){
var e=n?n.length:0;return e?(r&&typeof r!="number"&&jr(n,t,r)&&(t=0,r=e),It(n,t,r)):[]},$n.sortBy=function(n,t,r){if(null==n)return[];r&&jr(n,t,r)&&(t=null);var e=-1;return t=yr(t,r,3),n=mt(n,function(n,r,u){return{a:t(n,r,u),b:++e,c:n}}),Ct(n,a)},$n.sortByAll=ho,$n.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&jr(t,r,e)&&(r=null),Io(t)||(t=null==t?[]:[t]),Io(r)||(r=null==r?[]:[r]),St(n,t,r))},$n.spread=function(n){if(typeof n!="function")throw new Be(L);return function(t){return n.apply(this,t);

}},$n.take=function(n,t,r){return n&&n.length?((r?jr(n,t,r):null==t)&&(t=1),It(n,0,0>t?0:t)):[]},$n.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?jr(n,t,r):null==t)&&(t=1),t=e-(+t||0),It(n,0>t?0:t)):[]},$n.takeRightWhile=function(n,t,r){return n&&n.length?Nt(n,yr(t,r,3),false,true):[]},$n.takeWhile=function(n,t,r){return n&&n.length?Nt(n,yr(t,r,3)):[]},$n.tap=function(n,t,r){return t.call(r,n),n},$n.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Be(L);return false===r?e=false:ae(r)&&(e="leading"in r?!!r.leading:e,
u="trailing"in r?!!r.trailing:u),Fn.leading=e,Fn.maxWait=+t,Fn.trailing=u,re(n,t,Fn)},$n.thru=Yr,$n.times=function(n,t,r){if(n=nu(n),1>n||!vu(n))return[];var e=-1,u=Ce(du(n,ku));for(t=Bt(t,r,1);++e<n;)e<ku?u[e]=t(e):t(e);return u},$n.toArray=function(n){var t=n?Pu(n):0;return Er(t)?t?qn(n):[]:ye(n)},$n.toPlainObject=_e,$n.transform=function(n,t,r,e){var u=Io(n)||he(n);return t=yr(t,e,4),null==r&&(u||ae(n)?(e=n.constructor,r=u?Io(n)?new e:[]:Uu(Co(e)&&e.prototype)):r={}),(u?Kn:ht)(n,function(n,e,u){
return t(r,n,e,u)}),r},$n.union=Hu,$n.uniq=Pr,$n.unzip=qr,$n.values=ye,$n.valuesIn=function(n){return Ut(n,ge(n))},$n.where=function(n,t){return Gr(n,wt(t))},$n.without=Qu,$n.wrap=function(n,t){return t=null==t?Oe:t,pr(t,E,null,[n],[])},$n.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Io(r)||oe(r))var e=e?ft(e,r).concat(ft(r,e)):r}return e?Tt(e):[]},$n.zip=no,$n.zipObject=Kr,$n.backflow=jo,$n.collect=Xr,$n.compose=jo,$n.each=oo,$n.eachRight=io,$n.extend=Wo,$n.iteratee=je,
$n.methods=ve,$n.object=Kr,$n.select=Gr,$n.tail=Dr,$n.unique=Pr,Ee($n,$n),$n.add=function(n,t){return(+n||0)+(+t||0)},$n.attempt=Jo,$n.camelCase=qo,$n.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},$n.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&jr(n,t,r)?t=false:typeof t=="function"&&(e=r,r=t,t=false),r=typeof r=="function"&&Bt(r,e,1),ot(n,t,r)},$n.cloneDeep=function(n,t,r){return t=typeof t=="function"&&Bt(t,r,1),ot(n,true,t)},$n.deburr=de,$n.endsWith=function(n,t,r){
n=u(n),t+="";var e=n.length;return r=r===w?e:du(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},$n.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,l):n},$n.escapeRegExp=me,$n.every=Zr,$n.find=eo,$n.findIndex=Yu,$n.findKey=Uo,$n.findLast=uo,$n.findLastIndex=Zu,$n.findLastKey=No,$n.findWhere=function(n,t){return eo(n,wt(t))},$n.first=Br,$n.get=function(n,t,r){return n=null==n?w:gt(n,Nr(t),t+""),n===w?r:n},$n.has=function(n,t){if(null==n)return false;var r=Ke.call(n,t);return r||kr(t)||(t=Nr(t),
n=1==t.length?n:gt(n,It(t,0,-1)),t=Mr(t),r=null!=n&&Ke.call(n,t)),r},$n.identity=Oe,$n.includes=Jr,$n.indexOf=zr,$n.inRange=function(n,t,r){return t=+t||0,"undefined"===typeof r?(r=t,t=0):r=+r||0,n>=du(t,r)&&n<yu(t,r)},$n.isArguments=oe,$n.isArray=Io,$n.isBoolean=function(n){return true===n||false===n||h(n)&&Ye.call(n)==D},$n.isDate=function(n){return h(n)&&Ye.call(n)==P},$n.isElement=ie,$n.isEmpty=function(n){if(null==n)return true;var t=Pu(n);return Er(t)&&(Io(n)||pe(n)||oe(n)||h(n)&&Co(n.splice))?!t:!zo(n).length;

},$n.isEqual=function(n,t,r,e){return r=typeof r=="function"&&Bt(r,e,3),!r&&Ir(n)&&Ir(t)?n===t:(e=r?r(n,t):w,e===w?yt(n,t,r):!!e)},$n.isError=fe,$n.isFinite=Ro,$n.isFunction=Co,$n.isMatch=function(n,t,r,e){var u=zo(t),o=u.length;if(!o)return true;if(null==n)return false;if(r=typeof r=="function"&&Bt(r,e,3),n=Ur(n),!r&&1==o){var i=u[0];if(e=t[i],Ir(e))return e===n[i]&&(e!==w||i in n)}for(var i=Ce(o),f=Ce(o);o--;)e=i[o]=t[u[o]],f[o]=Ir(e);return dt(n,u,i,f,r)},$n.isNaN=function(n){return le(n)&&n!=+n},$n.isNative=ce,
$n.isNull=function(n){return null===n},$n.isNumber=le,$n.isObject=ae,$n.isPlainObject=So,$n.isRegExp=se,$n.isString=pe,$n.isTypedArray=he,$n.isUndefined=function(n){return n===w},$n.kebabCase=Ko,$n.last=Mr,$n.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?yu(e+r,0):du(r||0,e-1))+1;else if(r)return u=$t(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},$n.max=Qo,$n.min=ni,$n.noConflict=function(){
return _._=Ze,this},$n.noop=Ie,$n.now=_o,$n.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&vu(t)?(e=(t-e)/2,t=nu(e),e=He(e),r=cr("",e,r),r.slice(0,t)+n+r):n},$n.padLeft=Vo,$n.padRight=Yo,$n.parseInt=we,$n.random=function(n,t,r){r&&jr(n,t,r)&&(t=r=null);var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=xu(),du(n+r*(t-n+parseFloat("1e-"+((r+"").length-1))),t)):Ot(n,t)},$n.reduce=so,
$n.reduceRight=po,$n.repeat=be,$n.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||kr(t,n)||(t=Nr(t),n=1==t.length?n:gt(n,It(t,0,-1)),e=null==n?w:n[Mr(t)]),e=e===w?r:e),Co(e)?e.call(n):e},$n.runInContext=m,$n.size=function(n){var t=n?Pu(n):0;return Er(t)?t:zo(n).length},$n.snakeCase=Zo,$n.some=ne,$n.sortedIndex=Ju,$n.sortedLastIndex=Xu,$n.startCase=Go,$n.startsWith=function(n,t,r){return n=u(n),r=null==r?0:du(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},$n.sum=function(n,t,r){r&&jr(n,t,r)&&(t=null);

var e=yr(),u=null==t;if(e===ut&&u||(u=false,t=e(t,r,3)),u){for(n=Io(n)?n:Tr(n),t=n.length,r=0;t--;)r+=+n[t]||0;n=r}else n=Wt(n,t);return n},$n.template=function(n,t,r){var e=$n.templateSettings;r&&jr(n,t,r)&&(t=r=null),n=u(n),t=tt(Tu({},r||t),e,nt),r=tt(Tu({},t.imports),e.imports,nt);var o,i,f=zo(r),a=Ut(r,f),c=0;r=t.interpolate||Rn;var l="__p+='";r=$e((t.escape||Rn).source+"|"+r.source+"|"+(r===gn?jn:Rn).source+"|"+(t.evaluate||Rn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";

if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Cn,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",
t=Jo(function(){return Te(f,p+"return "+l).apply(w,a)}),t.source=l,fe(t))throw t;return t},$n.trim=xe,$n.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?jr(e,t,r):null==t)?g(n):i(n,t+"")):n},$n.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?jr(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,f(n,t+"")+1):n},$n.trunc=function(n,t,r){r&&jr(n,t,r)&&(t=null);var e=S;if(r=W,null!=t)if(ae(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;

if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(se(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=$e(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),-1<o&&(t=t.slice(0,o)));return t+r},$n.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},$n.uniqueId=function(n){var t=++Ve;return u(n)+t},$n.words=Ae,$n.all=Zr,$n.any=ne,$n.contains=Jr,
$n.detect=eo,$n.foldl=so,$n.foldr=po,$n.head=Br,$n.include=Jr,$n.inject=so,Ee($n,function(){var n={};return ht($n,function(t,r){$n.prototype[r]||(n[r]=t)}),n}(),false),$n.sample=Hr,$n.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return Hr(t,n)}):Hr(this.value())},$n.VERSION=b,Kn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){$n[n].placeholder=$n}),Kn(["dropWhile","filter","map","takeWhile"],function(n,t){var r=t!=$,e=t==N;zn.prototype[n]=function(n,u){
var o=this.__filtered__,i=o&&e?new zn(this):this.clone();return(i.__iteratees__||(i.__iteratees__=[])).push({done:false,count:0,index:0,iteratee:yr(n,u,1),limit:-1,type:t}),i.__filtered__=o||r,i}}),Kn(["drop","take"],function(n,t){var r=n+"While";zn.prototype[n]=function(r){var e=this.__filtered__,u=e&&!t?this.dropWhile():this.clone();return r=null==r?1:yu(nu(r)||0,0),e?t?u.__takeCount__=du(u.__takeCount__,r):Mr(u.__iteratees__).limit=r:(u.__views__||(u.__views__=[])).push({size:r,type:n+(0>u.__dir__?"Right":"")
}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()},zn.prototype[n+"RightWhile"]=function(n,t){return this.reverse()[r](n,t).reverse()}}),Kn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Kn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this[r](1)}}),Kn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?wt:Re;zn.prototype[n]=function(n){return this[r](e(n));

}}),zn.prototype.compact=function(){return this.filter(Oe)},zn.prototype.reject=function(n,t){return n=yr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=0>n?this.takeRight(-n):this.drop(n);return t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r},zn.prototype.toArray=function(){return this.drop(0)},ht(zn.prototype,function(n,t){var r=$n[t];if(r){var e=/^(?:filter|map|reject)|While$/.test(t),u=/^(?:first|last)$/.test(t);$n.prototype[t]=function(){
function t(n){return n=[n],eu.apply(n,o),r.apply($n,n)}var o=arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Io(f);return s&&e&&typeof l=="function"&&1!=l.length&&(c=s=false),c=c&&!a,u&&!i?c?n.call(f):r.call($n,this.value()):s?(f=n.apply(c?f:new zn(this),o),u||!a&&!f.__actions__||(f.__actions__||(f.__actions__=[])).push({func:Yr,args:[t],thisArg:$n}),new Bn(f,i)):this.thru(t)}}}),Kn("concat join pop push replace shift sort splice split unshift".split(" "),function(n){
var t=(/^(?:replace|split)$/.test(n)?De:ze)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);$n.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),ht(zn.prototype,function(n,t){var r=$n[t];if(r){var e=r.name;(Su[e]||(Su[e]=[])).push({name:t,func:r})}}),Su[ar(null,A).name]=[{name:"wrapper",func:null}],zn.prototype.clone=function(){var n=this.__actions__,t=this.__iteratees__,r=this.__views__,e=new zn(this.__wrapped__);

return e.__actions__=n?qn(n):null,e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=t?qn(t):null,e.__takeCount__=this.__takeCount__,e.__views__=r?qn(r):null,e},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){var n=this.__wrapped__.value();if(!Io(n))return Ft(n,this.__actions__);var t,r=this.__dir__,e=0>r;t=n.length;for(var u=this.__views__,o=0,i=-1,f=u?u.length:0;++i<f;){
var a=u[i],c=a.size;switch(a.type){case"drop":o+=c;break;case"dropRight":t-=c;break;case"take":t=du(t,o+c);break;case"takeRight":o=yu(o,t-c)}}t={start:o,end:t},u=t.start,o=t.end,t=o-u,u=e?o:u-1,o=du(t,this.__takeCount__),f=(i=this.__iteratees__)?i.length:0,a=0,c=[];n:for(;t--&&a<o;){for(var u=u+r,l=-1,s=n[u];++l<f;){var p=i[l],h=p.iteratee,_=p.type;if(_==N){if(p.done&&(e?u>p.index:u<p.index)&&(p.count=0,p.done=false),p.index=u,!(p.done||(_=p.limit,p.done=-1<_?p.count++>=_:!h(s))))continue n}else if(p=h(s),
_==$)s=p;else if(!p){if(_==F)continue n;break n}}c[a++]=s}return c},$n.prototype.chain=function(){return Vr(this)},$n.prototype.commit=function(){return new Bn(this.value(),this.__chain__)},$n.prototype.plant=function(n){for(var t,r=this;r instanceof Ln;){var e=Fr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},$n.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof zn?(this.__actions__.length&&(n=new zn(this)),new Bn(n.reverse(),this.__chain__)):this.thru(function(n){
return n.reverse()})},$n.prototype.toString=function(){return this.value()+""},$n.prototype.run=$n.prototype.toJSON=$n.prototype.valueOf=$n.prototype.value=function(){return Ft(this.__wrapped__,this.__actions__)},$n.prototype.collect=$n.prototype.map,$n.prototype.head=$n.prototype.first,$n.prototype.select=$n.prototype.filter,$n.prototype.tail=$n.prototype.rest,$n}var w,b="3.7.0",x=1,A=2,j=4,k=8,O=16,E=32,I=64,R=128,C=256,S=30,W="...",T=150,U=16,N=0,F=1,$=2,L="Expected a function",B="__lodash_placeholder__",z="[object Arguments]",M="[object Array]",D="[object Boolean]",P="[object Date]",q="[object Error]",K="[object Function]",V="[object Number]",Y="[object Object]",Z="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]+|(["'])(?:(?!\1)[^\n\\]|\\.)*?)\1\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/[.*+?^${}()|[\]\/\\]/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,On=/^0[xX]/,En=/^\[object .+?Constructor\]$/,In=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Rn=/($^)/,Cn=/['\n\r\u2028\u2029\\]/g,Sn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),Wn=" \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",Tn="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window".split(" "),Un={};

Un[X]=Un[H]=Un[Q]=Un[nn]=Un[tn]=Un[rn]=Un[en]=Un[un]=Un[on]=true,Un[z]=Un[M]=Un[J]=Un[D]=Un[P]=Un[q]=Un[K]=Un["[object Map]"]=Un[V]=Un[Y]=Un[Z]=Un["[object Set]"]=Un[G]=Un["[object WeakMap]"]=false;var Nn={};Nn[z]=Nn[M]=Nn[J]=Nn[D]=Nn[P]=Nn[X]=Nn[H]=Nn[Q]=Nn[nn]=Nn[tn]=Nn[V]=Nn[Y]=Nn[Z]=Nn[G]=Nn[rn]=Nn[en]=Nn[un]=Nn[on]=true,Nn[q]=Nn[K]=Nn["[object Map]"]=Nn["[object Set]"]=Nn["[object WeakMap]"]=false;var Fn={leading:false,maxWait:0,trailing:false},$n={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A",
"\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u",
"\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Ln={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Bn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Mn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,Pn=zn[typeof module]&&module&&!module.nodeType&&module,qn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=Pn&&Pn.exports===Dn&&Dn,Yn=Dn&&Pn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||qn||this,Zn=m();

typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Yn._=Zn, define('lodash',[],function(){return Zn})):Dn&&Pn?Vn?(Pn.exports=Zn)._=Zn:Dn._=Zn:Yn._=Zn}).call(this);
define('service/register',['lodash'], function (_) {
	"use strict";
	
	var privateMember = {
		"priceArray": ["65", "55", "45", "35", "25", "5"]
	};

	return {
		"total": function (passes, currentTotal) {
			var self = this,
				total = currentTotal || 0,
				pricingIsValid = self.isAllPricingValid(passes),
				passTotal = 0;

			if (pricingIsValid === true) {
				passTotal = self.sum(passes);
				total = self.add(total, passTotal);
			}

			return total;
		},
		"add": function (initalTotal, passPrice) {
			return _.add(initalTotal,passPrice);
		},
		"isValueValid": function (value) {
			return (_.isUndefined(value) || _.isNull(value) || _.isEmpty(value)) ? false : true;
		},
		"isPassPriceValid": function (passPrice) {
			var self = this;

			return (self.isValueValid(passPrice) === true && _.indexOf(privateMember.priceArray, passPrice) !== -1) ? true : false;
		},
		"isAllPricingValid": function (passes) {
			var self = this,
				i = 0,
				allPricingIsValid = true,
				passPriceIsValid = true;

			for(; i < passes.length; i++) {
				passPriceIsValid = self.isPassPriceValid(passes[i]);

				if (passPriceIsValid === false) {
					allPricingIsValid = false;
					break;
				}
			}

			return allPricingIsValid;
		},
		"sum": function (passes) {
			return _.sum(passes);
		}
	}
});
define('module/passes',["lodash", "service/register"], function (_, registerService) {
	"use strict";

	var publicMembers = {
		"bindEvents": function (settings) {
			$(settings.scope).on("change", ".event-pass-types input[type='radio'], .activity-pass-types input[type='checkbox']", {"scope": settings.scope}, publicMembers.triggerSetTotalEvent);
			$(settings.scope).on("setTotal", publicMembers.setTotal);
		},
		"listen": function () {
			$(document).on("guest:added", publicMembers.setTotal);
			$(document).on("guest:removed", publicMembers.deductAmount);
		},
		"setTotal": function (event, target) {
			var selectedEventPasses = $(".event-pass-types input[type='radio']:checked, .activity-pass-types input[type='checkbox']:checked", target),
				cachedTotalTarget = $("#total"),
				selectedEventPassPrices = _.map(selectedEventPasses, publicMembers.getPriceFromDataAttr),
				currentTotal = cachedTotalTarget.text() || 0,
				grandTotal = registerService.total(selectedEventPassPrices, currentTotal);

			publicMembers.setPassPriceTotalOnTarget(selectedEventPassPrices, target);

			$("#PAYMENTREQUEST_0_AMT").val(grandTotal); //TODO:Needs unit tested
			cachedTotalTarget.text(grandTotal);
		},
		"getPriceFromDataAttr": function (element) {
			return $(element).attr("data-price");
		},
		"deductAmount": function (event, amount) {
			var cachedTotalTarget = $("#total"),
				currentTotal = cachedTotalTarget.text(),
				grandTotal = parseInt(currentTotal) - amount;

			cachedTotalTarget.text(grandTotal);
		},
		"triggerSetTotalEvent": function (event) {
			var amountToDeduct = $(event.data.scope).attr("data-passPriceTotal") || 0; //TODO: Needs unit tested

			publicMembers.deductAmount(event, amountToDeduct); //TODO: Needs unit tested

			$(event.data.scope).trigger("setTotal", [event.data.scope]);
		},
		"setPassPriceTotalOnTarget": function (passPrices, target) {
			var passPriceTotal = 0;

			if (target === "#generalInfo") {
				passPriceTotal = registerService.total(passPrices);

				$(target).attr("data-passPriceTotal", passPriceTotal);
			}
		}
	};

	return publicMembers;
});
define('section/userInfo',['module/registerGuest', 'module/passes'], function(registerGuest, passes) {
	"use strict";

	var privateMembers = {
		"GLOBAL_SCOPE": ""
	};

	return function(settings) {
		privateMembers.GLOBAL_SCOPE = settings.scope;

		return {
			"init": function () {
				var settings = {
					"scope": privateMembers.GLOBAL_SCOPE
				};
				
				//calls bindEvents for all modules
				registerGuest.bindEvents(settings);

				passes.bindEvents(settings);
				
				//addes listeners for all modules
			},
			"loadContent": function () {
				//ajax content
			},
			"subscribe": function () {
				//listens for a message to call load content
			}
		};
	};
});
/*!

 handlebars v3.0.1

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define('handlebars',[], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Handlebars = factory();
  }
}(this, function () {
// handlebars/utils.js
var __module2__ = (function() {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr];
  }

  function extend(obj /* , ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
          obj[key] = arguments[i][key];
        }
      }
    }

    return obj;
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  /* istanbul ignore next */
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  /* istanbul ignore next */
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;
  // Older IE versions do not directly support indexOf so we must implement our own, sadly.
  function indexOf(array, value) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  __exports__.indexOf = indexOf;
  function escapeExpression(string) {
    if (typeof string !== 'string') {
      // don't escape SafeStrings, since they're already safe
      if (string && string.toHTML) {
        return string.toHTML();
      } else if (string == null) {
        return '';
      } else if (!string) {
        return string + '';
      }

      // Force a string conversion as this will be done by the append regardless and
      // the regex test will do this transparently behind the scenes, causing issues if
      // an object's to string has escaped characters in it.
      string = '' + string;
    }

    if (!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;function blockParams(params, ids) {
    params.path = ids;
    return params;
  }

  __exports__.blockParams = blockParams;function appendContextPath(contextPath, id) {
    return (contextPath ? contextPath + '.' : '') + id;
  }

  __exports__.appendContextPath = appendContextPath;
  return __exports__;
})();

// handlebars/exception.js
var __module3__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var loc = node && node.loc,
        line,
        column;
    if (loc) {
      line = loc.start.line;
      column = loc.start.column;

      message += ' - ' + line + ':' + column;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (loc) {
      this.lineNumber = line;
      this.column = column;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module1__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "3.0.1";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 6;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '== 1.x.x',
    5: '== 2.0.0-alpha.x',
    6: '>= 2.0.0-beta.1'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn) {
      if (toString.call(name) === objectType) {
        if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        this.helpers[name] = fn;
      }
    },
    unregisterHelper: function(name) {
      delete this.helpers[name];
    },

    registerPartial: function(name, partial) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        if (typeof partial === 'undefined') {
          throw new Exception('Attempting to register a partial as undefined');
        }
        this.partials[name] = partial;
      }
    },
    unregisterPartial: function(name) {
      delete this.partials[name];
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(/* [args, ]options */) {
      if(arguments.length === 1) {
        // A missing field in a {{foo}} constuct.
        return undefined;
      } else {
        // Someone is actually trying to call something, blow up.
        throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse,
          fn = options.fn;

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          if (options.ids) {
            options.ids = [options.name];
          }

          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
          options = {data: data};
        }

        return fn(context, options);
      }
    });

    instance.registerHelper('each', function(context, options) {
      if (!options) {
        throw new Exception('Must pass iterator to #each');
      }

      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      var contextPath;
      if (options.data && options.ids) {
        contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
      }

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      function execIteration(key, i, last) {
        if (data) {
          data.key = key;
          data.index = i;
          data.first = i === 0;
          data.last  = !!last;

          if (contextPath) {
            data.contextPath = contextPath + key;
          }
        }

        ret = ret + fn(context[key], {
          data: data,
          blockParams: Utils.blockParams([context[key], key], [contextPath + key, null])
        });
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            execIteration(i, i, i === context.length-1);
          }
        } else {
          var priorKey;

          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              // We're running the iterations one step out of sync so we can detect
              // the last iteration without have to scan the object twice and create
              // an itermediate keys array. 
              if (priorKey) {
                execIteration(priorKey, i-1);
              }
              priorKey = key;
              i++;
            }
          }
          if (priorKey) {
            execIteration(priorKey, i-1, true);
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      var fn = options.fn;

      if (!Utils.isEmpty(context)) {
        if (options.data && options.ids) {
          var data = createFrame(options.data);
          data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
          options = {data:data};
        }

        return fn(context, options);
      } else {
        return options.inverse(this);
      }
    });

    instance.registerHelper('log', function(message, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, message);
    });

    instance.registerHelper('lookup', function(obj, field) {
      return obj && obj[field];
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 1,

    // Can be overridden in the host environment
    log: function(level, message) {
      if (typeof console !== 'undefined' && logger.level <= level) {
        var method = logger.methodMap[level];
        (console[method] || console.log).call(console, message);
      }
    }
  };
  __exports__.logger = logger;
  var log = logger.log;
  __exports__.log = log;
  var createFrame = function(object) {
    var frame = Utils.extend({}, object);
    frame._parent = object;
    return frame;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module2__, __module3__);

// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/runtime.js
var __module5__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;
  var createFrame = __dependency3__.createFrame;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    /* istanbul ignore next */
    if (!env) {
      throw new Exception("No environment passed to template");
    }
    if (!templateSpec || !templateSpec.main) {
      throw new Exception('Unknown template object: ' + typeof templateSpec);
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    env.VM.checkRevision(templateSpec.compiler);

    var invokePartialWrapper = function(partial, context, options) {
      if (options.hash) {
        context = Utils.extend({}, context, options.hash);
      }

      partial = env.VM.resolvePartial.call(this, partial, context, options);
      var result = env.VM.invokePartial.call(this, partial, context, options);

      if (result == null && env.compile) {
        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
        result = options.partials[options.name](context, options);
      }
      if (result != null) {
        if (options.indent) {
          var lines = result.split('\n');
          for (var i = 0, l = lines.length; i < l; i++) {
            if (!lines[i] && i + 1 === l) {
              break;
            }

            lines[i] = options.indent + lines[i];
          }
          result = lines.join('\n');
        }
        return result;
      } else {
        throw new Exception("The partial " + options.name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      strict: function(obj, name) {
        if (!(name in obj)) {
          throw new Exception('"' + name + '" not defined in ' + obj);
        }
        return obj[name];
      },
      lookup: function(depths, name) {
        var len = depths.length;
        for (var i = 0; i < len; i++) {
          if (depths[i] && depths[i][name] != null) {
            return depths[i][name];
          }
        }
      },
      lambda: function(current, context) {
        return typeof current === 'function' ? current.call(context) : current;
      },

      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,

      fn: function(i) {
        return templateSpec[i];
      },

      programs: [],
      program: function(i, data, declaredBlockParams, blockParams, depths) {
        var programWrapper = this.programs[i],
            fn = this.fn(i);
        if (data || depths || blockParams || declaredBlockParams) {
          programWrapper = program(this, i, fn, data, declaredBlockParams, blockParams, depths);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(this, i, fn);
        }
        return programWrapper;
      },

      data: function(data, depth) {
        while (data && depth--) {
          data = data._parent;
        }
        return data;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = Utils.extend({}, common, param);
        }

        return ret;
      },

      noop: env.VM.noop,
      compilerInfo: templateSpec.compiler
    };

    var ret = function(context, options) {
      options = options || {};
      var data = options.data;

      ret._setup(options);
      if (!options.partial && templateSpec.useData) {
        data = initData(context, data);
      }
      var depths,
          blockParams = templateSpec.useBlockParams ? [] : undefined;
      if (templateSpec.useDepths) {
        depths = options.depths ? [context].concat(options.depths) : [context];
      }

      return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
    };
    ret.isTop = true;

    ret._setup = function(options) {
      if (!options.partial) {
        container.helpers = container.merge(options.helpers, env.helpers);

        if (templateSpec.usePartial) {
          container.partials = container.merge(options.partials, env.partials);
        }
      } else {
        container.helpers = options.helpers;
        container.partials = options.partials;
      }
    };

    ret._child = function(i, data, blockParams, depths) {
      if (templateSpec.useBlockParams && !blockParams) {
        throw new Exception('must pass block params');
      }
      if (templateSpec.useDepths && !depths) {
        throw new Exception('must pass parent depths');
      }

      return program(container, i, templateSpec[i], data, 0, blockParams, depths);
    };
    return ret;
  }

  __exports__.template = template;function program(container, i, fn, data, declaredBlockParams, blockParams, depths) {
    var prog = function(context, options) {
      options = options || {};

      return fn.call(container,
          context,
          container.helpers, container.partials,
          options.data || data,
          blockParams && [options.blockParams].concat(blockParams),
          depths && [context].concat(depths));
    };
    prog.program = i;
    prog.depth = depths ? depths.length : 0;
    prog.blockParams = declaredBlockParams || 0;
    return prog;
  }

  __exports__.program = program;function resolvePartial(partial, context, options) {
    if (!partial) {
      partial = options.partials[options.name];
    } else if (!partial.call && !options.name) {
      // This is a dynamic partial that returned a string
      options.name = partial;
      partial = options.partials[partial];
    }
    return partial;
  }

  __exports__.resolvePartial = resolvePartial;function invokePartial(partial, context, options) {
    options.partial = true;

    if(partial === undefined) {
      throw new Exception("The partial " + options.name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;function initData(context, data) {
    if (!data || !('root' in data)) {
      data = data ? createFrame(data) : {};
      data.root = context;
    }
    return data;
  }
  return __exports__;
})(__module2__, __module3__, __module1__);

// handlebars.runtime.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;
    hb.escapeExpression = Utils.escapeExpression;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  /*jshint -W040 */
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function() {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };

  Handlebars['default'] = Handlebars;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module4__, __module3__, __module2__, __module5__);

  return __module0__;
}));

define('templates/registration',['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["guestList"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	    <li>\r\n	    	<dl>\r\n	    		<dt>First Name:</dt>\r\n	    		<dd class=\"firstName\">"
    + alias3(((helper = (helper = helpers.firstname || (depth0 != null ? depth0.firstname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"firstname","hash":{},"data":data}) : helper)))
    + "</dd>\r\n\r\n	    		<dt>Last Name:</dt>\r\n	    		<dd class=\"lastName\">"
    + alias3(((helper = (helper = helpers.lastname || (depth0 != null ? depth0.lastname : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"lastname","hash":{},"data":data}) : helper)))
    + "</dd>\r\n\r\n	    		<dt>Pass Type:</dt>\r\n	    		<dd class=\"eventPassType\">"
    + alias3(((helper = (helper = helpers.eventPassType || (depth0 != null ? depth0.eventPassType : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventPassType","hash":{},"data":data}) : helper)))
    + "</dd>\r\n				\r\n	    		<dt>Activities:</dt>\r\n	    		<dd class=\"eventPassType\">"
    + alias3(((helper = (helper = helpers.activities || (depth0 != null ? depth0.activities : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"activities","hash":{},"data":data}) : helper)))
    + "</dd>\r\n\r\n	    		<dt>Guest Total:</dt>\r\n	    		<dd class=\"guestCost\">$"
    + alias3(((helper = (helper = helpers.totalCost || (depth0 != null ? depth0.totalCost : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"totalCost","hash":{},"data":data}) : helper)))
    + "</dd>\r\n	    	</dl>\r\n	        <input type=\"button\" value=\"Remove\" class=\"remove-guest\"/>\r\n	    </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h4>Guest Added</h4>\r\n<ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guest : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

return this["JST"];

});
define('module/guest',["lodash", "templates/registration", "service/register"], function (_, registrationTemplates, registerService) {
	"use strict";

	var privateMembers = {
			"allPassTypes": [
				{"name": "2 Day Pass", "type": "2"},
				{"name": "1 Day Pass", "type": "1"},
				{"name": "12 and under", "type": "0"},
				{"name": "Golfing", "type": "G"},
				{"name": "Fishing", "type": "F"},
				{"name": "Paintball", "type": "P"}
			]
		}, 
		publicMembers = {
			"bindEvents": function (settings) {
				$(settings.scope).on("click", ".add-guest", publicMembers.addGuest);
				$(settings.scope).on("click", ".remove-guest", publicMembers.removeGuest);
			},
			"isFormValid": function (event) { //TODO: Create rules and message using jquery valdiation plugin to validate that the form is valid.
				var targetForm = $(event.target).parents("form"),
					isValid = targetForm.valid();

				return isValid;
			},
			"getValue": function (element) {
				var value = $(element).val(),
					passTypeObject = _.find(privateMembers.allPassTypes, "type", value),
					isPassTypeObjectUndefined = _.isUndefined(passTypeObject),
					isPasstypeObjectAnObject = _.isObject(passTypeObject);

				if (isPassTypeObjectUndefined === false && isPasstypeObjectAnObject === true) {
					value = _.result(passTypeObject, "name");
				}

				return value;
			},
			"buildNewGuestObject": function () {
				var firstname = publicMembers.getValue("#guest_firstname"),
					lastname = publicMembers.getValue("#guest_lastname"),
					eventPassType = _.map($(".event-pass-types input[type='radio']:checked", "#guests"), publicMembers.getValue).join(", "),
					activities = _.map($(".activity-pass-types input[type='checkbox']:checked", "#guests"), publicMembers.getValue).join(", "),
					totalCost = publicMembers.getTotalForGuestPassesSelect();

				return {
					"firstname": firstname,
					"lastname": lastname,
					"eventPassType": eventPassType,
					"activities": activities,
					"totalCost": totalCost
				};
			},
			"addGuest": function (event) {
				var isFormValid = publicMembers.isFormValid(event),
					guestList = null,
					guestObject = null;

				if (isFormValid === true) {
					guestList = JSON.parse($("#guestList").val());

					guestObject = publicMembers.buildNewGuestObject();

					guestList.guest.push(guestObject); //Can't spyOn(Array.prototype, "push"). Need to create a mediator

					publicMembers.insertGuestListIntoDOM(guestList);

					$(document).trigger("guest:added", ["#guests"]);
				}
			},
			"insertGuestListIntoDOM": function (guestList) {
				var markup = registrationTemplates.guestList(guestList); 

				$("#guestList").val(JSON.stringify(guestList));

				$(".guestAdded").html(markup);
			},
			"removeGuest": function (event) {
				var guestList = JSON.parse($("#guestList").val()),
					listItemToRemove = $(event.target).parent(),
					indexOfItemToRemove = listItemToRemove.index(),
					totalCostToSubtract = guestList.guest[indexOfItemToRemove].totalCost;

				guestList.guest.splice(indexOfItemToRemove, 1); //Can't spyOn(Array.prototype, "push"). Need to create a mediator

				publicMembers.insertGuestListIntoDOM(guestList);

				$(document).trigger("guest:removed", [totalCostToSubtract]);
			},
			"getTotalForGuestPassesSelect": function () {
				var selectedEventPasses = $(".event-pass-types input[type='radio']:checked, .activity-pass-types input[type='checkbox']:checked", "#guests"),
					selectedEventPassPrices = _.map(selectedEventPasses, publicMembers.getPriceFromDataAttr),
					selectedEventPassPricesTotal = registerService.total(selectedEventPassPrices);

				return selectedEventPassPricesTotal;
			},
			"getPriceFromDataAttr": function (element) {
				return $(element).attr("data-price");
			}
		};

	return publicMembers;
});
define('section/guestInfo',['module/passes', 'module/guest'], function(passes, guest) {
	"use strict";

	var privateMembers = {
		"GLOBAL_SCOPE": ""
	};

	return function(settings) {
		privateMembers.GLOBAL_SCOPE = settings.scope;

		return {
			"init": function () {
				var settings = {
					"scope": privateMembers.GLOBAL_SCOPE
				};
				
				//calls bindEvents for all modules
				guest.bindEvents(settings);
				
				//addes listeners for all modules
				passes.listen();
			},
			"loadContent": function () {
				//ajax content
			},
			"subscribe": function () {
				//listens for a message to call load content
			}
		};
	};
});
/*! @license Firebase v2.1.2 - License: https://www.firebase.com/terms/terms-of-service.html */ (function() {var h,aa=this;function m(a){return void 0!==a}function ba(){}function ca(a){a.Nb=function(){return a.kf?a.kf:a.kf=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){function c(){}c.prototype=b.prototype;a.Jg=b.prototype;a.prototype=new c;a.Fg=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function na(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function oa(){this.Hd=void 0}
function pa(a,b,c){switch(typeof b){case "string":qa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],pa(a,a.Hd?a.Hd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),qa(f,c),
c.push(":"),pa(a,a.Hd?a.Hd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var ra={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function qa(a,b){b.push('"',a.replace(sa,function(a){if(a in ra)return ra[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return ra[a]=e+b.toString(16)}),'"')};function ta(a){return"undefined"!==typeof JSON&&m(JSON.parse)?JSON.parse(a):na(a)}function r(a){if("undefined"!==typeof JSON&&m(JSON.stringify))a=JSON.stringify(a);else{var b=[];pa(new oa,a,b);a=b.join("")}return a};function s(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function t(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function ua(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function va(a){var b={};ua(a,function(a,d){b[a]=d});return b};function wa(a){this.uc=a;this.Ed="firebase:"}h=wa.prototype;h.set=function(a,b){null==b?this.uc.removeItem(this.Ed+a):this.uc.setItem(this.Ed+a,r(b))};h.get=function(a){a=this.uc.getItem(this.Ed+a);return null==a?null:ta(a)};h.remove=function(a){this.uc.removeItem(this.Ed+a)};h.lf=!1;h.toString=function(){return this.uc.toString()};function xa(){this.oc={}}xa.prototype.set=function(a,b){null==b?delete this.oc[a]:this.oc[a]=b};xa.prototype.get=function(a){return s(this.oc,a)?this.oc[a]:null};xa.prototype.remove=function(a){delete this.oc[a]};xa.prototype.lf=!0;function ya(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new wa(b)}}catch(c){}return new xa}var za=ya("localStorage"),v=ya("sessionStorage");function Aa(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Ab=b;this.tb=c;this.Dg=d;this.Dd=e||"";this.Ma=za.get("host:"+a)||this.host}function Ba(a,b){b!==a.Ma&&(a.Ma=b,"s-"===a.Ma.substr(0,2)&&za.set("host:"+a.host,a.Ma))}Aa.prototype.toString=function(){var a=(this.Ab?"https://":"http://")+this.host;this.Dd&&(a+="<"+this.Dd+">");return a};function Ca(){this.Sa=-1};function Da(){this.Sa=-1;this.Sa=64;this.R=[];this.be=[];this.Ef=[];this.Ad=[];this.Ad[0]=128;for(var a=1;a<this.Sa;++a)this.Ad[a]=0;this.Td=this.Sb=0;this.reset()}ma(Da,Ca);Da.prototype.reset=function(){this.R[0]=1732584193;this.R[1]=4023233417;this.R[2]=2562383102;this.R[3]=271733878;this.R[4]=3285377520;this.Td=this.Sb=0};
function Ea(a,b,c){c||(c=0);var d=a.Ef;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.R[0];c=a.R[1];for(var g=a.R[2],k=a.R[3],l=a.R[4],n,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),n=1518500249):(f=c^g^k,n=1859775393):60>e?(f=c&g|k&(c|g),n=2400959708):(f=c^g^k,n=3395469782),f=(b<<
5|b>>>27)+f+l+n+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.R[0]=a.R[0]+b&4294967295;a.R[1]=a.R[1]+c&4294967295;a.R[2]=a.R[2]+g&4294967295;a.R[3]=a.R[3]+k&4294967295;a.R[4]=a.R[4]+l&4294967295}
Da.prototype.update=function(a,b){m(b)||(b=a.length);for(var c=b-this.Sa,d=0,e=this.be,f=this.Sb;d<b;){if(0==f)for(;d<=c;)Ea(this,a,d),d+=this.Sa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Sa){Ea(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Sa){Ea(this,e);f=0;break}}this.Sb=f;this.Td+=b};function Fa(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)};var w=Array.prototype,Ga=w.indexOf?function(a,b,c){return w.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=w.forEach?function(a,b,c){w.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ia=w.filter?function(a,b,c){return w.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Ja=w.map?function(a,b,c){return w.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ka=w.reduce?function(a,b,c,d){d&&(b=q(b,d));return w.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Ha(a,function(c,g){e=b.call(d,e,c,g,a)});return e},La=w.every?function(a,b,c){return w.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=
p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Ma(a,b){var c=Na(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Na(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Oa(a,b){var c=Ga(a,b);0<=c&&w.splice.call(a,c,1)}function Pa(a,b,c){return 2>=arguments.length?w.slice.call(a,b):w.slice.call(a,b,c)}function Qa(a,b){a.sort(b||Ra)}function Ra(a,b){return a>b?1:a<b?-1:0};var Sa;a:{var Ta=aa.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){Sa=Ua;break a}}Sa=""}function Va(a){return-1!=Sa.indexOf(a)};var Wa=Va("Opera")||Va("OPR"),Xa=Va("Trident")||Va("MSIE"),Ya=Va("Gecko")&&-1==Sa.toLowerCase().indexOf("webkit")&&!(Va("Trident")||Va("MSIE")),Za=-1!=Sa.toLowerCase().indexOf("webkit");(function(){var a="",b;if(Wa&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Ya?b=/rv\:([^\);]+)(\)|;)/:Xa?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Za&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(Sa))?a[1]:"");return Xa&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var $a=null,ab=null,bb=null;function cb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");db();for(var c=b?ab:$a,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,k=g?a[e+1]:0,l=e+2<a.length,n=l?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|n>>6,n=n&63;l||(n=64,g||(k=64));d.push(c[u],c[f],c[k],c[n])}return d.join("")}
function db(){if(!$a){$a={};ab={};bb={};for(var a=0;65>a;a++)$a[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),ab[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),bb[ab[a]]=a}};var eb=function(){var a=1;return function(){return a++}}();function y(a,b){if(!a)throw fb(b);}function fb(a){return Error("Firebase INTERNAL ASSERT FAILED:"+a)}
function gb(a){try{var b;if("undefined"!==typeof atob)b=atob(a);else{db();for(var c=bb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var l=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==g||null==k||null==l)throw Error();d.push(f<<2|g>>4);64!=k&&(d.push(g<<4&240|k>>2),64!=l&&d.push(k<<6&192|l))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Pa(d,c,
c+8192));b=a}}return b}catch(n){hb("base64Decode failed: ",n)}return null}function ib(a){var b=jb(a);a=new Da;a.update(b);var b=[],c=8*a.Td;56>a.Sb?a.update(a.Ad,56-a.Sb):a.update(a.Ad,a.Sa-(a.Sb-56));for(var d=a.Sa-1;56<=d;d--)a.be[d]=c&255,c/=256;Ea(a,a.be);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.R[d]>>e&255,++c;return cb(b)}
function kb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+kb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+r(arguments[c]):b+arguments[c],b+=" ";return b}var lb=null,mb=!0;function hb(a){!0===mb&&(mb=!1,null===lb&&!0===v.get("logging_enabled")&&nb(!0));if(lb){var b=kb.apply(null,arguments);lb(b)}}function ob(a){return function(){hb(a,arguments)}}
function pb(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+kb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function qb(a){var b=kb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function z(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+kb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function rb(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var n=a[l];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(u){}e+="/"+n}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,Ag:d,Ab:f,scheme:g,Pc:e}}function sb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function tb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function ub(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=vb(a),d=vb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function wb(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+r(b));}
function xb(a){if("object"!==typeof a||null===a)return r(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=r(b[d]),c+=":",c+=xb(a[b[d]]);return c+"}"}function yb(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function zb(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else A(a,b)}
function Ab(a){y(!sb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var Bb=/^-?\d{1,10}$/;function vb(a){return Bb.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function Cb(a){try{a()}catch(b){setTimeout(function(){z("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function B(a,b){if(ha(a)){var c=Array.prototype.slice.call(arguments,1).slice();Cb(function(){a.apply(null,c)})}};function Db(a,b,c,d){this.le=b;this.Nd=c;this.Fd=d;this.jd=a}Db.prototype.Qb=function(){var a=this.Nd.cc();return"value"===this.jd?a.path:a.parent().path};Db.prototype.pe=function(){return this.jd};Db.prototype.Lb=function(){return this.le.Lb(this)};Db.prototype.toString=function(){return this.Qb().toString()+":"+this.jd+":"+r(this.Nd.bf())};function Eb(a,b,c){this.le=a;this.error=b;this.path=c}Eb.prototype.Qb=function(){return this.path};Eb.prototype.pe=function(){return"cancel"};
Eb.prototype.Lb=function(){return this.le.Lb(this)};Eb.prototype.toString=function(){return this.path.toString()+":cancel"};function C(a,b,c,d){this.type=a;this.Ha=b;this.Ua=c;this.De=d;this.Fd=void 0}function Fb(a){return new C(Gb,a)}var Gb="value";function Hb(a,b,c){this.Hb=a;this.kb=b;this.mb=c||null}h=Hb.prototype;h.wf=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.n.g;return new Db("value",this,new D(a.Ha,b.cc(),c))};h.Lb=function(a){var b=this.mb;if("cancel"===a.pe()){y(this.kb,"Raising a cancel event on a listener with no cancel callback");var c=this.kb;return function(){c.call(b,a.error)}}var d=this.Hb;return function(){d.call(b,a.Nd)}};h.Ye=function(a,b){return this.kb?new Eb(this,a,b):null};
h.matches=function(a){return a instanceof Hb?a.Hb&&this.Hb?a.Hb===this.Hb&&a.mb===this.mb:!0:!1};h.hf=function(){return null!==this.Hb};function Ib(a,b,c){this.da=a;this.kb=b;this.mb=c}h=Ib.prototype;h.wf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.da};h.Ye=function(a,b){return this.kb?new Eb(this,a,b):null};
h.createEvent=function(a,b){y(null!=a.Ua,"Child events should have a childName.");var c=b.cc().o(a.Ua);return new Db(a.type,this,new D(a.Ha,c,b.n.g),a.Fd)};h.Lb=function(a){var b=this.mb;if("cancel"===a.pe()){y(this.kb,"Raising a cancel event on a listener with no cancel callback");var c=this.kb;return function(){c.call(b,a.error)}}var d=this.da[a.jd];return function(){d.call(b,a.Nd,a.Fd)}};
h.matches=function(a){if(a instanceof Ib){if(!this.da||!a.da)return!0;if(this.mb===a.mb){var b=Jb(a.da);if(b===Jb(this.da)){if(1===b){var b=Kb(a.da),c=Kb(this.da);return c===b&&(!a.da[b]||!this.da[c]||a.da[b]===this.da[c])}return Lb(this.da,function(b,c){return a.da[c]===b})}}}return!1};h.hf=function(){return null!==this.da};function jb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,y(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function F(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function G(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function H(a,b,c,d){if((!d||m(c))&&!ha(c))throw Error(G(a,b,d)+"must be a valid function.");}function Mb(a,b,c){if(m(c)&&(!ia(c)||null===c))throw Error(G(a,b,!0)+"must be a valid context object.");};var Nb=/[\[\].#$\/\u0000-\u001F\u007F]/,Ob=/[\[\].#$\u0000-\u001F\u007F]/;function Pb(a){return p(a)&&0!==a.length&&!Nb.test(a)}function Qb(a){return null===a||p(a)||ga(a)&&!sb(a)||ia(a)&&s(a,".sv")}function Rb(a,b,c){c&&!m(b)||Sb(G(a,1,c),b)}
function Sb(a,b,c,d){c||(c=0);var e=d||[];if(!m(b))throw Error(a+"contains undefined"+Tb(e));if(ha(b))throw Error(a+"contains a function"+Tb(e)+" with contents: "+b.toString());if(sb(b))throw Error(a+"contains "+b.toString()+Tb(e));if(1E3<c)throw new TypeError(a+"contains a cyclic object value ("+e.slice(0,100).join(".")+"...)");if(p(b)&&b.length>10485760/3&&10485760<jb(b).length)throw Error(a+"contains a string greater than 10485760 utf8 bytes"+Tb(e)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var f=
!1,g=!1;ua(b,function(b,d){if(".value"===b)f=!0;else if(".priority"!==b&&".sv"!==b&&(g=!0,!Pb(b)))throw Error(a+" contains an invalid key ("+b+")"+Tb(e)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');e.push(b);Sb(a,d,c+1,e);e.pop()});if(f&&g)throw Error(a+' contains ".value" child'+Tb(e)+" in addition to actual children.");}}function Tb(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}
function Ub(a,b){if(!ia(b)||ea(b))throw Error(G(a,1,!1)+" must be an Object containing the children to replace.");if(s(b,".value"))throw Error(G(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Rb(a,b,!1)}
function Vb(a,b,c){if(sb(c))throw Error(G(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Qb(c))throw Error(G(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Wb(a,b,c){if(!c||m(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(G(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Xb(a,b,c,d){if((!d||m(c))&&!Pb(c))throw Error(G(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Yb(a,b){if(!p(b)||0===b.length||Ob.test(b))throw Error(G(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Zb(a,b){if(".info"===I(b))throw Error(a+" failed: Can't modify data under /.info/");}function $b(a,b){if(!p(b))throw Error(G(a,1,!1)+"must be a valid credential (a string).");}function ac(a,b,c){if(!p(c))throw Error(G(a,b,!1)+"must be a valid string.");}
function J(a,b,c,d){if(!d||m(c))if(!ia(c)||null===c)throw Error(G(a,b,d)+"must be a valid object.");}function K(a,b,c){if(!ia(b)||null===b||!s(b,c))throw Error(G(a,1,!1)+'must contain the key "'+c+'"');if(!p(t(b,c)))throw Error(G(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function bc(a){this.g=a}h=bc.prototype;h.C=function(a,b,c,d,e){y(a.Bc(this.g),"A node must be indexed if only a child is updated");d=a.K(b);if(d.ea(c))return a;null!=e&&(c.e()?a.Da(b)?cc(e,new C("child_removed",d,b)):y(a.M(),"A child remove without an old child only makes sense on a leaf node"):d.e()?cc(e,new C("child_added",c,b)):cc(e,new C("child_changed",c,b,d)));return a.M()&&c.e()?a:a.P(b,c)};
h.oa=function(a,b,c){null!=c&&(a.M()||a.U(L,function(a,e){b.Da(a)||cc(c,new C("child_removed",e,a))}),b.M()||b.U(L,function(b,e){if(a.Da(b)){var f=a.K(b);f.ea(e)||cc(c,new C("child_changed",e,b,f))}else cc(c,new C("child_added",e,b))}));return b.Fb(this.g)};h.Z=function(a,b){return a.e()?M:a.Z(b)};h.ya=function(){return!1};h.Mb=function(){return this};function dc(a){this.re=new bc(a.g);this.g=a.g;var b;a.ia?(b=ec(a),b=a.g.Ae(fc(a),b)):b=a.g.Ce();this.Vc=b;a.qa?(b=gc(a),a=a.g.Ae(hc(a),b)):a=a.g.Be();this.wc=a}h=dc.prototype;h.matches=function(a){return 0>=this.g.compare(this.Vc,a)&&0>=this.g.compare(a,this.wc)};h.C=function(a,b,c,d,e){this.matches(new N(b,c))||(c=M);return this.re.C(a,b,c,d,e)};h.oa=function(a,b,c){b.M()&&(b=M);var d=b.Fb(this.g),d=d.Z(M),e=this;b.U(L,function(a,b){e.matches(new N(a,b))||(d=d.P(a,M))});return this.re.oa(a,d,c)};
h.Z=function(a){return a};h.ya=function(){return!0};h.Mb=function(){return this.re};function ic(a,b){return ub(a.name,b.name)}function jc(a,b){return ub(a,b)};function kc(){}var lc={};function mc(a){return q(a.compare,a)}kc.prototype.jf=function(a,b){return 0!==this.compare(new N("[MIN_NAME]",a),new N("[MIN_NAME]",b))};kc.prototype.Ce=function(){return nc};function oc(a){this.Ub=a}ma(oc,kc);h=oc.prototype;h.ue=function(a){return!a.K(this.Ub).e()};h.compare=function(a,b){var c=a.Y.K(this.Ub),d=b.Y.K(this.Ub),c=c.he(d);return 0===c?ub(a.name,b.name):c};h.Ae=function(a,b){var c=O(a),c=M.P(this.Ub,c);return new N(b,c)};
h.Be=function(){var a=M.P(this.Ub,pc);return new N("[MAX_NAME]",a)};h.toString=function(){return this.Ub};var L=new oc(".priority");function qc(){}ma(qc,kc);h=qc.prototype;h.compare=function(a,b){return ub(a.name,b.name)};h.ue=function(){throw fb("KeyIndex.isDefinedOn not expected to be called.");};h.jf=function(){return!1};h.Ce=function(){return nc};h.Be=function(){return new N("[MAX_NAME]",M)};h.Ae=function(a){y(p(a),"KeyIndex indexValue must always be a string.");return new N(a,M)};
h.toString=function(){return".key"};var rc=new qc;function sc(){}sc.prototype.ef=function(){return null};sc.prototype.oe=function(){return null};var tc=new sc;function uc(a,b,c){this.Bf=a;this.Ia=b;this.zd=c}uc.prototype.ef=function(a){var b=this.Ia.F;if(vc(b,a))return b.j().K(a);b=null!=this.zd?new wc(this.zd,!0,!1):this.Ia.u();return this.Bf.Ta(a,b)};uc.prototype.oe=function(a,b,c){var d=null!=this.zd?this.zd:xc(this.Ia);a=this.Bf.ce(d,b,1,c,a);return 0===a.length?null:a[0]};function yc(){this.Za={}}
function cc(a,b){var c=b.type,d=b.Ua;y("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");y(".priority"!==d,"Only non-priority child changes can be tracked.");var e=t(a.Za,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.Za[d]=new C("child_changed",b.Ha,d,e.Ha);else if("child_removed"==c&&"child_added"==f)delete a.Za[d];else if("child_removed"==c&&"child_changed"==f)a.Za[d]=new C("child_removed",e.De,d);else if("child_changed"==c&&
"child_added"==f)a.Za[d]=new C("child_added",b.Ha,d);else if("child_changed"==c&&"child_changed"==f)a.Za[d]=new C("child_changed",b.Ha,d,e.De);else throw fb("Illegal combination of changes: "+b+" occurred after "+e);}else a.Za[d]=b};function N(a,b){this.name=a;this.Y=b}function zc(a,b){return new N(a,b)};function Ac(a){this.ma=new dc(a);this.g=a.g;y(a.ka,"Only valid if limit has been set");this.sa=a.sa;this.zb=!(""===a.Eb?a.ia:"l"===a.Eb)}h=Ac.prototype;h.C=function(a,b,c,d,e){this.ma.matches(new N(b,c))||(c=M);return a.K(b).ea(c)?a:a.ub()<this.sa?this.ma.Mb().C(a,b,c,d,e):Bc(this,a,b,c,d,e)};
h.oa=function(a,b,c){var d;if(b.M()||b.e())d=M.Fb(this.g);else if(2*this.sa<b.ub()&&b.Bc(this.g)){d=M.Fb(this.g);b=this.zb?b.Rb(this.ma.wc,this.g):b.Pb(this.ma.Vc,this.g);for(var e=0;0<b.Na.length&&e<this.sa;){var f=P(b),g;if(g=this.zb?0>=this.g.compare(this.ma.Vc,f):0>=this.g.compare(f,this.ma.wc))d=d.P(f.name,f.Y),e++;else break}}else{d=b.Fb(this.g);d=d.Z(M);var k,l,n;if(this.zb){b=d.gf(this.g);k=this.ma.wc;l=this.ma.Vc;var u=mc(this.g);n=function(a,b){return u(b,a)}}else b=d.Ob(this.g),k=this.ma.Vc,
l=this.ma.wc,n=mc(this.g);for(var e=0,x=!1;0<b.Na.length;)f=P(b),!x&&0>=n(k,f)&&(x=!0),(g=x&&e<this.sa&&0>=n(f,l))?e++:d=d.P(f.name,M)}return this.ma.Mb().oa(a,d,c)};h.Z=function(a){return a};h.ya=function(){return!0};h.Mb=function(){return this.ma.Mb()};
function Bc(a,b,c,d,e,f){var g;if(a.zb){var k=mc(a.g);g=function(a,b){return k(b,a)}}else g=mc(a.g);y(b.ub()==a.sa,"");var l=new N(c,d),n=a.zb?Cc(b,a.g):Dc(b,a.g),u=a.ma.matches(l);if(b.Da(c)){var x=b.K(c),n=e.oe(a.g,n,a.zb);null!=n&&n.name==c&&(n=e.oe(a.g,n,a.zb));e=null==n?1:g(n,l);if(u&&!d.e()&&0<=e)return null!=f&&cc(f,new C("child_changed",d,c,x)),b.P(c,d);null!=f&&cc(f,new C("child_removed",x,c));b=b.P(c,M);return null!=n&&a.ma.matches(n)?(null!=f&&cc(f,new C("child_added",n.Y,n.name)),b.P(n.name,
n.Y)):b}return d.e()?b:u&&0<=g(n,l)?(null!=f&&(cc(f,new C("child_removed",n.Y,n.name)),cc(f,new C("child_added",d,c))),b.P(c,d).P(n.name,M)):b};function Ec(){this.vc=this.qa=this.kc=this.ia=this.ka=!1;this.sa=0;this.Eb="";this.Ac=null;this.Wb="";this.zc=null;this.Tb="";this.g=L}var Fc=new Ec;function fc(a){y(a.ia,"Only valid if start has been set");return a.Ac}function ec(a){y(a.ia,"Only valid if start has been set");return a.kc?a.Wb:"[MIN_NAME]"}function hc(a){y(a.qa,"Only valid if end has been set");return a.zc}function gc(a){y(a.qa,"Only valid if end has been set");return a.vc?a.Tb:"[MAX_NAME]"}
function Gc(a){var b=new Ec;b.ka=a.ka;b.sa=a.sa;b.ia=a.ia;b.Ac=a.Ac;b.kc=a.kc;b.Wb=a.Wb;b.qa=a.qa;b.zc=a.zc;b.vc=a.vc;b.Tb=a.Tb;b.g=a.g;return b}h=Ec.prototype;h.xe=function(a){var b=Gc(this);b.ka=!0;b.sa=a;b.Eb="";return b};h.ye=function(a){var b=Gc(this);b.ka=!0;b.sa=a;b.Eb="l";return b};h.ze=function(a){var b=Gc(this);b.ka=!0;b.sa=a;b.Eb="r";return b};h.Od=function(a,b){var c=Gc(this);c.ia=!0;m(a)||(a=null);c.Ac=a;null!=b?(c.kc=!0,c.Wb=b):(c.kc=!1,c.Wb="");return c};
h.hd=function(a,b){var c=Gc(this);c.qa=!0;m(a)||(a=null);c.zc=a;m(b)?(c.vc=!0,c.Tb=b):(c.Ig=!1,c.Tb="");return c};function Hc(a,b){var c=Gc(a);c.g=b;return c}function Ic(a){var b={};a.ia&&(b.sp=a.Ac,a.kc&&(b.sn=a.Wb));a.qa&&(b.ep=a.zc,a.vc&&(b.en=a.Tb));if(a.ka){b.l=a.sa;var c=a.Eb;""===c&&(c=a.ia?"l":"r");b.vf=c}a.g!==L&&(b.i=a.g.toString());return b}function Jc(a){return!(a.ia||a.qa||a.ka)}h.toString=function(){return r(Ic(this))};function Q(a,b,c,d){this.k=a;this.path=b;this.n=c;this.ac=d}
function Kc(a){var b=null,c=null;a.ia&&(b=fc(a));a.qa&&(c=hc(a));if(a.g===rc){if(a.ia){if("[MIN_NAME]"!=ec(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=b&&"string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.qa){if("[MAX_NAME]"!=gc(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if(null!=
c&&"string"!==typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===L){if(null!=b&&!Qb(b)||null!=c&&!Qb(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(y(a.g instanceof oc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Lc(a){if(a.ia&&a.qa&&a.ka&&(!a.ka||""===a.Eb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Mc(a,b){if(!0===a.ac)throw Error(b+": You can't combine multiple orderBy calls.");}Q.prototype.cc=function(){F("Query.ref",0,0,arguments.length);return new R(this.k,this.path)};Q.prototype.ref=Q.prototype.cc;
Q.prototype.vb=function(a,b,c,d){F("Query.on",2,4,arguments.length);Wb("Query.on",a,!1);H("Query.on",2,b,!1);var e=Nc("Query.on",c,d);if("value"===a)Oc(this.k,this,new Hb(b,e.cancel||null,e.Ka||null));else{var f={};f[a]=b;Oc(this.k,this,new Ib(f,e.cancel,e.Ka))}return b};Q.prototype.on=Q.prototype.vb;
Q.prototype.Zb=function(a,b,c){F("Query.off",0,3,arguments.length);Wb("Query.off",a,!0);H("Query.off",2,b,!0);Mb("Query.off",3,c);var d=null,e=null;"value"===a?d=new Hb(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Ib(e,null,c||null));e=this.k;d=".info"===I(this.path)?e.qd.gb(this,d):e.N.gb(this,d);Pc(e.$,this.path,d)};Q.prototype.off=Q.prototype.Zb;
Q.prototype.lg=function(a,b){function c(g){f&&(f=!1,e.Zb(a,c),b.call(d.Ka,g))}F("Query.once",2,4,arguments.length);Wb("Query.once",a,!1);H("Query.once",2,b,!1);var d=Nc("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.vb(a,c,function(b){e.Zb(a,c);d.cancel&&d.cancel.call(d.Ka,b)})};Q.prototype.once=Q.prototype.lg;
Q.prototype.xe=function(a){z("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");F("Query.limit",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.n.ka)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.n.xe(a);Lc(b);return new Q(this.k,this.path,b,this.ac)};Q.prototype.limit=Q.prototype.xe;
Q.prototype.ye=function(a){F("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.n.ka)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Q(this.k,this.path,this.n.ye(a),this.ac)};Q.prototype.limitToFirst=Q.prototype.ye;
Q.prototype.ze=function(a){F("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.n.ka)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new Q(this.k,this.path,this.n.ze(a),this.ac)};Q.prototype.limitToLast=Q.prototype.ze;
Q.prototype.mg=function(a){F("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');Xb("Query.orderByChild",1,a,!1);Mc(this,"Query.orderByChild");var b=Hc(this.n,new oc(a));Kc(b);return new Q(this.k,this.path,b,!0)};Q.prototype.orderByChild=Q.prototype.mg;
Q.prototype.ng=function(){F("Query.orderByKey",0,0,arguments.length);Mc(this,"Query.orderByKey");var a=Hc(this.n,rc);Kc(a);return new Q(this.k,this.path,a,!0)};Q.prototype.orderByKey=Q.prototype.ng;Q.prototype.og=function(){F("Query.orderByPriority",0,0,arguments.length);Mc(this,"Query.orderByPriority");var a=Hc(this.n,L);Kc(a);return new Q(this.k,this.path,a,!0)};Q.prototype.orderByPriority=Q.prototype.og;
Q.prototype.Od=function(a,b){F("Query.startAt",0,2,arguments.length);Rb("Query.startAt",a,!0);Xb("Query.startAt",2,b,!0);var c=this.n.Od(a,b);Lc(c);Kc(c);if(this.n.ia)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");m(a)||(b=a=null);return new Q(this.k,this.path,c,this.ac)};Q.prototype.startAt=Q.prototype.Od;
Q.prototype.hd=function(a,b){F("Query.endAt",0,2,arguments.length);Rb("Query.endAt",a,!0);Xb("Query.endAt",2,b,!0);var c=this.n.hd(a,b);Lc(c);Kc(c);if(this.n.qa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new Q(this.k,this.path,c,this.ac)};Q.prototype.endAt=Q.prototype.hd;
Q.prototype.Tf=function(a,b){F("Query.equalTo",1,2,arguments.length);Rb("Query.equalTo",a,!1);Xb("Query.equalTo",2,b,!0);if(this.n.ia)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.n.qa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Od(a,b).hd(a,b)};Q.prototype.equalTo=Q.prototype.Tf;Q.prototype.Fa=function(){var a=xb(Ic(this.n));return"{}"===a?"default":a};
function Nc(a,b,c){var d={cancel:null,Ka:null};if(b&&c)d.cancel=b,H(a,3,d.cancel,!0),d.Ka=c,Mb(a,4,d.Ka);else if(b)if("object"===typeof b&&null!==b)d.Ka=b;else if("function"===typeof b)d.cancel=b;else throw Error(G(a,3,!0)+" must either be a cancel callback or a context object.");return d};function S(a,b){if(1==arguments.length){this.w=a.split("/");for(var c=0,d=0;d<this.w.length;d++)0<this.w[d].length&&(this.w[c]=this.w[d],c++);this.w.length=c;this.ca=0}else this.w=a,this.ca=b}function I(a){return a.ca>=a.w.length?null:a.w[a.ca]}function Qc(a){return a.w.length-a.ca}function T(a){var b=a.ca;b<a.w.length&&b++;return new S(a.w,b)}function Rc(a){return a.ca<a.w.length?a.w[a.w.length-1]:null}
S.prototype.toString=function(){for(var a="",b=this.ca;b<this.w.length;b++)""!==this.w[b]&&(a+="/"+this.w[b]);return a||"/"};S.prototype.parent=function(){if(this.ca>=this.w.length)return null;for(var a=[],b=this.ca;b<this.w.length-1;b++)a.push(this.w[b]);return new S(a,0)};
S.prototype.o=function(a){for(var b=[],c=this.ca;c<this.w.length;c++)b.push(this.w[c]);if(a instanceof S)for(c=a.ca;c<a.w.length;c++)b.push(a.w[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new S(b,0)};S.prototype.e=function(){return this.ca>=this.w.length};var U=new S("");function V(a,b){var c=I(a);if(null===c)return b;if(c===I(b))return V(T(a),T(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
S.prototype.ea=function(a){if(Qc(this)!==Qc(a))return!1;for(var b=this.ca,c=a.ca;b<=this.w.length;b++,c++)if(this.w[b]!==a.w[c])return!1;return!0};S.prototype.contains=function(a){var b=this.ca,c=a.ca;if(Qc(this)>Qc(a))return!1;for(;b<this.w.length;){if(this.w[b]!==a.w[c])return!1;++b;++c}return!0};function Sc(){this.children={};this.bd=0;this.value=null}function Tc(a,b,c){this.ud=a?a:"";this.Oc=b?b:null;this.A=c?c:new Sc}function Uc(a,b){for(var c=b instanceof S?b:new S(b),d=a,e;null!==(e=I(c));)d=new Tc(e,d,t(d.A.children,e)||new Sc),c=T(c);return d}h=Tc.prototype;h.za=function(){return this.A.value};function Vc(a,b){y("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Wc(a)}h.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Wc(this)};
h.ld=function(){return 0<this.A.bd};h.e=function(){return null===this.za()&&!this.ld()};h.U=function(a){var b=this;A(this.A.children,function(c,d){a(new Tc(d,b,c))})};function Xc(a,b,c,d){c&&!d&&b(a);a.U(function(a){Xc(a,b,!0,d)});c&&d&&b(a)}function Yc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new S(null===this.Oc?this.ud:this.Oc.path()+"/"+this.ud)};h.name=function(){return this.ud};h.parent=function(){return this.Oc};
function Wc(a){if(null!==a.Oc){var b=a.Oc,c=a.ud,d=a.e(),e=s(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Wc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Wc(b))}};function Zc(a,b){this.Ja=a;this.ua=b?b:$c}h=Zc.prototype;h.La=function(a,b){return new Zc(this.Ja,this.ua.La(a,b,this.Ja).X(null,null,!1,null,null))};h.remove=function(a){return new Zc(this.Ja,this.ua.remove(a,this.Ja).X(null,null,!1,null,null))};h.get=function(a){for(var b,c=this.ua;!c.e();){b=this.Ja(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function ad(a,b){for(var c,d=a.ua,e=null;!d.e();){c=a.Ja(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.e=function(){return this.ua.e()};h.count=function(){return this.ua.count()};h.Ic=function(){return this.ua.Ic()};h.Xb=function(){return this.ua.Xb()};h.fa=function(a){return this.ua.fa(a)};
h.Ob=function(a){return new bd(this.ua,null,this.Ja,!1,a)};h.Pb=function(a,b){return new bd(this.ua,a,this.Ja,!1,b)};h.Rb=function(a,b){return new bd(this.ua,a,this.Ja,!0,b)};h.gf=function(a){return new bd(this.ua,null,this.Ja,!0,a)};function bd(a,b,c,d,e){this.Id=e||null;this.ve=d;this.Na=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.ve?a.left:a.right;else if(0===e){this.Na.push(a);break}else this.Na.push(a),a=this.ve?a.right:a.left}
function P(a){if(0===a.Na.length)return null;var b=a.Na.pop(),c;c=a.Id?a.Id(b.key,b.value):{key:b.key,value:b.value};if(a.ve)for(b=b.left;!b.e();)a.Na.push(b),b=b.right;else for(b=b.right;!b.e();)a.Na.push(b),b=b.left;return c}function cd(a){if(0===a.Na.length)return null;var b;b=a.Na;b=b[b.length-1];return a.Id?a.Id(b.key,b.value):{key:b.key,value:b.value}}function dd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:$c;this.right=null!=e?e:$c}h=dd.prototype;
h.X=function(a,b,c,d,e){return new dd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.e=function(){return!1};h.fa=function(a){return this.left.fa(a)||a(this.key,this.value)||this.right.fa(a)};function ed(a){return a.left.e()?a:ed(a.left)}h.Ic=function(){return ed(this).key};h.Xb=function(){return this.right.e()?this.key:this.right.Xb()};
h.La=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.La(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.La(a,b,c));return fd(e)};function gd(a){if(a.left.e())return $c;a.left.ba()||a.left.left.ba()||(a=hd(a));a=a.X(null,null,null,gd(a.left),null);return fd(a)}
h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ba()||c.left.left.ba()||(c=hd(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ba()&&(c=jd(c));c.right.e()||c.right.ba()||c.right.left.ba()||(c=kd(c),c.left.left.ba()&&(c=jd(c),c=kd(c)));if(0===b(a,c.key)){if(c.right.e())return $c;d=ed(c.right);c=c.X(d.key,d.value,null,null,gd(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return fd(c)};h.ba=function(){return this.color};
function fd(a){a.right.ba()&&!a.left.ba()&&(a=ld(a));a.left.ba()&&a.left.left.ba()&&(a=jd(a));a.left.ba()&&a.right.ba()&&(a=kd(a));return a}function hd(a){a=kd(a);a.right.left.ba()&&(a=a.X(null,null,null,null,jd(a.right)),a=ld(a),a=kd(a));return a}function ld(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function kd(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function md(){}h=md.prototype;h.X=function(){return this};h.La=function(a,b){return new dd(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.e=function(){return!0};h.fa=function(){return!1};h.Ic=function(){return null};h.Xb=function(){return null};h.ba=function(){return!1};var $c=new md;function nd(a,b){this.D=a;y(m(this.D)&&null!==this.D,"LeafNode shouldn't be created with null/undefined value.");this.ha=b||M;od(this.ha);this.sb=null}h=nd.prototype;h.M=function(){return!0};h.L=function(){return this.ha};h.Z=function(a){return new nd(this.D,a)};h.K=function(a){return".priority"===a?this.ha:M};h.ra=function(a){return a.e()?this:".priority"===I(a)?this.ha:M};h.Da=function(){return!1};h.ff=function(){return null};
h.P=function(a,b){return".priority"===a?this.Z(b):b.e()&&".priority"!==a?this:M.P(a,b).Z(this.ha)};h.C=function(a,b){var c=I(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;y(".priority"!==c||1===Qc(a),".priority must be the last token in a path");return this.P(c,M.C(T(a),b))};h.e=function(){return!1};h.ub=function(){return 0};h.I=function(a){return a&&!this.L().e()?{".value":this.za(),".priority":this.L().I()}:this.za()};
h.hash=function(){if(null===this.sb){var a="";this.ha.e()||(a+="priority:"+pd(this.ha.I())+":");var b=typeof this.D,a=a+(b+":"),a="number"===b?a+Ab(this.D):a+this.D;this.sb=ib(a)}return this.sb};h.za=function(){return this.D};h.he=function(a){if(a===M)return 1;if(a instanceof W)return-1;y(a.M(),"Unknown node type");var b=typeof a.D,c=typeof this.D,d=Ga(qd,b),e=Ga(qd,c);y(0<=d,"Unknown leaf type: "+b);y(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.D<a.D?-1:this.D===a.D?0:1:e-d};
var qd=["object","boolean","number","string"];nd.prototype.Fb=function(){return this};nd.prototype.Bc=function(){return!0};nd.prototype.ea=function(a){return a===this?!0:a.M()?this.D===a.D&&this.ha.ea(a.ha):!1};nd.prototype.toString=function(){return r(this.I(!0))};function rd(a,b){this.pd=a;this.Vb=b}rd.prototype.get=function(a){var b=t(this.pd,a);if(!b)throw Error("No index defined for "+a);return b===lc?null:b};function sd(a,b,c){var d=td(a.pd,function(d,f){var g=t(a.Vb,f);y(g,"Missing index implementation for "+f);if(d===lc){if(g.ue(b.Y)){for(var k=[],l=c.Ob(zc),n=P(l);n;)n.name!=b.name&&k.push(n),n=P(l);k.push(b);return ud(k,mc(g))}return lc}g=c.get(b.name);k=d;g&&(k=k.remove(new N(b.name,g)));return k.La(b,b.Y)});return new rd(d,a.Vb)}
function vd(a,b,c){var d=td(a.pd,function(a){if(a===lc)return a;var d=c.get(b.name);return d?a.remove(new N(b.name,d)):a});return new rd(d,a.Vb)}var wd=new rd({".priority":lc},{".priority":L});function W(a,b,c){this.m=a;(this.ha=b)&&od(this.ha);this.ob=c;this.sb=null}h=W.prototype;h.M=function(){return!1};h.L=function(){return this.ha||M};h.Z=function(a){return new W(this.m,a,this.ob)};h.K=function(a){if(".priority"===a)return this.L();a=this.m.get(a);return null===a?M:a};h.ra=function(a){var b=I(a);return null===b?this:this.K(b).ra(T(a))};h.Da=function(a){return null!==this.m.get(a)};
h.P=function(a,b){y(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.Z(b);var c=new N(a,b),d;b.e()?(d=this.m.remove(a),c=vd(this.ob,c,this.m)):(d=this.m.La(a,b),c=sd(this.ob,c,this.m));return new W(d,this.ha,c)};h.C=function(a,b){var c=I(a);if(null===c)return b;y(".priority"!==I(a)||1===Qc(a),".priority must be the last token in a path");var d=this.K(c).C(T(a),b);return this.P(c,d)};h.e=function(){return this.m.e()};h.ub=function(){return this.m.count()};var xd=/^(0|[1-9]\d*)$/;
h=W.prototype;h.I=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.U(L,function(f,g){b[f]=g.I(a);c++;e&&xd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.L().e()&&(b[".priority"]=this.L().I());return b};h.hash=function(){if(null===this.sb){var a="";this.L().e()||(a+="priority:"+pd(this.L().I())+":");this.U(L,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.sb=""===a?"":ib(a)}return this.sb};
h.ff=function(a,b,c){return(c=yd(this,c))?(a=ad(c,new N(a,b)))?a.name:null:ad(this.m,a)};function Cc(a,b){var c;c=(c=yd(a,b))?(c=c.Ic())&&c.name:a.m.Ic();return c?new N(c,a.m.get(c)):null}function Dc(a,b){var c;c=(c=yd(a,b))?(c=c.Xb())&&c.name:a.m.Xb();return c?new N(c,a.m.get(c)):null}h.U=function(a,b){var c=yd(this,a);return c?c.fa(function(a){return b(a.name,a.Y)}):this.m.fa(b)};h.Ob=function(a){return this.Pb(a.Ce(),a)};
h.Pb=function(a,b){var c=yd(this,b);if(c)return c.Pb(a,function(a){return a});for(var c=this.m.Pb(a.name,zc),d=cd(c);null!=d&&0>b.compare(d,a);)P(c),d=cd(c);return c};h.gf=function(a){return this.Rb(a.Be(),a)};h.Rb=function(a,b){var c=yd(this,b);if(c)return c.Rb(a,function(a){return a});for(var c=this.m.Rb(a.name,zc),d=cd(c);null!=d&&0<b.compare(d,a);)P(c),d=cd(c);return c};h.he=function(a){return this.e()?a.e()?0:-1:a.M()||a.e()?1:a===pc?-1:0};
h.Fb=function(a){if(a===rc||zd(this.ob.Vb,a.toString()))return this;var b=this.ob,c=this.m;y(a!==rc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Ob(zc),f=P(c);f;)e=e||a.ue(f.Y),d.push(f),f=P(c);d=e?ud(d,mc(a)):lc;e=a.toString();c=Ad(b.Vb);c[e]=a;a=Ad(b.pd);a[e]=d;return new W(this.m,this.ha,new rd(a,c))};h.Bc=function(a){return a===rc||zd(this.ob.Vb,a.toString())};
h.ea=function(a){if(a===this)return!0;if(a.M())return!1;if(this.L().ea(a.L())&&this.m.count()===a.m.count()){var b=this.Ob(L);a=a.Ob(L);for(var c=P(b),d=P(a);c&&d;){if(c.name!==d.name||!c.Y.ea(d.Y))return!1;c=P(b);d=P(a)}return null===c&&null===d}return!1};function yd(a,b){return b===rc?null:a.ob.get(b.toString())}h.toString=function(){return r(this.I(!0))};function O(a,b){if(null===a)return M;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);y(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new nd(a,O(c));if(a instanceof Array){var d=M,e=a;A(e,function(a,b){if(s(e,b)&&"."!==b.substring(0,1)){var c=O(a);if(c.M()||!c.e())d=
d.P(b,c)}});return d.Z(O(c))}var f=[],g=!1,k=a;ua(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=O(k[a]);b.e()||(g=g||!b.L().e(),f.push(new N(a,b)))}});var l=ud(f,ic,function(a){return a.name},jc);if(g){var n=ud(f,mc(L));return new W(l,O(c),new rd({".priority":n},{".priority":L}))}return new W(l,O(c),wd)}var Bd=Math.log(2);function Cd(a){this.count=parseInt(Math.log(a+1)/Bd,10);this.$e=this.count-1;this.Nf=a+1&parseInt(Array(this.count+1).join("1"),2)}
function Dd(a){var b=!(a.Nf&1<<a.$e);a.$e--;return b}
function ud(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var n=a[b],u=c?c(n):n;return new dd(u,n.Y,!1,null,null)}var n=parseInt(f/2,10)+b,f=e(b,n),x=e(n+1,d),n=a[n],u=c?c(n):n;return new dd(u,n.Y,!1,f,x)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,x=u;u-=b;var x=e(k+1,x),k=a[k],E=c?c(k):k,x=new dd(E,k.Y,g,null,x);f?f.left=x:n=x;f=x}for(var f=null,n=null,u=a.length,x=0;x<b.count;++x){var E=Dd(b),id=Math.pow(2,b.count-(x+1));E?d(id,!1):(d(id,!1),d(id,!0))}return n}(new Cd(a.length));
return null!==f?new Zc(d||b,f):new Zc(d||b)}function pd(a){return"number"===typeof a?"number:"+Ab(a):"string:"+a}function od(a){if(a.M()){var b=a.I();y("string"===typeof b||"number"===typeof b||"object"===typeof b&&s(b,".sv"),"Priority must be a string or number.")}else y(a===pc||a.e(),"priority of unexpected type.");y(a===pc||a.L().e(),"Priority nodes can't have a priority of their own.")}var M=new W(new Zc(jc),null,wd);function Ed(){W.call(this,new Zc(jc),M,wd)}ma(Ed,W);h=Ed.prototype;
h.he=function(a){return a===this?0:1};h.ea=function(a){return a===this};h.L=function(){throw fb("Why is this called?");};h.K=function(){return M};h.e=function(){return!1};var pc=new Ed,nc=new N("[MIN_NAME]",M);function D(a,b,c){this.A=a;this.V=b;this.g=c}D.prototype.I=function(){F("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.I()};D.prototype.val=D.prototype.I;D.prototype.bf=function(){F("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.I(!0)};D.prototype.exportVal=D.prototype.bf;D.prototype.Wf=function(){F("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};D.prototype.exists=D.prototype.Wf;
D.prototype.o=function(a){F("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Yb("Firebase.DataSnapshot.child",a);var b=new S(a),c=this.V.o(b);return new D(this.A.ra(b),c,L)};D.prototype.child=D.prototype.o;D.prototype.Da=function(a){F("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Yb("Firebase.DataSnapshot.hasChild",a);var b=new S(a);return!this.A.ra(b).e()};D.prototype.hasChild=D.prototype.Da;
D.prototype.L=function(){F("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.L().I()};D.prototype.getPriority=D.prototype.L;D.prototype.forEach=function(a){F("Firebase.DataSnapshot.forEach",1,1,arguments.length);H("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.M())return!1;var b=this;return!!this.A.U(this.g,function(c,d){return a(new D(d,b.V.o(c),L))})};D.prototype.forEach=D.prototype.forEach;
D.prototype.ld=function(){F("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.M()?!1:!this.A.e()};D.prototype.hasChildren=D.prototype.ld;D.prototype.name=function(){z("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead.");F("Firebase.DataSnapshot.name",0,0,arguments.length);return this.key()};D.prototype.name=D.prototype.name;D.prototype.key=function(){F("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.key()};
D.prototype.key=D.prototype.key;D.prototype.ub=function(){F("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.ub()};D.prototype.numChildren=D.prototype.ub;D.prototype.cc=function(){F("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};D.prototype.ref=D.prototype.cc;function Fd(a){y(ea(a)&&0<a.length,"Requires a non-empty array");this.Ff=a;this.Gc={}}Fd.prototype.Vd=function(a,b){for(var c=this.Gc[a]||[],d=0;d<c.length;d++)c[d].qc.apply(c[d].Ka,Array.prototype.slice.call(arguments,1))};Fd.prototype.vb=function(a,b,c){Gd(this,a);this.Gc[a]=this.Gc[a]||[];this.Gc[a].push({qc:b,Ka:c});(a=this.qe(a))&&b.apply(c,a)};Fd.prototype.Zb=function(a,b,c){Gd(this,a);a=this.Gc[a]||[];for(var d=0;d<a.length;d++)if(a[d].qc===b&&(!c||c===a[d].Ka)){a.splice(d,1);break}};
function Gd(a,b){y(Ma(a.Ff,function(a){return a===b}),"Unknown event: "+b)};function Hd(){Fd.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.mc=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.mc&&(c.mc=b,c.Vd("visible",b))},!1)}}ma(Hd,Fd);ca(Hd);Hd.prototype.qe=function(a){y("visible"===a,"Unknown event type: "+a);return[this.mc]};function Id(){Fd.call(this,["online"]);this.Lc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.Lc||a.Vd("online",!0);a.Lc=!0},!1);window.addEventListener("offline",function(){a.Lc&&a.Vd("online",!1);a.Lc=!1},!1)}}ma(Id,Fd);ca(Id);Id.prototype.qe=function(a){y("online"===a,"Unknown event type: "+a);return[this.Lc]};function A(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function td(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Lb(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function Jb(a){var b=0,c;for(c in a)b++;return b}function Kb(a){for(var b in a)return b}function Jd(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Kd(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function zd(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Ld(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Md(a,b){var c=Ld(a,b,void 0);return c&&a[c]}function Nd(a){for(var b in a)return!1;return!0}function Od(a,b){return b in a?a[b]:void 0}function Ad(a){var b={},c;for(c in a)b[c]=a[c];return b}var Pd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Qd(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pd.length;f++)c=Pd[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Rd(){this.tc={}}function Sd(a,b,c){m(c)||(c=1);s(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Rd.prototype.get=function(){return Ad(this.tc)};function Td(a){this.Pf=a;this.rd=null}Td.prototype.get=function(){var a=this.Pf.get(),b=Ad(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};function Ud(a,b){this.zf={};this.Pd=new Td(a);this.S=b;var c=1E4+2E4*Math.random();setTimeout(q(this.tf,this),Math.floor(c))}Ud.prototype.tf=function(){var a=this.Pd.get(),b={},c=!1,d;for(d in a)0<a[d]&&s(this.zf,d)&&(b[d]=a[d],c=!0);c&&(a=this.S,a.ja&&(b={c:b},a.f("reportStats",b),a.Ca("s",b)));setTimeout(q(this.tf,this),Math.floor(6E5*Math.random()))};var Vd={},Wd={};function Xd(a){a=a.toString();Vd[a]||(Vd[a]=new Rd);return Vd[a]}function Yd(a,b){var c=a.toString();Wd[c]||(Wd[c]=b());return Wd[c]};var Zd=null;"undefined"!==typeof MozWebSocket?Zd=MozWebSocket:"undefined"!==typeof WebSocket&&(Zd=WebSocket);function $d(a,b,c){this.ie=a;this.f=ob(this.ie);this.frames=this.Cc=null;this.ib=this.jb=this.Te=0;this.Ra=Xd(b);this.$a=(b.Ab?"wss://":"ws://")+b.Ma+"/.ws?v=5";"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.$a+="&r=f");b.host!==b.Ma&&(this.$a=this.$a+"&ns="+b.tb);c&&(this.$a=this.$a+"&s="+c)}var ae;
$d.prototype.open=function(a,b){this.fb=b;this.hg=a;this.f("Websocket connecting to "+this.$a);this.xc=!1;za.set("previous_websocket_failure",!0);try{this.ta=new Zd(this.$a)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.eb();return}var e=this;this.ta.onopen=function(){e.f("Websocket connected.");e.xc=!0};this.ta.onclose=function(){e.f("Websocket connection was disconnected.");e.ta=null;e.eb()};this.ta.onmessage=function(a){if(null!==e.ta)if(a=a.data,e.ib+=
a.length,Sd(e.Ra,"bytes_received",a.length),be(e),null!==e.frames)ce(e,a);else{a:{y(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Te=b;e.frames=[];a=null;break a}}e.Te=1;e.frames=[]}null!==a&&ce(e,a)}};this.ta.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.eb()}};$d.prototype.start=function(){};
$d.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Zd&&!ae};$d.responsesRequiredToBeHealthy=2;$d.healthyTimeout=3E4;h=$d.prototype;h.sd=function(){za.remove("previous_websocket_failure")};function ce(a,b){a.frames.push(b);if(a.frames.length==a.Te){var c=a.frames.join("");a.frames=null;c=ta(c);a.hg(c)}}
h.send=function(a){be(this);a=r(a);this.jb+=a.length;Sd(this.Ra,"bytes_sent",a.length);a=yb(a,16384);1<a.length&&this.ta.send(String(a.length));for(var b=0;b<a.length;b++)this.ta.send(a[b])};h.Uc=function(){this.qb=!0;this.Cc&&(clearInterval(this.Cc),this.Cc=null);this.ta&&(this.ta.close(),this.ta=null)};h.eb=function(){this.qb||(this.f("WebSocket is closing itself"),this.Uc(),this.fb&&(this.fb(this.xc),this.fb=null))};h.close=function(){this.qb||(this.f("WebSocket is being closed"),this.Uc())};
function be(a){clearInterval(a.Cc);a.Cc=setInterval(function(){a.ta&&a.ta.send("0");be(a)},Math.floor(45E3))};function de(a){this.$b=a;this.Cd=[];this.Jb=0;this.ge=-1;this.wb=null}function ee(a,b,c){a.ge=b;a.wb=c;a.ge<a.Jb&&(a.wb(),a.wb=null)}function fe(a,b,c){for(a.Cd[b]=c;a.Cd[a.Jb];){var d=a.Cd[a.Jb];delete a.Cd[a.Jb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;Cb(function(){f.$b(d[e])})}if(a.Jb===a.ge){a.wb&&(clearTimeout(a.wb),a.wb(),a.wb=null);break}a.Jb++}};function ge(){this.set={}}h=ge.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return s(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.clear=function(){this.set={}};h.e=function(){return Nd(this.set)};h.count=function(){return Jb(this.set)};function he(a,b){A(a.set,function(a,d){b(d,a)})};function ie(a,b,c){this.ie=a;this.f=ob(a);this.ib=this.jb=0;this.Ra=Xd(b);this.Md=c;this.xc=!1;this.Zc=function(a){b.host!==b.Ma&&(a.ns=b.tb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.Ab?"https://":"http://")+b.Ma+"/.lp?"+c.join("&")}}var je,ke;
ie.prototype.open=function(a,b){this.Ze=0;this.ga=b;this.mf=new de(a);this.qb=!1;var c=this;this.lb=setTimeout(function(){c.f("Timed out trying to connect.");c.eb();c.lb=null},Math.floor(3E4));tb(function(){if(!c.qb){c.Pa=new le(function(a,b,d,k,l){me(c,arguments);if(c.Pa)if(c.lb&&(clearTimeout(c.lb),c.lb=null),c.xc=!0,"start"==a)c.id=b,c.rf=d;else if("close"===a)b?(c.Pa.Kd=!1,ee(c.mf,b,function(){c.eb()})):c.eb();else throw Error("Unrecognized command received: "+a);},function(a,b){me(c,arguments);
fe(c.mf,a,b)},function(){c.eb()},c.Zc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Pa.Wd&&(a.cb=c.Pa.Wd);a.v="5";c.Md&&(a.s=c.Md);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Zc(a);c.f("Connecting via long-poll to "+a);ne(c.Pa,a,function(){})}})};
ie.prototype.start=function(){var a=this.Pa,b=this.rf;a.cg=this.id;a.dg=b;for(a.ae=!0;oe(a););a=this.id;b=this.rf;this.Yb=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.Yb.src=this.Zc(c);this.Yb.style.display="none";document.body.appendChild(this.Yb)};ie.isAvailable=function(){return!ke&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Eg)&&(je||!0)};h=ie.prototype;
h.sd=function(){};h.Uc=function(){this.qb=!0;this.Pa&&(this.Pa.close(),this.Pa=null);this.Yb&&(document.body.removeChild(this.Yb),this.Yb=null);this.lb&&(clearTimeout(this.lb),this.lb=null)};h.eb=function(){this.qb||(this.f("Longpoll is closing itself"),this.Uc(),this.ga&&(this.ga(this.xc),this.ga=null))};h.close=function(){this.qb||(this.f("Longpoll is being closed."),this.Uc())};
h.send=function(a){a=r(a);this.jb+=a.length;Sd(this.Ra,"bytes_sent",a.length);a=jb(a);a=cb(a,!0);a=yb(a,1840);for(var b=0;b<a.length;b++){var c=this.Pa;c.Qc.push({tg:this.Ze,Bg:a.length,af:a[b]});c.ae&&oe(c);this.Ze++}};function me(a,b){var c=r(b).length;a.ib+=c;Sd(a.Ra,"bytes_received",c)}
function le(a,b,c,d){this.Zc=d;this.fb=c;this.Ie=new ge;this.Qc=[];this.ke=Math.floor(1E8*Math.random());this.Kd=!0;this.Wd=eb();window["pLPCommand"+this.Wd]=a;window["pRTLPCB"+this.Wd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||hb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.ab=a.contentDocument:a.contentWindow?a.ab=a.contentWindow.document:a.document&&(a.ab=a.document);this.Ba=a;a="";this.Ba.src&&"javascript:"===this.Ba.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ba.ab.open(),this.Ba.ab.write(a),this.Ba.ab.close()}catch(f){hb("frame writing exception"),f.stack&&hb(f.stack),hb(f)}}
le.prototype.close=function(){this.ae=!1;if(this.Ba){this.Ba.ab.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ba&&(document.body.removeChild(a.Ba),a.Ba=null)},Math.floor(0))}var b=this.fb;b&&(this.fb=null,b())};
function oe(a){if(a.ae&&a.Kd&&a.Ie.count()<(0<a.Qc.length?2:1)){a.ke++;var b={};b.id=a.cg;b.pw=a.dg;b.ser=a.ke;for(var b=a.Zc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].af.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.tg+"&ts"+d+"="+e.Bg+"&d"+d+"="+e.af;d++}else break;pe(a,b+c,a.ke);return!0}return!1}function pe(a,b,c){function d(){a.Ie.remove(c);oe(a)}a.Ie.add(c);var e=setTimeout(d,Math.floor(25E3));ne(a,b,function(){clearTimeout(e);d()})}
function ne(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ba.ab.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){hb("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ba.ab.body.appendChild(d)}}catch(e){}},Math.floor(1))};function qe(a){re(this,a)}var se=[ie,$d];function re(a,b){var c=$d&&$d.isAvailable(),d=c&&!(za.lf||!0===za.get("previous_websocket_failure"));b.Dg&&(c||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Xc=[$d];else{var e=a.Xc=[];zb(se,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function te(a){if(0<a.Xc.length)return a.Xc[0];throw Error("No transports available");};function ue(a,b,c,d,e,f){this.id=a;this.f=ob("c:"+this.id+":");this.$b=c;this.Kc=d;this.ga=e;this.Ge=f;this.O=b;this.Bd=[];this.Xe=0;this.Af=new qe(b);this.Qa=0;this.f("Connection created");ve(this)}
function ve(a){var b=te(a.Af);a.J=new b("c:"+a.id+":"+a.Xe++,a.O);a.Ke=b.responsesRequiredToBeHealthy||0;var c=we(a,a.J),d=xe(a,a.J);a.Yc=a.J;a.Tc=a.J;a.B=null;a.rb=!1;setTimeout(function(){a.J&&a.J.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.nd=setTimeout(function(){a.nd=null;a.rb||(a.J&&102400<a.J.ib?(a.f("Connection exceeded healthy timeout but has received "+a.J.ib+" bytes.  Marking connection healthy."),a.rb=!0,a.J.sd()):a.J&&10240<a.J.jb?a.f("Connection exceeded healthy timeout but has sent "+
a.J.jb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function xe(a,b){return function(c){b===a.J?(a.J=null,c||0!==a.Qa?1===a.Qa&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.O.Ma.substr(0,2)&&(za.remove("host:"+a.O.host),a.O.Ma=a.O.host)),a.close()):b===a.B?(a.f("Secondary connection lost."),c=a.B,a.B=null,a.Yc!==c&&a.Tc!==c||a.close()):a.f("closing an old connection")}}
function we(a,b){return function(c){if(2!=a.Qa)if(b===a.Tc){var d=wb("t",c);c=wb("d",c);if("c"==d){if(d=wb("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.Md=c.s;Ba(a.O,f);0==a.Qa&&(a.J.start(),ye(a,a.J,d),"5"!==e&&z("Protocol version mismatch detected"),c=a.Af,(c=1<c.Xc.length?c.Xc[1]:null)&&ze(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Tc=a.B;for(c=0;c<a.Bd.length;++c)a.xd(a.Bd[c]);a.Bd=[];Ae(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.Ge&&(a.Ge(c),a.Ge=null),a.ga=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ba(a.O,c),1===a.Qa?a.close():(Be(a),ve(a))):"e"===d?pb("Server Error: "+c):"o"===d?(a.f("got pong on primary."),Ce(a),De(a)):pb("Unknown control packet command: "+d)}else"d"==d&&a.xd(c)}else if(b===a.B)if(d=wb("t",c),c=wb("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?Ee(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.B.close(),a.Yc!==a.B&&a.Tc!==a.B||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.yf--,Ee(a)));else if("d"==d)a.Bd.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}ue.prototype.Ca=function(a){Fe(this,{t:"d",d:a})};function Ae(a){a.Yc===a.B&&a.Tc===a.B&&(a.f("cleaning up and promoting a connection: "+a.B.ie),a.J=a.B,a.B=null)}
function Ee(a){0>=a.yf?(a.f("Secondary connection is healthy."),a.rb=!0,a.B.sd(),a.B.start(),a.f("sending client ack on secondary"),a.B.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.J.send({t:"c",d:{t:"n",d:{}}}),a.Yc=a.B,Ae(a)):(a.f("sending ping on secondary."),a.B.send({t:"c",d:{t:"p",d:{}}}))}ue.prototype.xd=function(a){Ce(this);this.$b(a)};function Ce(a){a.rb||(a.Ke--,0>=a.Ke&&(a.f("Primary connection is healthy."),a.rb=!0,a.J.sd()))}
function ze(a,b){a.B=new b("c:"+a.id+":"+a.Xe++,a.O,a.Md);a.yf=b.responsesRequiredToBeHealthy||0;a.B.open(we(a,a.B),xe(a,a.B));setTimeout(function(){a.B&&(a.f("Timed out trying to upgrade."),a.B.close())},Math.floor(6E4))}function ye(a,b,c){a.f("Realtime connection established.");a.J=b;a.Qa=1;a.Kc&&(a.Kc(c),a.Kc=null);0===a.Ke?(a.f("Primary connection is healthy."),a.rb=!0):setTimeout(function(){De(a)},Math.floor(5E3))}
function De(a){a.rb||1!==a.Qa||(a.f("sending ping on primary."),Fe(a,{t:"c",d:{t:"p",d:{}}}))}function Fe(a,b){if(1!==a.Qa)throw"Connection is not connected";a.Yc.send(b)}ue.prototype.close=function(){2!==this.Qa&&(this.f("Closing realtime connection."),this.Qa=2,Be(this),this.ga&&(this.ga(),this.ga=null))};function Be(a){a.f("Shutting down all connections");a.J&&(a.J.close(),a.J=null);a.B&&(a.B.close(),a.B=null);a.nd&&(clearTimeout(a.nd),a.nd=null)};function Ge(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ta(gb(f[0])||""),c=ta(gb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{Gg:b,fe:c,data:d,xg:e}}function He(a){a=Ge(a).fe;return"object"===typeof a&&a.hasOwnProperty("iat")?t(a,"iat"):null}function Ie(a){a=Ge(a);var b=a.fe;return!!a.xg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")};function Je(a,b,c,d){this.id=Ke++;this.f=ob("p:"+this.id+":");this.Cb=!0;this.Aa={};this.la=[];this.Nc=0;this.Jc=[];this.ja=!1;this.Wa=1E3;this.td=3E5;this.yd=b;this.wd=c;this.He=d;this.O=a;this.Oe=null;this.Sc={};this.sg=0;this.Dc=this.we=null;Le(this,0);Hd.Nb().vb("visible",this.kg,this);-1===a.host.indexOf("fblocal")&&Id.Nb().vb("online",this.ig,this)}var Ke=0,Me=0;h=Je.prototype;
h.Ca=function(a,b,c){var d=++this.sg;a={r:d,a:a,b:b};this.f(r(a));y(this.ja,"sendRequest call when we're not connected not allowed.");this.Oa.Ca(a);c&&(this.Sc[d]=c)};function Ne(a,b,c,d,e){var f=b.Fa(),g=b.path.toString();a.f("Listen called for "+g+" "+f);a.Aa[g]=a.Aa[g]||{};y(!a.Aa[g][f],"listen() called twice for same path/queryId.");b={H:e,md:c,pg:Ic(b.n),tag:d};a.Aa[g][f]=b;a.ja&&Oe(a,g,f,b)}
function Oe(a,b,c,d){a.f("Listen on "+b+" for "+c);var e={p:b};d.tag&&(e.q=d.pg,e.t=d.tag);e.h=d.md();a.Ca("q",e,function(e){if((a.Aa[b]&&a.Aa[b][c])===d){a.f("listen response",e);var g=e.s;"ok"!==g&&Pe(a,b,c);e=e.d;d.H&&d.H(g,e)}})}h.Q=function(a,b,c){this.Ib={Rf:a,cf:!1,qc:b,ad:c};this.f("Authenticating using credential: "+a);Qe(this);(b=40==a.length)||(a=Ge(a).fe,b="object"===typeof a&&!0===t(a,"admin"));b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4)};
h.Ue=function(a){delete this.Ib;this.ja&&this.Ca("unauth",{},function(b){a(b.s,b.d)})};function Qe(a){var b=a.Ib;a.ja&&b&&a.Ca("auth",{cred:b.Rf},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.Ib===b&&delete a.Ib;b.cf?"ok"!==d&&b.ad&&b.ad(d,c):(b.cf=!0,b.qc&&b.qc(d,c))})}function Re(a,b,c,d){a.ja?Se(a,"o",b,c,d):a.Jc.push({Pc:b,action:"o",data:c,H:d})}function Te(a,b,c,d){a.ja?Se(a,"om",b,c,d):a.Jc.push({Pc:b,action:"om",data:c,H:d})}
h.Fe=function(a,b){this.ja?Se(this,"oc",a,null,b):this.Jc.push({Pc:a,action:"oc",data:null,H:b})};function Se(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.Ca(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.put=function(a,b,c,d){Ue(this,"p",a,b,c,d)};function Ve(a,b,c,d){Ue(a,"m",b,c,d,void 0)}function Ue(a,b,c,d,e,f){d={p:c,d:d};m(f)&&(d.h=f);a.la.push({action:b,uf:d,H:e});a.Nc++;b=a.la.length-1;a.ja?We(a,b):a.f("Buffering put: "+c)}
function We(a,b){var c=a.la[b].action,d=a.la[b].uf,e=a.la[b].H;a.la[b].qg=a.ja;a.Ca(c,d,function(d){a.f(c+" response",d);delete a.la[b];a.Nc--;0===a.Nc&&(a.la=[]);e&&e(d.s,d.d)})}
h.xd=function(a){if("r"in a){this.f("from server: "+r(a));var b=a.r,c=this.Sc[b];c&&(delete this.Sc[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.yd(c.p,c.d,!1,c.t):"m"===b?this.yd(c.p,c.d,!0,c.t):"c"===b?Xe(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Ib,delete this.Ib,c&&c.ad&&c.ad(a,b)):"sd"===b?this.Oe?this.Oe(c):"msg"in c&&"undefined"!==typeof console&&console.log("FIREBASE: "+c.msg.replace("\n",
"\nFIREBASE: ")):pb("Unrecognized action received from server: "+r(b)+"\nAre you using the latest client?"))}};h.Kc=function(a){this.f("connection ready");this.ja=!0;this.Dc=(new Date).getTime();this.He({serverTimeOffset:a-(new Date).getTime()});Ye(this);this.wd(!0)};function Le(a,b){y(!a.Oa,"Scheduling a connect when we're already connected/ing?");a.Kb&&clearTimeout(a.Kb);a.Kb=setTimeout(function(){a.Kb=null;Ze(a)},Math.floor(b))}
h.kg=function(a){a&&!this.mc&&this.Wa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Wa=1E3,this.Oa||Le(this,0));this.mc=a};h.ig=function(a){a?(this.f("Browser went online.  Reconnecting."),this.Wa=1E3,this.Cb=!0,this.Oa||Le(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Cb=!1,this.Oa&&this.Oa.close())};
h.of=function(){this.f("data client disconnected");this.ja=!1;this.Oa=null;for(var a=0;a<this.la.length;a++){var b=this.la[a];b&&"h"in b.uf&&b.qg&&(b.H&&b.H("disconnect"),delete this.la[a],this.Nc--)}0===this.Nc&&(this.la=[]);if(this.Cb)this.mc?this.Dc&&(3E4<(new Date).getTime()-this.Dc&&(this.Wa=1E3),this.Dc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Wa=this.td,this.we=(new Date).getTime()),a=Math.max(0,this.Wa-((new Date).getTime()-this.we)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Le(this,a),this.Wa=Math.min(this.td,1.3*this.Wa);else for(var c in this.Sc)delete this.Sc[c];this.wd(!1)};function Ze(a){if(a.Cb){a.f("Making a connection attempt");a.we=(new Date).getTime();a.Dc=null;var b=q(a.xd,a),c=q(a.Kc,a),d=q(a.of,a),e=a.id+":"+Me++;a.Oa=new ue(e,a.O,b,c,d,function(b){z(b+" ("+a.O.toString()+")");a.Cb=!1})}}h.pb=function(){this.Cb=!1;this.Oa?this.Oa.close():(this.Kb&&(clearTimeout(this.Kb),this.Kb=null),this.ja&&this.of())};
h.hc=function(){this.Cb=!0;this.Wa=1E3;this.Oa||Le(this,0)};function Xe(a,b,c){c=c?Ja(c,function(a){return xb(a)}).join("$"):"default";(a=Pe(a,b,c))&&a.H&&a.H("permission_denied")}function Pe(a,b,c){b=(new S(b)).toString();var d=a.Aa[b][c];delete a.Aa[b][c];0===Jb(a.Aa[b])&&delete a.Aa[b];return d}function Ye(a){Qe(a);A(a.Aa,function(b,d){A(b,function(b,c){Oe(a,d,c,b)})});for(var b=0;b<a.la.length;b++)a.la[b]&&We(a,b);for(;a.Jc.length;)b=a.Jc.shift(),Se(a,b.action,b.Pc,b.data,b.H)};function $e(){this.m=this.D=null}$e.prototype.dc=function(a,b){if(a.e())this.D=b,this.m=null;else if(null!==this.D)this.D=this.D.C(a,b);else{null==this.m&&(this.m=new ge);var c=I(a);this.m.contains(c)||this.m.add(c,new $e);c=this.m.get(c);a=T(a);c.dc(a,b)}};
function af(a,b){if(b.e())return a.D=null,a.m=null,!0;if(null!==a.D){if(a.D.M())return!1;var c=a.D;a.D=null;c.U(L,function(b,c){a.dc(new S(b),c)});return af(a,b)}return null!==a.m?(c=I(b),b=T(b),a.m.contains(c)&&af(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function bf(a,b,c){null!==a.D?c(b,a.D):a.U(function(a,e){var f=new S(b.toString()+"/"+a);bf(e,f,c)})}$e.prototype.U=function(a){null!==this.m&&he(this.m,function(b,c){a(b,c)})};function cf(){this.Jd=M}cf.prototype.j=function(a){return this.Jd.ra(a)};cf.prototype.toString=function(){return this.Jd.toString()};function df(){this.nb=[]}function ef(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Qb();null===c||f.ea(c.Qb())||(a.nb.push(c),c=null);null===c&&(c=new ff(f));c.add(e)}c&&a.nb.push(c)}function Pc(a,b,c){ef(a,c);gf(a,function(a){return a.ea(b)})}function hf(a,b,c){ef(a,c);gf(a,function(a){return a.contains(b)||b.contains(a)})}
function gf(a,b){for(var c=!0,d=0;d<a.nb.length;d++){var e=a.nb[d];if(e)if(e=e.Qb(),b(e)){for(var e=a.nb[d],f=0;f<e.kd.length;f++){var g=e.kd[f];if(null!==g){e.kd[f]=null;var k=g.Lb();lb&&hb("event: "+g.toString());Cb(k)}}a.nb[d]=null}else c=!1}c&&(a.nb=[])}function ff(a){this.Ea=a;this.kd=[]}ff.prototype.add=function(a){this.kd.push(a)};ff.prototype.Qb=function(){return this.Ea};var jf="auth.firebase.com";function kf(a,b,c){this.cd=a||{};this.Ud=b||{};this.Xa=c||{};this.cd.remember||(this.cd.remember="default")}var lf=["remember","redirectTo"];function mf(a){var b={},c={};ua(a||{},function(a,e){0<=Ga(lf,a)?b[a]=e:c[a]=e});return new kf(b,{},c)};var nf={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function X(a){var b=Error(t(nf,a),a);b.code=a;return b};function of(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function pf(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function qf(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
function rf(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function sf(a){var b="";try{a=a.replace("#","");var c={},d=a.replace(/^\?/,"").split("&");for(a=0;a<d.length;a++)if(d[a]){var e=d[a].split("=");c[e[0]]=e[1]}c&&s(c,"__firebase_request_key")&&(b=t(c,"__firebase_request_key"))}catch(f){}return b}
function tf(a){var b=[],c;for(c in a)if(s(a,c)){var d=t(a,c);if(ea(d))for(var e=0;e<d.length;e++)b.push(encodeURIComponent(c)+"="+encodeURIComponent(d[e]));else b.push(encodeURIComponent(c)+"="+encodeURIComponent(t(a,c)))}return b?"&"+b.join("&"):""}function uf(){var a=rb(jf);return a.scheme+"://"+a.host+"/v2"}function vf(a){return uf()+"/"+a+"/auth/channel"};function wf(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function xf(){var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function yf(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.options=a}
yf.prototype.open=function(a,b,c){function d(){c&&(c(X("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.options.method.toUpperCase(),g;pf(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=ta(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(X("SERVER_ERROR")):c(X("NETWORK_ERROR"));c=null;qf(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+tf(b),g=null;else{var k=this.options.headers.content_type;
"application/json"===k&&(g=r(b));"application/x-www-form-urlencoded"===k&&(g=tf(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Qd(a,this.options.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};yf.isAvailable=function(){return!!window.XMLHttpRequest&&"string"===typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||xf())};yf.prototype.sc=function(){return"json"};function zf(a){this.fc=Fa()+Fa()+Fa();this.pf=a}
zf.prototype.open=function(a,b,c){function d(){c&&(c(X("USER_CANCELLED")),c=null)}var e=this,f=rb(jf),g;b.requestId=this.fc;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=tf(b);(g=window.open(a,"_blank","location=no"))&&ha(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{var n=a.url;try{var u=document.createElement("a");u.href=n;b=u.host===f.host&&"/blank/page.html"===u.pathname;break a}catch(x){}b=!1}b&&(a=sf(a.url),g.removeEventListener("exit",
d),g.close(),a=new kf(null,null,{requestId:e.fc,requestKey:a}),e.pf.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(X("TRANSPORT_UNAVAILABLE"))};zf.isAvailable=function(){return wf()};zf.prototype.sc=function(){return"redirect"};function Af(a){if(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android"))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.options=a}
Af.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);u&&(u=clearInterval(u));qf(window,"message",e);qf(window,"unload",d);if(n&&!a)try{n.close()}catch(b){k.postMessage("die",l)}n=k=void 0}function e(a){if(a.origin===l)try{var b=ta(a.data);"ready"===b.a?k.postMessage(x,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=xf(),g,k;if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
var l=rf(a);if(l!==rf(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.options.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+tf(b);var n=window.open(a,this.options.window_name,this.options.window_features);k||(k=n);var u=setInterval(function(){n&&n.closed&&
(d(!1),c&&(c(X("USER_CANCELLED")),c=null))},500),x=r({a:"request",d:b});pf(window,"unload",d);pf(window,"message",e)}};
Af.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(wf()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)};Af.prototype.sc=function(){return"popup"};function Bf(a){a.callback_parameter||(a.callback_parameter="callback");this.options=a;window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}
Bf.prototype.open=function(a,b,c){function d(){c&&(c(X("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0;Nd(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);qf(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.options.callback_parameter]="__firebase_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+tf(b);
pf(window,"beforeunload",d);window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Cf(f,a,c)};
function Cf(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(X("NETWORK_ERROR"))};var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(X("NETWORK_ERROR"))}},0)}Bf.isAvailable=function(){return!wf()};Bf.prototype.sc=function(){return"json"};function Df(a,b){this.Je=["session",a.Dd,a.tb].join(":");this.Rd=b}Df.prototype.set=function(a,b){if(!b)if(this.Rd.length)b=this.Rd[0];else throw Error("fb.login.SessionManager : No storage options available!");b.set(this.Je,a)};Df.prototype.get=function(){var a=Ja(this.Rd,q(this.Zf,this)),a=Ia(a,function(a){return null!==a});Qa(a,function(a,c){return He(c.token)-He(a.token)});return 0<a.length?a.shift():null};Df.prototype.Zf=function(a){try{var b=a.get(this.Je);if(b&&b.token)return b}catch(c){}return null};
Df.prototype.clear=function(){var a=this;Ha(this.Rd,function(b){b.remove(a.Je)})};function Ef(a){this.fc=Fa()+Fa()+Fa();this.pf=a}Ef.prototype.open=function(a,b){v.set("redirect_request_id",this.fc);v.set("redirect_request_id",this.fc);b.requestId=this.fc;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+tf(b);window.location=a};Ef.isAvailable=function(){return!/^file:\//.test(location.href)&&!wf()};Ef.prototype.sc=function(){return"redirect"};function Ff(a,b,c,d){Fd.call(this,["auth_status"]);this.O=a;this.We=b;this.Cg=c;this.Ee=d;this.ic=new Df(a,[za,v]);this.hb=null;Gf(this)}ma(Ff,Fd);h=Ff.prototype;h.ne=function(){return this.hb||null};function Gf(a){v.get("redirect_request_id")&&Hf(a);var b=a.ic.get();b&&b.token?(If(a,b),a.We(b.token,function(c,d){Jf(a,c,d,!1,b.token,b)},function(b,d){Kf(a,"resumeSession()",b,d)})):If(a,null)}
function Lf(a,b,c,d,e,f){"firebaseio-demo.com"===a.O.domain&&z("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com.");a.We(b,function(f,k){Jf(a,f,k,!0,b,c,d||{},e)},function(b,c){Kf(a,"auth()",b,c,f)})}function Mf(a,b){a.ic.clear();If(a,null);a.Cg(function(a,d){if("ok"===a)B(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;B(b,f)}})}
function Jf(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=Ie(e)?e:"",c=null,b&&s(b,"uid")?c=t(b,"uid"):s(f,"uid")&&(c=t(f,"uid")),f.uid=c,c="custom",b&&s(b,"provider")?c=t(b,"provider"):s(f,"provider")&&(c=t(f,"provider")),f.provider=c,a.ic.clear(),Ie(e)&&(g=g||{},c=za,"sessionOnly"===g.remember&&(c=v),"none"!==g.remember&&a.ic.set(f,c)),If(a,f)),B(k,null,f)):(a.ic.clear(),If(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,B(k,f))}
function Kf(a,b,c,d,e){z(b+" was canceled: "+d);a.ic.clear();If(a,null);a=Error(d);a.code=c.toUpperCase();B(e,a)}function Nf(a,b,c,d,e){Of(a);c=new kf(d||{},{},c||{});Pf(a,[yf,Bf],"/auth/"+b,c,e)}
function Qf(a,b,c,d){Of(a);var e=[Af,zf];c=mf(c);"anonymous"===b||"password"===b?setTimeout(function(){B(d,X("TRANSPORT_UNAVAILABLE"))},0):(c.Ud.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.Ud.relay_url=vf(a.O.tb),c.Ud.requestWithCredential=q(a.gc,a),Pf(a,e,"/auth/"+b,c,d))}
function Hf(a){var b=v.get("redirect_request_id");if(b){var c=v.get("redirect_client_options");v.remove("redirect_request_id");v.remove("redirect_client_options");var d=[yf,Bf],b={requestId:b,requestKey:sf(document.location.hash)},c=new kf(c,{},b);try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Pf(a,d,"/auth/session",c)}}h.je=function(a,b){Of(this);var c=mf(a);c.Xa._method="POST";this.gc("/users",c,function(a,c){a?B(b,a):B(b,a,c)})};
h.Le=function(a,b){var c=this;Of(this);var d="/users/"+encodeURIComponent(a.email),e=mf(a);e.Xa._method="DELETE";this.gc(d,e,function(a,d){!a&&d&&d.uid&&c.hb&&c.hb.uid&&c.hb.uid===d.uid&&Mf(c);B(b,a)})};h.ee=function(a,b){Of(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=mf(a);d.Xa._method="PUT";d.Xa.password=a.newPassword;this.gc(c,d,function(a){B(b,a)})};
h.de=function(a,b){Of(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=mf(a);d.Xa._method="PUT";d.Xa.email=a.newEmail;d.Xa.password=a.password;this.gc(c,d,function(a){B(b,a)})};h.Me=function(a,b){Of(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=mf(a);d.Xa._method="POST";this.gc(c,d,function(a){B(b,a)})};h.gc=function(a,b,c){Rf(this,[yf,Bf],a,b,c)};
function Pf(a,b,c,d,e){Rf(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Lf(a,c.token,c,d.cd,function(a,b){a?B(e,a):B(e,null,b)}):B(e,b||X("UNKNOWN_ERROR"))})}
function Rf(a,b,c,d,e){b=Ia(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){B(e,X("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.Ud),d=va(d.Xa),d.v="js-2.1.2",d.transport=b.sc(),d.suppress_status_codes=!0,a=uf()+"/"+a.O.tb+c,b.open(a,d,function(a,b){if(a)B(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;B(e,c)}else B(e,null,b)}))}
function If(a,b){var c=null!==a.hb||null!==b;a.hb=b;c&&a.Vd("auth_status",b);a.Ee(null!==b)}h.qe=function(a){y("auth_status"===a,'initial event must be of type "auth_status"');return[this.hb]};function Of(a){var b=a.O;if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===jf)throw Error("This custom Firebase server ('"+a.O.domain+"') does not support delegated login.");};function Sf(a,b){return a&&"object"===typeof a?(y(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Tf(a,b){var c=new $e;bf(a,new S(""),function(a,e){c.dc(a,Uf(e,b))});return c}function Uf(a,b){var c=a.L().I(),c=Sf(c,b),d;if(a.M()){var e=Sf(a.za(),b);return e!==a.za()||c!==a.L().I()?new nd(e,O(c)):a}d=a;c!==a.L().I()&&(d=d.Z(new nd(c)));a.U(L,function(a,c){var e=Uf(c,b);e!==c&&(d=d.P(a,e))});return d};function wc(a,b,c){this.A=a;this.aa=b;this.yc=c}function Vf(a){return a.aa}function vc(a,b){return a.aa&&!a.yc||a.A.Da(b)}wc.prototype.j=function(){return this.A};function Wf(a,b){this.F=a;this.Ld=b}function Xf(a,b,c,d){return new Wf(new wc(b,c,d),a.Ld)}function Yf(a){return a.F.aa?a.F.j():null}Wf.prototype.u=function(){return this.Ld};function xc(a){return a.Ld.aa?a.Ld.j():null};function Zf(a,b){this.Yd=a;this.Of=b}function $f(a){this.G=a}
$f.prototype.Ya=function(a,b,c,d){var e=new yc,f;if(b.type===ag)b.source.me?c=bg(this,a,b.path,b.Ga,c,d,e):(y(b.source.df,"Unknown source."),f=b.source.Se,c=cg(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===dg)b.source.me?c=eg(this,a,b.path,b.children,c,d,e):(y(b.source.df,"Unknown source."),f=b.source.Se,c=fg(this,a,b.path,b.children,c,d,f,e));else if(b.type===gg)if(b.Ne)if(f=b.path,null!=c.jc(f))c=a;else{b=new uc(c,a,d);d=a.F.j();if(f.e()||".priority"===I(f))Vf(a.u())?b=c.pa(xc(a)):(b=a.u().j(),
y(b instanceof W,"serverChildren would be complete if leaf node"),b=c.pc(b)),b=this.G.oa(d,b,e);else{f=I(f);var g=c.Ta(f,a.u());null==g&&vc(a.u(),f)&&(g=d.K(f));b=null!=g?this.G.C(d,f,g,b,e):a.F.j().Da(f)?this.G.C(d,f,M,b,e):d;b.e()&&Vf(a.u())&&(d=c.pa(xc(a)),d.M()&&(b=this.G.oa(b,d,e)))}d=Vf(a.u())||null!=c.jc(U);c=Xf(a,b,d,this.G.ya())}else c=hg(this,a,b.path,c,d,e);else if(b.type===ig)d=b.path,b=a.u(),f=b.j(),g=b.aa||d.e(),c=jg(this,new Wf(a.F,new wc(f,g,b.yc)),d,c,tc,e);else throw fb("Unknown operation type: "+
b.type);e=Jd(e.Za);d=c;b=d.F;b.aa&&(f=b.j().M()||b.j().e(),g=Yf(a),(0<e.length||!a.F.aa||f&&!b.j().ea(g)||!b.j().L().ea(g.L()))&&e.push(Fb(Yf(d))));return new Zf(c,e)};
function jg(a,b,c,d,e,f){var g=b.F;if(null!=d.jc(c))return b;var k;if(c.e())y(Vf(b.u()),"If change path is empty, we must have complete server data"),a.G.ya()?(e=xc(b),d=d.pc(e instanceof W?e:M)):d=d.pa(xc(b)),f=a.G.oa(b.F.j(),d,f);else{var l=I(c);if(".priority"==l)y(1==Qc(c),"Can't have a priority with additional path components"),f=g.j(),k=b.u().j(),d=d.$c(c,f,k),f=null!=d?a.G.Z(f,d):g.j();else{var n=T(c);vc(g,l)?(k=b.u().j(),d=d.$c(c,g.j(),k),d=null!=d?g.j().K(l).C(n,d):g.j().K(l)):d=d.Ta(l,b.u());
f=null!=d?a.G.C(g.j(),l,d,e,f):g.j()}}return Xf(b,f,g.aa||c.e(),a.G.ya())}function cg(a,b,c,d,e,f,g,k){var l=b.u();g=g?a.G:a.G.Mb();if(c.e())d=g.oa(l.j(),d,null);else if(g.ya()&&!l.yc)d=l.j().C(c,d),d=g.oa(l.j(),d,null);else{var n=I(c);if((c.e()?!l.aa||l.yc:!vc(l,I(c)))&&1<Qc(c))return b;d=l.j().K(n).C(T(c),d);d=".priority"==n?g.Z(l.j(),d):g.C(l.j(),n,d,tc,null)}l=l.aa||c.e();b=new Wf(b.F,new wc(d,l,g.ya()));return jg(a,b,c,e,new uc(e,b,f),k)}
function bg(a,b,c,d,e,f,g){var k=b.F;e=new uc(e,b,f);if(c.e())g=a.G.oa(b.F.j(),d,g),a=Xf(b,g,!0,a.G.ya());else if(f=I(c),".priority"===f)g=a.G.Z(b.F.j(),d),a=Xf(b,g,k.aa,k.yc);else{var l=T(c);c=k.j().K(f);if(!l.e()){var n=e.ef(f);d=null!=n?".priority"===Rc(l)&&n.ra(l.parent()).e()?n:n.C(l,d):M}c.ea(d)?a=b:(g=a.G.C(k.j(),f,d,e,g),a=Xf(b,g,k.aa,a.G.ya()))}return a}
function eg(a,b,c,d,e,f,g){var k=b;kg(d,function(d,n){var u=c.o(d);vc(b.F,I(u))&&(k=bg(a,k,u,n,e,f,g))});kg(d,function(d,n){var u=c.o(d);vc(b.F,I(u))||(k=bg(a,k,u,n,e,f,g))});return k}function lg(a,b){kg(b,function(b,d){a=a.C(b,d)});return a}
function fg(a,b,c,d,e,f,g,k){if(b.u().j().e()&&!Vf(b.u()))return b;var l=b;c=c.e()?d:mg(ng,c,d);var n=b.u().j();c.children.fa(function(c,d){if(n.Da(c)){var E=b.u().j().K(c),E=lg(E,d);l=cg(a,l,new S(c),E,e,f,g,k)}});c.children.fa(function(c,d){var E=!Vf(b.u())&&null==d.value;n.Da(c)||E||(E=b.u().j().K(c),E=lg(E,d),l=cg(a,l,new S(c),E,e,f,g,k))});return l}
function hg(a,b,c,d,e,f){if(null!=d.jc(c))return b;var g=new uc(d,b,e),k=e=b.F.j();if(Vf(b.u())){if(c.e())e=d.pa(xc(b)),k=a.G.oa(b.F.j(),e,f);else if(".priority"===I(c)){var l=d.Ta(I(c),b.u());null==l||e.e()||e.L().ea(l)||(k=a.G.Z(e,l))}else l=I(c),e=d.Ta(l,b.u()),null!=e&&(k=a.G.C(b.F.j(),l,e,g,f));e=!0}else b.F.aa?(k=e,e=Yf(b),e.M()||e.U(L,function(c){var e=d.Ta(c,b.u());null!=e&&(k=a.G.C(k,c,e,g,f))}),e=!0):(!c.e()&&(l=I(c),1==Qc(c)||vc(b.F,l))&&(c=d.Ta(l,b.u()),null!=c&&(k=a.G.C(e,l,c,g,f))),
e=!1);return Xf(b,k,e,a.G.ya())};function og(a){this.V=a;this.g=a.n.g}function pg(a,b,c,d){var e=[],f=[];Ha(b,function(b){"child_changed"===b.type&&a.g.jf(b.De,b.Ha)&&f.push(new C("child_moved",b.Ha,b.Ua))});qg(a,e,"child_removed",b,d,c);qg(a,e,"child_added",b,d,c);qg(a,e,"child_moved",f,d,c);qg(a,e,"child_changed",b,d,c);qg(a,e,Gb,b,d,c);return e}function qg(a,b,c,d,e,f){d=Ia(d,function(a){return a.type===c});Qa(d,q(a.Qf,a));Ha(d,function(c){var d=rg(a,c,f);Ha(e,function(e){e.wf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function rg(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Fd=c.ff(b.Ua,b.Ha,a.g));return b}og.prototype.Qf=function(a,b){if(null==a.Ua||null==b.Ua)throw fb("Should only compare child_ events.");return this.g.compare(new N(a.Ua,a.Ha),new N(b.Ua,b.Ha))};function sg(a,b){this.V=a;var c=a.n,d=new bc(c.g),c=Jc(c)?new bc(c.g):c.ka?new Ac(c):new dc(c);this.sf=new $f(c);var e=b.u(),f=b.F,g=d.oa(M,e.j(),null),k=c.oa(M,f.j(),null);this.Ia=new Wf(new wc(k,f.aa,c.ya()),new wc(g,e.aa,d.ya()));this.Va=[];this.Uf=new og(a)}function tg(a){return a.V}h=sg.prototype;h.u=function(){return this.Ia.u().j()};h.bb=function(a){var b=xc(this.Ia);return b&&(Jc(this.V.n)||!a.e()&&!b.K(I(a)).e())?b.ra(a):null};h.e=function(){return 0===this.Va.length};h.Gb=function(a){this.Va.push(a)};
h.gb=function(a,b){var c=[];if(b){y(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;Ha(this.Va,function(a){(a=a.Ye(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Va.length;++f){var g=this.Va[f];if(!g.matches(a))e.push(g);else if(a.hf()){e=e.concat(this.Va.slice(f+1));break}}this.Va=e}else this.Va=[];return c};
h.Ya=function(a,b,c){a.type===dg&&null!==a.source.yb&&(y(xc(this.Ia),"We should always have a full cache before handling merges"),y(Yf(this.Ia),"Missing event cache, even though we have a server cache"));var d=this.Ia;a=this.sf.Ya(d,a,b,c);b=this.sf;c=a.Yd;y(c.F.j().Bc(b.G.g),"Event snap not indexed");y(c.u().j().Bc(b.G.g),"Server snap not indexed");y(Vf(a.Yd.u())||!Vf(d.u()),"Once a server snap is complete, it should never go back");this.Ia=a.Yd;return ug(this,a.Of,a.Yd.F.j(),null)};
function vg(a,b){var c=a.Ia.F,d=[];c.j().M()||c.j().U(L,function(a,b){d.push(new C("child_added",b,a))});c.aa&&d.push(Fb(c.j()));return ug(a,d,c.j(),b)}function ug(a,b,c,d){return pg(a.Uf,b,c,d?[d]:a.Va)};function wg(a,b){this.value=a;this.children=b||xg}var xg=new Zc(function(a,b){return a===b?0:a<b?-1:1}),ng=new wg(null);function yg(a){var b=ng;A(a,function(a,d){b=b.set(new S(d),a)});return b}h=wg.prototype;h.e=function(){return null===this.value&&this.children.e()};function zg(a,b,c){if(null!=a.value&&c(a.value))return{path:U,value:a.value};if(b.e())return null;var d=I(b);a=a.children.get(d);return null!==a?(b=zg(a,T(b),c),null!=b?{path:(new S(d)).o(b.path),value:b.value}:null):null}
function Ag(a,b){return zg(a,b,function(){return!0})}h.subtree=function(a){if(a.e())return this;var b=this.children.get(I(a));return null!==b?b.subtree(T(a)):ng};h.set=function(a,b){if(a.e())return new wg(b,this.children);var c=I(a),d=(this.children.get(c)||ng).set(T(a),b),c=this.children.La(c,d);return new wg(this.value,c)};
h.remove=function(a){if(a.e())return this.children.e()?ng:new wg(null,this.children);var b=I(a),c=this.children.get(b);return c?(a=c.remove(T(a)),b=a.e()?this.children.remove(b):this.children.La(b,a),null===this.value&&b.e()?ng:new wg(this.value,b)):this};h.get=function(a){if(a.e())return this.value;var b=this.children.get(I(a));return b?b.get(T(a)):null};
function mg(a,b,c){if(b.e())return c;var d=I(b);b=mg(a.children.get(d)||ng,T(b),c);d=b.e()?a.children.remove(d):a.children.La(d,b);return new wg(a.value,d)}function Bg(a,b){return Cg(a,U,b)}function Cg(a,b,c){var d={};a.children.fa(function(a,f){d[a]=Cg(f,b.o(a),c)});return c(b,a.value,d)}function Dg(a,b,c){return Eg(a,b,U,c)}function Eg(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=I(b);return(a=a.children.get(e))?Eg(a,T(b),c.o(e),d):null}
function Fg(a,b,c){if(!b.e()){var d=!0;a.value&&(d=c(U,a.value));!0===d&&(d=I(b),(a=a.children.get(d))&&Gg(a,T(b),U.o(d),c))}}function Gg(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=I(b);return(a=a.children.get(e))?Gg(a,T(b),c.o(e),d):ng}function kg(a,b){Hg(a,U,b)}function Hg(a,b,c){a.children.fa(function(a,e){Hg(e,b.o(a),c)});a.value&&c(b,a.value)}function Ig(a,b){a.children.fa(function(a,d){d.value&&b(a,d.value)})}
h.toString=function(){var a={};kg(this,function(b,c){a[b.toString()]=c.toString()});return r(a)};function Jg(){this.va={}}h=Jg.prototype;h.e=function(){return Nd(this.va)};h.Ya=function(a,b,c){var d=a.source.yb;if(null!==d)return d=t(this.va,d),y(null!=d,"SyncTree gave us an op for an invalid query."),d.Ya(a,b,c);var e=[];A(this.va,function(d){e=e.concat(d.Ya(a,b,c))});return e};h.Gb=function(a,b,c,d,e){var f=a.Fa(),g=t(this.va,f);if(!g){var g=c.pa(e?d:null),k=!1;g?k=!0:(g=d instanceof W?c.pc(d):M,k=!1);g=new sg(a,new Wf(new wc(g,k,!1),new wc(d,e,!1)));this.va[f]=g}g.Gb(b);return vg(g,b)};
h.gb=function(a,b,c){var d=a.Fa(),e=[],f=[],g=null!=Kg(this);if("default"===d){var k=this;A(this.va,function(a,d){f=f.concat(a.gb(b,c));a.e()&&(delete k.va[d],Jc(a.V.n)||e.push(a.V))})}else{var l=t(this.va,d);l&&(f=f.concat(l.gb(b,c)),l.e()&&(delete this.va[d],Jc(l.V.n)||e.push(l.V)))}g&&null==Kg(this)&&e.push(new R(a.k,a.path));return{rg:e,Vf:f}};function Lg(a){return Ia(Jd(a.va),function(a){return!Jc(a.V.n)})}h.bb=function(a){var b=null;A(this.va,function(c){b=b||c.bb(a)});return b};
function Mg(a,b){if(Jc(b.n))return Kg(a);var c=b.Fa();return t(a.va,c)}function Kg(a){return Md(a.va,function(a){return Jc(a.V.n)})||null};function Ng(a){this.W=a}var Og=new Ng(new wg(null));function Pg(a,b,c){if(b.e())return new Ng(new wg(c));var d=Ag(a.W,b);if(null!=d){var e=d.path,d=d.value;b=V(e,b);d=d.C(b,c);return new Ng(a.W.set(e,d))}a=mg(a.W,b,new wg(c));return new Ng(a)}function Qg(a,b,c){var d=a;ua(c,function(a,c){d=Pg(d,b.o(a),c)});return d}Ng.prototype.Gd=function(a){if(a.e())return Og;a=mg(this.W,a,ng);return new Ng(a)};function Rg(a,b){var c=Ag(a.W,b);return null!=c?a.W.get(c.path).ra(V(c.path,b)):null}
function Sg(a){var b=[],c=a.W.value;null!=c?c.M()||c.U(L,function(a,c){b.push(new N(a,c))}):a.W.children.fa(function(a,c){null!=c.value&&b.push(new N(a,c.value))});return b}function Tg(a,b){if(b.e())return a;var c=Rg(a,b);return null!=c?new Ng(new wg(c)):new Ng(a.W.subtree(b))}Ng.prototype.e=function(){return this.W.e()};Ng.prototype.apply=function(a){return Ug(U,this.W,a)};
function Ug(a,b,c){if(null!=b.value)return c.C(a,b.value);var d=null;b.children.fa(function(b,f){".priority"===b?(y(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Ug(a.o(b),f,c)});c.ra(a).e()||null===d||(c=c.C(a.o(".priority"),d));return c};function Vg(){this.T=Og;this.wa=[];this.Ec=-1}h=Vg.prototype;
h.Gd=function(a){var b=Na(this.wa,function(b){return b.Zd===a});y(0<=b,"removeWrite called with nonexistent writeId.");var c=this.wa[b];this.wa.splice(b,1);for(var d=c.visible,e=!1,f=this.wa.length-1;d&&0<=f;){var g=this.wa[f];g.visible&&(f>=b&&Wg(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.T=Xg(this.wa,Yg,U),this.Ec=0<this.wa.length?this.wa[this.wa.length-1].Zd:-1;else if(c.Ga)this.T=this.T.Gd(c.path);else{var k=this;A(c.children,function(a,b){k.T=k.T.Gd(c.path.o(b))})}return c.path}return null};
h.pa=function(a,b,c,d){if(c||d){var e=Tg(this.T,a);return!d&&e.e()?b:d||null!=b||null!=Rg(e,U)?(e=Xg(this.wa,function(b){return(b.visible||d)&&(!c||!(0<=Ga(c,b.Zd)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||M,e.apply(b)):null}e=Rg(this.T,a);if(null!=e)return e;e=Tg(this.T,a);return e.e()?b:null!=b||null!=Rg(e,U)?(b=b||M,e.apply(b)):null};
h.pc=function(a,b){var c=M,d=Rg(this.T,a);if(d)d.M()||d.U(L,function(a,b){c=c.P(a,b)});else if(b){var e=Tg(this.T,a);b.U(L,function(a,b){var d=Tg(e,new S(a)).apply(b);c=c.P(a,d)});Ha(Sg(e),function(a){c=c.P(a.name,a.Y)})}else e=Tg(this.T,a),Ha(Sg(e),function(a){c=c.P(a.name,a.Y)});return c};h.$c=function(a,b,c,d){y(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.o(b);if(null!=Rg(this.T,a))return null;a=Tg(this.T,a);return a.e()?d.ra(b):a.apply(d.ra(b))};
h.Ta=function(a,b,c){a=a.o(b);var d=Rg(this.T,a);return null!=d?d:vc(c,b)?Tg(this.T,a).apply(c.j().K(b)):null};h.jc=function(a){return Rg(this.T,a)};h.ce=function(a,b,c,d,e,f){var g;a=Tg(this.T,a);g=Rg(a,U);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.Fb(f);if(g.e()||g.M())return[];b=[];a=mc(f);e=e?g.Rb(c,f):g.Pb(c,f);for(f=P(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=P(e);return b};
function Wg(a,b){return a.Ga?a.path.contains(b):!!Ld(a.children,function(c,d){return a.path.o(d).contains(b)})}function Yg(a){return a.visible}
function Xg(a,b,c){for(var d=Og,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Ga)c.contains(g)?(g=V(c,g),d=Pg(d,g,f.Ga)):g.contains(c)&&(g=V(g,c),d=Pg(d,U,f.Ga.ra(g)));else if(f.children)if(c.contains(g))g=V(c,g),d=Qg(d,g,f.children);else{if(g.contains(c))if(g=V(g,c),g.e())d=Qg(d,U,f.children);else if(f=t(f.children,I(g)))f=f.ra(T(g)),d=Pg(d,U,f)}else throw fb("WriteRecord should have .snap or .children");}}return d}function Zg(a,b){this.Db=a;this.W=b}h=Zg.prototype;
h.pa=function(a,b,c){return this.W.pa(this.Db,a,b,c)};h.pc=function(a){return this.W.pc(this.Db,a)};h.$c=function(a,b,c){return this.W.$c(this.Db,a,b,c)};h.jc=function(a){return this.W.jc(this.Db.o(a))};h.ce=function(a,b,c,d,e){return this.W.ce(this.Db,a,b,c,d,e)};h.Ta=function(a,b){return this.W.Ta(this.Db,a,b)};h.o=function(a){return new Zg(this.Db.o(a),this.W)};function $g(a,b,c){this.type=ag;this.source=a;this.path=b;this.Ga=c}$g.prototype.Mc=function(a){return this.path.e()?new $g(this.source,U,this.Ga.K(a)):new $g(this.source,T(this.path),this.Ga)};$g.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};function ah(a,b){this.type=gg;this.source=bh;this.path=a;this.Ne=b}ah.prototype.Mc=function(){return this.path.e()?this:new ah(T(this.path),this.Ne)};ah.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Ne+")"};function ch(a,b){this.type=ig;this.source=a;this.path=b}ch.prototype.Mc=function(){return this.path.e()?new ch(this.source,U):new ch(this.source,T(this.path))};ch.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function dh(a,b,c){this.type=dg;this.source=a;this.path=b;this.children=c}dh.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new S(a)),a.e()?null:a.value?new $g(this.source,U,a.value):new dh(this.source,U,a);y(I(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new dh(this.source,T(this.path),this.children)};dh.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var ag=0,dg=1,gg=2,ig=3;function eh(a,b,c,d){this.me=a;this.df=b;this.yb=c;this.Se=d;y(!d||b,"Tagged queries must be from server.")}var bh=new eh(!0,!1,null,!1),fh=new eh(!1,!0,null,!1);eh.prototype.toString=function(){return this.me?"user":this.Se?"server(queryID="+this.yb+")":"server"};function gh(a){this.na=ng;this.xb=new Vg;this.Wc={};this.bc={};this.Fc=a}function hh(a,b,c,d,e){var f=a.xb,g=e;y(d>f.Ec,"Stacking an older write on top of newer ones");m(g)||(g=!0);f.wa.push({path:b,Ga:c,Zd:d,visible:g});g&&(f.T=Pg(f.T,b,c));f.Ec=d;return e?ih(a,new $g(bh,b,c)):[]}function jh(a,b,c,d){var e=a.xb;y(d>e.Ec,"Stacking an older merge on top of newer ones");e.wa.push({path:b,children:c,Zd:d,visible:!0});e.T=Qg(e.T,b,c);e.Ec=d;c=yg(c);return ih(a,new dh(bh,b,c))}
function kh(a,b,c){c=c||!1;b=a.xb.Gd(b);return null==b?[]:ih(a,new ah(b,c))}function lh(a,b,c){c=yg(c);return ih(a,new dh(fh,b,c))}function mh(a,b,c,d){d=Od(a.Wc,"_"+d);if(null!=d){var e=nh(d);d=e.path;e=e.yb;b=V(d,b);c=new $g(new eh(!1,!0,e,!0),b,c);return oh(a,d,c)}return[]}function ph(a,b,c,d){if(d=Od(a.Wc,"_"+d)){var e=nh(d);d=e.path;e=e.yb;b=V(d,b);c=yg(c);c=new dh(new eh(!1,!0,e,!0),b,c);return oh(a,d,c)}return[]}
gh.prototype.Gb=function(a,b){var c=a.path,d=null,e=!1;Fg(this.na,c,function(a,b){var f=V(a,c);d=b.bb(f);e=e||null!=Kg(b);return!d});var f=this.na.get(c);f?(e=e||null!=Kg(f),d=d||f.bb(U)):(f=new Jg,this.na=this.na.set(c,f));var g;null!=d?g=!0:(g=!1,d=M,Ig(this.na.subtree(c),function(a,b){var c=b.bb(U);c&&(d=d.P(a,c))}));var k=null!=Mg(f,a);if(!k&&!Jc(a.n)){var l=qh(a);y(!(l in this.bc),"View does not exist, but we have a tag");var n=rh++;this.bc[l]=n;this.Wc["_"+n]=l}g=f.Gb(a,b,new Zg(c,this.xb),
d,g);k||e||(f=Mg(f,a),g=g.concat(sh(this,a,f)));return g};
gh.prototype.gb=function(a,b,c){var d=a.path,e=this.na.get(d),f=[];if(e&&("default"===a.Fa()||null!=Mg(e,a))){f=e.gb(a,b,c);e.e()&&(this.na=this.na.remove(d));e=f.rg;f=f.Vf;b=-1!==Na(e,function(a){return Jc(a.n)});var g=Dg(this.na,d,function(a,b){return null!=Kg(b)});if(b&&!g&&(d=this.na.subtree(d),!d.e()))for(var d=th(d),k=0;k<d.length;++k){var l=d[k],n=l.V,l=uh(this,l);this.Fc.Pe(n,vh(this,n),l.md,l.H)}if(!g&&0<e.length&&!c)if(b)this.Fc.Qd(a,null);else{var u=this;Ha(e,function(a){a.Fa();var b=u.bc[qh(a)];
u.Fc.Qd(a,b)})}wh(this,e)}return f};gh.prototype.pa=function(a,b){var c=this.xb,d=Dg(this.na,a,function(b,c){var d=V(b,a);if(d=c.bb(d))return d});return c.pa(a,d,b,!0)};function th(a){return Bg(a,function(a,c,d){if(c&&null!=Kg(c))return[Kg(c)];var e=[];c&&(e=Lg(c));A(d,function(a){e=e.concat(a)});return e})}function wh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!Jc(d.n)){var d=qh(d),e=a.bc[d];delete a.bc[d];delete a.Wc["_"+e]}}}
function sh(a,b,c){var d=b.path,e=vh(a,b);c=uh(a,c);b=a.Fc.Pe(b,e,c.md,c.H);d=a.na.subtree(d);if(e)y(null==Kg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bg(d,function(a,b,c){if(!a.e()&&b&&null!=Kg(b))return[tg(Kg(b))];var d=[];b&&(d=d.concat(Ja(Lg(b),function(a){return a.V})));A(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Fc.Qd(c,vh(a,c));return b}
function uh(a,b){var c=b.V,d=vh(a,c);return{md:function(){return(b.u()||M).hash()},H:function(b,f){if("ok"===b){if(f&&"object"===typeof f&&s(f,"w")){var g=t(f,"w");ea(g)&&0<=Ga(g,"no_index")&&z("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}if(d){var k=c.path;if(g=Od(a.Wc,"_"+d))var l=nh(g),g=l.path,l=l.yb,k=V(g,k),k=new ch(new eh(!1,!0,l,!0),k),g=oh(a,g,k);else g=[]}else g=ih(a,new ch(fh,
c.path));return g}g="Unknown Error";"too_big"===b?g="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?g="Client doesn't have permission to access the desired data.":"unavailable"==b&&(g="The service is unavailable");g=Error(b+": "+g);g.code=b.toUpperCase();return a.gb(c,null,g)}}}function qh(a){return a.path.toString()+"$"+a.Fa()}
function nh(a){var b=a.indexOf("$");y(-1!==b&&b<a.length-1,"Bad queryKey.");return{yb:a.substr(b+1),path:new S(a.substr(0,b))}}function vh(a,b){var c=qh(b);return t(a.bc,c)}var rh=1;function oh(a,b,c){var d=a.na.get(b);y(d,"Missing sync point for query tag that we're tracking");return d.Ya(c,new Zg(b,a.xb),null)}function ih(a,b){return xh(a,b,a.na,null,new Zg(U,a.xb))}
function xh(a,b,c,d,e){if(b.path.e())return yh(a,b,c,d,e);var f=c.get(U);null==d&&null!=f&&(d=f.bb(U));var g=[],k=I(b.path),l=b.Mc(k);if((c=c.children.get(k))&&l)var n=d?d.K(k):null,k=e.o(k),g=g.concat(xh(a,l,c,n,k));f&&(g=g.concat(f.Ya(b,e,d)));return g}function yh(a,b,c,d,e){var f=c.get(U);null==d&&null!=f&&(d=f.bb(U));var g=[];c.children.fa(function(c,f){var n=d?d.K(c):null,u=e.o(c),x=b.Mc(c);x&&(g=g.concat(yh(a,x,f,n,u)))});f&&(g=g.concat(f.Ya(b,e,d)));return g};function zh(a){this.O=a;this.Ra=Xd(a);this.$=new df;this.vd=1;this.S=new Je(this.O,q(this.yd,this),q(this.wd,this),q(this.He,this));this.zg=Yd(a,q(function(){return new Ud(this.Ra,this.S)},this));this.lc=new Tc;this.se=new cf;var b=this;this.qd=new gh({Pe:function(a,d,e,f){d=[];e=b.se.j(a.path);e.e()||(d=ih(b.qd,new $g(fh,a.path,e)),setTimeout(function(){f("ok")},0));return d},Qd:ba});Ah(this,"connected",!1);this.ga=new $e;this.Q=new Ff(a,q(this.S.Q,this.S),q(this.S.Ue,this.S),q(this.Ee,this));this.gd=
0;this.te=null;this.N=new gh({Pe:function(a,d,e,f){Ne(b.S,a,e,d,function(d,e){var l=f(d,e);hf(b.$,a.path,l)});return[]},Qd:function(a,d){var e=b.S,f=a.path.toString(),g=a.Fa();e.f("Unlisten called for "+f+" "+g);if(Pe(e,f,g)&&e.ja){var k=Ic(a.n);e.f("Unlisten on "+f+" for "+g);f={p:f};d&&(f.q=k,f.t=d);e.Ca("n",f)}}})}h=zh.prototype;h.toString=function(){return(this.O.Ab?"https://":"http://")+this.O.host};h.name=function(){return this.O.tb};
function Bh(a){a=a.se.j(new S(".info/serverTimeOffset")).I()||0;return(new Date).getTime()+a}function Ch(a){a=a={timestamp:Bh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}h.yd=function(a,b,c,d){this.gd++;var e=new S(a);b=this.te?this.te(a,b):b;a=[];d?c?(b=td(b,function(a){return O(a)}),a=ph(this.N,e,b,d)):(b=O(b),a=mh(this.N,e,b,d)):c?(d=td(b,function(a){return O(a)}),a=lh(this.N,e,d)):(d=O(b),a=ih(this.N,new $g(fh,e,d)));d=e;0<a.length&&(d=Dh(this,e));hf(this.$,d,a)};
h.wd=function(a){Ah(this,"connected",a);!1===a&&Eh(this)};h.He=function(a){var b=this;zb(a,function(a,d){Ah(b,d,a)})};h.Ee=function(a){Ah(this,"authenticated",a)};function Ah(a,b,c){b=new S("/.info/"+b);c=O(c);var d=a.se;d.Jd=d.Jd.C(b,c);c=ih(a.qd,new $g(fh,b,c));hf(a.$,b,c)}
h.Bb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Hg:c});var e=Ch(this);b=O(b,c);var e=Uf(b,e),f=this.vd++,e=hh(this.N,a,e,f,!0);ef(this.$,e);var g=this;this.S.put(a.toString(),b.I(!0),function(b,c){var e="ok"===b;e||z("set at "+a+" failed: "+b);e=kh(g.N,f,!e);hf(g.$,a,e);Fh(d,b,c)});e=Gh(this,a);Dh(this,e);hf(this.$,e,[])};
h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=Ch(this),f={};A(b,function(a,b){d=!1;var c=O(a);f[b]=Uf(c,e)});if(d)hb("update() called with empty data.  Don't do anything."),Fh(c,"ok");else{var g=this.vd++,k=jh(this.N,a,f,g);ef(this.$,k);var l=this;Ve(this.S,a.toString(),b,function(b,d){y("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");var e="ok"===b;e||z("update at "+a+" failed: "+b);var e=kh(l.N,g,!e),f=a;0<e.length&&(f=Dh(l,a));hf(l.$,f,e);Fh(c,b,d)});
b=Gh(this,a);Dh(this,b);hf(this.$,a,[])}};function Eh(a){a.f("onDisconnectEvents");var b=Ch(a),c=[];bf(Tf(a.ga,b),U,function(b,e){c=c.concat(ih(a.N,new $g(fh,b,e)));var f=Gh(a,b);Dh(a,f)});a.ga=new $e;hf(a.$,U,c)}h.Fe=function(a,b){var c=this;this.S.Fe(a.toString(),function(d,e){"ok"===d&&af(c.ga,a);Fh(b,d,e)})};function Hh(a,b,c,d){var e=O(c);Re(a.S,b.toString(),e.I(!0),function(c,g){"ok"===c&&a.ga.dc(b,e);Fh(d,c,g)})}
function Ih(a,b,c,d,e){var f=O(c,d);Re(a.S,b.toString(),f.I(!0),function(c,d){"ok"===c&&a.ga.dc(b,f);Fh(e,c,d)})}function Jh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(hb("onDisconnect().update() called with empty data.  Don't do anything."),Fh(d,"ok")):Te(a.S,b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var n=O(c[l]);a.ga.dc(b.o(l),n)}Fh(d,e,f)})}function Oc(a,b,c){c=".info"===I(b.path)?a.qd.Gb(b,c):a.N.Gb(b,c);Pc(a.$,b.path,c)}h.pb=function(){this.S.pb()};h.hc=function(){this.S.hc()};
h.Qe=function(a){if("undefined"!==typeof console){a?(this.Pd||(this.Pd=new Td(this.Ra)),a=this.Pd.get()):a=this.Ra.get();var b=Ka(Kd(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.Re=function(a){Sd(this.Ra,a);this.zg.zf[a]=!0};h.f=function(a){hb("r:"+this.S.id+":",arguments)};function Fh(a,b,c){a&&Cb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Kh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var g=new R(a,b);g.vb("value",f);c={path:b,update:c,H:d,status:null,qf:eb(),Ve:e,xf:0,Xd:function(){g.Zb("value",f)},$d:null,xa:null,dd:null,ed:null,fd:null};d=a.N.pa(b,void 0)||M;c.dd=d;d=c.update(d.I());if(m(d)){Sb("transaction failed: Data returned ",d);c.status=1;e=Uc(a.lc,b);var k=e.za()||[];k.push(c);Vc(e,k);"object"===typeof d&&null!==d&&s(d,".priority")?(k=t(d,".priority"),y(Qb(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.N.pa(b)||M).L().I();e=Ch(a);d=O(d,k);e=Uf(d,e);c.ed=d;c.fd=e;c.xa=a.vd++;c=hh(a.N,b,e,c.xa,c.Ve);hf(a.$,b,c);Lh(a)}else c.Xd(),c.ed=null,c.fd=null,c.H&&(a=new D(c.dd,new R(a,c.path),L),c.H(null,!1,a))}function Lh(a,b){var c=b||a.lc;b||Mh(a,c);if(null!==c.za()){var d=Nh(a,c);y(0<d.length,"Sending zero length transaction queue");La(d,function(a){return 1===a.status})&&Oh(a,c.path(),d)}else c.ld()&&c.U(function(b){Lh(a,b)})}
function Oh(a,b,c){for(var d=Ja(c,function(a){return a.xa}),e=a.N.pa(b,d)||M,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];y(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.xf++;var k=V(b,g.path),d=d.C(k,g.ed)}d=d.I(!0);a.S.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(kh(a.N,c[f].xa));if(c[f].H){var g=c[f].fd,k=new R(a,c[f].path);d.push(q(c[f].H,
null,null,!0,new D(g,k,L)))}c[f].Xd()}Mh(a,Uc(a.lc,b));Lh(a);hf(a.$,b,e);for(f=0;f<d.length;f++)Cb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(z("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].$d=d;Dh(a,b)}},e)}function Dh(a,b){var c=Ph(a,b),d=c.path(),c=Nh(a,c);Qh(a,c,d);return d}
function Qh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Ja(b,function(a){return a.xa}),g=0;g<b.length;g++){var k=b[g],l=V(c,k.path),n=!1,u;y(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)n=!0,u=k.$d,e=e.concat(kh(a.N,k.xa,!0));else if(1===k.status)if(25<=k.xf)n=!0,u="maxretry",e=e.concat(kh(a.N,k.xa,!0));else{var x=a.N.pa(k.path,f)||M;k.dd=x;var E=b[g].update(x.I());m(E)?(Sb("transaction failed: Data returned ",E),l=O(E),"object"===typeof E&&null!=E&&s(E,
".priority")||(l=l.Z(x.L())),x=k.xa,E=Ch(a),E=Uf(l,E),k.ed=l,k.fd=E,k.xa=a.vd++,Oa(f,x),e=e.concat(hh(a.N,k.path,E,k.xa,k.Ve)),e=e.concat(kh(a.N,x,!0))):(n=!0,u="nodata",e=e.concat(kh(a.N,k.xa,!0)))}hf(a.$,c,e);e=[];n&&(b[g].status=3,setTimeout(b[g].Xd,Math.floor(0)),b[g].H&&("nodata"===u?(k=new R(a,b[g].path),d.push(q(b[g].H,null,null,!1,new D(b[g].dd,k,L)))):d.push(q(b[g].H,null,Error(u),!1,null))))}Mh(a,a.lc);for(g=0;g<d.length;g++)Cb(d[g]);Lh(a)}}
function Ph(a,b){for(var c,d=a.lc;null!==(c=I(b))&&null===d.za();)d=Uc(d,c),b=T(b);return d}function Nh(a,b){var c=[];Rh(a,b,c);c.sort(function(a,b){return a.qf-b.qf});return c}function Rh(a,b,c){var d=b.za();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.U(function(b){Rh(a,b,c)})}function Mh(a,b){var c=b.za();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Vc(b,0<c.length?c:null)}b.U(function(b){Mh(a,b)})}
function Gh(a,b){var c=Ph(a,b).path(),d=Uc(a.lc,b);Yc(d,function(b){Sh(a,b)});Sh(a,d);Xc(d,function(b){Sh(a,b)});return c}
function Sh(a,b){var c=b.za();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(y(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].$d="set"):(y(1===c[g].status,"Unexpected transaction status in abort"),c[g].Xd(),e=e.concat(kh(a.N,c[g].xa,!0)),c[g].H&&d.push(q(c[g].H,null,Error("set"),!1,null))));-1===f?Vc(b,null):c.length=f+1;hf(a.$,b.path(),e);for(g=0;g<d.length;g++)Cb(d[g])}};function Th(){this.ec={}}ca(Th);Th.prototype.pb=function(){for(var a in this.ec)this.ec[a].pb()};Th.prototype.interrupt=Th.prototype.pb;Th.prototype.hc=function(){for(var a in this.ec)this.ec[a].hc()};Th.prototype.resume=Th.prototype.hc;function Uh(a){var b=this;this.rc=a;this.Sd="*";xf()?this.Hc=this.od=of():(this.Hc=window.opener,this.od=window);if(!b.Hc)throw"Unable to find relay frame";pf(this.od,"message",q(this.$b,this));pf(this.od,"message",q(this.nf,this));try{Vh(this,{a:"ready"})}catch(c){pf(this.Hc,"load",function(){Vh(b,{a:"ready"})})}pf(window,"unload",q(this.jg,this))}function Vh(a,b){b=r(b);xf()?a.Hc.doPost(b,a.Sd):a.Hc.postMessage(b,a.Sd)}
Uh.prototype.$b=function(a){var b=this,c;try{c=ta(a.data)}catch(d){}c&&"request"===c.a&&(qf(window,"message",this.$b),this.Sd=a.origin,this.rc&&setTimeout(function(){b.rc(b.Sd,c.d,function(a,c){b.Mf=!c;b.rc=void 0;Vh(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};Uh.prototype.jg=function(){try{qf(this.od,"message",this.nf)}catch(a){}this.rc&&(Vh(this,{a:"error",d:"unknown closed window"}),this.rc=void 0);try{window.close()}catch(b){}};Uh.prototype.nf=function(a){if(this.Mf&&"die"===a.data)try{window.close()}catch(b){}};var Y={Xf:function(){je=ae=!0}};Y.forceLongPolling=Y.Xf;Y.Yf=function(){ke=!0};Y.forceWebSockets=Y.Yf;Y.wg=function(a,b){a.k.S.Oe=b};Y.setSecurityDebugCallback=Y.wg;Y.Qe=function(a,b){a.k.Qe(b)};Y.stats=Y.Qe;Y.Re=function(a,b){a.k.Re(b)};Y.statsIncrementCounter=Y.Re;Y.gd=function(a){return a.k.gd};Y.dataUpdateCount=Y.gd;Y.ag=function(a,b){a.k.te=b};Y.interceptServerData=Y.ag;Y.gg=function(a){new Uh(a)};Y.onPopupOpen=Y.gg;Y.ug=function(a){jf=a};Y.setAuthenticationServer=Y.ug;function Z(a,b){this.Rc=a;this.Ea=b}Z.prototype.cancel=function(a){F("Firebase.onDisconnect().cancel",0,1,arguments.length);H("Firebase.onDisconnect().cancel",1,a,!0);this.Rc.Fe(this.Ea,a||null)};Z.prototype.cancel=Z.prototype.cancel;Z.prototype.remove=function(a){F("Firebase.onDisconnect().remove",0,1,arguments.length);Zb("Firebase.onDisconnect().remove",this.Ea);H("Firebase.onDisconnect().remove",1,a,!0);Hh(this.Rc,this.Ea,null,a)};Z.prototype.remove=Z.prototype.remove;
Z.prototype.set=function(a,b){F("Firebase.onDisconnect().set",1,2,arguments.length);Zb("Firebase.onDisconnect().set",this.Ea);Rb("Firebase.onDisconnect().set",a,!1);H("Firebase.onDisconnect().set",2,b,!0);Hh(this.Rc,this.Ea,a,b)};Z.prototype.set=Z.prototype.set;
Z.prototype.Bb=function(a,b,c){F("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Zb("Firebase.onDisconnect().setWithPriority",this.Ea);Rb("Firebase.onDisconnect().setWithPriority",a,!1);Vb("Firebase.onDisconnect().setWithPriority",2,b);H("Firebase.onDisconnect().setWithPriority",3,c,!0);Ih(this.Rc,this.Ea,a,b,c)};Z.prototype.setWithPriority=Z.prototype.Bb;
Z.prototype.update=function(a,b){F("Firebase.onDisconnect().update",1,2,arguments.length);Zb("Firebase.onDisconnect().update",this.Ea);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ub("Firebase.onDisconnect().update",a);H("Firebase.onDisconnect().update",2,b,!0);Jh(this.Rc,
this.Ea,a,b)};Z.prototype.update=Z.prototype.update;var $={};$.nc=Je;$.DataConnection=$.nc;Je.prototype.yg=function(a,b){this.Ca("q",{p:a},b)};$.nc.prototype.simpleListen=$.nc.prototype.yg;Je.prototype.Sf=function(a,b){this.Ca("echo",{d:a},b)};$.nc.prototype.echo=$.nc.prototype.Sf;Je.prototype.interrupt=Je.prototype.pb;$.Df=ue;$.RealTimeConnection=$.Df;ue.prototype.sendRequest=ue.prototype.Ca;ue.prototype.close=ue.prototype.close;
$.$f=function(a){var b=Je.prototype.put;Je.prototype.put=function(c,d,e,f){m(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Je.prototype.put=b}};$.hijackHash=$.$f;$.Cf=Aa;$.ConnectionTarget=$.Cf;$.Fa=function(a){return a.Fa()};$.queryIdentifier=$.Fa;$.bg=function(a){return a.k.S.Aa};$.listens=$.bg;var Wh=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);y(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);y(20===c.length,"NextPushId: Length should be 20.");
return c}}();function R(a,b){var c,d,e;if(a instanceof zh)c=a,d=b;else{F("new Firebase",1,2,arguments.length);d=rb(arguments[0]);c=d.Ag;"firebase"===d.domain&&qb(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");c||qb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d.Ab||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
c=new Aa(d.host,d.Ab,c,"ws"===d.scheme||"wss"===d.scheme);d=new S(d.Pc);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Pb(c.tb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Ob.test(e)));if(f)throw Error(G("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Th)e=b;else if(p(b))e=Th.Nb(),c.Dd=b;else throw Error("Expected a valid Firebase.Context for second argument to new Firebase()");
else e=Th.Nb();f=c.toString();var g=t(e.ec,f);g||(g=new zh(c),e.ec[f]=g);c=g}Q.call(this,c,d,Fc,!1)}ma(R,Q);var Xh=R,Yh=["Firebase"],Zh=aa;Yh[0]in Zh||!Zh.execScript||Zh.execScript("var "+Yh[0]);for(var $h;Yh.length&&($h=Yh.shift());)!Yh.length&&m(Xh)?Zh[$h]=Xh:Zh=Zh[$h]?Zh[$h]:Zh[$h]={};R.prototype.name=function(){z("Firebase.name() being deprecated. Please use Firebase.key() instead.");F("Firebase.name",0,0,arguments.length);return this.key()};R.prototype.name=R.prototype.name;
R.prototype.key=function(){F("Firebase.key",0,0,arguments.length);return this.path.e()?null:Rc(this.path)};R.prototype.key=R.prototype.key;R.prototype.o=function(a){F("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof S))if(null===I(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Yb("Firebase.child",b)}else Yb("Firebase.child",a);return new R(this.k,this.path.o(a))};R.prototype.child=R.prototype.o;
R.prototype.parent=function(){F("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new R(this.k,a)};R.prototype.parent=R.prototype.parent;R.prototype.root=function(){F("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};R.prototype.root=R.prototype.root;
R.prototype.toString=function(){F("Firebase.toString",0,0,arguments.length);var a;if(null===this.parent())a=this.k.toString();else{a=this.parent().toString()+"/";var b=this.key();a+=encodeURIComponent(String(b))}return a};R.prototype.toString=R.prototype.toString;R.prototype.set=function(a,b){F("Firebase.set",1,2,arguments.length);Zb("Firebase.set",this.path);Rb("Firebase.set",a,!1);H("Firebase.set",2,b,!0);this.k.Bb(this.path,a,null,b||null)};R.prototype.set=R.prototype.set;
R.prototype.update=function(a,b){F("Firebase.update",1,2,arguments.length);Zb("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;z("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Ub("Firebase.update",a);H("Firebase.update",2,b,!0);if(s(a,".priority"))throw Error("update() does not currently support updating .priority.");
this.k.update(this.path,a,b||null)};R.prototype.update=R.prototype.update;R.prototype.Bb=function(a,b,c){F("Firebase.setWithPriority",2,3,arguments.length);Zb("Firebase.setWithPriority",this.path);Rb("Firebase.setWithPriority",a,!1);Vb("Firebase.setWithPriority",2,b);H("Firebase.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object.";this.k.Bb(this.path,a,b,c||null)};R.prototype.setWithPriority=R.prototype.Bb;
R.prototype.remove=function(a){F("Firebase.remove",0,1,arguments.length);Zb("Firebase.remove",this.path);H("Firebase.remove",1,a,!0);this.set(null,a)};R.prototype.remove=R.prototype.remove;
R.prototype.transaction=function(a,b,c){F("Firebase.transaction",1,3,arguments.length);Zb("Firebase.transaction",this.path);H("Firebase.transaction",1,a,!1);H("Firebase.transaction",2,b,!0);if(m(c)&&"boolean"!=typeof c)throw Error(G("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Kh(this.k,this.path,a,b||null,c)};R.prototype.transaction=R.prototype.transaction;
R.prototype.vg=function(a,b){F("Firebase.setPriority",1,2,arguments.length);Zb("Firebase.setPriority",this.path);Vb("Firebase.setPriority",1,a);H("Firebase.setPriority",2,b,!0);this.k.Bb(this.path.o(".priority"),a,null,b)};R.prototype.setPriority=R.prototype.vg;R.prototype.push=function(a,b){F("Firebase.push",0,2,arguments.length);Zb("Firebase.push",this.path);Rb("Firebase.push",a,!0);H("Firebase.push",2,b,!0);var c=Bh(this.k),c=Wh(c),c=this.o(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
R.prototype.push=R.prototype.push;R.prototype.fb=function(){Zb("Firebase.onDisconnect",this.path);return new Z(this.k,this.path)};R.prototype.onDisconnect=R.prototype.fb;R.prototype.Q=function(a,b,c){z("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead.");F("Firebase.auth",1,3,arguments.length);$b("Firebase.auth",a);H("Firebase.auth",2,b,!0);H("Firebase.auth",3,b,!0);Lf(this.k.Q,a,{},{remember:"none"},b,c)};R.prototype.auth=R.prototype.Q;
R.prototype.Ue=function(a){F("Firebase.unauth",0,1,arguments.length);H("Firebase.unauth",1,a,!0);Mf(this.k.Q,a)};R.prototype.unauth=R.prototype.Ue;R.prototype.ne=function(){F("Firebase.getAuth",0,0,arguments.length);return this.k.Q.ne()};R.prototype.getAuth=R.prototype.ne;R.prototype.fg=function(a,b){F("Firebase.onAuth",1,2,arguments.length);H("Firebase.onAuth",1,a,!1);Mb("Firebase.onAuth",2,b);this.k.Q.vb("auth_status",a,b)};R.prototype.onAuth=R.prototype.fg;
R.prototype.eg=function(a,b){F("Firebase.offAuth",1,2,arguments.length);H("Firebase.offAuth",1,a,!1);Mb("Firebase.offAuth",2,b);this.k.Q.Zb("auth_status",a,b)};R.prototype.offAuth=R.prototype.eg;R.prototype.Hf=function(a,b,c){F("Firebase.authWithCustomToken",2,3,arguments.length);$b("Firebase.authWithCustomToken",a);H("Firebase.authWithCustomToken",2,b,!1);J("Firebase.authWithCustomToken",3,c,!0);Lf(this.k.Q,a,{},c||{},b)};R.prototype.authWithCustomToken=R.prototype.Hf;
R.prototype.If=function(a,b,c){F("Firebase.authWithOAuthPopup",2,3,arguments.length);ac("Firebase.authWithOAuthPopup",1,a);H("Firebase.authWithOAuthPopup",2,b,!1);J("Firebase.authWithOAuthPopup",3,c,!0);Qf(this.k.Q,a,c,b)};R.prototype.authWithOAuthPopup=R.prototype.If;
R.prototype.Jf=function(a,b,c){F("Firebase.authWithOAuthRedirect",2,3,arguments.length);ac("Firebase.authWithOAuthRedirect",1,a);H("Firebase.authWithOAuthRedirect",2,b,!1);J("Firebase.authWithOAuthRedirect",3,c,!0);var d=this.k.Q;Of(d);var e=[Ef],f=mf(c);"anonymous"===a||"firebase"===a?B(b,X("TRANSPORT_UNAVAILABLE")):(v.set("redirect_client_options",f.cd),Pf(d,e,"/auth/"+a,f,b))};R.prototype.authWithOAuthRedirect=R.prototype.Jf;
R.prototype.Kf=function(a,b,c,d){F("Firebase.authWithOAuthToken",3,4,arguments.length);ac("Firebase.authWithOAuthToken",1,a);H("Firebase.authWithOAuthToken",3,c,!1);J("Firebase.authWithOAuthToken",4,d,!0);p(b)?(ac("Firebase.authWithOAuthToken",2,b),Nf(this.k.Q,a+"/token",{access_token:b},d,c)):(J("Firebase.authWithOAuthToken",2,b,!1),Nf(this.k.Q,a+"/token",b,d,c))};R.prototype.authWithOAuthToken=R.prototype.Kf;
R.prototype.Gf=function(a,b){F("Firebase.authAnonymously",1,2,arguments.length);H("Firebase.authAnonymously",1,a,!1);J("Firebase.authAnonymously",2,b,!0);Nf(this.k.Q,"anonymous",{},b,a)};R.prototype.authAnonymously=R.prototype.Gf;
R.prototype.Lf=function(a,b,c){F("Firebase.authWithPassword",2,3,arguments.length);J("Firebase.authWithPassword",1,a,!1);K("Firebase.authWithPassword",a,"email");K("Firebase.authWithPassword",a,"password");H("Firebase.authAnonymously",2,b,!1);J("Firebase.authAnonymously",3,c,!0);Nf(this.k.Q,"password",a,c,b)};R.prototype.authWithPassword=R.prototype.Lf;
R.prototype.je=function(a,b){F("Firebase.createUser",2,2,arguments.length);J("Firebase.createUser",1,a,!1);K("Firebase.createUser",a,"email");K("Firebase.createUser",a,"password");H("Firebase.createUser",2,b,!1);this.k.Q.je(a,b)};R.prototype.createUser=R.prototype.je;R.prototype.Le=function(a,b){F("Firebase.removeUser",2,2,arguments.length);J("Firebase.removeUser",1,a,!1);K("Firebase.removeUser",a,"email");K("Firebase.removeUser",a,"password");H("Firebase.removeUser",2,b,!1);this.k.Q.Le(a,b)};
R.prototype.removeUser=R.prototype.Le;R.prototype.ee=function(a,b){F("Firebase.changePassword",2,2,arguments.length);J("Firebase.changePassword",1,a,!1);K("Firebase.changePassword",a,"email");K("Firebase.changePassword",a,"oldPassword");K("Firebase.changePassword",a,"newPassword");H("Firebase.changePassword",2,b,!1);this.k.Q.ee(a,b)};R.prototype.changePassword=R.prototype.ee;
R.prototype.de=function(a,b){F("Firebase.changeEmail",2,2,arguments.length);J("Firebase.changeEmail",1,a,!1);K("Firebase.changeEmail",a,"oldEmail");K("Firebase.changeEmail",a,"newEmail");K("Firebase.changeEmail",a,"password");H("Firebase.changeEmail",2,b,!1);this.k.Q.de(a,b)};R.prototype.changeEmail=R.prototype.de;
R.prototype.Me=function(a,b){F("Firebase.resetPassword",2,2,arguments.length);J("Firebase.resetPassword",1,a,!1);K("Firebase.resetPassword",a,"email");H("Firebase.resetPassword",2,b,!1);this.k.Q.Me(a,b)};R.prototype.resetPassword=R.prototype.Me;R.goOffline=function(){F("Firebase.goOffline",0,0,arguments.length);Th.Nb().pb()};R.goOnline=function(){F("Firebase.goOnline",0,0,arguments.length);Th.Nb().hc()};
function nb(a,b){y(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?lb=q(console.log,console):"object"===typeof console.log&&(lb=function(a){console.log(a)})),b&&v.set("logging_enabled",!0)):a?lb=a:(lb=null,v.remove("logging_enabled"))}R.enableLogging=nb;R.ServerValue={TIMESTAMP:{".sv":"timestamp"}};R.SDK_VERSION="2.1.2";R.INTERNAL=Y;R.Context=Th;R.TEST_ACCESS=$;})();

define("firebase", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Firebase;
    };
}(this)));

define('service/data',["firebase"], function (Firebase) {
	return {
		"getReference": function (reference) {
			var rootRef = new window.Firebase(reference);

			return rootRef;
		},
		"set": function (rootRef, data) {
			var uniqueIDPostRef = rootRef.push();

			uniqueIDPostRef.set(data);

			return uniqueIDPostRef.key();
		},
		"serializeToObject": function (form) {
			var serializedObject = {},
				serializedArray = $(form).serializeArray(),
				index = serializedArray.length - 1,
				name = null,
				value = null,
				formField = null;

			for (; index >= 0; index--) {
				formField = serializedArray[index];

				if (formField.hasOwnProperty("name") && formField.hasOwnProperty("value")) {
					name = formField.name;
					value = formField.value;

					serializedObject[name] = value;
				}
				
			}

			return serializedObject;
		}
	};
});
define('module/submitRegistration',["service/data"], function (dataService) {
	var publicMembers = {
		"bindEvents": function (settings) {
			$(document).on("submit", settings.scope, publicMembers.foo);
		},
		"foo": function(event) {
			event.preventDefault();

			var form = event.target,
				serializedForm = dataService.serializeToObject(form),
				noSQLDBReference = dataService.getReference("https://shining-heat-3928.firebaseio.com/oxroast/registration/2016");
				databaseKey = dataService.set(noSQLDBReference, serializedForm);

			//Need to do an ajax post here with the JSON data stringfied
		}
	};

	return publicMembers;
});
define('section/registrationForm',['module/submitRegistration'], function(submitRegistration) {
	"use strict";

	var privateMembers = {
		"GLOBAL_SCOPE": ""
	};

	return function(settings) {
		privateMembers.GLOBAL_SCOPE = settings.scope;

		return {
			"init": function () {
				var settings = {
					"scope": privateMembers.GLOBAL_SCOPE
				};
				
				//calls bindEvents for all modules
				submitRegistration.bindEvents(settings);
				
				//addes listeners for all modules
			},
			"loadContent": function () {
				//ajax content
			},
			"subscribe": function () {
				//listens for a message to call load content
			}
		};
	};
});
define('page/registration',['section/userInfo', 'section/guestInfo', 'section/registrationForm'], function (userInfo, guestInfo, registrationForm) {
	"use strict";

	var publicMembers = {
		"init": function () {
			$(document).on("document:ready", publicMembers.startSections);
		},
		"startSections": function () {
			var userInfoSection = userInfo({
					"scope": "#generalInfo"
				}),
				guestInfoSection = guestInfo({
					"scope": "#guests"
				}),
				registrationFormSection = registrationForm({
					"scope": "#registration-form"
				});

			userInfoSection.init();
			userInfoSection.subscribe();

			guestInfoSection.init();
			guestInfoSection.subscribe();

			registrationFormSection.init();
			registrationFormSection.subscribe();

			if (parseInt($("#total").text()) === 0) {
				$("form")[0].reset();
				$("#guestList").val("{\"guest\": []}");
			}

			//Fix for IE 9 and lower so placeholders show up.
			$("form input").focus();
			window.scrollTo(0, 0);
		}
	};

	return publicMembers;
});
require(['page/registration'], function (registration) {
	"use strict";

	registration.init();
});
define("js/registration", function(){});

