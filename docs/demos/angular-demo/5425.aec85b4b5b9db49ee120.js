(self.webpackChunksix_app=self.webpackChunksix_app||[]).push([[5425],{3223:(t,e,n)=>{"use strict";n.d(e,{gN:()=>G,qu:()=>Vt,u:()=>ft,sg:()=>pt,u5:()=>vt,JU:()=>p,JJ:()=>I,JL:()=>Y,UX:()=>Ct,Q7:()=>mt,kI:()=>b,_Y:()=>ut});var r=n(5366),i=n(1116),s=n(8318),o=n(8470),a=n(9996),l=n(2056),u=n(9764);function h(t,e){return new s.y(n=>{const r=t.length;if(0===r)return void n.complete();const i=new Array(r);let s=0,o=0;for(let a=0;a<r;a++){const l=(0,u.D)(t[a]);let h=!1;n.add(l.subscribe({next:t=>{h||(h=!0,o++),i[a]=t},error:t=>n.error(t),complete:()=>{s++,s!==r&&h||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=i[n],t),{}):i),n.complete())}}))}})}let c=(()=>{class t{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=t=>{},this.onTouched=()=>{}}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.Qsj),r.Y36(r.SBq))},t.\u0275dir=r.lG2({type:t}),t})(),d=(()=>{class t extends c{}return t.\u0275fac=function(){let e;return function(n){return(e||(e=r.n5z(t)))(n||t)}}(),t.\u0275dir=r.lG2({type:t,features:[r.qOj]}),t})();const p=new r.OlP("NgValueAccessor"),g={provide:p,useExisting:(0,r.Gpc)(()=>_),multi:!0},f=new r.OlP("CompositionEventMode");let _=(()=>{class t extends c{constructor(t,e,n){super(t,e),this._compositionMode=n,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=(0,i.q)()?(0,i.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(f,8))},t.\u0275dir=r.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&r.NdJ("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[r._Bn([g]),r.qOj]}),t})();function m(t){return null==t||0===t.length}function y(t){return null!=t&&"number"==typeof t.length}const v=new r.OlP("NgValidators"),C=new r.OlP("NgAsyncValidators"),V=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class b{static min(t){return function(t){return e=>{if(m(e.value)||m(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(t)}static max(t){return function(t){return e=>{if(m(e.value)||m(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(t)}static required(t){return A(t)}static requiredTrue(t){return function(t){return!0===t.value?null:{required:!0}}(t)}static email(t){return function(t){return m(t.value)||V.test(t.value)?null:{email:!0}}(t)}static minLength(t){return function(t){return e=>m(e.value)||!y(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static maxLength(t){return function(t){return e=>y(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static pattern(t){return function(t){if(!t)return E;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(m(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}(t)}static nullValidator(t){return null}static compose(t){return D(t)}static composeAsync(t){return P(t)}}function A(t){return m(t.value)?{required:!0}:null}function E(t){return null}function O(t){return null!=t}function w(t){const e=(0,r.QGY)(t)?(0,u.D)(t):t;return(0,r.CqO)(e),e}function k(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function S(t,e){return e.map(e=>e(t))}function x(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function D(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return k(S(t,e))}}function T(t){return null!=t?D(x(t)):null}function P(t){if(!t)return null;const e=t.filter(O);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if((0,o.k)(e))return h(e,null);if((0,l.K)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&(0,o.k)(t[0])?t[0]:t,null).pipe((0,a.U)(t=>e(...t)))}return h(t,null)}(S(t,e).map(w)).pipe((0,a.U)(k))}}function j(t){return null!=t?P(x(t)):null}function F(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function M(t){return t._rawValidators}function q(t){return t._rawAsyncValidators}let U=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=T(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t}),t})(),G=(()=>{class t extends U{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(){let e;return function(n){return(e||(e=r.n5z(t)))(n||t)}}(),t.\u0275dir=r.lG2({type:t,features:[r.qOj]}),t})();class N extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class B{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let I=(()=>{class t extends B{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(N,2))},t.\u0275dir=r.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.qOj]}),t})(),Y=(()=>{class t extends B{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(G,10))},t.\u0275dir=r.lG2({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.ekj("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.qOj]}),t})();function Z(t,e){R(t,e),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&z(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&z(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function J(t,e,n=!0){const r=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(r),e.valueAccessor.registerOnTouched(r)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function R(t,e){const n=M(t);null!==e.validator?t.setValidators(F(n,e.validator)):"function"==typeof n&&t.setValidators([n]);const r=q(t);null!==e.asyncValidator?t.setAsyncValidators(F(r,e.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const i=()=>t.updateValueAndValidity();L(e._rawValidators,i),L(e._rawAsyncValidators,i)}function $(t,e){let n=!1;if(null!==t){if(null!==e.validator){const r=M(t);if(Array.isArray(r)&&r.length>0){const i=r.filter(t=>t!==e.validator);i.length!==r.length&&(n=!0,t.setValidators(i))}}if(null!==e.asyncValidator){const r=q(t);if(Array.isArray(r)&&r.length>0){const i=r.filter(t=>t!==e.asyncValidator);i.length!==r.length&&(n=!0,t.setAsyncValidators(i))}}}const r=()=>{};return L(e._rawValidators,r),L(e._rawAsyncValidators,r),n}function z(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Q(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const W="VALID",H="INVALID",X="PENDING",K="DISABLED";function tt(t){return(it(t)?t.validators:t)||null}function et(t){return Array.isArray(t)?T(t):t||null}function nt(t,e){return(it(e)?e.asyncValidators:t)||null}function rt(t){return Array.isArray(t)?j(t):t||null}function it(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class st{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=et(this._rawValidators),this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===W}get invalid(){return this.status===H}get pending(){return this.status==X}get disabled(){return this.status===K}get enabled(){return this.status!==K}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=et(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=rt(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=X,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=K,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=W,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==W&&this.status!==X||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?K:W}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=X,this._hasOwnPendingAsyncValidator=!0;const e=w(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let r=t;return e.forEach(t=>{r=r instanceof at?r.controls.hasOwnProperty(t)?r.controls[t]:null:r instanceof lt&&r.at(t)||null}),r}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?K:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(X)?X:this._anyControlsHaveStatus(H)?H:W}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){it(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ot extends st{constructor(t=null,e,n){super(tt(e),nt(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Q(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Q(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class at extends st{constructor(t,e,n){super(tt(e),nt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof ot?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class lt extends st{constructor(t,e,n){super(tt(e),nt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof ot?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})();const ct=new r.OlP("NgModelWithFormControlWarning"),dt={provide:G,useExisting:(0,r.Gpc)(()=>pt)};let pt=(()=>{class t extends G{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return Z(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){J(t.control||null,t,!1),Q(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(J(e||null,t),n instanceof ot&&(Z(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);(function(t,e){R(t,e)})(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);e&&function(t,e){return $(t,e)}(e,t)&&e.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){R(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(v,10),r.Y36(C,10))},t.\u0275dir=r.lG2({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&r.NdJ("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([dt]),r.qOj,r.TTD]}),t})();const gt={provide:N,useExisting:(0,r.Gpc)(()=>ft)};let ft=(()=>{class t extends N{constructor(t,e,n,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,r,i;return Array.isArray(e),e.forEach(t=>{t.constructor===_?n=t:Object.getPrototypeOf(t.constructor)===d?r=t:i=t}),i||r||n||null}(0,i)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(G,13),r.Y36(v,10),r.Y36(C,10),r.Y36(p,10),r.Y36(ct,8))},t.\u0275dir=r.lG2({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([gt]),r.qOj,r.TTD]}),t._ngModelWarningSentOnce=!1,t})();const _t={provide:v,useExisting:(0,r.Gpc)(()=>mt),multi:!0};let mt=(()=>{class t{constructor(){this._required=!1}get required(){return this._required}set required(t){this._required=null!=t&&!1!==t&&"false"!=`${t}`,this._onChange&&this._onChange()}validate(t){return this.required?A(t):null}registerOnValidatorChange(t){this._onChange=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.lG2({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,e){2&t&&r.uIk("required",e.required?"":null)},inputs:{required:"required"},features:[r._Bn([_t])]}),t})(),yt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[ht]]}),t})(),vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[yt]}),t})(),Ct=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ct,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[yt]}),t})(),Vt=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let r,i=null,s=null;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(i=null!=e.validators?e.validators:null,s=null!=e.asyncValidators?e.asyncValidators:null,r=null!=e.updateOn?e.updateOn:void 0):(i=null!=e.validator?e.validator:null,s=null!=e.asyncValidator?e.asyncValidator:null)),new at(n,{asyncValidators:s,updateOn:r,validators:i})}control(t,e,n){return new ot(t,e,n)}array(t,e,n){const r=t.map(t=>this._createControl(t));return new lt(r,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof ot||t instanceof at||t instanceof lt?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=(0,r.Yz7)({factory:function(){return new t},token:t,providedIn:Ct}),t})()},9037:(t,e,n)=>{"use strict";n.d(e,{Is:()=>s,G:()=>i,v:()=>o});const r=["errors","pristine","status","value"],i=t=>r.reduce((e,n)=>Object.assign(Object.assign({},e),{[n]:t[n]}),{}),s={Object:t=>"Object"===(t=>Object.prototype.toString.call(t).slice(8,-1))(t)},o=(t,e)=>n=>t(n)?{[e]:!0}:null},893:(t,e,n)=>{"use strict";n.d(e,{Q:()=>u});var r=n(1305),i=n(9996),s=n(9037),o=n(5366),a=n(1116);const l=t=>null!=t;let u=(()=>{class t{constructor(){this.closed=!0}ngOnChanges(t){l(this.form)&&(this.info$=(0,r.aj)([this.form.statusChanges,this.form.valueChanges]).pipe((0,i.U)(()=>{if(l(this.form)){const{controls:t}=this.form;return{form:(0,s.G)(this.form),controls:Object.keys(t).reduce((e,n)=>Object.assign(Object.assign({},e),{[n]:(0,s.G)(t[n])}),{})}}return{}})))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-debug-form"]],inputs:{form:"form"},features:[o.TTD],decls:7,vars:7,consts:[[3,"click"],[3,"hidden"]],template:function(t,e){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"six-button",0),o.NdJ("click",function(){return e.closed=!e.closed}),o._uU(2),o.qZA(),o.TgZ(3,"pre",1),o._uU(4),o.ALo(5,"json"),o.ALo(6,"async"),o.qZA(),o.qZA()),2&t&&(o.xp6(2),o.Oqu(e.closed?"Debug form":"Hide"),o.xp6(1),o.Q6J("hidden",e.closed),o.xp6(1),o.Oqu(o.lcZ(5,3,o.lcZ(6,5,e.info$))))},pipes:[a.Ts,a.Ov],encapsulation:2}),t})()},4266:(t,e,n)=>{"use strict";n.d(e,{y:()=>_});var r=n(5366),i=n(3223);const s={provide:i.JU,useExisting:(0,r.Gpc)(()=>_),multi:!0},o=t=>e=>e.nativeElement.tagName.toLowerCase()===t,a=o("six-radio"),l=o("six-checkbox"),u=o("six-datepicker"),h=t=>e=>e.nativeElement.getAttribute(t),c=h("ng-reflect-name"),d=h("error-text"),p=h("value"),g=t=>null===t.nativeElement.getAttribute("checked"),f=t=>"string"==typeof t&&t.length>0;let _=(()=>{class t{constructor(t,e,n){this.renderer=t,this.ref=e,this.parent=n,this.onSixInputChange=()=>{this.onChange(this.ref.nativeElement.value)},this.onSixSelectChange=()=>{this.onChange(this.ref.nativeElement.value)},this.onSixRadioChange=()=>{g(this.ref)&&this.onChange(p(this.ref))},this.onSixCheckboxChange=()=>{this.onChange(g(this.ref))},this.onSixDatepickerSelect=()=>{this.onChange(this.ref.nativeElement.value)},this.onChange=()=>{},this.onTouched=()=>{},this.getFirstError=t=>{const[e]=Object.keys(t.errors||{});if(!f(e))return;const n=t.getError(e);if(f(n))return n;const r=(t=>{var e;return null===(e=this.ref.nativeElement.querySelector("[slot=error-text]"))||void 0===e?void 0:e.innerHTML})();if(f(r))return r;const i=d(this.ref);return f(i)?i:e},this.updateValidity=()=>{if(!this.control)throw new Error("[ CustomControlDirective ] control is not defined.");if(this.control.pristine)return setTimeout(()=>this.renderer.removeAttribute(this.ref.nativeElement,"invalid"),0),void this.updateDatepickerInputElement();const t=this.getFirstError(this.control);t?(()=>{this.ref.nativeElement.setCustomValidity(d(this.ref)||t),this.renderer.setAttribute(this.ref.nativeElement,"invalid","")})():(console.log("[ updateValidity remove attribute ]",{error:t,element:this.ref.nativeElement}),this.renderer.removeAttribute(this.ref.nativeElement,"invalid"),this.ref.nativeElement.setCustomValidity(""))}}onBlur(){this.onTouched()}get control(){var t;const e=c(this.ref);return null===(t=this.parent.control)||void 0===t?void 0:t.get(e)}updateDatepickerInputElement(){if(!u(this.ref))return;const t=this.ref.nativeElement.shadowRoot.querySelector("six-input");t&&setTimeout(()=>this.renderer.removeAttribute(t,"invalid"),50)}ngOnDestroy(){var t;null===(t=this.subscription)||void 0===t||t.unsubscribe()}writeValue(t){if(a(this.ref))p(this.ref)===String(t)&&this.renderer.setAttribute(this.ref.nativeElement,"checked","");else if(l(this.ref))"false"!==t&&"null"!==t||console.warn(`Truthy string '${t}' used for the checked attribute of six-checkbox. Values should be either of type boolean or null.`),null==t||!1===t?this.renderer.removeAttribute(this.ref.nativeElement,"checked"):this.renderer.setAttribute(this.ref.nativeElement,"checked","");else{const e=null!=t?t:u(this.ref)?null:"";this.renderer.setProperty(this.ref.nativeElement,"value",e)}}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.renderer.setProperty(this.ref.nativeElement,"disabled",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(i.gN,13))},t.\u0275dir=r.lG2({type:t,selectors:[["","appCustomControl",""]],hostBindings:function(t,e){1&t&&r.NdJ("six-input-input",function(){return e.onSixInputChange()})("six-input-blur",function(){return e.onBlur()})("six-select-change",function(){return e.onSixSelectChange()})("six-select-blur",function(){return e.onBlur()})("six-radio-change",function(){return e.onSixRadioChange()})("six-radio-blur",function(){return e.onBlur()})("six-checkbox-change",function(){return e.onSixCheckboxChange()})("six-checkbox-blur",function(){return e.onBlur()})("six-datepicker-select",function(){return e.onSixDatepickerSelect()})("six-datepicker-blur",function(){return e.onBlur()})("six-textarea-change",function(){return e.onSixInputChange()})},features:[r._Bn([s])]}),t})()},5425:(t,e,n)=>{"use strict";n.d(e,{m:()=>s});var r=n(1116),i=n(5366);n(893),n(4266);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.ez]]}),t})()}}]);