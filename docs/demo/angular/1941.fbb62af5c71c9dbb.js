"use strict";(self.webpackChunkdemo_app_angular=self.webpackChunkdemo_app_angular||[]).push([[1941],{1941:(h,n,i)=>{i.r(n),i.d(n,{six_language_switcher:()=>g});var s=i(9049);const c=["EN","DE","ES"],g=class{constructor(e){(0,s.r)(this,e),this.sixChange=(0,s.c)(this,"six-language-switcher-change",7),this.handleLanguageSwitching=(t,a)=>()=>{this.sixChange.emit(void 0!==a?a:t),this.selected=t},this.selected=void 0,this.languages=c}handleChangesLanguages(e){if(!Array.isArray(e))throw new Error("languages is expected to be an array");this.updateSelectedLanguage()}componentWillLoad(){void 0===this.selected&&this.updateSelectedLanguage()}updateSelectedLanguage(){const e=this.languages[0];"string"==typeof e?(this.selected=e,this.sixChange.emit(this.selected)):(this.selected=e.key,this.sixChange.emit(e.value))}render(){return(0,s.h)("div",{key:"64f80894523a4b03643949135f18b553cd0517b6",part:"container",class:"language-switcher__container"},this.languages.map((e,t)=>{const a="string"==typeof e?e:e.key;return(0,s.h)("div",{onClick:this.handleLanguageSwitching(a,"string"==typeof e?e:e.value),onKeyDown:r=>{("Enter"===r.key||" "===r.key)&&this.handleLanguageSwitching(a,"string"==typeof e?e:e.value)()}},(0,s.h)("span",{part:"label",tabindex:"0",class:{"language-switcher__label":!0,"language-switcher__label--selected":this.selected===a}},a),t<this.languages.length-1&&(0,s.h)("span",{part:"separator",class:"language-switcher__separator"},"|"))}))}static get watchers(){return{languages:["handleChangesLanguages"]}}};g.style=".language-switcher__container{display:flex}.language-switcher__separator{padding:0 0.25rem}.language-switcher__label{cursor:pointer}.language-switcher__label:hover{color:var(--six-color-web-rock-600)}.language-switcher__label:focus-visible{outline:var(--six-focus-ring);outline-offset:var(--six-focus-ring-offset)}.language-switcher__label--selected{color:var(--six-color-black);text-decoration:underline}"}}]);