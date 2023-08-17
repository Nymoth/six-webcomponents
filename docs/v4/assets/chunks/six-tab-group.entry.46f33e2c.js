import{r as u,c as b,h as i,g as d}from"../app.18cbbc85.js";import{s as c,g as p}from"./scroll-3fb087a2.b062e60f.js";import{f as h}from"./focus-visible-fc6ac671.40105f05.js";import"./framework.f9831273.js";import"./theme.dfb7e68a.js";const v=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{--tabs-border-color:var(--six-tab-border-color);display:block}.tab-group{display:flex;border:solid 1px transparent;border-radius:0}.tab-group .tab-group__tabs{display:flex;position:relative}.tab-group .tab-group__active-tab-indicator{position:absolute;transition:var(--six-transition-fast) transform ease, var(--six-transition-fast) width ease}.tab-group:not(.focus-visible) ::slotted(six-tab){--focus-ring:none}.tab-group--has-scroll-controls .tab-group__nav-container{position:relative;padding:0 var(--six-spacing-x-large)}.tab-group__scroll-button{display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;width:var(--six-spacing-x-large)}.tab-group__scroll-button--left{left:0}.tab-group__scroll-button--right{right:0}.tab-group--top{flex-direction:column}.tab-group--top .tab-group__nav-container{order:1}.tab-group--top .tab-group__nav{display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--top .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--top .tab-group__tabs{flex:1 1 auto;position:relative;flex-direction:row;border-bottom:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--top .tab-group__active-tab-indicator{bottom:-2px;border-bottom:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--top .tab-group__body{order:2}.tab-group--bottom{flex-direction:column}.tab-group--bottom .tab-group__nav-container{order:2}.tab-group--bottom .tab-group__nav{display:flex;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.tab-group--bottom .tab-group__nav::-webkit-scrollbar{width:0;height:0}.tab-group--bottom .tab-group__tabs{flex:1 1 auto;position:relative;flex-direction:row;border-top:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--bottom .tab-group__active-tab-indicator{top:-2px;border-top:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--bottom .tab-group__body{order:1}.tab-group--left{flex-direction:row}.tab-group--left .tab-group__nav-container{order:1}.tab-group--left .tab-group__tabs{flex:0 0 auto;flex-direction:column;border-right:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--left .tab-group__active-tab-indicator{right:-2px;border-right:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--left .tab-group__body{flex:1 1 auto;order:2}.tab-group--right{flex-direction:row}.tab-group--right .tab-group__nav-container{order:2}.tab-group--right .tab-group__tabs{flex:0 0 auto;flex-direction:column;border-left:solid var(--six-tab-border-width) var(--tabs-border-color)}.tab-group--right .tab-group__active-tab-indicator{left:-2px;border-left:solid var(--six-tab-border-width-active) var(--six-tab-border-color-active)}.tab-group--right .tab-group__body{flex:1 1 auto;order:1}",g=class{constructor(e){u(this,e),this.sixTabShow=b(this,"six-tab-show",7),this.sixTabHide=b(this,"six-tab-hide",7),this.handleClick=t=>{const o=t.target.closest("six-tab");if((o==null?void 0:o.closest("six-tab-group"))!==this.host)return!1;o!=null&&this.setActiveTab(o)},this.handleKeyDown=t=>{if(this.nav==null)return;const o=t.target.closest("six-tab");if((o==null?void 0:o.closest("six-tab-group"))!==this.host)return!1;if(["Enter"," "].includes(t.key)&&o!=null&&(this.setActiveTab(o),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const s=document.activeElement;if(s&&s.tagName.toLowerCase()==="six-tab"){const l=this.getAllTabs();let n=l.indexOf(s);t.key==="Home"?n=0:t.key==="End"?n=l.length-1:t.key==="ArrowLeft"?n=Math.max(0,n-1):t.key==="ArrowRight"&&(n=Math.min(l.length-1,n+1)),l[n].setFocus({preventScroll:!0}),["top","bottom"].includes(this.placement)&&c(l[n],this.nav,"horizontal"),t.preventDefault()}}},this.handleScrollLeft=()=>{this.nav!=null&&this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})},this.handleScrollRight=()=>{this.nav!=null&&this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})},this.syncActiveTabIndicator=()=>{if(this.activeTabIndicator==null||this.nav==null)return;const t=this.getActiveTab();if(t!=null)this.activeTabIndicator.style.display="block";else{this.activeTabIndicator.style.display="none";return}const a=t.clientWidth,o=t.clientHeight,r=p(t,this.nav),s=r.top+this.nav.scrollTop,l=r.left+this.nav.scrollLeft;switch(this.placement){case"top":case"bottom":this.activeTabIndicator.style.width=`${a}px`,this.activeTabIndicator.style.height="",this.activeTabIndicator.style.transform=`translateX(${l}px)`;break;case"left":case"right":this.activeTabIndicator.style.width="",this.activeTabIndicator.style.height=`${o}px`,this.activeTabIndicator.style.transform=`translateY(${s}px)`;break}},this.hasScrollControls=!1,this.placement="top",this.noScrollControls=!1}handlePlacementChange(){this.syncActiveTabIndicator()}handleNoScrollControlsChange(){this.updateScrollControls()}componentDidLoad(){if(this.tabGroup==null||this.nav==null)return;new IntersectionObserver((t,a)=>{t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.getAllTabs()[0],!1),a.unobserve(t[0].target))}).observe(this.host),h.observe(this.tabGroup),this.resizeObserver=new ResizeObserver(()=>this.updateScrollControls()),this.resizeObserver.observe(this.nav),requestAnimationFrame(()=>this.updateScrollControls()),this.mutationObserver=new MutationObserver(t=>{t.some(a=>{var o;return!["aria-labelledby","aria-controls"].includes((o=a.attributeName)!==null&&o!==void 0?o:"")})&&setTimeout(()=>this.setAriaLabels())}),this.mutationObserver.observe(this.host,{attributes:!0,childList:!0,subtree:!0})}disconnectedCallback(){this.mutationObserver==null||this.tabGroup==null||this.nav==null||this.resizeObserver==null||(this.mutationObserver.disconnect(),h.unobserve(this.tabGroup),this.resizeObserver.unobserve(this.nav))}async show(e){const a=this.getAllTabs().find(o=>o.panel===e);a!=null&&this.setActiveTab(a)}getAllTabs(e=!1){var t;const a=(t=this.tabs)===null||t===void 0?void 0:t.querySelector("slot");return a==null?[]:[...a.assignedElements()].filter(o=>e?o.tagName.toLowerCase()==="six-tab":o.tagName.toLowerCase()==="six-tab"&&!o.disabled)}getAllPanels(){var e;const t=(e=this.body)===null||e===void 0?void 0:e.querySelector("slot");return t==null?[]:[...t.assignedElements()].filter(a=>a.tagName.toLowerCase()==="six-tab-panel")}getActiveTab(){return this.getAllTabs().find(e=>e.active)}updateScrollControls(){this.nav!=null&&(this.hasScrollControls=this.noScrollControls?!1:["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth)}setActiveTab(e,t=!0){if(this.nav!=null&&e!=null&&e!==this.activeTab&&!e.disabled){const a=this.activeTab;this.activeTab=e,this.getAllTabs().map(o=>o.active=o===this.activeTab),this.getAllPanels().map(o=>{var r;return o.active=o.name===((r=this.activeTab)===null||r===void 0?void 0:r.panel)}),this.syncActiveTabIndicator(),["top","bottom"].includes(this.placement)&&c(this.activeTab,this.nav,"horizontal"),t&&(a!=null&&this.sixTabHide.emit({name:a.panel}),this.sixTabShow.emit({name:this.activeTab.panel}))}}setAriaLabels(){const e=this.getAllTabs(),t=this.getAllPanels();e.map(a=>{var o,r;const s=t.find(l=>l.name===a.panel);s!=null&&(a.setAttribute("aria-controls",(o=s.getAttribute("id"))!==null&&o!==void 0?o:""),s.setAttribute("aria-labelledby",(r=a.getAttribute("id"))!==null&&r!==void 0?r:""))})}render(){return i("div",{part:"base",ref:e=>this.tabGroup=e,class:{"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--left":this.placement==="left","tab-group--right":this.placement==="right","tab-group--has-scroll-controls":this.hasScrollControls},onClick:this.handleClick,onKeyDown:this.handleKeyDown},i("div",{class:"tab-group__nav-container"},this.hasScrollControls&&i("six-icon-button",{class:"tab-group__scroll-button tab-group__scroll-button--left",exportparts:"base:scroll-button",name:"chevron_left",onClick:this.handleScrollLeft}),i("div",{ref:e=>this.nav=e,key:"nav",part:"nav",class:"tab-group__nav"},i("div",{ref:e=>this.tabs=e,part:"tabs",class:"tab-group__tabs",role:"tablist"},i("div",{ref:e=>this.activeTabIndicator=e,part:"active-tab-indicator",class:"tab-group__active-tab-indicator"}),i("slot",{name:"nav",onSlotchange:this.syncActiveTabIndicator}))),this.hasScrollControls&&i("six-icon-button",{class:"tab-group__scroll-button tab-group__scroll-button--right",exportparts:"base:scroll-button",name:"chevron_right",onClick:this.handleScrollRight})),i("div",{ref:e=>this.body=e,part:"body",class:"tab-group__body"},i("slot",{onSlotchange:this.syncActiveTabIndicator})))}get host(){return d(this)}static get watchers(){return{placement:["handlePlacementChange"],noScrollControls:["handleNoScrollControlsChange"]}}};g.style=v;export{g as six_tab_group};