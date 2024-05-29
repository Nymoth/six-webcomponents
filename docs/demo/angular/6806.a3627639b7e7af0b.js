"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[6806],{6806:(c,r,o)=>{o.r(r),o.d(r,{six_file_upload:()=>n});var s=o(9049),p=o(5730);const n=class{constructor(e){(0,s.r)(this,e),this.success=(0,s.c)(this,"six-file-upload-success",7),this.failure=(0,s.c)(this,"six-file-upload-failure",7),this.handleSlotChange=()=>{let i=!1;null!=this.errorText&&("string"==typeof this.errorText&&this.errorText.trim().length>0||"object"==typeof this.errorText&&this.errorText.length>0)&&(i=!0),this.hasError=i||(0,p.h)(this.host,"error-text"),console.log(this.errorText),console.log(this.hasError)},this.handleFiles=i=>{if(!this.disabled&&0!==i.length&&!this.uploading){if(!this.multiple&&i.length>1)return this.failure.emit({reason:"Only one file is allowed."});for(const a of i){if(null==a)return;let t=[];if(null!=this.accept&&(t=this.accept.replace(/\s/g,"").split(",")),t.length>0&&-1===t.indexOf(a.type))return this.failure.emit({reason:i.length>1?"One or more files have invalid MIME type.":"File has invalid MIME type."});if(null!=this.maxFileSize&&a.size>this.maxFileSize)return this.failure.emit({reason:i.length>1?"One or more files are too big":"File is too big."})}this.success.emit(this.multiple?{files:i}:{file:i[0]})}},this.onChange=()=>{var i;null!=(null===(i=this.fileInput)||void 0===i?void 0:i.files)&&(this.handleFiles(this.fileInput.files),this.fileInput.value="")},this.isOver=!1,this.hasError=!1,this.compact=!1,this.label=void 0,this.disabled=!1,this.accept=void 0,this.multiple=!1,this.maxFileSize=void 0,this.uploading=!1,this.errorText="",this.invalid=!1}dragenterHandler(){this.disabled||(this.isOver=!0)}dragoverHandler(){this.disabled||(this.isOver=!0)}dragleaveHandler(){this.disabled||(this.isOver=!1)}dropHandler({dataTransfer:e}){this.disabled||(this.isOver=!1,null!=e&&this.handleFiles(e.files))}componentWillLoad(){this.handleSlotChange()}componentDidLoad(){var e;["dragenter","dragover","dragleave","drop"].forEach(i=>{this.host.addEventListener(i,this.preventDefaults,!1),document.body.addEventListener(i,this.preventDefaults,!1)}),null===(e=this.host.shadowRoot)||void 0===e||e.addEventListener("slotchange",this.handleSlotChange)}disconnectedCallback(){var e;["dragenter","dragover","dragleave","drop"].forEach(i=>{this.host.removeEventListener(i,this.preventDefaults,!1),document.body.removeEventListener(i,this.preventDefaults,!1)}),null===(e=this.host.shadowRoot)||void 0===e||e.removeEventListener("slotchange",this.handleSlotChange)}preventDefaults(e){e.preventDefault(),e.stopPropagation()}renderLabel(){var e;return null!==(e=this.label)&&void 0!==e?e:this.compact?"Upload":(0,s.h)("span",null,"Drop files to upload, or ",(0,s.h)("span",{class:"six-file-upload__label--highlighted"},"browse"))}render(){const e=this.compact?"six-button":"six-card",i=(Array.isArray(this.errorText)?this.errorText:[this.errorText]).filter(l=>null!=l&&""!==l.trim());return(0,s.h)("div",{key:"aeaeba82e5419d410bb070edc4c14e99658a2024",class:{"six-file-upload":!0,"six-file-upload--disabled":this.disabled||this.uploading}},(0,s.h)(e,{key:"18a2c76f6c1cc07d6a8d69f17fa55df61bcfc486",disabled:this.disabled||this.uploading,"aria-invalid":this.invalid?"true":"false",class:{"six-file-upload__container--compact":this.compact,"six-file-upload__container--full":!this.compact}},this.compact&&!this.uploading&&(0,s.h)("span",{slot:"prefix"},(0,s.h)("six-icon",{class:"six-file-upload__label-icon"},"arrow_circle_up")),(0,s.h)("div",{key:"1c4dee810b517670842708c438e280897b80c32a",class:{"six-file-upload__drop-zone":!0,"six-file-upload__drop-zone--hover":this.isOver,"six-file-upload__drop-zone--compact":this.compact}},this.uploading?(0,s.h)("span",{class:"six-file-upload__drop-zone__spinner-container"},(0,s.h)("six-spinner",null)," Uploading..."):(0,s.h)("div",null,(0,s.h)("span",null,this.renderLabel()),(0,s.h)("input",{class:"six-file-upload__input",type:"file",name:"resume",disabled:this.disabled,accept:this.accept,multiple:this.multiple,onChange:this.onChange,ref:l=>this.fileInput=l})))),(0,s.h)("div",{key:"4d8524acc6ab4b919ab8ed469b16d11268ed9994","aria-hidden":this.invalid?"false":"true"},(0,s.h)("slot",{key:"8b104ee4a3feb6c5db255157a5530deeec5dec3d",name:"error-text"},i.map(l=>(0,s.h)("six-error",null,(0,s.h)("div",{class:"six-file-upload__error-text"},l))))))}get host(){return(0,s.g)(this)}};n.style=".sc-six-file-upload-h{position:relative;box-sizing:border-box}.sc-six-file-upload-h *.sc-six-file-upload,.sc-six-file-upload-h *.sc-six-file-upload:before,.sc-six-file-upload-h *.sc-six-file-upload:after{box-sizing:border-box}.sc-six-file-upload-h{position:static;display:block}.six-file-upload.sc-six-file-upload six-card.sc-six-file-upload{box-shadow:none;padding:0;width:100%}.six-file-upload__label--highlighted.sc-six-file-upload{color:var(--six-color-action-600)}.six-file-upload__container--full.sc-six-file-upload{border:dashed 1px var(--six-color-web-rock-500)}.six-file-upload__label-icon.sc-six-file-upload{margin-right:0.5rem}.six-file-upload__drop-zone.sc-six-file-upload{padding:2rem 0;display:flex;justify-content:center;width:100%;transition:background-color 0.3s}.six-file-upload__drop-zone__spinner-container.sc-six-file-upload{display:flex;align-items:center}.six-file-upload__drop-zone__spinner-container.sc-six-file-upload six-spinner.sc-six-file-upload{margin-right:var(--six-spacing-x-small)}.six-file-upload__drop-zone--compact.sc-six-file-upload{padding:0}.six-file-upload__input.sc-six-file-upload{cursor:pointer;position:absolute;top:0;left:0;width:100%;user-select:none;height:100%;opacity:0;outline:none}.six-file-upload--disabled.sc-six-file-upload .six-file-upload__drop-zone.sc-six-file-upload{background-color:var(--six-color-inactive);cursor:not-allowed}.six-file-upload.sc-six-file-upload:not(.six-file-upload--disabled) .six-file-upload__drop-zone.sc-six-file-upload:hover,.six-file-upload__drop-zone--hover.sc-six-file-upload{background-color:var(--six-color-action-light-to-be-defined)}.six-file-upload.sc-six-file-upload:not(.six-file-upload--disabled) .six-file-upload__drop-zone.sc-six-file-upload:hover.six-file-upload__drop-zone--compact,.six-file-upload__drop-zone--hover.six-file-upload__drop-zone--compact.sc-six-file-upload{background-color:inherit}.six-file-upload--disabled.sc-six-file-upload .six-file-upload__input.sc-six-file-upload{cursor:not-allowed}.six-file-upload__error-text.sc-six-file-upload{font-size:var(--six-input-help-text-font-size-medium)}"}}]);