!function(){"use strict";var t,e={321:function(){var t=window.wp.i18n,e=window.wp.blocks,r=window.wp.element,n=window.wp.blockEditor;(0,e.registerBlockType)("plugin-vertaal-test/simple-text",{apiVersion:2,title:(0,t.__)("Just a simple text","plugin-vertaal-test"),icon:{src:"button",background:"#47dba4",foreground:"#ffffff"},description:(0,t.__)("Very simple text","plugin-vertaal-test"),keywords:[(0,t.__)("Simple text","plugin-vertaal-test")],attributes:{text:{type:"string",default:(0,t.__)("Some simple text","plugin-vertaal-test")}},supports:{html:!0,className:!1,color:{background:!1,gradients:!1,text:!1}},edit:function(e){const{attributes:i,setAttributes:s}=e,{text:o}=i;return(0,r.createElement)("div",{...(0,n.useBlockProps)({className:"simple-text"})},(0,t.__)("Put some simple text here","plugin-vertaal-test"))},save:function({attributes:e}){const{text:i}=e;return(0,r.createElement)("div",{...n.useBlockProps.save({className:"simple-text"})},(0,t.__)("Put some simple text here","plugin-vertaal-test"))}})}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.m=e,t=[],n.O=function(e,r,i,s){if(!r){var o=1/0;for(p=0;p<t.length;p++){r=t[p][0],i=t[p][1],s=t[p][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](r[l])}))?r.splice(l--,1):(a=!1,s<o&&(o=s));if(a){t.splice(p--,1);var u=i();void 0!==u&&(e=u)}}return e}s=s||0;for(var p=t.length;p>0&&t[p-1][2]>s;p--)t[p]=t[p-1];t[p]=[r,i,s]},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={826:0,431:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,s,o=r[0],a=r[1],l=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var p=l(n)}for(e&&e(r);u<o.length;u++)s=o[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(p)},r=self.webpackChunkplugin_vertaal_test=self.webpackChunkplugin_vertaal_test||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var i=n.O(void 0,[431],(function(){return n(321)}));i=n.O(i)}();