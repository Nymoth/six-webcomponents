(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{426:function(i,e,t){"use strict";t.r(e),t.d(e,"six_sidebar",(function(){return r}));t(216);var s=t(91),o=t(443);const n=i=>"six-sidebar-item-group"===i.tagName.toLowerCase();let r=class{constructor(i){Object(s.i)(this,i),this.sixShow=Object(s.e)(this,"six-sidebar-show",7),this.sixAfterShow=Object(s.e)(this,"six-sidebar-after-show",7),this.sixHide=Object(s.e)(this,"six-sidebar-hide",7),this.sixAfterHide=Object(s.e)(this,"six-sidebar-after-hide",7),this.sixInitialFocus=Object(s.e)(this,"six-sidebar-initial-focus",7),this.willShow=!1,this.willHide=!1,this.isVisible=!1,this.position="left",this.open=!1,this.width="16rem",this.toggled=!1,this.handleTransitionEnd=i=>{const e=i.target;"transitionend"===i.type&&e.classList.contains("sidebar__container")&&this.resetTransitionVariables()},this.closeSiblingDetailsOnShow=i=>{const e=i.target;Object(o.c)(e,this.sidebar);const t=i=>{let t=e;for(;null!==i(t);)t=i(t),n(t)&&(t.shadowRoot.querySelector("six-details").open=!1)};t(i=>i.previousElementSibling),t(i=>i.nextElementSibling)}}handleOpenChange(){this.open?this.show():this.hide()}componentWillLoad(){this.open&&(this.show(),this.resetTransitionVariables())}componentDidRender(){this.setupTogglableMenuItems()}disconnectedCallback(){this.sidebar.removeEventListener("six-details-show",this.closeSiblingDetailsOnShow)}setupTogglableMenuItems(){this.toggled&&(this.markAllMenuItemsAsSelectableEmpty(),this.sidebar.addEventListener("six-details-show",this.closeSiblingDetailsOnShow))}markAllMenuItemsAsSelectableEmpty(){const i=this.sidebar.querySelector("slot").assignedElements(),e=[];for(;i.length>0;){const t=i.pop(),s=t.shadowRoot.querySelectorAll("six-details");e.push(...s);const o=Array.from(t.children).filter(n);i.push(...o)}e.forEach(i=>i.selectableEmpty=!0)}async toggle(){this.willShow||this.willHide||(this.open?await this.hide():await this.show())}async show(){if(this.willShow)return;this.sixShow.emit().defaultPrevented?this.open=!1:(this.willShow=!0,this.isVisible=!0,this.open=!0)}async hide(){if(this.willHide)return;this.sixHide.emit().defaultPrevented?this.open=!0:(this.willHide=!0,this.open=!1)}async selectItemByIndex(i){const e=this.sidebar.querySelector("slot").assignedElements().map(i=>i.shadowRoot.querySelector("six-details"));i<0||i>e.length-1?console.error("Tried to access sidebar menu item by index, but provided index out of range. Provided index: "+i):await e[i].show()}async selectItemByName(i){const e=this.sidebar.querySelector("slot").assignedElements(),t=e.findIndex(e=>(null==e?void 0:e.name)===i),s=e[t].shadowRoot.querySelector("six-details");await s.show()}resetTransitionVariables(){this.isVisible=this.open,this.willShow=!1,this.willHide=!1,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit()}render(){return Object(s.g)("host",{class:"six-sidebar"},Object(s.g)("div",{class:{sidebar__container:!0,"sidebar--visible":this.isVisible,"sidebar--open":this.open,"sidebar--left":"left"===this.position,"sidebar--right":"right"===this.position},style:{width:this.width,["margin-"+this.position]:this.open?"0":`calc(1rem - ${this.width})`},ref:i=>this.sidebar=i,"aria-hidden":this.open?"false":"true",onTransitionEnd:this.handleTransitionEnd},Object(s.g)("slot",null)))}static get watchers(){return{open:["handleOpenChange"]}}};r.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block;height:100%}.sidebar__container{height:100%;overflow:auto}.sidebar__container.sidebar--open{box-shadow:var(--six-elevation-1dp)}.sidebar__container:not(.sidebar--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.sidebar--left{color:var(--six-sidebar-color);background-color:var(--six-sidebar-background-color);transition:var(--six-transition-medium) margin-left;background-size:300vw 70%;background-position:bottom;background-repeat:no-repeat}.sidebar--right{transition:var(--six-transition-medium) margin-right}.sidebar--open.sidebar--left{margin-right:2px}.sidebar--open.sidebar--right{margin-left:2px}"},443:function(i,e,t){"use strict";function s(i,e){return{top:Math.round(i.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(i.getBoundingClientRect().left-e.getBoundingClientRect().left)}}t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return l})),t.d(e,"d",(function(){return r}));const o=new Set;function n(i){o.add(i),document.body.classList.add("six-scroll-lock")}function r(i){o.delete(i),0===o.size&&document.body.classList.remove("six-scroll-lock")}function l(i,e,t="vertical",o="smooth"){const n=s(i,e),r=n.top+e.scrollTop,l=n.left+e.scrollLeft,a=e.scrollLeft,h=e.scrollLeft+e.offsetWidth,d=e.scrollTop,c=e.scrollTop+e.offsetHeight;"horizontal"!==t&&"both"!==t||(l<a?e.scrollTo({left:l,behavior:o}):l+i.clientWidth>h&&e.scrollTo({left:l-e.offsetWidth+i.clientWidth,behavior:o})),"vertical"!==t&&"both"!==t||(r<d?e.scrollTo({top:r,behavior:o}):r+i.clientHeight>c&&e.scrollTo({top:r-e.offsetHeight+i.clientHeight,behavior:o}))}}}]);