import{r as a,h as s,g as r}from"../app.92157613.js";import{h as n}from"./slot-ad36df3a.ca288e58.js";import"./framework.0d091df2.js";import"./theme.f2c586b3.js";const h=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:block}.six-sidebar-item-group--childless::part(content){padding:0 !important}.six-sidebar-item-group--subgroup::part(header){background-color:transparent !important}.six-sidebar-item-group__header-icon{margin-left:16px;transform:translate(0px, -3px)}.six-sidebar-details__header{display:flex}.six-sidebar-details__header-icon{margin-right:1em}",l=class{constructor(t){a(this,t),this.provideSlot=i=>this.summaryIconHasContent?s("div",{slot:i},s("slot",{name:i})):s("slot",{name:i,onSlotchange:()=>{var e;const o=(e=this.host.shadowRoot)===null||e===void 0?void 0:e.querySelector(`slot[name="${i}"]`);o!=null&&(this.summaryIconHasContent=o.assignedNodes().length>0)}}),this.hasItems=!1,this.name="",this.icon="",this.value="",this.open=!1,this.summaryIcon=void 0,this.summaryIconHasContent=!1}connectedCallback(){this.handleSlotChange=this.handleSlotChange.bind(this)}componentWillLoad(){this.handleSlotChange()}handleSlotChange(){this.hasItems=n(this.host)}isSubgroup(){var t;return((t=this.host.parentElement)===null||t===void 0?void 0:t.closest("six-sidebar-item-group"))!=null}render(){return s("six-details",{class:{"six-sidebar-item-group--childless":!this.hasItems,"six-sidebar-item-group--subgroup":this.isSubgroup()},inline:!0,open:this.open,"summary-icon":this.summaryIcon,hasContent:this.hasItems},s("div",{slot:"summary"},s("div",{class:"six-sidebar-details__header"},this.icon&&s("six-icon",{class:"six-sidebar-details__header-icon"},this.icon),this.name)),this.provideSlot("summary-icon"),s("slot",null))}get host(){return r(this)}};l.style=h;export{l as six_sidebar_item_group};
