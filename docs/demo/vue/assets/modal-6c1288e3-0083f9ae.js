let s=[];class c{constructor(t,e){this.element=t,this.options=e,this.handleFocusIn=this.handleFocusIn.bind(this)}activate(){s.push(this.element),document.addEventListener("focusin",this.handleFocusIn)}deactivate(){s=s.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn)}isActive(){return s[s.length-1]===this.element}handleFocusIn(t){var e,n;const i=t.target,o=this.element.tagName.toLowerCase();this.isActive()&&i.closest(o)!==this.element&&typeof((e=this.options)===null||e===void 0?void 0:e.onFocusOut)=="function"&&((n=this.options)===null||n===void 0||n.onFocusOut(t))}}export{c as M};