import{r as p,c as h,h as s,g as d}from"../app.92157613.js";import{F as b}from"./form-control-32cb533f.eeb09c9e.js";import{h as c}from"./slot-ad36df3a.ca288e58.js";import{E as m}from"./event-listeners-f6e5b0ab.8644075f.js";import"./framework.0d091df2.js";import"./theme.f2c586b3.js";const v=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*"}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;color:var(--six-color-danger-800);margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{--thumb-size:14px;--tooltip-offset-y:10px;--track-color:var(--six-color-web-rock-900);--thumb-color:var(--six-color-web-rock-900);--track-height:3px;display:block}.range{position:relative}.range .range__control{-webkit-appearance:none;width:100%;height:var(--six-input-height-medium);background:transparent;line-height:var(--six-input-height-medium);vertical-align:middle}.range .range__control::-webkit-slider-runnable-track{width:100%;height:var(--track-height);border-radius:3px;border:none}.range .range__control::-webkit-slider-thumb{border:none;width:var(--thumb-size);height:var(--thumb-size);border-radius:50%;background-color:var(--thumb-color);-webkit-appearance:none;margin-top:calc(var(--thumb-size) / -2 + var(--track-height) / 2);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) box-shadow, var(--six-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-webkit-slider-thumb:hover{background-color:var(--thumb-color)}.range .range__control:not(:disabled):focus::-webkit-slider-thumb{background-color:var(--thumb-color)}.range .range__control:not(:disabled)::-webkit-slider-thumb:active{background-color:var(--thumb-color);cursor:grabbing}.range .range__control::-moz-focus-outer{border:0}.range .range__control::-moz-range-track{width:100%;height:var(--track-height);background-color:var(--six-progress-track-color);border-radius:3px;border:none}.range .range__control::-moz-range-progress{height:var(--track-height);border-radius:3px;background-color:var(--track-color);border:none}.range .range__control::-moz-range-thumb{border:none;height:var(--thumb-size);width:var(--thumb-size);border-radius:50%;background-color:var(--thumb-color);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) box-shadow, var(--six-transition-fast) transform;cursor:pointer}.range .range__control:not(:disabled)::-moz-range-thumb:hover{background-color:var(--thumb-color)}.range .range__control:not(:disabled):focus::-moz-range-thumb{background-color:var(--thumb-color)}.range .range__control:not(:disabled)::-moz-range-thumb:active{background-color:var(--thumb-color);cursor:grabbing}.range .range__control:focus{outline:none}.range .range__control:disabled::-webkit-slider-thumb{cursor:not-allowed;color:var(--six-color-web-rock-300);border-color:var(--six-color-web-rock-300);background-color:var(--six-color-web-rock-300)}.range .range__control:disabled::-moz-range-thumb{cursor:not-allowed;color:var(--six-color-web-rock-300);border-color:var(--six-color-web-rock-300);background-color:var(--six-color-web-rock-300)}.range__tooltip{position:absolute;z-index:var(--six-z-index-tooltip);left:1px;border-radius:var(--six-border-radius-medium);background-color:var(--six-color-web-rock-900);font-family:var(--six-font-family);font-size:var(--six-tooltip-font-size);font-weight:var(--six-tooltip-font-weight);line-height:var(--six-tooltip-line-height);color:var(--six-color-white);opacity:0;padding:var(--six-spacing-xxx-small) var(--six-spacing-xx-small);transition:var(--six-transition-fast) opacity;pointer-events:none}.range__tooltip::after{content:"";position:absolute;width:0;height:0;left:50%;margin-left:calc(-1 * var(--six-tooltip-arrow-size))}.range--tooltip-visible .range__tooltip{opacity:1}.range--tooltip-top .range__tooltip{top:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-top .range__tooltip::after{border-top:var(--six-tooltip-arrow-size) solid var(--six-color-web-rock-900);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent;top:100%}.range--tooltip-bottom .range__tooltip{bottom:calc(-1 * var(--thumb-size) - var(--tooltip-offset-y))}.range--tooltip-bottom .range__tooltip::after{border-bottom:var(--six-tooltip-arrow-size) solid var(--six-color-web-rock-900);border-left:var(--six-tooltip-arrow-size) solid transparent;border-right:var(--six-tooltip-arrow-size) solid transparent;bottom:100%}';let n=0;const g=class{constructor(t){p(this,t),this.sixChange=h(this,"six-range-change",7),this.sixBlur=h(this,"six-range-blur",7),this.sixFocus=h(this,"six-range-focus",7),this.inputId=`input-${++n}`,this.labelId=`input-label-${n}`,this.helpTextId=`input-help-text-${n}`,this.errorTextId=`input-error-text-${n}`,this.eventListeners=new m,this.handleInput=()=>{this.nativeInput!=null&&this.update(parseFloat(this.nativeInput.value)),requestAnimationFrame(()=>{this.sixChange.emit()})},this.handleBlur=()=>{var o;this.hasFocus=!1,this.hasTooltip=!1,this.sixBlur.emit(),this.nativeInput!=null&&((o=this.resizeObserver)===null||o===void 0||o.unobserve(this.nativeInput))},this.handleFocus=()=>{var o;this.hasFocus=!0,this.hasTooltip=!0,this.sixFocus.emit(),this.nativeInput!=null&&((o=this.resizeObserver)===null||o===void 0||o.observe(this.nativeInput))},this.handleSlotChange=()=>{this.hasHelpTextSlot=c(this.host,"help-text"),this.hasLabelSlot=c(this.host,"label")},this.handleTouchStart=()=>{this.setFocus()},this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.hasTooltip=!1,this.name="",this.value=0,this.required=!1,this.helpText="",this.disabled=!1,this.label="",this.errorText="",this.invalid=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=o=>o.toString()}handleLabelChange(){this.handleSlotChange()}handleValueChange(){this.update()}connectedCallback(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.addEventListener("slotchange",this.handleSlotChange)}componentWillLoad(){this.update(),this.handleSlotChange()}componentDidLoad(){this.nativeInput!=null&&(this.update(),this.resizeObserver=new ResizeObserver(()=>this.update()))}disconnectedCallback(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}async setFocus(t){var o;(o=this.nativeInput)===null||o===void 0||o.focus(t)}async removeFocus(){var t;(t=this.nativeInput)===null||t===void 0||t.blur()}syncTooltip(t,o,e){if(this.tooltip!=="none"&&this.nativeInput!=null&&this.output!=null){const r=Math.max(0,(e-t)/(o-t)),a=this.nativeInput.offsetWidth,i=this.output.offsetWidth,l=getComputedStyle(this.nativeInput).getPropertyValue("--thumb-size"),u=`calc(${a*r}px - calc(calc(${r} * ${l}) - calc(${l} / 2)))`;this.output.style.transform=`translateX(${u})`,this.output.style.marginLeft=`-${i/2}px`}}isFirefox(){return navigator.userAgent.toLowerCase().indexOf("firefox")>-1}update(t){var o,e;t!=null&&(this.value=t);const r=(o=Number(this.min))!==null&&o!==void 0?o:0,a=(e=Number(this.max))!==null&&e!==void 0?e:0;let i;const l=parseFloat(this.value);isNaN(l)?i=this.getDefaultValue(r,a):i=l,this.nativeInput!=null?(this.nativeInput.value=i.toString(),this.value=parseFloat(this.nativeInput.value)):this.value=i,this.calculateColorRunnableTrack(r,a,this.value),this.syncTooltip(r,a,this.value)}getDefaultValue(t,o){return o<t?t:t+(o-t)/2}calculateColorRunnableTrack(t,o,e){if(!this.isFirefox()&&this.nativeInput!=null){const r=Math.ceil((e-t)/(o-t)*100);this.nativeInput.style.background="-webkit-linear-gradient(left, var(--track-color) 0%, var(--track-color) "+r+"%, var(--six-color-web-rock-300) "+r+"%)"}}render(){return s(b,{inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,size:"medium",errorTextId:this.errorTextId,errorText:this.errorText,disabled:this.disabled,required:this.required,displayError:this.invalid},s("div",{part:"base",class:{range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"},onTouchStart:this.handleTouchStart},s("input",{part:"input",ref:t=>this.nativeInput=t,type:"range",class:"range__control",name:this.name,disabled:this.disabled,min:this.min,max:this.max,step:this.step,value:this.value,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur}),this.tooltip!=="none"&&s("output",{part:"tooltip",ref:t=>this.output=t,class:"range__tooltip"},this.tooltipFormatter(this.value))))}get host(){return d(this)}static get watchers(){return{label:["handleLabelChange"],errorText:["handleLabelChange"],helpText:["handleLabelChange"],value:["handleValueChange"],min:["handleValueChange"],max:["handleValueChange"]}}};g.style=v;export{g as six_range};
