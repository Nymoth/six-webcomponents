(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf730"],{6484:function(t,s,i){"use strict";i.r(s),i.d(s,"six_tab",(function(){return l}));var a=i("c8e7");const e=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.tab{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-semibold);border-radius:4px;color:var(--six-tab-color);padding:var(--six-spacing-medium) var(--six-spacing-large);white-space:nowrap;user-select:none;cursor:pointer;transition:var(--six-transition-fast) box-shadow, var(--six-transition-fast) color}.tab:focus{outline:none}.tab:focus:not(.tab--disabled){color:var(--six-tab-color-active)}.tab.tab--active:not(.tab--disabled){color:var(--six-tab-color-active);font-weight:var(--six-font-weight-bold)}.tab.tab--closable{padding-right:var(--six-spacing-small)}.tab.tab--disabled{color:var(--six-tab-color-disabled);cursor:not-allowed}.tab:hover:not(.tab--disabled){color:var(--six-tab-color-hover)}.tab__close-button{font-size:var(--six-font-size-large);margin-left:var(--six-spacing-xx-small)}.tab__close-button::part(base){padding:var(--six-spacing-xxx-small)}";let o=0,l=class{constructor(t){Object(a["i"])(this,t),this.sixClose=Object(a["e"])(this,"six-tab-close",7),this.componentId="tab-"+ ++o,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){this.handleCloseClick=this.handleCloseClick.bind(this)}async setFocus(t){this.tab.focus(t)}async removeFocus(){this.tab.blur()}handleCloseClick(){this.sixClose.emit()}render(){return Object(a["g"])(a["b"],{id:this.host.id||this.componentId},Object(a["g"])("div",{part:"base",ref:t=>this.tab=t,class:{tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled},role:"tab","aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled||!this.active?"-1":"0"},Object(a["g"])("slot",null),this.closable&&Object(a["g"])("six-icon-button",{name:"close",size:"xSmall",exportparts:"base:close-button",class:"tab__close-button",onClick:this.handleCloseClick,tabIndex:-1,"aria-hidden":"true"})))}get host(){return Object(a["f"])(this)}};l.style=e}}]);
//# sourceMappingURL=chunk-2d0cf730.bb238a43.js.map