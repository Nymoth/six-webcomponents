import{r as m,c as h,h as r,g as f}from"../app.92157613.js";import{P as b}from"./popover-136d1f73.26341fbd.js";import{E as g}from"./event-listeners-f6e5b0ab.8644075f.js";import{b as a,a as S}from"./slot-ad36df3a.ca288e58.js";import{D as I,a as v}from"./execution-control-e0892a05.ca9145b2.js";import"./framework.0d091df2.js";import"./theme.f2c586b3.js";function u(e){return e.tabIndex>-1}function w(e){if(u(e))return e;if(e.shadowRoot!=null){const t=[...e.shadowRoot.children].find(i=>u(i));if(t!=null)return t}if(e.children!=null)return[...e.children].map(t=>w(t)).at(0)}const _=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block}.dropdown{position:relative}.dropdown__trigger{display:block}.dropdown__positioner{position:absolute;z-index:var(--six-z-index-dropdown)}.dropdown__positioner__filtered{width:100%}.dropdown__panel{max-height:50vh;font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);color:var(--color);background-color:var(--six-panel-background-color);border-radius:var(--six-border-radius-medium);box-shadow:var(--six-elevation-2dp);opacity:0;overflow:auto;overscroll-behavior:none;pointer-events:none;transform:scale(0.9);transition:var(--six-transition-fast) opacity, var(--six-transition-fast) transform;scrollbar-width:thin}.filter-hidden{display:none}.dropdown__positioner[data-popper-placement^=top] .dropdown__panel{transform-origin:bottom}.dropdown__positioner[data-popper-placement^=bottom] .dropdown__panel{transform-origin:top}.dropdown__positioner[data-popper-placement^=left] .dropdown__panel{transform-origin:right}.dropdown__positioner[data-popper-placement^=right] .dropdown__panel{transform-origin:left}.dropdown__positioner.popover-visible .dropdown__panel{opacity:1;transform:none;pointer-events:all}",x=e=>t=>(t==null?void 0:t.tagName.toLowerCase())===e.toLowerCase(),c=x("six-menu"),A=x("six-menu-item");let E=0;const T=class{constructor(e){m(this,e),this.sixShow=h(this,"six-dropdown-show",7),this.sixAfterShow=h(this,"six-dropdown-after-show",7),this.sixHide=h(this,"six-dropdown-hide",7),this.sixAfterHide=h(this,"six-dropdown-after-hide",7),this.sixAutoFilter=h(this,"six-dropdown-auto-filter-fired",7),this.sixAsyncFilterFired=h(this,"six-async-filter-fired",7),this.sixScroll=h(this,"six-dropdown-scroll",7),this.componentId=`dropdown-${++E}`,this.isVisible=!1,this.hasBeenInitialized=!1,this.eventListeners=new g,this.getMenuItems=()=>{if(this.filteredOptions.length>0)return this.filteredOptions.map(i=>r("six-menu-item",{value:i.value},i.label));if(this.panel==null)return[];const[t]=a(this.panel);return a(t)||Array.from(t.querySelectorAll("six-menu-item"))},this.handleFilterInputChange=()=>{var t,i;if(this.filterInputElement==null)return;const s=((i=(t=this.filterInputElement.value)===null||t===void 0?void 0:t.toLowerCase())===null||i===void 0?void 0:i.trim())||"";this.filteredOptions.length>0?this.handleFilteringForAttributeItems(s):this.handleFilteringForSlotItems(s),this.sixAutoFilter.emit({filterValue:s})},this.handleDocumentKeyDown=t=>{var i;const s=t;if(s.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(this.filterInputElement===((i=this.host.shadowRoot)===null||i===void 0?void 0:i.activeElement)&&s.key==="ArrowDown"){const n=this.getMenuItems().find(o=>o.style.display!=="none");n!=null&&n.setFocus()}if(s.key==="Tab"){if(this.open&&document.activeElement!=null&&A(document.activeElement)){s.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var n,o;const l=this.container.getRootNode()instanceof ShadowRoot?(o=(n=document.activeElement)===null||n===void 0?void 0:n.shadowRoot)===null||o===void 0?void 0:o.activeElement:document.activeElement;if((l==null?void 0:l.closest(this.container.tagName.toLowerCase()))!==this.container){this.hide();return}})}},this.handleDocumentMouseDown=t=>{if(!t.composedPath().includes(this.container)){this.hide();return}},this.handlePanelSelect=t=>{const i=t.target;this.closeOnSelect&&c(i)&&(this.hide(),this.focusOnTrigger())},this.handleTriggerClick=()=>{this.open?this.hide():this.show()},this.handleTriggerKeyDown=t=>{if(t.key==="Escape"){this.focusOnTrigger(),this.hide();return}if(!this.disableHideOnEnterAndSpace&&[" ","Enter"].includes(t.key)){t.preventDefault(),this.open?this.hide():this.show();return}const i=this.getMenu();if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.open||this.show(),i==null)return;const n=[...i.querySelectorAll("six-menu-item")],o=n.at(0),l=n.at(n.length-1);if(t.key==="ArrowDown"&&o!=null){o.setFocus();return}if(t.key==="ArrowUp"&&l!=null){l.setFocus();return}}const s=["Tab","Shift","Meta","Ctrl","Alt"];if(this.open&&i!=null&&!s.includes(t.key)){i.typeToSelect(t.key);return}},this.handleTriggerKeyUp=t=>{t.key===" "&&t.preventDefault()},this.handleTriggerSlotChange=()=>{this.updateAccessibleTrigger()},this.handleDropdownScroll=()=>{this.panel!=null&&this.sixScroll.emit({scrollHeight:this.panel.scrollHeight,scrollTop:this.panel.scrollTop,scrollbarHeight:this.panel.offsetHeight*(this.panel.offsetHeight/this.panel.scrollHeight),scrollRatio:this.panel.scrollTop/(this.panel.scrollHeight-this.panel.clientHeight)})},this.open=!1,this.placement="bottom-start",this.closeOnSelect=!0,this.distance=0,this.skidding=0,this.hoist=!1,this.containingElement=void 0,this.filter=!1,this.asyncFilter=!1,this.filterPlaceholder="Filter...",this.autofocusFilter=!0,this.filterDebounce=I,this.disableHideOnEnterAndSpace=!1,this.options=[],this.virtualScroll=!1,this.filteredOptions=[]}get hasFilterEnabled(){return this.filter||this.asyncFilter}get container(){return this.containingElement||this.host}handleOpenChange(){this.open?this.show():this.hide(),this.updateAccessibleTrigger()}handlePopoverOptionsChange(){this.popover!=null&&this.popover.setOptions({strategy:this.hoist?"fixed":"absolute",placement:this.placement,distance:this.distance,skidding:this.skidding})}handleOptionsChange(){Array.isArray(this.options)&&(this.filteredOptions=[...this.options])}connectedCallback(){this.virtualScroll&&this.options===null&&console.error("Options must be defined when using virtual scrolling"),Array.isArray(this.options)&&(this.filteredOptions=[...this.options]),this.hasBeenInitialized&&this.popover==null&&this.initializePopover()}componentDidLoad(){this.hasBeenInitialized=!0,this.initializePopover(),this.open&&this.show(),this.filter?this.setupFiltering(this.handleFilterInputChange):this.asyncFilter&&this.setupFiltering(()=>{var e,t;return this.sixAsyncFilterFired.emit({filterValue:(t=(e=this.filterInputElement)===null||e===void 0?void 0:e.value)!==null&&t!==void 0?t:""})})}initializePopover(){if(this.trigger==null||this.positioner==null)return;const e=()=>{this.filter&&this.filterInputElement!=null&&(this.filterInputElement.value="",this.filteredOptions.length>0?this.filteredOptions=[...this.options]:this.getMenuItems().forEach(n=>n.style.display="unset")),this.sixAfterHide.emit()},t=async()=>{var s;this.hasFilterEnabled&&this.autofocusFilter&&await((s=this.filterInputElement)===null||s===void 0?void 0:s.setFocus()),this.sixAfterShow.emit()},i=()=>{!this.open&&this.panel!=null&&(this.panel.scrollTop=0)};this.popover=new b(this.trigger,this.positioner,{strategy:this.hoist?"fixed":"absolute",placement:this.placement,distance:this.distance,skidding:this.skidding,transitionElement:this.panel,onAfterHide:e,onAfterShow:t,onTransitionEnd:i})}setupFiltering(e){this.filterInputElement!=null&&this.eventListeners.add(this.filterInputElement,"six-input-input",v(e,this.filterDebounce))}handleFilteringForAttributeItems(e){if(e===""&&Array.isArray(this.options)){this.filteredOptions=[...this.options];return}this.filteredOptions=this.options.filter(t=>{var i,s,n,o;return t.label&&((s=(i=String(t.label))===null||i===void 0?void 0:i.toLowerCase())===null||s===void 0?void 0:s.includes(e))||t.value&&((o=(n=String(t.value))===null||n===void 0?void 0:n.toLowerCase())===null||o===void 0?void 0:o.includes(e))})}handleFilteringForSlotItems(e){this.getMenuItems().forEach(async i=>{var s,n,o,l;const y=((n=(s=i==null?void 0:i.value)===null||s===void 0?void 0:s.toLowerCase())===null||n===void 0?void 0:n.includes(e))||((l=(o=await(i==null?void 0:i.getTextLabel()))===null||o===void 0?void 0:o.toLowerCase())===null||l===void 0?void 0:l.includes(e));i.style.display=y?"unset":"none"})}disconnectedCallback(){var e;this.eventListeners.removeAll(),this.hide(),(e=this.popover)===null||e===void 0||e.destroy(),this.popover=void 0}async show(){if(this.isVisible||this.popover==null||this.panel==null)return;if(this.sixShow.emit().defaultPrevented){this.open=!1;return}this.eventListeners.add(this.panel,"six-menu-item-selected",this.handlePanelSelect),this.eventListeners.add(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.add(document,"mousedown",this.handleDocumentMouseDown),this.isVisible=!0,this.open=!0,this.popover.show()}async hide(){if(!this.isVisible||this.panel==null||this.popover==null)return;if(this.sixHide.emit().defaultPrevented){this.open=!0;return}this.eventListeners.remove(this.panel,"six-menu-item-selected",this.handlePanelSelect),this.eventListeners.remove(document,"keydown",this.handleDocumentKeyDown),this.eventListeners.remove(document,"mousedown",this.handleDocumentMouseDown),this.isVisible=!1,this.open=!1,this.popover.hide()}focusOnTrigger(){if(this.trigger==null)return;const[e]=a(this.trigger);e!=null&&(typeof e.setFocus=="function"?e.setFocus():typeof e.focus=="function"&&e.focus())}getMenu(){if(this.panel!=null)return a(this.panel).filter(c).at(0)}async reposition(){!this.open||this.popover==null||this.popover.reposition()}updateAccessibleTrigger(){if(this.trigger==null)return;const e=a(this.trigger).map(w).at(0);e!=null&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false"))}render(){return r("div",{part:"base",id:this.componentId,class:{dropdown:!0,"dropdown--open":this.open}},r("span",{part:"trigger",class:"dropdown__trigger",ref:e=>this.trigger=e,onClick:this.handleTriggerClick,onKeyDown:this.handleTriggerKeyDown,onKeyUp:this.handleTriggerKeyUp},r("slot",{name:"trigger",onSlotchange:this.handleTriggerSlotChange})),r("div",{ref:e=>this.positioner=e,class:{dropdown__positioner:!0,dropdown__positioner__filtered:(this.filter||this.asyncFilter)&&!this.hoist}},this.hasFilterEnabled&&r("six-input",{class:{"filter-hidden":!this.open},"aria-hidden":this.open?"false":"true",ref:e=>this.filterInputElement=e,placeholder:this.filterPlaceholder}),r("div",{ref:e=>this.panel=e,part:"panel",class:"dropdown__panel",role:"menu","aria-hidden":this.open?"false":"true","aria-labelledby":this.componentId,onScroll:this.handleDropdownScroll},r("slot",null),this.filteredOptions.length>0&&r("six-menu",{part:"menu",items:this.filteredOptions,virtualScroll:this.virtualScroll}))))}get host(){return f(this)}static get watchers(){return{open:["handleOpenChange"],distance:["handlePopoverOptionsChange"],hoist:["handlePopoverOptionsChange"],placement:["handlePopoverOptionsChange"],skidding:["handlePopoverOptionsChange"],options:["handleOptionsChange"]}}};T.style=_;const D=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.menu{padding:0 0;border:none;box-shadow:var(--six-elevation-2dp)}.menu:focus{outline:none}.menu--noshadow{box-shadow:none}.menu__wrapper--scrollable{overflow-y:auto}",p=e=>{var t,i,s;return(s=(i=(t=e==null?void 0:e.shadowRoot)===null||t===void 0?void 0:t.querySelector(".menu-item"))===null||i===void 0?void 0:i.classList)===null||s===void 0?void 0:s.contains("menu-item--focused")},F=e=>(e==null?void 0:e.tagName.toLowerCase())==="six-menu-item",d=({value:e,label:t})=>r("six-menu-item",{value:e},t),k=5,O=64,C=class{constructor(e){m(this,e),this.sixMenuItemSelected=h(this,"six-menu-item-selected",7),this.eventListeners=new g,this.typeToSelectString="",this.handleScrolling=()=>{this.menuWrapper!=null&&(this.scrollingIndex=Math.floor(this.menuWrapper.scrollTop/this.sixMenuItemHeight))},this.removeBoxShadow=!1,this.items=null,this.itemsShown=void 0,this.virtualScroll=!1,this.itemSize=10,this.scrollingDebounce=15,this.scrollingIndex=0,this.sixMenuItemHeight=O}connectedCallback(){this.handleClick=this.handleClick.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this)}componentWillLoad(){this.items}componentDidLoad(){this.setupForVirtualScrollingAfterRendering()}disconnectedCallback(){this.eventListeners.removeAll()}async typeToSelect(e){var t;clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=setTimeout(()=>this.typeToSelectString="",750),this.typeToSelectString+=e.toLowerCase();const i=this.getItems();for(const s of i){const n=(t=s.shadowRoot)===null||t===void 0?void 0:t.querySelector("slot:not([name])");if(S(n).toLowerCase().trim().substring(0,this.typeToSelectString.length)===this.typeToSelectString){s.setFocus();break}}}getItemsShown(){var e;const t=this.virtualScroll?k:0;return(e=this.itemsShown)!==null&&e!==void 0?e:t}setupForVirtualScrollingAfterRendering(){var e,t;if(!this.virtualScroll||this.menuWrapper==null)return;this.eventListeners.add(this.menuWrapper,"scroll",v(this.handleScrolling,this.scrollingDebounce));const i=(t=(e=this.menu)===null||e===void 0?void 0:e.querySelector("six-menu-item"))===null||t===void 0?void 0:t.clientHeight;i!=null&&i>0&&(this.sixMenuItemHeight=i)}getItems(){if(this.menu==null)return[];if(this.items!=null)return this.items.map(d);const e=this.menu.querySelector("slot");return e==null?[]:[...e.assignedElements({flatten:!0})].filter(t=>F(t)&&!t.disabled)}getActiveItemIndex(){const e=this.getItems(),t=this.getActiveItem();if(t!=null){const s=e.indexOf(t);if(s>-1)return s}return this.extractItemsFromDOM().findIndex(p)}getActiveItem(){var e;const t=this.getItems().find(i=>i===document.activeElement);return t??((e=this.extractItemsFromDOM())===null||e===void 0?void 0:e.find(p))}extractItemsFromDOM(){var e,t;return Array.from((t=(e=this.host.shadowRoot)===null||e===void 0?void 0:e.querySelectorAll("six-menu-item"))!==null&&t!==void 0?t:[])}setActiveItem(e){e==null||e.setFocus()}handleClick(e){const i=e.target.closest("six-menu-item");i&&!i.disabled&&this.sixMenuItemSelected.emit({name:i.value,item:i})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getActiveItem();e.preventDefault(),t!=null&&this.sixMenuItemSelected.emit({name:t.value,item:t})}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.items===null?this.getItems():this.extractItemsFromDOM();let i=this.getActiveItemIndex();if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=0),i>t.length-1&&(i=t.length-1),this.setActiveItem(t[i]);return}}this.typeToSelect(e.key)}getMenuWrapperStyle(){var e;const t={};return this.getItemsShown()>0&&(t.height=`${((e=this.getItemsShown())!==null&&e!==void 0?e:0)*this.sixMenuItemHeight}px`),Object.assign({},t)}getMenuContainerStyle(){const e={};return this.virtualScroll&&(e.transform=`translateY(${this.sixMenuItemHeight*this.scrollingIndex}px)`),Object.assign({},e)}getScrollbarGhostStyle(){const e={};return this.virtualScroll&&this.items!==null&&(e.height=`${this.items.length*this.sixMenuItemHeight-this.itemSize*this.sixMenuItemHeight}px`),Object.assign({},e)}renderItems(){if(!(this.items===void 0||this.items===null))return this.virtualScroll?this.items.slice(this.scrollingIndex,Math.min(this.items.length,this.itemSize+this.scrollingIndex)).map(d):this.items.map(d)}render(){return r("div",{ref:e=>this.menuWrapper=e,style:this.getMenuWrapperStyle(),part:"wrapper",class:{menu:!0,"menu--noshadow":this.removeBoxShadow,"menu__wrapper--scrollable":this.getItemsShown()>0}},r("div",{ref:e=>this.menu=e,part:"base",role:"menu",onClick:this.handleClick,onKeyDown:this.handleKeyDown,tabIndex:0,style:this.getMenuContainerStyle()},r("slot",null),this.renderItems()),this.virtualScroll&&r("div",{style:this.getScrollbarGhostStyle()}))}get host(){return f(this)}};C.style=D;export{T as six_dropdown,C as six_menu};
