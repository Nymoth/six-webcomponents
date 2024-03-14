import{r as i,h as s}from"./index-88c5feb6.js";const o=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:border-box}:host{--track-color:var(--six-progress-track-color);--indicator-color:var(--six-progress-indicator-color);display:inline-flex}.progress-ring{display:inline-flex;align-items:center;justify-content:center;position:relative}.progress-ring__image{transform:rotate(-90deg);transform-origin:50% 50%}.progress-ring__track{stroke:var(--track-color)}.progress-ring__indicator{stroke:var(--indicator-color);transition:0.35s stroke-dashoffset, 0.35s stroke}.progress-ring__label{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;user-select:none;font-family:var(--six-font-family)}",a=o,n=class{constructor(e){i(this,e),this.size=128,this.strokeWidth=4,this.percentage=0}handlePercentageChange(){this.updateProgress()}componentDidLoad(){this.updateProgress()}updateProgress(){var e;if(((e=this.indicator)===null||e===void 0?void 0:e.r)==null)return;const r=this.indicator.r.baseVal.value*2*Math.PI,t=r-this.percentage/100*r;this.indicator.style.strokeDasharray=`${r} ${r}`,this.indicator.style.strokeDashoffset=`${t}`}render(){return s("div",{key:"fcfdeaf3f113028f9368d6c26323ed3680daf1dc",part:"base",class:"progress-ring"},s("svg",{key:"55048e767285e998ed5bf34ada821abc7d3eae58",class:"progress-ring__image",width:this.size,height:this.size},s("circle",{key:"63f9d87a8d310c1ea3dd40801eeb3232c0b4bb3d",class:"progress-ring__track","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-this.strokeWidth*2,cx:this.size/2,cy:this.size/2}),s("circle",{key:"34a46dadccdb2498bff8196a232570a761d6a468",ref:e=>this.indicator=e,class:"progress-ring__indicator","stroke-width":this.strokeWidth,"stroke-linecap":"round",fill:"transparent",r:this.size/2-this.strokeWidth*2,cx:this.size/2,cy:this.size/2})),s("span",{key:"55077cbe1488ae88aa86e06c97ae4948f7d5726a",part:"label",class:"progress-ring__label"},s("slot",{key:"3e43561a4838f5f34f7196d713c2d6ddd4688965"})))}static get watchers(){return{percentage:["handlePercentageChange"]}}};n.style=a;export{n as six_progress_ring};