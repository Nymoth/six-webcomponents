import{r as e,h as r}from"../app.92157613.js";import"./framework.0d091df2.js";import"./theme.f2c586b3.js";const a=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-flex}.badge{display:inline-flex;align-items:center;justify-content:center;font-family:var(--six-font-family);font-size:var(--six-font-size-x-small);font-weight:var(--six-font-weight-semibold);letter-spacing:var(--six-letter-spacing-normal);line-height:1;border-radius:var(--six-border-radius-small);white-space:nowrap;padding:3px 6px;user-select:none;cursor:inherit}.badge--info{background-color:var(--six-color-web-rock-900);color:var(--six-color-white)}.badge--success{background-color:var(--six-color-success-500);color:var(--six-color-web-rock-900)}.badge--warning{background-color:var(--six-color-warning-700);color:var(--six-color-web-rock-900)}.badge--danger{background-color:var(--six-color-danger-800);color:var(--six-color-white)}.badge--action{background-color:var(--six-color-action-500);color:var(--six-color-white)}.badge--primary{background-color:var(--six-color-clay-50);color:var(--six-color-black)}.badge--pill{border-radius:var(--six-border-radius-pill)}.badge--pulse{animation:pulse 1.5s infinite}.badge--pulse.badge--info{--pulse-color:var(--six-color-web-rock-900)}.badge--pulse.badge--success{--pulse-color:var(--six-color-success-500)}.badge--pulse.badge--warning{--pulse-color:var(--six-color-warning-700)}.badge--pulse.badge--danger{--pulse-color:var(--six-color-danger-800)}.badge--pulse.badge--action{--pulse-color:var(--six-color-action-500)}.badge--pulse.badge--primary{--pulse-color:var(--six-color-clay-50)}@keyframes pulse{0%{box-shadow:0 0 0 0 var(--pulse-color)}70%{box-shadow:0 0 0 0.5rem transparent}100%{box-shadow:0 0 0 0 transparent}}",s=class{constructor(o){e(this,o),this.type="primary",this.pill=!1,this.pulse=!1}render(){return r("span",{part:"base",class:{badge:!0,"badge--primary":this.type==="primary","badge--secondary":this.type==="secondary","badge--success":this.type==="success","badge--warning":this.type==="warning","badge--danger":this.type==="danger","badge--action":this.type==="action","badge--info":this.type==="info","badge--pill":this.pill,"badge--pulse":this.pulse},role:"status"},r("slot",null))}};s.style=a;export{s as six_badge};