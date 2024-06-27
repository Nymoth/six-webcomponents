import{r as e,c as r,h as s,H as l,g as b}from"../app.90cfe05a.js";import"./framework.57535aa4.js";import"./theme.cd81f385.js";const c=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:flex}.tab{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-semibold);color:var(--six-tab-color);padding:var(--six-spacing-medium) var(--six-spacing-large);white-space:nowrap;user-select:none;cursor:pointer;width:100%}.tab:focus{outline:none}.tab:focus-visible{outline:var(--six-focus-ring);outline-offset:calc(-1 * var(--six-focus-ring-width) - var(--six-focus-ring-offset))}.tab.tab--active:not(.tab--disabled){color:var(--six-tab-color-active);font-weight:var(--six-font-weight-bold)}.tab.tab--closable{padding-right:var(--six-spacing-small)}.tab.tab--disabled{color:var(--six-tab-color-disabled);cursor:not-allowed}.tab:hover:not(.tab--disabled){color:var(--six-tab-color-hover)}.tab__close-button{font-size:var(--six-font-size-large);margin-left:var(--six-spacing-xx-small)}.tab__close-button::part(base){padding:var(--six-spacing-xxx-small)}.tab__indicator{position:absolute}.tab__indicator.tab__indicator--active{background-color:var(--six-tab-border-color-active)}.tab--top{margin-bottom:var(--six-spacing-xxx-small)}.tab__indicator--top{width:100%;bottom:0;height:var(--six-tab-border-width)}.tab--bottom{margin-top:var(--six-spacing-xxx-small)}.tab__indicator--bottom{width:100%;top:0;height:var(--six-tab-border-width)}.tab--left{margin-right:var(--six-spacing-xxx-small)}.tab__indicator--left{height:100%;right:0;top:0;width:var(--six-tab-border-width)}.tab--right{margin-left:var(--six-spacing-xxx-small)}.tab__indicator--right{height:100%;left:0;top:0;width:var(--six-tab-border-width)}",n=c;let d=0;const h=class{constructor(t){e(this,t),this.sixClose=r(this,"six-tab-close",7),this.componentId=`tab-${++d}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){this.handleCloseClick=this.handleCloseClick.bind(this)}async setFocus(t){var i;(i=this.tab)===null||i===void 0||i.focus(t)}async removeFocus(){var t;(t=this.tab)===null||t===void 0||t.blur()}handleCloseClick(){this.sixClose.emit()}render(){var t;const i=this.host.closest("six-tab-group"),a=(t=i==null?void 0:i.placement)!==null&&t!==void 0?t:"top";return s(l,{key:"66eaedc782e87077c15d655a283127bba7e89dd8",id:this.host.id||this.componentId},s("div",{key:"dd59ec7e9406b1baab4f4fda287cfdaf98d79c31",part:"base",ref:o=>this.tab=o,class:{tab:!0,"tab--top":a==="top","tab--bottom":a==="bottom","tab--left":a==="left","tab--right":a==="right","tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled},role:"tab","aria-disabled":this.disabled?"true":"false","aria-selected":this.active?"true":"false",tabindex:this.disabled||!this.active?"-1":"0"},s("slot",{key:"bd701cd5777e3d1cadbf3907534470a96e46a66d"}),this.closable&&s("six-icon-button",{name:"close",size:"xSmall",exportparts:"base:close-button",class:"tab__close-button",onClick:this.handleCloseClick,tabIndex:-1,"aria-hidden":"true"})),s("div",{key:"f80103185d457827fc8c2e990791dd947743daef",part:this.active?"active-tab-indicator":"",class:{tab__indicator:!0,"tab__indicator--active":this.active,"tab__indicator--top":a==="top","tab__indicator--bottom":a==="bottom","tab__indicator--left":a==="left","tab__indicator--right":a==="right"}}))}get host(){return b(this)}};h.style=n;export{h as six_tab};