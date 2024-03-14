"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[9039],{9039:(d,r,e)=>{e.r(r),e.d(r,{six_tooltip:()=>n});var a=e(5861),i=e(1272),p=e(4681);let h=0;const n=class{constructor(t){(0,i.r)(this,t),this.sixShow=(0,i.c)(this,"six-tooltip-show",7),this.sixAfterShow=(0,i.c)(this,"six-tooltip-after-show",7),this.sixHide=(0,i.c)(this,"six-tooltip-hide",7),this.sixAfterHide=(0,i.c)(this,"six-tooltip-after-hide",7),this.componentId="tooltip-"+ ++h,this.isVisible=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=o=>{this.open&&"Escape"===o.key&&(o.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger("hover")&&this.show()},this.handleMouseOut=()=>{this.hasTrigger("hover")&&this.hide()},this.handleSlotChange=()=>{const o=this.target,s=this.getTarget();s!==o&&(o?.removeAttribute("aria-describedby"),s.setAttribute("aria-describedby",this.componentId))},this.content="",this.placement="top",this.disabled=!1,this.distance=10,this.open=!1,this.skidding=0,this.trigger="hover focus"}handleOpenChange(){this.open?this.show():this.hide()}componentDidLoad(){null!=this.tooltipPositioner&&(this.target=this.getTarget(),this.popover=new p.P(this.target,this.tooltipPositioner,{strategy:"fixed"}),this.syncOptions(),this.host.addEventListener("blur",this.handleBlur,!0),this.host.addEventListener("click",this.handleClick,!0),this.host.addEventListener("focus",this.handleFocus,!0),this.tooltipPositioner.hidden=!this.open,this.open&&this.show())}componentDidUpdate(){this.syncOptions()}disconnectedCallback(){null!=this.popover&&this.popover.destroy(),this.host.removeEventListener("blur",this.handleBlur,!0),this.host.removeEventListener("click",this.handleClick,!0),this.host.removeEventListener("focus",this.handleFocus,!0)}show(){var t=this;return(0,a.Z)(function*(){var o;t.isVisible||t.disabled||(t.sixShow.emit().defaultPrevented?t.open=!1:(t.isVisible=!0,t.open=!0,null===(o=t.popover)||void 0===o||o.show()))})()}hide(){var t=this;return(0,a.Z)(function*(){var o;t.isVisible&&!t.disabled&&(t.sixHide.emit().defaultPrevented?t.open=!0:(t.isVisible=!1,t.open=!1,null===(o=t.popover)||void 0===o||o.hide()))})()}getTarget(){const t=[...this.host.children].find(o=>"style"!==o.tagName.toLowerCase()&&"content"!==o.getAttribute("slot"));if(null==t)throw new Error("Invalid tooltip target: no child element was found.");return t}hasTrigger(t){return this.trigger.split(" ").includes(t)}syncOptions(){null!=this.popover&&this.popover.setOptions({placement:this.placement,distance:this.distance,skidding:this.skidding,transitionElement:this.tooltip,onAfterHide:()=>this.sixAfterHide.emit(),onAfterShow:()=>this.sixAfterShow.emit()})}render(){return(0,i.h)(i.H,{key:"41afb0551e5034f5020688a714e691c40fa1f2b1",onKeyDown:this.handleKeyDown,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},(0,i.h)("slot",{key:"180b881497bb1e2ebab7a64301fce87bf8a3e55c",onSlotchange:this.handleSlotChange}),(0,i.h)("div",{key:"9310cdb7a4a7523489823310b37ba1cb360abc06",ref:t=>this.tooltipPositioner=t,class:"tooltip-positioner"},(0,i.h)("div",{key:"6006bd344ca13ea6d8afd7e5f36c5672ca943029",part:"base",ref:t=>this.tooltip=t,id:this.componentId,class:{tooltip:!0,"tooltip--open":this.open},role:"tooltip","aria-hidden":this.open?"false":"true"},(0,i.h)("slot",{key:"f9883f48ae9ba2957a033f906f1a797a1d66a9d6",name:"content"},this.content))))}get host(){return(0,i.g)(this)}static get watchers(){return{open:["handleOpenChange"]}}};n.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--max-width:20rem;--hide-delay:0s;--hide-duration:0.125s;--hide-timing-function:ease;--show-delay:0.125s;--show-duration:0.125s;--show-timing-function:ease;display:contents}.tooltip-positioner{position:fixed;z-index:var(--six-z-index-tooltip);pointer-events:none}.tooltip{max-width:var(--max-width);border-radius:var(--six-border-radius-medium);background-color:var(--six-tooltip-background-color);font-family:var(--six-font-family);font-size:var(--six-tooltip-font-size);font-weight:var(--six-tooltip-font-weight);line-height:var(--six-tooltip-line-height);color:var(--six-tooltip-color);opacity:0;padding:var(--six-spacing-xxx-small) var(--six-spacing-x-small);transform:scale(0.8);transform-origin:bottom;transition-property:opacity, transform;transition-delay:var(--hide-delay);transition-duration:var(--hide-duration);transition-timing-function:var(--hide-timing-function)}.tooltip::after{content:"";position:absolute;width:0;height:0}.tooltip-positioner[data-popper-placement^=top] .tooltip{transform-origin:bottom}.tooltip-positioner[data-popper-placement^=bottom] .tooltip{transform-origin:top}.tooltip-positioner[data-popper-placement^=left] .tooltip{transform-origin:right}.tooltip-positioner[data-popper-placement^=right] .tooltip{transform-origin:left}.tooltip-positioner.popover-visible .tooltip{opacity:1;transform:none;transition-delay:var(--show-delay);transition-duration:var(--show-duration);transition-timing-function:var(--show-timing-function)}.tooltip-positioner[data-popper-placement^=bottom] .tooltip::after{bottom:100%;left:calc(50% - var(--six-tooltip-arrow-size));border-bottom:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=bottom-start] .tooltip::after{left:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=bottom-end] .tooltip::after{right:var(--six-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=top] .tooltip::after{top:100%;left:calc(50% - var(--six-tooltip-arrow-size));border-top:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=top-start] .tooltip::after{left:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=top-end] .tooltip::after{right:var(--six-tooltip-arrow-start-end-offset);left:auto}.tooltip-positioner[data-popper-placement^=left] .tooltip::after{top:calc(50% - var(--six-tooltip-arrow-size));left:100%;border-left:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-top:var(--six-tooltip-arrow-size) solid transparent;border-bottom:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=left-start] .tooltip::after{top:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=left-end] .tooltip::after{top:auto;bottom:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement^=right] .tooltip::after{top:calc(50% - var(--six-tooltip-arrow-size));right:100%;border-right:var(--six-tooltip-arrow-size) solid var(--six-tooltip-background-color);border-top:var(--six-tooltip-arrow-size) solid transparent;border-bottom:var(--six-tooltip-arrow-size) solid transparent}.tooltip-positioner[data-popper-placement=right-start] .tooltip::after{top:var(--six-tooltip-arrow-start-end-offset)}.tooltip-positioner[data-popper-placement=right-end] .tooltip::after{top:auto;bottom:var(--six-tooltip-arrow-start-end-offset)}'}}]);