(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{412:function(t,n,s){"use strict";s.r(n),s.d(n,"six_layout_grid",(function(){return o}));var e=s(91);let o=class{constructor(t){Object(e.i)(this,t)}handleColumnsChange(){const t=this.columns?this.columns:12;this.host.style.setProperty("--no-of-columns",String(t))}componentWillLoad(){this.handleColumnsChange()}render(){return Object(e.g)(e.b,null,Object(e.g)("slot",null))}get host(){return Object(e.f)(this)}static get watchers(){return{columns:["handleColumnsChange"]}}};o.style=":host{display:grid;grid-template-columns:repeat(var(--no-of-columns), 1fr);grid-column-gap:1rem}"}}]);