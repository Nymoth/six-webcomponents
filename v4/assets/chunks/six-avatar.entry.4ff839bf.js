import{r,h as a}from"../app.92157613.js";import"./framework.0d091df2.js";import"./theme.f2c586b3.js";const t=":host{position:relative;box-sizing:border-box}:host *,:host *:before,:host *:after{box-sizing:inherit}:host{display:inline-block;--size:2rem}.avatar{display:inline-flex;align-items:center;justify-content:center;position:relative;width:var(--size);height:var(--size);background-color:var(--six-avatar-background-color);font-family:var(--six-font-sans);font-size:calc(var(--size) * 0.5);font-weight:var(--six-font-weight-normal);color:var(--six-avatar-color);overflow:hidden;user-select:none;vertical-align:middle;cursor:pointer;outline:none}.avatar:hover{box-shadow:var(--six-elevation-4dp)}.avatar--circle{border-radius:var(--six-border-radius-circle)}.avatar--rounded{border-radius:var(--six-border-radius-medium)}.avatar--square{border-radius:0}.avatar__icon{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%}.avatar__initials{line-height:1;text-transform:uppercase}.avatar__image{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}",e=class{constructor(i){r(this,i),this.handleImageError=()=>{this.hasError=!0},this.hasError=!1,this.image="",this.alt="",this.initials="",this.shape="circle"}render(){return a("div",{part:"base",class:{avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"},role:"image","aria-label":this.alt,tabIndex:0},this.initials===""&&a("div",{part:"icon",class:"avatar__icon"},a("slot",{name:"icon"},a("six-icon",null,"person"))),this.initials&&a("div",{part:"initials",class:"avatar__initials"},this.initials),this.image&&!this.hasError&&a("img",{part:"image",class:"avatar__image",src:this.image,onError:this.handleImageError}))}};e.style=t;export{e as six_avatar};
