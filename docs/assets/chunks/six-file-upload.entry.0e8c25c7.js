import{r,c as d,h as l,g as n}from"../app.e11adc8d.js";import"./framework.57535aa4.js";import"./theme.48150ed6.js";const p=".sc-six-file-upload-h{position:relative;box-sizing:border-box}.sc-six-file-upload-h *.sc-six-file-upload,.sc-six-file-upload-h *.sc-six-file-upload:before,.sc-six-file-upload-h *.sc-six-file-upload:after{box-sizing:border-box}.sc-six-file-upload-h{position:static;display:block}.six-file-upload.sc-six-file-upload six-card.sc-six-file-upload{box-shadow:none;padding:0;width:100%}.six-file-upload__label--highlighted.sc-six-file-upload{color:var(--six-color-action-600)}.six-file-upload__container--full.sc-six-file-upload{border:dashed 1px var(--six-color-web-rock-500)}.six-file-upload__label-icon.sc-six-file-upload{margin-right:0.5rem}.six-file-upload__drop-zone.sc-six-file-upload{padding:2rem 0;display:flex;justify-content:center;width:100%;transition:background-color 0.3s}.six-file-upload__drop-zone--compact.sc-six-file-upload{padding:0}.six-file-upload__input.sc-six-file-upload{cursor:pointer;position:absolute;top:0;left:0;width:100%;user-select:none;height:100%;opacity:0;outline:none}.six-file-upload--disabled.sc-six-file-upload .six-file-upload__drop-zone.sc-six-file-upload{background-color:var(--six-color-inactive)}.six-file-upload.sc-six-file-upload:not(.six-file-upload--disabled) .six-file-upload__drop-zone.sc-six-file-upload:hover,.six-file-upload__drop-zone--hover.sc-six-file-upload{background-color:var(--six-color-action-light-to-be-defined)}.six-file-upload.sc-six-file-upload:not(.six-file-upload--disabled) .six-file-upload__drop-zone.sc-six-file-upload:hover.six-file-upload__drop-zone--compact,.six-file-upload__drop-zone--hover.six-file-upload__drop-zone--compact.sc-six-file-upload{background-color:inherit}.six-file-upload--disabled.sc-six-file-upload .six-file-upload__input.sc-six-file-upload{cursor:not-allowed}",c=p,f=class{constructor(e){r(this,e),this.success=d(this,"six-file-upload-success",7),this.failure=d(this,"six-file-upload-failure",7),this.handleFiles=i=>{if(this.disabled||i.length===0)return;if(!this.multiple&&i.length>1)return this.failure.emit({reason:"Only one file is allowed."});for(const o of i){if(o==null)return;let a=[];if(this.accept!=null&&(a=this.accept.replace(/\s/g,"").split(",")),a.length>0&&a.indexOf(o.type)===-1){const t=i.length>1?"One or more files have invalid MIME type.":"File has invalid MIME type.";return this.failure.emit({reason:t})}if(this.maxFileSize!=null&&o.size>this.maxFileSize){const t=i.length>1?"One or more files are too big":"File is too big.";return this.failure.emit({reason:t})}}const s=this.multiple?{files:i}:{file:i[0]};this.success.emit(s)},this.onChange=()=>{var i;if(((i=this.fileInput)===null||i===void 0?void 0:i.files)!=null){const s=this.fileInput.files;this.handleFiles(s),this.fileInput.value=""}},this.isOver=!1,this.compact=!1,this.label=void 0,this.disabled=!1,this.accept=void 0,this.multiple=!1,this.maxFileSize=void 0}dragenterHandler(){this.disabled||(this.isOver=!0)}dragoverHandler(){this.disabled||(this.isOver=!0)}dragleaveHandler(){this.disabled||(this.isOver=!1)}dropHandler({dataTransfer:e}){this.disabled||(this.isOver=!1,e!=null&&this.handleFiles(e.files))}componentDidLoad(){["dragenter","dragover","dragleave","drop"].forEach(e=>{this.host.addEventListener(e,this.preventDefaults,!1),document.body.addEventListener(e,this.preventDefaults,!1)})}disconnectedCallback(){["dragenter","dragover","dragleave","drop"].forEach(e=>{this.host.removeEventListener(e,this.preventDefaults,!1),document.body.removeEventListener(e,this.preventDefaults,!1)})}preventDefaults(e){e.preventDefault(),e.stopPropagation()}renderLabel(){var e;return(e=this.label)!==null&&e!==void 0?e:this.compact?"Upload":l("span",null,"Drop files to upload, or ",l("span",{class:"six-file-upload__label--highlighted"},"browse"))}render(){const e=this.compact?"six-button":"six-card";return l("div",{key:"7f7d6f35cf6966e97b0daa0771535e2f5a4cecf2",class:{"six-file-upload":!0,"six-file-upload--disabled":this.disabled}},l(e,{key:"300c52820c9b18b5056465215e6cfdf0286e74fe",class:{"six-file-upload__container--compact":this.compact,"six-file-upload__container--full":!this.compact}},this.compact&&l("span",{slot:"prefix"},l("six-icon",{class:"six-file-upload__label-icon"},"arrow_circle_up")),l("div",{key:"fa4a929f04ca9538063e2b1094647c80e1b7de73",class:{"six-file-upload__drop-zone":!0,"six-file-upload__drop-zone--hover":this.isOver,"six-file-upload__drop-zone--compact":this.compact}},l("span",{key:"2e9805aa015f2b910e2c384437576194396390b7"},this.renderLabel()),l("input",{key:"726dddec342837a4b88812e4b1f2a2a0b8678ff8",class:"six-file-upload__input",type:"file",name:"resume",disabled:this.disabled,accept:this.accept,multiple:this.multiple,onChange:this.onChange,ref:i=>this.fileInput=i}))))}get host(){return n(this)}};f.style=c;export{f as six_file_upload};