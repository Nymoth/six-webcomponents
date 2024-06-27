import{r as i,c as a,h as t}from"./index-2ec0dc3d.js";import{a as r}from"./slot-56531341-2ae944bc.js";import{a as s}from"./execution-control-2ebaf4ef-ca9145b2.js";const o=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:inline-block;overflow:hidden}.tag{display:flex;align-items:center;border:solid 1px;font-family:var(--six-font-family);line-height:1;white-space:nowrap;user-select:none;cursor:default}.tag__content{text-overflow:ellipsis;overflow:hidden}.tag__clear::part(base){color:inherit;padding:0}.tag--info{color:var(--six-color-white);background-color:var(--six-color-web-rock-900);border-color:var(--six-color-web-rock-900)}.tag--success{color:var(--six-color-web-rock-900);border-color:var(--six-color-success-500);background-color:var(--six-color-success-500)}.tag--primary{color:var(--six-color-web-rock-900);border-color:var(--six-color-clay-50);background-color:var(--six-color-clay-50)}.tag--warning{color:var(--six-color-web-rock-900);border-color:var(--six-color-warning-700);background-color:var(--six-color-warning-700)}.tag--danger{color:var(--six-color-white);border-color:var(--six-color-danger-800);background-color:var(--six-color-danger-800)}.tag--action{color:var(--six-color-white);border-color:var(--six-color-action-500);background-color:var(--six-color-action-500)}.tag--small{font-size:var(--six-button-font-size-small);height:calc(var(--six-height-small) * 0.8);line-height:calc(var(--six-height-small) - var(--six-border-width) * 2);border-radius:var(--six-input-border-radius-small);padding:0 var(--six-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--six-spacing-xx-small);margin-right:calc(-1 * var(--six-spacing-xxx-small))}.tag--medium{font-size:var(--six-button-font-size-medium);height:calc(var(--six-height-medium) * 0.8);line-height:calc(var(--six-height-medium) - var(--six-border-width) * 2);border-radius:var(--six-input-border-radius-medium);padding:0 var(--six-spacing-small)}.tag--medium .tag__clear{margin-left:var(--six-spacing-xx-small);margin-right:calc(-1 * var(--six-spacing-xx-small))}.tag--large{font-size:var(--six-button-font-size-large);height:calc(var(--six-height-large) * 0.8);line-height:calc(var(--six-height-large) - var(--six-border-width) * 2);border-radius:var(--six-input-border-radius-large);padding:0 var(--six-spacing-medium)}.tag--large .tag__clear{margin-left:var(--six-spacing-xx-small);margin-right:calc(-1 * var(--six-spacing-x-small))}.tag--pill{border-radius:var(--six-border-radius-pill)}",l=o,c=class{constructor(e){i(this,e),this.sixClear=a(this,"six-tag-clear",7),this.resizeObserver=new ResizeObserver(s(()=>this.updateTooltip())),this.updateTooltip=()=>{this.tooltipElement!=null&&this.contentSlotElement!=null&&this.contentElement!=null&&(this.tooltipElement.content=r(this.contentSlotElement),this.tooltipElement.disabled=!(this.contentElement.offsetWidth<this.contentElement.scrollWidth))},this.handleClearClick=()=>{this.sixClear.emit()},this.type="primary",this.size="medium",this.pill=!1,this.clearable=!1}connectedCallback(){this.contentElement!=null&&this.resizeObserver.observe(this.contentElement)}componentDidLoad(){this.contentElement!=null&&this.resizeObserver.observe(this.contentElement)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return t("span",{key:"6a02aa0235a9b590604bc92647ac73e22e304136",part:"base",class:{tag:!0,"tag--primary":this.type==="primary","tag--success":this.type==="success","tag--info":this.type==="info","tag--warning":this.type==="warning","tag--danger":this.type==="danger","tag--action":this.type==="action","tag--text":this.type==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--clear":this.clearable}},t("six-tooltip",{key:"e42c81922948e9b944bb828479351e8e3ba87a3b",ref:e=>this.tooltipElement=e},t("span",{key:"84b8a6a071f9c45c5aaec65c0667df111a357562",ref:e=>this.contentElement=e,part:"content",class:"tag__content"},t("slot",{key:"757dcb510fef07b947876706c8a53e07d28bdc7f",ref:e=>this.contentSlotElement=e}))),this.clearable&&t("six-icon-button",{exportparts:"base:clear-button",size:"xSmall",name:"clear",class:"tag__clear",onClick:this.handleClearClick}))}};c.style=l;export{c as six_tag};