import{r as l,c as i,h as o,g as a}from"../app.24012234.js";import{E as n}from"./event-listeners-f6e5b0ab.8644075f.js";import{F as h}from"./form-control-079f7fb6.53672357.js";import{h as c}from"./slot-ad36df3a.ca288e58.js";import"./framework.2094cf97.js";import"./theme.38dd5241.js";const d=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*";transform:scale(1.1);margin-left:var(--six-spacing-xxx-small);position:absolute}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{--height:var(--six-selection-control-toggle-size);--thumb-size:calc(var(--six-selection-control-toggle-size) - 4px);--width:calc(var(--height) * 2);display:inline-block}.switch{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.switch__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--width);height:var(--height);background-color:var(--six-selection-control-color-disabled);border-radius:var(--height);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color}.switch__control .switch__thumb{width:var(--thumb-size);height:var(--thumb-size);background-color:var(--six-input-background-color);border-radius:50%;transform:translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));transition:var(--six-transition-fast) transform ease, var(--six-transition-fast) background-color, var(--six-transition-fast) border-color, var(--six-transition-fast) box-shadow}.switch__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none}.switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover{background-color:var(--six-input-border-color-hover)}.switch--checked .switch__control{background-color:var(--six-selection-control-color)}.switch--checked .switch__control .switch__thumb{background-color:var(--six-color-white);transform:translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2))}.switch.switch--checked:not(.switch--disabled) .switch__control:hover{background-color:var(--six-input-border-color-focus)}.switch--disabled{cursor:not-allowed;color:var(--six-selection-control-color-disabled)}.switch--disabled .switch__control{background-color:var(--six-selection-control-color-disabled)}.switch--disabled.switch--checked .switch__control{background-color:var(--six-selection-control-color-disabled)}.switch__label{line-height:var(--height);margin-left:0.5em;user-select:none}';let s=0;const m=class{constructor(t){l(this,t),this.sixBlur=i(this,"six-switch-blur",7),this.sixChange=i(this,"six-switch-change",7),this.sixFocus=i(this,"six-switch-focus",7),this.switchId=`switch-${++s}`,this.labelId=`switch-label-${s}`,this.errorTextId=`input-error-text-${s}`,this.eventListeners=new n,this.handleSlotChange=()=>{this.hasErrorTextSlot=c(this.host,"error-text")},this.handleClick=()=>{this.inputElement!=null&&(this.checked=this.inputElement.checked,this.sixChange.emit(this.checked))},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit(this.checked)},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleKeyDown=e=>{e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.sixChange.emit(this.checked)),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.sixChange.emit(this.checked))},this.handleMouseDown=e=>{var r;e.preventDefault(),(r=this.inputElement)===null||r===void 0||r.focus()},this.hasFocus=!1,this.hasErrorTextSlot=!1,this.name="",this.value="on",this.disabled=!1,this.required=!1,this.checked=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1}componentWillLoad(){this.handleSlotChange()}handleCheckedChange(){this.inputElement!=null&&(this.inputElement.checked=this.checked,this.checked=this.inputElement.checked)}connectedCallback(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-switch-change","change",this.host),this.eventListeners.forward("six-switch-blur","blur",this.host),this.eventListeners.forward("six-switch-focus","focus",this.host)}disconnectedCallback(){var t;(t=this.host.shadowRoot)===null||t===void 0||t.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}handleLabelChange(){this.handleSlotChange()}async setFocus(t){var e;(e=this.inputElement)===null||e===void 0||e.focus(t)}async removeFocus(){var t;(t=this.inputElement)===null||t===void 0||t.blur()}render(){return o(h,{inputId:this.switchId,label:this.label,labelId:this.labelId,hasLabelSlot:!1,errorTextId:this.errorTextId,errorText:this.errorText,errorTextCount:this.errorTextCount,hasErrorTextSlot:this.hasErrorTextSlot,size:"medium",disabled:this.disabled,required:this.required,displayError:this.invalid},o("label",{part:"base",htmlFor:this.switchId,class:{switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus},onMouseDown:this.handleMouseDown},o("span",{part:"control",class:"switch__control"},o("span",{part:"thumb",class:"switch__thumb"}),o("input",{ref:t=>this.inputElement=t,id:this.switchId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"switch","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onClick:this.handleClick,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown})),o("span",{part:"label",id:this.labelId,class:"switch__label"},o("slot",null))))}get host(){return a(this)}static get watchers(){return{checked:["handleCheckedChange"],errorText:["handleLabelChange"],label:["handleLabelChange"]}}};m.style=d;export{m as six_switch};
