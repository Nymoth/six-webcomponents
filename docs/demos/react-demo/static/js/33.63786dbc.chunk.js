(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[33],{49:function(e,t,i){"use strict";i.r(t),i.d(t,"six_alert",(function(){return h}));var r=i(6),s=i.n(r),a=i(10),n=i(14),o=i(15),l=i(21),c=Object.assign(document.createElement("div"),{className:"six-toast-stack"}),h=function(){function e(t){Object(n.a)(this,e),Object(l.i)(this,t),this.sixShow=Object(l.e)(this,"six-alert-show",7),this.sixAfterShow=Object(l.e)(this,"six-alert-after-show",7),this.sixHide=Object(l.e)(this,"six-alert-hide",7),this.sixAfterHide=Object(l.e)(this,"six-alert-after-hide",7),this.isVisible=!1,this.open=!1,this.closable=!1,this.type="primary",this.duration=1/0}return Object(o.a)(e,[{key:"handleOpenChange",value:function(){this.open?this.show():this.hide()}},{key:"handleDurationChange",value:function(){this.restartAutoHide()}},{key:"connectedCallback",value:function(){this.handleCloseClick=this.handleCloseClick.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleTransitionEnd=this.handleTransitionEnd.bind(this)}},{key:"componentWillLoad",value:function(){this.open&&this.show()}},{key:"show",value:function(){var e=Object(a.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isVisible){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixShow.emit().defaultPrevented){e.next=6;break}return this.open=!1,e.abrupt("return");case 6:this.isVisible=!0,this.open=!0,this.duration<1/0&&(this.autoHideTimeout=setTimeout((function(){return t.hide()}),this.duration));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hide",value:function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.isVisible){e.next=2;break}return e.abrupt("return");case 2:if(!this.sixHide.emit().defaultPrevented){e.next=6;break}return this.open=!0,e.abrupt("return");case 6:clearTimeout(this.autoHideTimeout),this.isVisible=!1,this.open=!1;case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toast",value:function(){var e=Object(a.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){c.parentElement||document.body.append(c),c.append(t.host),requestAnimationFrame((function(){return t.show()})),t.host.addEventListener("six-alert-after-hide",(function(){t.host.remove(),e(),null===c.querySelector("six-alert")&&c.remove()}),{once:!0})})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleCloseClick",value:function(){this.hide()}},{key:"handleMouseMove",value:function(){this.restartAutoHide()}},{key:"handleTransitionEnd",value:function(e){var t=e.target;"opacity"===e.propertyName&&t.classList.contains("alert")&&(this.isVisible=this.open,this.open?this.sixAfterShow.emit():this.sixAfterHide.emit())}},{key:"restartAutoHide",value:function(){var e=this;clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=setTimeout((function(){return e.hide()}),this.duration))}},{key:"render",value:function(){var e=this;return Object(l.g)("div",{ref:function(t){return e.alert=t},part:"base",class:{alert:!0,"alert--open":this.open,"alert--visible":this.isVisible,"alert--closable":this.closable,"alert--primary":"primary"===this.type,"alert--success":"success"===this.type,"alert--info":"info"===this.type,"alert--warning":"warning"===this.type,"alert--danger":"danger"===this.type},role:"alert","aria-live":"assertive","aria-atomic":"true","aria-hidden":this.open?"false":"true",onMouseMove:this.handleMouseMove,onTransitionEnd:this.handleTransitionEnd},Object(l.g)("span",{part:"icon",class:"alert__icon"},Object(l.g)("slot",{name:"icon"})),Object(l.g)("span",{part:"message",class:"alert__message"},Object(l.g)("slot",null)),this.closable&&Object(l.g)("span",{class:"alert__close"},Object(l.g)("six-icon-button",{name:"clear",exportparts:"base:close-button",onClick:this.handleCloseClick})))}},{key:"host",get:function(){return Object(l.f)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"],duration:["handleDurationChange"]}}}]),e}();h.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:contents;margin:0}.alert{position:relative;display:flex;align-items:stretch;background-color:var(--six-color-white);border:solid 1px var(--six-color-web-rock-200);border-top-width:3px;border-radius:var(--six-border-radius-medium);box-shadow:var(--box-shadow);font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);line-height:1.6;color:var(--six-color-web-rock-700);opacity:0;transform:scale(0.9);transition:var(--six-transition-medium) opacity ease, var(--six-transition-medium) transform ease;margin:inherit}.alert:not(.alert--visible){position:absolute;width:1px;height:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;pointer-events:none;visibility:hidden}.alert--open{opacity:1;transform:none}.alert__icon{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-large)}.alert__icon ::slotted(*){margin-left:var(--six-spacing-large)}.alert--primary{border-top-color:var(--six-color-web-rock-900)}.alert--primary .alert__icon{color:var(--six-color-web-rock-900)}.alert--success{border-top-color:var(--six-color-success-600)}.alert--success .alert__icon{color:var(--six-color-success-600)}.alert--info{border-top-color:var(--six-color-action-500)}.alert--info .alert__icon{color:var(--six-color-action-500)}.alert--warning{border-top-color:var(--six-color-warning-800)}.alert--warning .alert__icon{color:var(--six-color-warning-800)}.alert--danger{border-top-color:var(--six-color-danger-900)}.alert--danger .alert__icon{color:var(--six-color-danger-900)}.alert__message{flex:1 1 auto;padding:var(--six-spacing-large);overflow:hidden}.alert__close{flex:0 0 auto;display:flex;align-items:center;font-size:var(--six-font-size-large);padding-right:var(--six-spacing-medium)}"}}]);
//# sourceMappingURL=33.63786dbc.chunk.js.map