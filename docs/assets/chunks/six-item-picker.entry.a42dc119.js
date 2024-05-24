import{r as _,c as l,h as n,g as N}from"../app.6798cdac.js";import{I as s,a as h}from"./types-a07bb999.cc5ade9e.js";import{D as m,b as S,a as d}from"./execution-control-2ebaf4ef.ca9145b2.js";import{E}from"./event-listeners-706d4309.8644075f.js";import"./framework.57535aa4.js";import"./theme.00f7363a.js";const w=".item_picker__container{width:2.5em;display:flex;flex-wrap:wrap;justify-content:center}.item_picker__container:focus-visible{outline:var(--six-focus-ring);outline-offset:0}.item_picker__content{font-size:1.5rem}.item_picker__btn{cursor:pointer;width:2.5em;height:2.5em;display:flex;vertical-align:middle;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--six-color-web-rock-500)}.item_picker__btn:hover{background-color:var(--six-color-web-rock-100);border-radius:100%}.item_picker__btn:active{color:var(--six-color-web-rock-400)}.item_picker__btn--disabled{color:var(--six-color-web-rock-300);cursor:not-allowed}.item_picker__btn--disabled:hover{background-color:initial}.item_picker__btn--disabled:active{color:var(--six-color-web-rock-300)}.item_picker__btn:focus-visible{outline:var(--six-focus-ring);outline-offset:0}",k=w,r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",c=[...r].flatMap(e=>[e,e.toLowerCase()]),p={alphabet:c,letterIndexes:Object.fromEntries(c.map((e,t)=>[e,t]))},g={alphabet:[...r].flatMap(e=>[e]),letterIndexes:Object.fromEntries([...r].map((e,t)=>[e,t]))},b={alphabet:[...r.toLowerCase()].flatMap(e=>[e]),letterIndexes:Object.fromEntries([...r.toLowerCase()].map((e,t)=>[e,t]))},D=e=>Object.fromEntries([...e].map((t,a)=>[t,a])),i="[SIX-ITEM-PICKER]",x=(e,t)=>e-t,I=(e,t)=>e+t,u="debounced-item-picker",P=class{constructor(e){_(this,e),this.sixChange=l(this,"six-item-picker-change",7),this.sixChangeDebounced=l(this,"six-item-picker-change-debounced",7),this.eventListeners=new E,this.handleSixItemPickerChangeDebounced=()=>{this.sixChangeDebounced.emit(this.value)},this.value="",this.type=s.NUMBER,this.min=void 0,this.max=void 0,this.roundtrip=!0,this.step=1,this.items=void 0,this.padded=!1,this.paddingLength=2,this.paddingChar="0",this.paddingDirection=h.BEFORE,this.timeout=m,this.interval=S,this.debounce=m,this._items=[],this._itemIndexes={}}handleValueChange(){this.setup()}debounceChanged(){this.eventListeners.removeByIdentifier(u),this.eventListeners.add(this.host,"six-item-picker-change",d(this.handleSixItemPickerChangeDebounced,this.debounce),u)}handleSetChange(){this.setup(),this.min=this._items[0],this.max=this.getLastStringItem()}componentWillLoad(){this.setup()}componentDidLoad(){this.eventListeners.add(this.host,"six-item-picker-change",d(this.handleSixItemPickerChangeDebounced,this.debounce),u)}disconnectedCallback(){this.eventListeners.removeAll()}setup(){this.isNumber()?this.setupNumberItems():this.setUpStringItems()}setupNumberItems(){var e;this.isInvalidNumber()&&(console.warn(`${i} Expected number but value is not a number: "${this.value}"`),console.info(`${i} Will set value to either minimum or if not provided to zero.`),this.value=(e=this.min)!==null&&e!==void 0?e:0)}setUpStringItems(){if(this._items=this.getStringItems(),this._itemIndexes=this.getItemIndexes(),this._items.find(t=>String(t)===String(this.value))===void 0&&(console.warn(`${i} Expected item from item set but value was not found in set: "${this.value}"`),console.info(`${i} Will set value to either minimum or if not provided to "${this._items[0]}".`),this.value=this._items[0]),this.min===void 0&&(this.roundtrip||(console.warn(`${i} Expected a min value`),console.info(`${i} Will set min value to ${this._items[0]}`)),this.min=this._items[0]),this.max===void 0){const t=this.getLastStringItem();this.roundtrip||(console.warn(`${i} Expected a min value if roundtrip is enabled`),console.info(`${i} Will set min value to ${t}`)),this.max=t}}getLastStringItem(){return this._items[this._items.length-1]}getStringItems(){switch(this.type){case s.NUMBER:return console.warn(`${i}: unexpected type ${this.type}`),[];case s.LETTER:return p.alphabet;case s.CAPITAL_LETTER:return g.alphabet;case s.LOWER_LETTER:return b.alphabet;case s.CUSTOM:return this.items==null||this.items.length===0?(console.warn(`${i}: no items defined for type ${this.type}`),[]):this.items}}getItemIndexes(){switch(this.type){case s.NUMBER:return console.warn(`${i}: unexpected type ${this.type}`),{};case s.LETTER:return p.letterIndexes;case s.CAPITAL_LETTER:return g.letterIndexes;case s.LOWER_LETTER:return b.letterIndexes;case s.CUSTOM:return D(this._items)}}previousItem(){this.isNumber()?this.previousNumber():this.previousStringItem(),this.sixChange.emit(this.value)}previousNumber(){this.changeValue({isNextItemAllowed:()=>!this.isPreviousNumberDisabled(),getNextItem:()=>Number(this.value)-this.step,getRoundtripItem:()=>Number(this.max),isRoundtripPossible:()=>this.max===void 0&&this.roundtrip})}previousStringItem(){const e=String(this.value),t=String(this.min);this.changeValue({isNextItemAllowed:()=>t===void 0||this.getStringItemIndex(e)>this.getStringItemIndex(t),getNextItem:()=>this.getNextItemByOperation(x),getRoundtripItem:()=>String(this.max),isRoundtripPossible:()=>this.max==null&&this.roundtrip})}nextItem(){this.isNumber()?this.nextNumber():this.nextStringItem(),this.sixChange.emit(this.value)}nextNumber(){this.changeValue({isNextItemAllowed:()=>!this.isNextNumberDisabled(),getNextItem:()=>Number(this.value)+this.step,getRoundtripItem:()=>Number(this.min),isRoundtripPossible:()=>this.min===void 0&&this.roundtrip})}getStringItemIndex(e){return this._itemIndexes[e]}nextStringItem(){const e=String(this.value),t=String(this.max);this.changeValue({isNextItemAllowed:()=>t===void 0||this.getStringItemIndex(e)<this.getStringItemIndex(t),getNextItem:()=>this.getNextItemByOperation(I),getRoundtripItem:()=>String(this.min),isRoundtripPossible:()=>this.min===void 0&&this.roundtrip})}getNextItemByOperation(e,t=this.step){const a=String(this.value),v=e(this.getStringItemIndex(a),t),o=this._items.length,f=(v%o+o)%o;return this._items[f]}changeValue(e){if(e.isNextItemAllowed()){this.value=e.getNextItem();return}if(e.isRoundtripPossible()){console.error(`${i} Item picker is expected to perform a roundtrip, but either max or min value is missing so a roundtrip is not possible`);return}if(this.roundtrip){this.value=e.getRoundtripItem();return}console.warn(`${i} Roundtrip is not allowed, but was still triggered, please report this issue to the developer of six-item-picker`),this.sixChange.emit(this.value)}isNumber(){return this.type===s.NUMBER}isInvalidNumber(){return this.value===""||isNaN(this.value)}isNextDisabled(){return this.roundtrip?!1:this.isNumber()?this.isNextNumberDisabled():this._itemIndexes[String(this.value)]+this.step>this._itemIndexes[String(this.max)]}isNextNumberDisabled(){var e;return Number(this.value)+this.step>Number((e=this.max)!==null&&e!==void 0?e:1/0)}isPrevDisabled(){return this.roundtrip?!1:this.isNumber()?this.isPreviousNumberDisabled():this._itemIndexes[String(this.value)]-this.step<this._itemIndexes[String(this.min)]}isPreviousNumberDisabled(){var e;return Number(this.value)-this.step<Number((e=this.min)!==null&&e!==void 0?e:-1/0)}onMouseDownNext(){this.isNextDisabled()||(this.nextItem(),this._timeoutNext=setTimeout(()=>{this._intervalNext=setInterval(()=>{this.nextItem()},this.interval)},this.timeout))}onMouseUpNext(){clearTimeout(this._timeoutNext),clearInterval(this._intervalNext)}onMouseDownPrev(){this.isPrevDisabled()||(this.previousItem(),this._timeoutPrev=setTimeout(()=>{this._intervalPrev=setInterval(()=>{this.previousItem()},this.interval)},this.timeout))}onMouseUpPrev(){clearTimeout(this._timeoutPrev),clearInterval(this._intervalPrev)}getFormattedValue(){return this.value===void 0||this.value===null?this.value:this.padded?this.paddingDirection===h.BEFORE?String(this.value).padStart(this.paddingLength,this.paddingChar):this.paddingDirection===h.AFTER?String(this.value).padEnd(this.paddingLength,this.paddingChar):this.value:this.value}handleKeyPress(e){e.key==="Enter"?(e.preventDefault(),e.target===this.upButton?this.nextItem():e.target===this.downButton&&this.previousItem()):e.key==="ArrowUp"?(e.preventDefault(),this.nextItem()):e.key==="ArrowDown"?(e.preventDefault(),this.previousItem()):e.key==="PageUp"?(e.preventDefault(),this.pageUp()):e.key==="PageDown"?(e.preventDefault(),this.pageDown()):e.key==="Home"?(e.preventDefault(),this.goToMin()):e.key==="End"&&(e.preventDefault(),this.goToMax())}pageUp(){if(this.isNumber())this.changeValue({isNextItemAllowed:()=>!this.isNextNumberDisabled(),getNextItem:()=>Number(this.value)+5*this.step,getRoundtripItem:()=>Number(this.min),isRoundtripPossible:()=>this.min===void 0&&this.roundtrip});else{const e=String(this.value),t=String(this.min);this.changeValue({isNextItemAllowed:()=>t===void 0||this.getStringItemIndex(e)>this.getStringItemIndex(t),getNextItem:()=>this.getNextItemByOperation(I,5),getRoundtripItem:()=>String(this.min),isRoundtripPossible:()=>this.min===void 0&&this.roundtrip})}}pageDown(){if(this.isNumber())this.changeValue({isNextItemAllowed:()=>!this.isPreviousNumberDisabled(),getNextItem:()=>Number(this.value)-5*this.step,getRoundtripItem:()=>Number(this.max),isRoundtripPossible:()=>this.max===void 0&&this.roundtrip});else{const e=String(this.value),t=String(this.max);this.changeValue({isNextItemAllowed:()=>t===void 0||this.getStringItemIndex(e)<this.getStringItemIndex(t),getNextItem:()=>this.getNextItemByOperation(x,5),getRoundtripItem:()=>String(this.max),isRoundtripPossible:()=>this.max==null&&this.roundtrip})}}goToMin(){var e;this.isNumber()?this.value=(e=this.min)!==null&&e!==void 0?e:0:this.value=this._items[0],this.sixChange.emit(this.value)}goToMax(){var e;this.isNumber()?this.value=(e=this.max)!==null&&e!==void 0?e:1/0:this.value=this.getLastStringItem(),this.sixChange.emit(this.value)}render(){return n("div",{key:"773e773a55e33b7486a7d2928ad605c6efadf119",part:"container",class:"item_picker__container",onKeyDown:e=>this.handleKeyPress(e),tabindex:"0"},n("div",{key:"3cb5fd7c07ea6b0b8778be5b316ba0d788b900be",ref:e=>this.upButton=e,part:"up",class:{item_picker__btn:!0,"item_picker__btn--disabled":this.isNextDisabled()},onMouseDown:()=>this.onMouseDownNext(),onMouseUp:()=>this.onMouseUpNext(),tabindex:"-1"},n("six-icon",{key:"606bfc7a65c8b5312a952bc9bb85324c95111d17",size:"large"},"expand_less")),n("div",{key:"181dec86bb4b8d9762595b38f719af4c8a91ea42",part:"content",class:"item_picker__content"},this.getFormattedValue()),n("div",{key:"195fefb352bbb5d202b3357e429959f4c887d357",ref:e=>this.downButton=e,part:"down",class:{item_picker__btn:!0,"item_picker__btn--disabled":this.isPrevDisabled()},onMouseDown:()=>this.onMouseDownPrev(),onMouseUp:()=>this.onMouseUpPrev(),tabindex:"-1"},n("six-icon",{key:"525c90105edea5208737b49c8b2831498c326197",size:"large"},"expand_more")))}get host(){return N(this)}static get watchers(){return{value:["handleValueChange"],debounce:["debounceChanged"],items:["handleSetChange"]}}};P.style=k;export{P as six_item_picker};