"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[3262],{3262:(n,i,t)=>{t.r(i),t.d(i,{six_tag:()=>r});var e=t(9049),s=t(5730),l=t(3185);const r=class{constructor(a){(0,e.r)(this,a),this.sixClear=(0,e.c)(this,"six-tag-clear",7),this.resizeObserver=new ResizeObserver((0,l.a)(()=>this.updateTooltip())),this.updateTooltip=()=>{null!=this.tooltipElement&&null!=this.contentSlotElement&&null!=this.contentElement&&(this.tooltipElement.content=(0,s.a)(this.contentSlotElement),this.tooltipElement.disabled=!(this.contentElement.offsetWidth<this.contentElement.scrollWidth))},this.handleClearClick=()=>{this.sixClear.emit()},this.type="primary",this.size="medium",this.pill=!1,this.clearable=!1}connectedCallback(){null!=this.contentElement&&this.resizeObserver.observe(this.contentElement)}componentDidLoad(){null!=this.contentElement&&this.resizeObserver.observe(this.contentElement)}disconnectedCallback(){this.resizeObserver.disconnect()}render(){return(0,e.h)("span",{key:"6a02aa0235a9b590604bc92647ac73e22e304136",part:"base",class:{tag:!0,"tag--primary":"primary"===this.type,"tag--success":"success"===this.type,"tag--info":"info"===this.type,"tag--warning":"warning"===this.type,"tag--danger":"danger"===this.type,"tag--action":"action"===this.type,"tag--text":"text"===this.type,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--clear":this.clearable}},(0,e.h)("six-tooltip",{key:"e42c81922948e9b944bb828479351e8e3ba87a3b",ref:a=>this.tooltipElement=a},(0,e.h)("span",{key:"84b8a6a071f9c45c5aaec65c0667df111a357562",ref:a=>this.contentElement=a,part:"content",class:"tag__content"},(0,e.h)("slot",{key:"757dcb510fef07b947876706c8a53e07d28bdc7f",ref:a=>this.contentSlotElement=a}))),this.clearable&&(0,e.h)("six-icon-button",{exportparts:"base:clear-button",size:"xSmall",name:"clear",class:"tag__clear",onClick:this.handleClearClick}))}};r.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:inline-block;overflow:hidden}.tag{display:flex;align-items:center;border:solid 1px;font-family:var(--six-font-family);line-height:1;white-space:nowrap;user-select:none;cursor:default}.tag__content{text-overflow:ellipsis;overflow:hidden}.tag__clear::part(base){color:inherit;padding:0}.tag--info{color:var(--six-color-white);background-color:var(--six-color-web-rock-900);border-color:var(--six-color-web-rock-900)}.tag--success{color:var(--six-color-web-rock-900);border-color:var(--six-color-success-500);background-color:var(--six-color-success-500)}.tag--primary{color:var(--six-color-web-rock-900);border-color:var(--six-color-clay-50);background-color:var(--six-color-clay-50)}.tag--warning{color:var(--six-color-web-rock-900);border-color:var(--six-color-warning-700);background-color:var(--six-color-warning-700)}.tag--danger{color:var(--six-color-white);border-color:var(--six-color-danger-800);background-color:var(--six-color-danger-800)}.tag--action{color:var(--six-color-white);border-color:var(--six-color-action-500);background-color:var(--six-color-action-500)}.tag--small{font-size:var(--six-button-font-size-small);height:calc(var(--six-height-small) * 0.8);line-height:calc(var(--six-height-small) - var(--six-border-width) * 2);border-radius:var(--six-input-border-radius-small);padding:0 var(--six-spacing-x-small)}.tag--small .tag__clear{margin-left:var(--six-spacing-xx-small);margin-right:calc(-1 * var(--six-spacing-xxx-small))}.tag--medium{font-size:var(--six-button-font-size-medium);height:calc(var(--six-height-medium) * 0.8);line-height:calc(var(--six-height-medium) - var(--six-border-width) * 2);border-radius:var(--six-input-border-radius-medium);padding:0 var(--six-spacing-small)}.tag--medium .tag__clear{margin-left:var(--six-spacing-xx-small);margin-right:calc(-1 * var(--six-spacing-xx-small))}.tag--large{font-size:var(--six-button-font-size-large);height:calc(var(--six-height-large) * 0.8);line-height:calc(var(--six-height-large) - var(--six-border-width) * 2);border-radius:var(--six-input-border-radius-large);padding:0 var(--six-spacing-medium)}.tag--large .tag__clear{margin-left:var(--six-spacing-xx-small);margin-right:calc(-1 * var(--six-spacing-x-small))}.tag--pill{border-radius:var(--six-border-radius-pill)}"}}]);