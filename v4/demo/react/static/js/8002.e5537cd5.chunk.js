"use strict";(self.webpackChunk_six_group_ui_library_react_app=self.webpackChunk_six_group_ui_library_react_app||[]).push([[8002],{8002:function(e,a,t){t.r(a),t.d(a,{six_language_switcher:function(){return l}});var n=t(9249),i=t(7371),s=t(8551),r=["EN","DE","ES"],l=function(){function e(a){var t=this;(0,n.Z)(this,e),(0,s.r)(this,a),this.sixChange=(0,s.c)(this,"six-language-switcher-change",7),this.handleLanguageSwitching=function(e,a){return function(){void 0!==a?t.sixChange.emit(a):t.sixChange.emit(e),t.selected=e}},this.selected=void 0,this.languages=r}return(0,i.Z)(e,[{key:"handleChangesLanguages",value:function(e){if(!Array.isArray(e))throw new Error("languages is expected to be an array");this.updateSelectedLanguage()}},{key:"componentWillLoad",value:function(){void 0===this.selected&&this.updateSelectedLanguage()}},{key:"updateSelectedLanguage",value:function(){var e=this.languages[0];"string"===typeof e?(this.selected=e,this.sixChange.emit(this.selected)):(this.selected=e.key,this.sixChange.emit(e.value))}},{key:"render",value:function(){var e=this;return(0,s.h)("div",{part:"container",class:"language-switcher__container"},this.languages.map((function(a,t){var n="string"===typeof a?a:a.key;return(0,s.h)("div",{onClick:e.handleLanguageSwitching(n,"string"===typeof a?a:a.value)},(0,s.h)("span",{part:"label",class:{"language-switcher__label":!0,"language-switcher__label--selected":e.selected===n}},n),t<e.languages.length-1&&(0,s.h)("span",{part:"separator",class:"language-switcher__separator"},"/"))})))}}],[{key:"watchers",get:function(){return{languages:["handleChangesLanguages"]}}}]),e}();l.style=".language-switcher__container{display:flex}.language-switcher__separator{padding:0 0.25rem}.language-switcher__label{cursor:pointer}.language-switcher__label:hover{color:var(--six-color-red)}.language-switcher__label--selected{color:var(--six-color-red)}"}}]);
//# sourceMappingURL=8002.e5537cd5.chunk.js.map