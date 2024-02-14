"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[5333],{5333:(V,v,c)=>{c.r(v),c.d(v,{six_select:()=>b});var d=c(5861),r=c(5371),u=c(5730),C=c(4127),k=c(7418),f=c(3185),S=c(5898);let m=0;const b=class{constructor(e){var s=this;(0,r.r)(this,e),this.sixChange=(0,r.c)(this,"six-select-change",7),this.sixFocus=(0,r.c)(this,"six-select-focus",7),this.sixBlur=(0,r.c)(this,"six-select-blur",7),this.inputId="select-"+ ++m,this.labelId=`select-label-${m}`,this.helpTextId=`select-help-text-${m}`,this.errorTextId=`select-error-text-${m}`,this.eventListeners=new k.E,this.activeItemIndex=-1,this.resizeObserver=new ResizeObserver(()=>this.updateDisplayedValues()),this.handleBlur=()=>{this.hasFocus=!1,this.sixBlur.emit()},this.handleFocus=()=>{this.hasFocus=!0,this.sixFocus.emit()},this.handleClearClick=function(){var t=(0,d.Z)(function*(l){var a;l.stopPropagation(),yield s.clearValues(),yield null===(a=s.dropdown)||void 0===a?void 0:a.hide(),s.sixChange.emit({value:s.value,isSelected:!0})});return function(l){return t.apply(this,arguments)}}(),this.handleKeyDown=t=>{var l,a,i,n;if(this.virtualScroll||this.autocomplete||["Control","Escape"].includes(t.key))return;const o=this.getVisibleItems();if(this.isOpen&&this.multiple&&"KeyA"===t.code&&t.ctrlKey)return t.preventDefault(),void this.selectAll();if("Tab"!==t.key){if(" "!==t.key||this.multiple){if(this.activeItemIndex>=0&&["Enter"," "].includes(t.key)){const h=o.at(this.activeItemIndex);return t.preventDefault(),void h?.click()}["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(this.isOpen||null===(a=this.dropdown)||void 0===a||a.show(),o.length>0&&(t.preventDefault(),"ArrowDown"===t.key?this.activeItemIndex++:"ArrowUp"===t.key?this.activeItemIndex--:"Home"===t.key?this.activeItemIndex=0:"End"===t.key&&(this.activeItemIndex=o.length-1),this.activeItemIndex<0&&(this.activeItemIndex=0),this.activeItemIndex>o.length-1&&(this.activeItemIndex=o.length-1),null===(i=o.at(this.activeItemIndex))||void 0===i||i.setFocus())),this.isOpen||(t.stopPropagation(),t.preventDefault(),null===(n=this.dropdown)||void 0===n||n.show())}}else this.isOpen&&(null===(l=this.dropdown)||void 0===l||l.hide())},this.handleLabelClick=()=>{var t;null===(t=this.box)||void 0===t||t.focus()},this.handleMenuSelect=t=>{const l=t.detail.item;this.multiple?l.checked=!l.checked:(this.getItems().forEach(a=>a.checked=!1),l.checked=!0),this.syncValueFromItems(),this.sixChange.emit({value:this.value,isSelected:!0})},this.handleMenuShow=t=>{if(this.disabled)return void t.preventDefault();this.activeItemIndex=-1;const l=this.getItems();l.forEach(i=>i.style.display="unset");const a=_(this.getValueAsArray(),l);!this.virtualScroll&&this.multiple&&(a.forEach(i=>i.style.display="none"),this.selectionContainerItems=a.map(i=>(0,r.h)("six-menu-item",{key:i.value,checked:!0,value:i.value,checkType:this.multiple?"checkbox":"check",onClick:n=>{if(n.stopPropagation(),!this.disabled){const o=n.target,h=o.checked;o.checked=!h,i.checked=!h,this.syncValueFromItems(),this.sixChange.emit({value:this.value,isSelected:!0})}}},this.getItemLabel(i)))),this.isOpen=!0},this.handleMenuHide=()=>{this.isOpen=!1},this.handleSlotChange=()=>{this.hasHelpTextSlot=(0,u.h)(this.host,"help-text"),this.hasLabelSlot=(0,u.h)(this.host,"label"),this.hasErrorTextSlot=(0,u.h)(this.host,"error-text"),this.syncItemsFromValue()},this.hasFocus=!1,this.hasHelpTextSlot=!1,this.hasLabelSlot=!1,this.hasErrorTextSlot=!1,this.isOpen=!1,this.displayedValues=[],this.selectionContainerItems=[],this.multiple=!1,this.selectAllButton=!1,this.selectAllText=void 0,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.filterPlaceholder=void 0,this.filterDebounce=void 0,this.size="medium",this.hoist=!1,this.value="",this.pill=!1,this.helpText="",this.required=!1,this.clearable=!1,this.label="",this.errorText="",this.errorTextCount=void 0,this.invalid=!1,this.line=!1,this.filter=!1,this.asyncFilter=!1,this.autocomplete=!1,this.inputDebounce=f.D,this.options=null,this.virtualScroll=!1}handleDisabledChange(){var e;this.disabled&&this.isOpen&&(null===(e=this.dropdown)||void 0===e||e.hide())}handleLabelChange(){this.handleSlotChange()}handleMultipleChange(){const e=this.getValueAsArray();this.value=this.multiple?e:e[0]||"",this.syncItemsFromValue()}handleValueChange(){var e=this;return(0,d.Z)(function*(){e.multiple&&!Array.isArray(e.value)&&(e.value=[]),!e.multiple&&"string"!=typeof e.value&&(e.value=""),yield e.syncItemsFromValue()})()}connectedCallback(){this.virtualScroll&&null===this.options&&console.error("Options must be defined when using virtual scrolling"),this.init()}componentWillLoad(){this.handleSlotChange(),this.multiple&&null!=this.value&&(this.value=this.getValueAsArray())}componentDidLoad(){if(this.init(),requestAnimationFrame(()=>this.syncItemsFromValue()),this.autocomplete&&null!=this.autocompleteInput){const e=this.autocompleteInput;this.eventListeners.add(e,"six-input-input",(0,f.a)(s=>{this.value=e.value,this.sixChange.emit({value:this.value,isSelected:!1}),s.stopPropagation()},this.inputDebounce)),e.value=Array.isArray(this.value)?this.value.join(","):this.value}}disconnectedCallback(){var e;this.resizeObserver.disconnect(),null===(e=this.host.shadowRoot)||void 0===e||e.removeEventListener("slotchange",this.handleSlotChange),this.eventListeners.removeAll()}setFocus(e){var s=this;return(0,d.Z)(function*(){var t;s.hasFocus=!0,null===(t=s.box)||void 0===t||t.focus(e)})()}init(){var e;null===(e=this.host.shadowRoot)||void 0===e||e.addEventListener("slotchange",this.handleSlotChange),this.eventListeners.forward("six-select-change","change",this.host),this.eventListeners.forward("six-select-blur","blur",this.host),this.eventListeners.forward("six-select-focus","focus",this.host),this.displayValuesContainer&&this.resizeObserver.observe(this.displayValuesContainer)}getItemLabel(e){var s,t;const l=null===(s=e.shadowRoot)||void 0===s?void 0:s.querySelector("slot:not([name])");return null!=l?(0,u.a)(l):null!==(t=e.textContent)&&void 0!==t?t:""}getItems(){return null!==this.options&&null!=this.menu&&null!=this.menu.shadowRoot?[...this.menu.shadowRoot.querySelectorAll("six-menu-item")]:[...this.host.querySelectorAll("six-menu-item")]}getVisibleItems(){return[...this.getSelectionContainerItems(),...this.getItems()].filter(t=>"none"!==t.style.display)}getSelectionContainerItems(){var e;return[...(null===(e=this.host.shadowRoot)||void 0===e?void 0:e.querySelectorAll("six-menu-item"))||[]]}getValueAsArray(){return(Array.isArray(this.value)?this.value:""===this.value?[]:[this.value]).map(String)}clearValues(){var e=this;return(0,d.Z)(function*(){e.value=e.multiple?[]:"",e.selectionContainerItems=[],yield e.syncItemsFromValue()})()}selectAll(){const e=this.getVisibleItems(),s=this.hasDeselectedOptions();e.filter(l=>!l.disabled).forEach(l=>l.checked=s);const t=e.filter(l=>l.checked).map(l=>l.value);this.value=s?t:[],this.sixChange.emit({value:this.value,isSelected:!0})}syncItemsFromValue(){var e=this;return(0,d.Z)(function*(){const s=e.getSelectionContainerItems(),t=e.getItems(),l=e.getValueAsArray();s.forEach(i=>{i.checkType=e.multiple?"checkbox":"check",i.checked=l.includes(i.value)}),t.forEach(i=>{i.checkType=e.multiple?"checkbox":"check",i.checked=l.includes(i.value)});const a=_(e.getValueAsArray(),t);e.displayedValues=a.map(i=>e.getItemLabel(i)),e.autocomplete&&null!=e.autocompleteInput&&(e.autocompleteInput.value=Array.isArray(e.value)?e.value.join(","):e.value),requestAnimationFrame(()=>{e.updateDisplayedValues()})})()}syncValueFromItems(){const s=this.getItems().filter(t=>t.checked).map(t=>t.value);this.value=this.multiple?s:s.length>0?s[0]:""}updateDisplayedValues(){var e,s;const t=[...null!==(s=null===(e=this.displayValuesContainer)||void 0===e?void 0:e.querySelectorAll(".display-value"))&&void 0!==s?s:[]];if(null==this.displayValuesContainer||0===t.length||null==this.overflowCount)return;t.forEach(o=>{I(o),x(o)});const l=t[t.length-1].querySelector(".separator");if(null==l)return;let a=p(this.displayValuesContainer)+p(l),{fitCount:i,overflowCount:n}=g(t,a);0===n?(function D(e){e.classList.add("overflow-count-hidden")}(this.overflowCount),y(t,i)):(w(this.overflowCount,n+1),function z(e){e.classList.remove("overflow-count-hidden")}(this.overflowCount),a-=p(this.overflowCount),({fitCount:i,overflowCount:n}=g(t,a)),w(this.overflowCount,n),y(t,i))}render(){var e;const s=this.hasSelection(),t=this.getItems(),l=t.length>0,a=this.hasDeselectedOptions();let i=!1,n=l;return this.clearable&&s&&(i=!0,n=!1),(0,r.h)(C.F,{inputId:this.inputId,label:this.label,labelId:this.labelId,hasLabelSlot:this.hasLabelSlot,helpTextId:this.helpTextId,helpText:this.helpText,hasHelpTextSlot:this.hasHelpTextSlot,errorTextId:this.errorTextId,errorText:this.errorText,errorTextCount:this.errorTextCount,hasErrorTextSlot:this.hasErrorTextSlot,size:this.size,onLabelClick:this.handleLabelClick,disabled:this.disabled,required:this.required,displayError:this.invalid},(0,r.h)("six-dropdown",{part:"base",ref:o=>this.dropdown=o,hoist:this.hoist,matchTriggerWidth:!0,closeOnSelect:!this.multiple,containingElement:this.host,disableHideOnEnterAndSpace:this.autocomplete,class:{select:!0,"select--open":this.isOpen,"select--empty":0===(null===(e=this.value)||void 0===e?void 0:e.length),"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--has-tags":this.multiple&&s,"select--placeholder-visible":0===this.displayedValues.length,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size,"select--pill":this.pill,"select--invalid":this.invalid},onKeyDown:this.handleKeyDown,"onSix-dropdown-show":this.handleMenuShow,"onSix-dropdown-hide":this.handleMenuHide,filterPlaceholder:this.filterPlaceholder,filterDebounce:this.filterDebounce,filter:this.filter,asyncFilter:this.asyncFilter,virtualScroll:this.virtualScroll},(0,r.h)("div",{slot:"trigger",ref:o=>this.box=o,id:this.inputId,class:{select__box:!0,"select__box--line":this.line,"select__box--autocomplete":this.autocomplete},role:"combobox","aria-labelledby":this.labelId,"aria-describedby":this.helpTextId,"aria-haspopup":"true","aria-expanded":this.isOpen?"true":"false",tabIndex:this.disabled?-1:0,onBlur:this.handleBlur,onFocus:this.handleFocus},(0,r.h)("div",{class:"display__values",ref:o=>this.displayValuesContainer=o},this.displayedValues.length>0?(0,r.h)("span",{class:"display__values-and-counter"},(0,r.h)("span",{class:"display__values-values"},this.displayedValues.map(o=>(0,r.h)("span",{key:o,class:"display-value"},o,(0,r.h)("span",{class:{separator:!0}},", ")))),(0,r.h)("span",{ref:o=>this.overflowCount=o,class:"overflow-count"},"+10")):(0,r.h)("span",{class:"placeholder"},this.placeholder)),i&&(0,r.h)("six-icon-button",{exportparts:"base:clear-button",class:"select__clear",name:"clear",size:"small",onClick:this.handleClearClick,tabindex:"-1"}),n&&(0,r.h)("span",{part:"icon",class:"select__icon"},(0,r.h)("six-icon",{size:"medium"},"expand_more")),(0,r.h)("six-input",{ref:o=>this.autocompleteInput=o,class:{select__input:!0,"select__hidden-select":!this.autocomplete},"aria-hidden":"true",required:this.required,onFocus:this.handleFocus,clearable:this.clearable,placeholder:this.placeholder,pill:this.pill,disabled:this.disabled,size:this.size,tabIndex:-1})),(0,r.h)("div",{class:{"selection-container":!0,"selection-container--border":this.selectionContainerItems.length>0&&t.length!==this.selectionContainerItems.length}},this.selectionContainerItems),(0,r.h)("six-menu",{ref:o=>this.menu=o,part:"menu",class:{select__menu:!0,"select__menu--hidden":!l},"onSix-menu-item-selected":this.handleMenuSelect,items:this.options,virtualScroll:this.virtualScroll,"remove-box-shadow":!0,"disable-keyboard-handling":!0},(0,r.h)("slot",{onSlotchange:this.handleSlotChange})),this.multiple&&this.selectAllButton&&(0,r.h)("div",{class:"select-all",slot:"dropdown-footer"},(0,r.h)("six-button",{type:"link",onClick:()=>this.selectAll()},null==this.selectAllText?function L(e){switch((0,S.a)()){case"de":return e?"Alle ausw\xe4hlen":"Alle abw\xe4hlen";case"fr":return e?"Tout s\xe9lectionner":"Tout d\xe9s\xe9lectionner";case"it":return e?"Seleziona tutto":"Deseleziona tutto";case"en":return e?"Select all":"Deselect all";case"es":return e?"Seleccionar todo":"Deseleccionar todo"}}(a):this.selectAllText))))}hasSelection(){return this.multiple?this.value.length>0:""!==this.value}hasDeselectedOptions(){return this.getVisibleItems().some(e=>!e.disabled&&!e.checked)}get host(){return(0,r.g)(this)}static get watchers(){return{disabled:["handleDisabledChange"],helpText:["handleLabelChange"],errorText:["handleLabelChange"],label:["handleLabelChange"],multiple:["handleMultipleChange"],value:["handleValueChange"]}}};function _(e,s){return s.filter(t=>e.includes(t.value))}function p(e){return e.getBoundingClientRect().width}function g(e,s){let t=0,l=0;for(let i=0;i<e.length;i++){const o=p(e[i]);if(0===i&&o>s){l=1;break}if(t+=o,t>s)break;l+=1}return{fitCount:l,overflowCount:e.length-l}}function y(e,s){e.length>0&&(e.slice(0,s).forEach((t,l,a)=>{I(t),l===a.length-1?function T(e){var s;null===(s=e.querySelector(".separator"))||void 0===s||s.classList.add("separator--hidden")}(t):x(t)}),e.slice(s).forEach(t=>{(function E(e){e.classList.add("display-value--hidden")})(t),x(t)}))}function x(e){var s;null===(s=e.querySelector(".separator"))||void 0===s||s.classList.remove("separator--hidden")}function I(e){e.classList.remove("display-value--hidden")}function w(e,s){e.textContent=`+${s}`}b.style=':host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}.form-control .form-control__label{display:none}.form-control .form-control__help-text{display:none}.form-control .form-control__error-text{display:none;text-align:left}.form-control--has-label .form-control__label{display:inline-block;color:var(--six-input-label-color);font-weight:var(--six-font-weight-bold);margin-bottom:var(--six-spacing-x-small)}.form-control--has-label .form-control__label__required::after{color:var(--six-color-danger-800);content:"*";transform:scale(1.1);margin-left:var(--six-spacing-xxx-small);position:absolute}.form-control--has-label.form-control--small .form-control__label{font-size:var(--six-input-label-font-size-small)}.form-control--has-label.form-control--medium .form-control__label{font-size:var(--six-input-label-font-size-medium)}.form-control--has-label.form-control--large .form-control_label{font-size:var(--six-input-label-font-size-large)}.form-control--has-help-text .form-control__help-text{display:block;color:var(--six-input-help-text-color);margin-top:var(--six-spacing-x-small)}.form-control--has-help-text .form-control__help-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-help-text.form-control--small .form-control__help-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-help-text.form-control--medium .form-control__help-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-help-text.form-control--large .form-control__help-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--has-error-text .form-control__error-text{display:block;margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text .form-control__error-text ::slotted(*){margin-top:var(--six-spacing-xxx-small)}.form-control--has-error-text.form-control--small .form-control__error-text{font-size:var(--six-input-help-text-font-size-small)}.form-control--has-error-text.form-control--medium .form-control__error-text{font-size:var(--six-input-help-text-font-size-medium)}.form-control--has-error-text.form-control--large .form-control__error-text{font-size:var(--six-input-help-text-font-size-large)}.form-control--disabled .form-control__help-text{color:var(--six-input-help-text-color-disabled)}.form-control--disabled .form-control__label{color:var(--six-input-label-color-disabled)}.form-control--invalid:not(.form-control--disabled) .form-control__label{color:var(--six-input-label-color)}:host,.select{display:block}.select__box{display:inline-flex;align-items:center;justify-content:start;position:relative;width:100%;font-family:var(--six-font-family);font-weight:var(--six-input-font-weight);font-size:var(--six-input-font-size-medium);letter-spacing:var(--six-input-letter-spacing);background-color:var(--six-input-background-color);border:solid var(--six-border-width) var(--six-input-border-color);vertical-align:middle;transition:var(--six-transition-fast) color, var(--six-transition-fast) border, var(--six-transition-fast) box-shadow;cursor:pointer}.select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select__box--autocomplete{border:none;overflow:initial}.select:not(.select--disabled) .select__box:hover{background-color:var(--six-input-background-color-hover);color:var(--six-input-color-hover);border-bottom-color:var(--six-input-border-color-hover)}.select:not(.select--disabled) .select__box:hover:not(.select__box--line){border-color:var(--six-input-border-color-hover)}.select:not(.select--disabled) .select__box:focus{background-color:var(--six-input-background-color-focus);outline:none;color:var(--six-input-color-focus);border-bottom-color:var(--six-input-border-color-focus);box-shadow:0 1px 0 0 var(--six-input-border-color-focus)}.select:not(.select--disabled) .select__box:focus:not(.select__box--line){border-color:var(--six-input-border-color-focus);box-shadow:var(--six-input-focus-shadow)}.select--disabled .select__box{background-color:var(--six-input-background-color-disabled);color:var(--six-input-color-disabled);cursor:not-allowed;outline:none}.select--disabled .select__box:not(.select__box--line){border-color:var(--six-input-border-color-disabled)}.select--disabled .select__clear{pointer-events:none}.select--invalid:not(.select--disabled):not(.select--focused) .select__box{border-bottom-color:var(--six-input-border-color-danger)}.select--invalid:not(.select--disabled):not(.select--focused) .select__box:not(.input--line){border-color:var(--six-input-border-color-danger)}.display__values{display:flex;flex:1 1 auto;align-items:center;user-select:none;overflow:hidden;scrollbar-width:none;-ms-overflow-style:none}.display__values::-webkit-scrollbar{width:0;height:0}.display__values-values{flex:0 1 auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.display__values-and-counter{display:flex;overflow:hidden}.select__clear{flex-shrink:0;flex-grow:0;display:inline}.select__icon{flex-shrink:0;flex-grow:0;display:inline;transition:var(--six-transition-medium) transform ease}.select--open .select__icon{transform:rotate(-180deg)}.placeholder{color:var(--six-input-placeholder-color)}.select--disabled .placeholder{color:var(--six-input-placeholder-color-disabled)}.select__hidden-select{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.select__input{position:absolute;top:0;left:0;width:100%;height:100%}.select--small .select__box{border-radius:var(--six-input-border-radius-small);font-size:var(--six-input-font-size-small);min-height:var(--six-height-small)}.select--small .select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select--small .display__values{margin:0 0 0 var(--six-input-spacing-small)}.select--small .select__clear{margin-right:var(--six-spacing-xxx-small)}.select--small .select__icon{margin-right:var(--six-spacing-x-small)}.select--medium .select__box{border-radius:var(--six-input-border-radius-medium);font-size:var(--six-input-font-size-medium);min-height:var(--six-height-medium)}.select--medium .select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select--medium .display__values{margin:0 0 0 var(--six-input-spacing-medium)}.select--medium .select__clear{margin-right:var(--six-spacing-xxx-small)}.select--medium .select__icon{margin-right:var(--six-spacing-x-small)}.select--large .select__box{border-radius:var(--six-input-border-radius-large);font-size:var(--six-input-font-size-large);min-height:var(--six-height-large)}.select--large .select__box--line{border:none;border-bottom:solid var(--six-border-width) var(--six-input-border-color)}.select--large .display__values{margin:0 0 0 var(--six-input-spacing-large)}.select--large .select__clear{margin-right:var(--six-spacing-xxx-small)}.select--large .select__icon{margin-right:var(--six-spacing-x-small)}.select--pill.select--small .select__box{border-radius:var(--six-height-small)}.select--pill.select--medium .select__box{border-radius:var(--six-height-medium)}.select--pill.select--large .select__box{border-radius:var(--six-height-large)}.select__menu{width:100%}.select__menu--hidden{display:none}six-icon-button::part(base){padding-top:0;padding-bottom:0}.selection-container--border{border-bottom:solid var(--six-border-width) var(--six-menu-divider-color);padding-top:var(--six-spacing-xx-small);padding-bottom:var(--six-spacing-xx-small)}.display-value--hidden{display:none}.overflow-count{color:var(--six-color-web-rock-600);padding-left:var(--six-spacing-x-small)}.overflow-count-hidden{display:none}.separator--hidden{display:none}.select-all{border-top:1px solid var(--six-color-web-rock-300);display:flex;justify-content:end}'}}]);