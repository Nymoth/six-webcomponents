function u(e){const t=e!=null?e.assignedNodes({flatten:!0}):[];let r="";return[...t].map(n=>{n.nodeType===Node.TEXT_NODE&&(r+=n.textContent)}),r}function o(e,t){return t!=null&&t!==""?e.querySelector(`[slot="${t}"]`)!==null:Array.from(e.childNodes).some(r=>{var n;return r.nodeType===r.TEXT_NODE&&((n=r.textContent)===null||n===void 0?void 0:n.trim())!==""||r.nodeType===r.ELEMENT_NODE&&!r.hasAttribute("slot")})}const s=e=>{var t;return(t=e.querySelector("slot"))===null||t===void 0?void 0:t.assignedElements({flatten:!0})};function i(e,t){return e==null?null:e.querySelector(`[slot="${t}"]`)}export{u as a,s as b,i as g,o as h};
