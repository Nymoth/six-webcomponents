(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{866:function(a,e,s){"use strict";s.r(e);var l={name:"docs-demo-six-tab-group-276",mounted(){const a=document.querySelector(".tabs-closable");a.addEventListener("six-close",async e=>{const s=e.target,l=a.querySelector(`six-tab-panel[name="${s.panel}"]`);s.active&&a.show(s.previousElementSibling.panel),s.remove(),l.remove()})}},t=s(38),n=Object(t.a)(l,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"demo my-app"},[e("six-tab-group",{staticClass:"tabs-closable"},[e("six-tab",{attrs:{slot:"nav",panel:"general"},slot:"nav"},[a._v("General")]),a._v(" "),e("six-tab",{attrs:{slot:"nav",panel:"closable-1",closable:""},slot:"nav"},[a._v("Closable 1")]),a._v(" "),e("six-tab",{attrs:{slot:"nav",panel:"closable-2",closable:""},slot:"nav"},[a._v("Closable 2")]),a._v(" "),e("six-tab",{attrs:{slot:"nav",panel:"closable-3",closable:""},slot:"nav"},[a._v("Closable 3")]),a._v(" "),e("six-tab-panel",{attrs:{name:"general"}},[a._v("This is the general tab panel.")]),a._v(" "),e("six-tab-panel",{attrs:{name:"closable-1"}},[a._v("This is the first closable tab panel.")]),a._v(" "),e("six-tab-panel",{attrs:{name:"closable-2"}},[a._v("This is the second closable tab panel.")]),a._v(" "),e("six-tab-panel",{attrs:{name:"closable-3"}},[a._v("This is the third closable tab panel.")])],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);