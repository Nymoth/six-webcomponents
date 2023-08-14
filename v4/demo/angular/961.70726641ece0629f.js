"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[961],{961:(w,b,a)=>{a.r(b),a.d(b,{six_sidebar:()=>f});var d=a(4795),l=a(8708),m=a(6238);const v=i=>{var s;return"six-sidebar-item-group"===(null===(s=i?.tagName)||void 0===s?void 0:s.toLowerCase())},f=class{constructor(i){(0,l.r)(this,i),this.sixShow=(0,l.c)(this,"six-sidebar-show",7),this.sixAfterShow=(0,l.c)(this,"six-sidebar-after-show",7),this.sixHide=(0,l.c)(this,"six-sidebar-hide",7),this.sixAfterHide=(0,l.c)(this,"six-sidebar-after-hide",7),this.sixInitialFocus=(0,l.c)(this,"six-sidebar-initial-focus",7),this.willShow=!1,this.willHide=!1,this.handleTransitionEnd=s=>{"transitionend"===s.type&&s.target.classList.contains("sidebar__container")&&this.resetTransitionVariables()},this.closeSiblingDetailsOnShow=s=>{const t=s.target;null!=this.sidebar&&(0,m.s)(t,this.sidebar);const r=e=>{var n;let o=t;for(;null!=e(o);)if(o=e(o),v(o)){const h=null===(n=o?.shadowRoot)||void 0===n?void 0:n.querySelector("six-details");null!=h&&(h.open=!1)}};r(e=>e?.previousElementSibling),r(e=>e?.nextElementSibling)},this.isVisible=!1,this.position="left",this.open=!1,this.width="16rem",this.toggled=!1}handleOpenChange(){this.open?this.show():this.hide()}componentWillLoad(){this.open&&(this.show(),this.resetTransitionVariables())}componentDidRender(){this.setupTogglableMenuItems()}disconnectedCallback(){var i;null===(i=this.sidebar)||void 0===i||i.removeEventListener("six-details-show",this.closeSiblingDetailsOnShow)}setupTogglableMenuItems(){!this.toggled||null==this.sidebar||(this.markAllMenuItemsAsSelectableEmpty(),this.sidebar.addEventListener("six-details-show",this.closeSiblingDetailsOnShow))}markAllMenuItemsAsSelectableEmpty(){var i;const t=(null===(i=this.sidebar)||void 0===i?void 0:i.querySelector("slot"))?.assignedElements()||[],r=[];for(;t.length>0;){const e=t.pop();if(null==e?.shadowRoot)continue;const n=e.shadowRoot.querySelectorAll("six-details");r.push(...n);const o=Array.from(e.children).filter(v);t.push(...o)}r.forEach(e=>e.selectableEmpty=!0)}toggle(){var i=this;return(0,d.Z)(function*(){i.willShow||i.willHide||(i.open?yield i.hide():yield i.show())})()}show(){var i=this;return(0,d.Z)(function*(){i.willShow||(i.sixShow.emit().defaultPrevented?i.open=!1:(i.willShow=!0,i.isVisible=!0,i.open=!0))})()}hide(){var i=this;return(0,d.Z)(function*(){i.willHide||(i.sixHide.emit().defaultPrevented?i.open=!0:(i.willHide=!0,i.open=!1))})()}selectItemByIndex(i){var s=this;return(0,d.Z)(function*(){if(null==s.sidebar)return;const r=(s.sidebar.querySelector("slot")?.assignedElements()||[]).flatMap(e=>{var n;const o=null===(n=e.shadowRoot)||void 0===n?void 0:n.querySelector("six-details");return null==o?[]:[o]});i<0||i>r.length-1?console.error(`Tried to access sidebar menu item by index, but provided index out of range. Provided index: ${i}`):yield r[i].show()})()}selectItemByName(i){var s=this;return(0,d.Z)(function*(){var t,r,e;const o=(null===(t=s.sidebar)||void 0===t?void 0:t.querySelector("slot"))?.assignedElements();if(null==o)return;const h=o.findIndex(c=>c?.name===i),u=null===(e=null===(r=o.at(h))||void 0===r?void 0:r.shadowRoot)||void 0===e?void 0:e.querySelector("six-details");yield u?.show()})()}resetTransitionVariables(){this.isVisible=this.open,this.willShow=!1,this.willHide=!1,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit()}render(){return(0,l.h)("host",{class:"six-sidebar"},(0,l.h)("div",{class:{sidebar__container:!0,"sidebar--visible":this.isVisible,"sidebar--open":this.open,"sidebar--left":"left"===this.position,"sidebar--right":"right"===this.position},style:{width:this.width,[`margin-${this.position}`]:this.open?"0":`calc(1rem - ${this.width})`},ref:i=>this.sidebar=i,"aria-hidden":this.open?"false":"true",onTransitionEnd:this.handleTransitionEnd},(0,l.h)("slot",null)))}static get watchers(){return{open:["handleOpenChange"]}}};f.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;height:100%}.sidebar__container{height:100%;overflow:auto}.sidebar__container.sidebar--open{box-shadow:var(--six-elevation-1dp)}.sidebar__container:not(.sidebar--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.sidebar--left{color:var(--six-sidebar-color);background-color:var(--six-sidebar-background-color);transition:var(--six-transition-medium) margin-left;background-size:300vw 70%;background-position:bottom;background-repeat:no-repeat}.sidebar--right{transition:var(--six-transition-medium) margin-right}.sidebar--open.sidebar--left{margin-right:2px}.sidebar--open.sidebar--right{margin-left:2px}"}}]);