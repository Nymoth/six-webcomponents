(self.webpackChunksix_app=self.webpackChunksix_app||[]).push([[6703],{6703:(a,i,r)=>{"use strict";r.r(i),r.d(i,{six_avatar:()=>e});var t=r(1488);let e=class{constructor(a){(0,t.r)(this,a),this.hasError=!1,this.image="",this.alt="",this.initials="",this.shape="circle"}connectedCallback(){this.handleImageError=this.handleImageError.bind(this)}handleImageError(){this.hasError=!0}render(){return(0,t.h)("div",{part:"base",class:{avatar:!0,"avatar--circle":"circle"===this.shape,"avatar--rounded":"rounded"===this.shape,"avatar--square":"square"===this.shape},role:"image","aria-label":this.alt,tabIndex:0},!this.initials&&(0,t.h)("div",{part:"icon",class:"avatar__icon"},(0,t.h)("slot",{name:"icon"},(0,t.h)("six-icon",null,"person"))),this.initials&&(0,t.h)("div",{part:"initials",class:"avatar__initials"},this.initials),this.image&&!this.hasError&&(0,t.h)("img",{part:"image",class:"avatar__image",src:this.image,onError:this.handleImageError}))}};e.style=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block;--size:2rem}.avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;width:var(--size);height:var(--size);background-color:var(--six-avatar-background-color);font-family:var(--six-font-sans);font-size:calc(var(--size) * 0.5);font-weight:var(--six-font-weight-normal);color:var(--six-avatar-color);overflow:hidden;user-select:none;vertical-align:middle;cursor:pointer;outline:none}.avatar:hover{box-shadow:var(--six-elevation-4dp)}.avatar--circle{border-radius:var(--six-border-radius-circle)}.avatar--rounded{border-radius:var(--six-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}"}}]);