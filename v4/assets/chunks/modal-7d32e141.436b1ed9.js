const l=()=>{let n=!1;const t=document.createElement("div");return t.focus&&t.focus({get preventScroll(){return n=!0,!1}}),n};let s=[];class a{constructor(t,e){this.element=t,this.options=e,this.handleFocusIn=this.handleFocusIn.bind(this)}activate(){s.push(this.element),document.addEventListener("focusin",this.handleFocusIn)}deactivate(){s=s.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn)}isActive(){return s[s.length-1]===this.element}handleFocusIn(t){var e,o;const i=t.target,c=this.element.tagName.toLowerCase();this.isActive()&&i.closest(c)!==this.element&&typeof((e=this.options)===null||e===void 0?void 0:e.onFocusOut)=="function"&&((o=this.options)===null||o===void 0||o.onFocusOut(t))}}export{a as M,l as i};