import{r as y,a as c}from"./lit-element-DhY7bShc.js";import{E as _}from"./lit-html-B2eaWknC.js";import{n as o}from"./property-DnLABHHV.js";import{i as w}from"./icon.style-DPTab5RN.js";import{r as x}from"./reset.style-B0CQ8619.js";import{b as h}from"./property-types-CkH-zh1n.js";import{e as k}from"./class-map-BDeD7Kfm.js";import{n as u}from"./when-BR7zwNJC.js";import{i as p,s as m,u as d}from"./static-B9bHPl91.js";import{g as f}from"./custom-element-scope-Dp4Dg8bo.js";const C=":host{position:absolute}:host:has(.dss-toast__top-left){top:var(--dss-spacing-xxs);left:var(--dss-spacing-xxs)}:host:has(.dss-toast__top-right){top:var(--dss-spacing-xxs);right:var(--dss-spacing-xxs)}:host:has(.dss-toast__bottom-left){bottom:var(--dss-spacing-xxs);left:var(--dss-spacing-xxs)}:host:has(.dss-toast__bottom-right){bottom:var(--dss-spacing-xxs);right:var(--dss-spacing-xxs)}:host:has(.dss-toast__show:not(.dss-toast__animation)){display:block}:host:has(.dss-toast__hide:not(.dss-toast__animation)){display:none}:host:has(.dss-toast__show.dss-toast__animation):has(.dss-toast__top-left,.dss-toast__bottom-left){animation:openFromLeft .5s cubic-bezier(.68,-.55,.25,1.35) forwards}:host:has(.dss-toast__show.dss-toast__animation):has(.dss-toast__top-right,.dss-toast__bottom-right){animation:openFromRight .5s cubic-bezier(.68,-.55,.25,1.35) forwards}:host:has(.dss-toast__hide.dss-toast__animation):has(.dss-toast__top-left,.dss-toast__bottom-left){animation:closeLeft .5s cubic-bezier(.68,-.55,.25,1.35) forwards}:host:has(.dss-toast__hide.dss-toast__animation):has(.dss-toast__top-right,.dss-toast__bottom-right){animation:closeRight .5s cubic-bezier(.68,-.55,.25,1.35) forwards}.dss-toast{width:-moz-fit-content;width:fit-content;border-radius:var(--dss-radius-sm);padding:var(--dss-spacing-md);box-shadow:0 .25rem .5rem .1875rem #0000000d,0 .0625rem .1875rem #0000001a}.dss-toast .dss-toast__content{font-weight:var(--font-semibold);font-size:.875rem;line-height:var(--line-24);display:flex;justify-content:space-between;gap:var(--dss-spacing-xs)}.dss-toast .dss-toast__icon,.dss-toast .dss-toast__close-icon,.dss-toast .dss-toast__button{align-self:self-start}.dss-toast__info{background-color:var(--color-blue-500);color:var(--color-white)}.dss-toast__success{background-color:var(--color-green-500);color:var(--color-white)}.dss-toast__warning{background-color:var(--color-yellow-500);color:var(--color-yellow-900)}.dss-toast__error{background-color:var(--color-red-500);color:var(--color-white)}@keyframes openFromLeft{0%{display:none;transform:translate(calc(-100% - var(--dss-spacing-xxs)))}to{display:block;transform:translate(0)}}@keyframes closeLeft{0%{display:block;transform:translate(0)}to{display:none;transform:translate(calc(-100% - var(--dss-spacing-xxs)))}}@keyframes openFromRight{0%{display:none;transform:translate(calc(100% + var(--dss-spacing-xxs)))}to{display:block;transform:translate(0)}}@keyframes closeRight{0%{display:block;transform:translate(0)}to{display:none;transform:translate(calc(100% + var(--dss-spacing-xxs)))}}",$=p`dss-icon${m(f())}`,S=p`dss-button${m(f())}`,B=p`dss-icon-button${m(f())}`,E=t=>{const s={"dss-toast":!0,"dss-toast__icon-button-close":t.hasButtonClose,"dss-toast__animation":t._firstTimeRendered_||t.isShow,[`dss-toast__${t.position}`]:!0,[`dss-toast__${t.state}`]:!0,"dss-toast__show":t.isShow,"dss-toast__hide":!t.isShow},n={info:"info",success:"check_circle",warning:"warning_amber",error:"error"},b={info:"alternative-light",success:"alternative-light",warning:"alternative-dark",error:"alternative-light"},e={info:"white-default",success:"white-default",warning:"warning",error:"white-default"},r=d`
    <div class="dss-toast__icon">
      <${$} icon="${t.icon||n[t.state]}"/>
    </div>
  `,l=d`
    <div class="dss-toast__button">
      <${S}
        type="${b[t.state]}"
        label="${t.buttonLabel}"
        size="sm"
        @onClick="${t.handleClickButton}"
      />
    </div>
  `,v=d`
    <div class="dss-toast__close-icon">
      <${B}
        type="${e[t.state]}"
        icon="close"
        @onClick="${t.handleClose}"
      />
    </div>
  `;return d` <div class="${k(s)}">
    <div class="dss-toast__content">
      ${u(t.hasIcon,()=>r,()=>_)}
      <span class="dss-toast__text">${t.getText().map(g=>d`<p>${g}</p>`)}</span>
      ${u(t.hasButton&&!t.hasButtonClose,()=>l,()=>_)}
      ${u(t.hasButtonClose&&!t.hasButton,()=>v,()=>_)}
    </div>
  </div>`};var I=Object.defineProperty,a=(t,s,n,b)=>{for(var e=void 0,r=t.length-1,l;r>=0;r--)(l=t[r])&&(e=l(s,n,e)||e);return e&&I(s,n,e),e};class i extends y{constructor(){super(),this.isShow=!1,this.text=void 0,this.state="info",this.position="bottom-left",this.icon=void 0,this.hasIcon=!0,this.buttonLabel="Button",this.hasButton=!1,this.hasButtonClose=!1,this.duration=4e3,this._firstTimeRendered_=!1,this.handleAnimationEnd=this.handleAnimationEnd.bind(this)}static get styles(){return[c(x),c(C),c(w)]}update(s){s.has("isShow")&&this.addEventListener("animationend",this.handleAnimationEnd),super.update(s)}updated(s){this._firstTimeRendered_||(this._firstTimeRendered_=!0),s.has("isShow")&&(this.isShow&&this.duration>0&&this._timeoutId_===void 0?this._timeoutId_=window.setTimeout(()=>this.handleClose(),this.duration):!this.isShow&&this.duration>0&&this._timeoutId_!==void 0&&(clearTimeout(this._timeoutId_),this._timeoutId_=void 0))}handleAnimationEnd(){this.isShow||this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0,composed:!0})),this.removeEventListener("animationend",this.handleAnimationEnd)}handleClickButton(){this.dispatchEvent(new CustomEvent("onClickButton",{bubbles:!0,composed:!0}))}handleClose(){this.isShow=!1}getText(){var s;return((s=this.text)==null?void 0:s.split(/\\n|\n/).map(n=>n.trim()))||[]}render(){return E(this)}disconnectedCallback(){super.disconnectedCallback(),this._timeoutId_!==void 0&&clearTimeout(this._timeoutId_),this.removeEventListener("animationend",this.handleAnimationEnd)}}a([o(h)],i.prototype,"isShow");a([o({type:String})],i.prototype,"text");a([o({type:String})],i.prototype,"state");a([o({type:String})],i.prototype,"position");a([o({type:String})],i.prototype,"icon");a([o(h)],i.prototype,"hasIcon");a([o({type:String})],i.prototype,"buttonLabel");a([o(h)],i.prototype,"hasButton");a([o(h)],i.prototype,"hasButtonClose");a([o({type:Number})],i.prototype,"duration");export{i as T};