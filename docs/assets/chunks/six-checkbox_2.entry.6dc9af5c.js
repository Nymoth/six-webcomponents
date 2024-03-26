import{r as l,c as r,h as t,g as a}from"../app.c501cded.js";import{F as c}from"./form-control-40c37714.97a5d85f.js";import{h as n,a as h}from"./slot-56531341.2ae944bc.js";import{E as d}from"./event-listeners-706d4309.8644075f.js";import"./framework.57535aa4.js";import"./theme.9138ed2f.js";const x=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*";transform:scale(1.1);margin-left:var(--six-spacing-xxx-small);position:absolute}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host{display:inline-block}.checkbox{display:inline-flex;align-items:center;font-family:var(--six-font-family);font-size:var(--six-input-font-size-medium);font-weight:var(--six-input-font-weight);color:var(--six-input-color);vertical-align:middle;cursor:pointer}.checkbox--focused .checkbox__control{outline:var(--six-focus-ring);outline-offset:0}.checkbox__control{position:relative;display:inline-flex;align-items:center;justify-content:center;width:var(--six-selection-control-toggle-size);min-width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size);border:solid var(--six-border-width) var(--six-input-border-color);border-radius:0;background-color:var(--six-input-background-color);color:var(--six-checkbox-color);transition:var(--six-transition-fast) border-color, var(--six-transition-fast) background-color, var(--six-transition-fast) color, var(--six-transition-fast) box-shadow}.checkbox__control input[type=checkbox]{position:absolute;opacity:0;padding:0;margin:0;pointer-events:none;min-width:var(--six-selection-control-toggle-size)}.checkbox__control .checkbox__icon{display:inline-flex;width:var(--six-selection-control-toggle-size);height:var(--six-selection-control-toggle-size)}.checkbox__control .checkbox__icon svg{width:100%;height:100%}.checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--six-input-border-color-hover)}.checkbox--checked .checkbox__control,.checkbox--indeterminate .checkbox__control{border-color:var(--six-selection-control-color);background-color:var(--six-selection-control-color)}.checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,.checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover{border-color:var(--six-input-border-color-focus);background-color:var(--six-input-border-color-focus)}.checkbox--disabled{cursor:not-allowed;color:var(--six-input-color-disabled)}.checkbox--disabled .checkbox__control{border-color:var(--six-input-border-color-disabled)}.checkbox--disabled.checkbox--checked .checkbox__control,.checkbox--disabled.checkbox--indeterminate .checkbox__control{background-color:var(--six-selection-control-color-disabled)}.checkbox--invalid:not(.checkbox--disabled) .checkbox__control{border-color:var(--six-input-border-color-danger)}.checkbox__text{line-height:var(--six-selection-control-toggle-size);margin-left:0.5em;user-select:none}',u=x;let i=0;const b=class{constructor(e){l(this,e),this.sixBlur=r(this,"six-checkbox-blur",7),this.sixChange=r(this,"six-checkbox-change",7),this.sixFocus=r(this,"six-checkbox-focus",7),this.inputId=`checkbox-${++i}`,this.labelId=`checkbox-label-${i}`,this.textId=`checkbox-text-${i}`,this.errorTextId=`input-error-text-${i}`,this.eventListeners=new d,this.handleChange=()=>{this.nativeInput!=null&&(this.checked=this.nativeInput.checked,this.indeterminate=!1,this.sixChange.emit())},this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleMouseDown=o=>{var s;o.preventDefault(),(s=this.nativeInput)===null||s===void 0||s.focus()},this.hasFocus=!1,this.hasLabelSlot=!1,this.hasErrorSlot=!1,this.name="",this.value="on",this.disabled=!1,this.required=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.checked=!1,this.indeterminate=!1}handleCheckedChange(){this.nativeInput!=null&&(this.nativeInput.checked=this.checked,this.checked=this.nativeInput.checked,this.nativeInput.indeterminate=this.indeterminate)}handleLabelChange(){this.handleSlotChange()}connectedCallback(){var e;(e=this.host.shadowRoot)===null||e===void 0||e.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-checkbox-change","change",this.host),this.eventListeners.forward("six-checkbox-blur","blur",this.host),this.eventListeners.forward("six-checkbox-focus","focus",this.host)}disconnectedCallback(){var e;(e=this.host.shadowRoot)===null||e===void 0||e.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}componentWillLoad(){this.handleSlotChange()}componentDidLoad(){const e=this.nativeInput;e!=null&&(e.indeterminate=this.indeterminate)}async setFocus(e){var o;(o=this.nativeInput)===null||o===void 0||o.focus(e)}async removeFocus(){var e;(e=this.nativeInput)===null||e===void 0||e.blur()}handleSlotChange(){this.hasLabelSlot=n(this.host,"label"),this.hasErrorSlot=n(this.host,"error-text")}render(){return t(c,{key:"3d86769243701a88970d140cb59d8618006a826c",inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,errorTextId:this.errorTextId,hasErrorTextSlot:this.hasErrorSlot,errorText:this.errorText,errorTextCount:this.errorTextCount,size:"medium",disabled:this.disabled,required:this.required,displayError:this.invalid},t("label",{key:"29a09dd1e61162652a4c204a47efc21059bfd1be",part:"base",class:{checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--invalid":this.invalid,"checkbox--indeterminate":this.indeterminate},htmlFor:this.inputId,onMouseDown:this.handleMouseDown},t("span",{key:"2ef4936f11b18f13719143b8e9c728a94eba9776",part:"control",class:"checkbox__control"},this.checked&&t("span",{part:"checked-icon",class:"checkbox__icon"},t("svg",{viewBox:"0 0 16 16"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},t("g",{stroke:"currentColor","stroke-width":"2"},t("g",{transform:"translate(3.428571, 3.428571)"},t("path",{d:"M0,5.71428571 L3.42857143,9.14285714"}),t("path",{d:"M9.14285714,0 L3.42857143,9.14285714"})))))),!this.checked&&this.indeterminate&&t("span",{part:"indeterminate-icon",class:"checkbox__icon"},t("svg",{viewBox:"0 0 16 16"},t("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round"},t("g",{stroke:"currentColor","stroke-width":"2"},t("g",{transform:"translate(2.285714, 6.857143)"},t("path",{d:"M10.2857143,1.14285714 L1.14285714,1.14285714"})))))),t("input",{key:"d29de22f85a467a5b479c762e404193285ad50b5",ref:e=>this.nativeInput=e,id:this.inputId,type:"checkbox",name:this.name,value:this.value,checked:this.checked,disabled:this.disabled,required:this.required,role:"checkbox","aria-checked":this.checked?"true":"false","aria-labelledby":this.labelId,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus})),t("span",{key:"39c4d70a0dc0e5e0bad96ddc9d192e7482eeb736",part:"text",id:this.textId,class:"checkbox__text"},t("slot",{key:"5c97a9611282ee621e4e8f5eadb5fd01891b73e2"}))))}get host(){return a(this)}static get watchers(){return{checked:["handleCheckedChange"],indeterminate:["handleCheckedChange"],errorText:["handleLabelChange"],label:["handleLabelChange"]}}};b.style=u;const m=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{display:block}:focus{outline:none}.menu-item{position:relative;display:flex;align-items:stretch;font-family:var(--six-font-sans);font-size:var(--six-font-size-small);font-weight:var(--six-font-weight-normal);line-height:var(--six-line-height-normal);letter-spacing:var(--six-letter-spacing-normal);text-align:left;color:var(--six-input-color);border-radius:var(--six-border-radius-medium);padding:var(--six-spacing-x-small) var(--six-spacing-medium);transition:var(--six-transition-fast) fill;user-select:none;white-space:nowrap;cursor:pointer}.menu-item.menu-item--focused:not(.menu-item--disabled){outline:none;background-color:var(--six-menu-item-background-color)}.menu-item.menu-item--active:not(.menu-item--disabled){outline:none;background-color:var(--six-menu-item-background-color)}.menu-item.menu-item--disabled{outline:none;color:var(--six-input-color-disabled);cursor:not-allowed}.menu-item .menu-item__label{flex:1 1 auto;align-self:center}.menu-item .menu-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__prefix ::slotted(:last-child){margin-right:0.5em}.menu-item .menu-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__suffix ::slotted(:first-child){margin-left:0.5em}.menu-item .menu-item__check{flex:0 0 auto;display:flex;align-items:center;margin-left:var(--six-spacing-small);visibility:hidden;font-size:inherit}.menu-item .menu-item__checkbox{margin-top:-1px}.menu-item--checked .menu-item__check{visibility:visible}",f=m,p=class{constructor(e){l(this,e),this.handleCheckboxChange=()=>{this.host.dispatchEvent(new Event("click",{bubbles:!0,cancelable:!0}))},this.hasFocus=!1,this.active=!1,this.checkType="check",this.checked=!1,this.value="",this.disabled=!1}connectedCallback(){this.handleBlur=this.handleBlur.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.handleCheckboxChange=this.handleCheckboxChange.bind(this)}async setFocus(e){var o;(o=this.menuItem)===null||o===void 0||o.focus(e)}async removeFocus(){var e;(e=this.menuItem)===null||e===void 0||e.blur()}getTextLabel(){return Promise.resolve(h(this.defaultSlot))}handleBlur(){this.hasFocus=!1}handleFocus(){this.hasFocus=!0}handleMouseEnter(){this.active=!0}handleMouseLeave(){this.active=!1,this.hasFocus=!1}render(){return t("div",{key:"a91c841a6fac9e807f623cd337d9902a6ee98aaa",ref:e=>this.menuItem=e,part:"base",class:{"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--focused":this.hasFocus,"menu-item--active":this.active},role:"menuitem","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false",tabIndex:this.disabled?void 0:0,onFocus:this.handleFocus,onBlur:this.handleBlur,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.checkType==="checkbox"&&t("span",{class:"menu-item__checkbox"},t("six-checkbox",{"onSix-checkbox-change":this.handleCheckboxChange,disabled:this.disabled,checked:this.checked})),t("span",{key:"5d4fa9c6c86e1506703cdbe0d295e753ba251302",part:"prefix",class:"menu-item__prefix"},t("slot",{key:"619b262517cddb822a90e7251ce720c8bee09bb9",name:"prefix"})),t("span",{key:"94c554dec6b00e361f84ab42f27c06c94908f9e7",part:"label",class:"menu-item__label"},t("slot",{key:"5e0dded9fd06cd4b1bf3cad28025f97da055326b",ref:e=>this.defaultSlot=e})),t("span",{key:"bd328a4e14592019cc68fc12ef66c9e2561f561f",part:"suffix",class:"menu-item__suffix"},t("slot",{key:"7a46bc384827392a4bc55e424d926de1f8d36766",name:"suffix"})),this.checkType==="check"&&t("span",{part:"checked-icon",class:"menu-item__check"},t("six-icon",{size:"small","aria-hidden":"true"},"check")))}get host(){return a(this)}};p.style=f;export{b as six_checkbox,p as six_menu_item};
