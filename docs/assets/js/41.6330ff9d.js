(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{393:function(t,n,e){"use strict";e.r(n);var r={name:"docs-demo-six-alert-6",mounted(){(()=>{const t=document.querySelector(".alert-toast-wrapper").querySelector("six-button");let n=0;function e(t){const n=document.createElement("div");return n.textContent=t,n.innerHTML}t.addEventListener("click",()=>{const t=Math.round(5*Math.random(0,1))+1;!function(t,n="primary",r="info",s=3e3){const i=Object.assign(document.createElement("six-alert"),{type:n,closable:!0,duration:s,innerHTML:`\n                    <six-icon slot="icon">${r}</six-icon>\n                    ${e(t)}`});document.body.append(i),i.toast()}("This is custom toast #"+ ++n,["primary","success","info","warning","danger"][t])})})()}},s=e(10),i=Object(s.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"demo my-app"},[t("div",{staticClass:"alert-toast-wrapper"},[t("six-button",{attrs:{type:"primary"}},[this._v("Create Toast")])],1),this._v(" "),t("style",[this._v("\r\n          .six-toast-stack {\r\n            position: fixed;\r\n            top: 0;\r\n            right: 0;\r\n            z-index: var(--six-z-index-toast);\r\n            width: 28rem;\r\n            max-width: 100%;\r\n            max-height: 100%;\r\n            overflow: auto;\r\n          }\r\n\r\n          six-alert {\r\n            box-shadow: var(--six-shadow-large);\r\n            margin: var(--six-spacing-medium);\r\n          }\r\n        ")])])}),[],!1,null,null,null);n.default=i.exports}}]);