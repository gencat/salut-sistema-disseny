import{r as m,a as _}from"./lit-element-DyeN6MU1.js";import"./lit-html-CeYizTxc.js";import{n as r}from"./property-CttF5lnp.js";import{r as f}from"./reset.style-B0CQ8619.js";import{b as v}from"./property-types-CkH-zh1n.js";import{i as d,s as c,u as l}from"./static-Dd08Oexw.js";import{g as h}from"./custom-element-scope-Dp4Dg8bo.js";const x=":host{display:inline-block;vertical-align:middle;max-width:100%}.dss-alert{display:flex;justify-content:space-between;gap:var(--dss-spacing-md);padding:var(--dss-spacing-xs) var(--dss-spacing-sm);border-radius:var(--dss-radius-sm);width:-moz-fit-content;width:fit-content;max-width:100%;font-weight:var(--font-semibold);font-size:14px;line-height:var(--line-24);color:var(--color-blue-700);background-color:var(--color-blue-50);border:1px solid var(--color-blue-700)}.dss-alert--md{font-size:12px;line-height:16px;padding:var(--dss-spacing-xs) var(--dss-spacing-xs) var(--dss-spacing-xs) var(--dss-spacing-sm);border-radius:var(--dss-radius-sm);gap:var(--dss-spacing-sm)}.dss-alert--sm{font-size:12px;line-height:16px;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);border-radius:var(--dss-radius-xs)}.dss-alert--error{color:var(--color-red-700);background-color:var(--color-red-50);border-color:var(--color-red-700)}.dss-alert--warning{color:var(--color-yellow-800);background-color:var(--color-yellow-50);border-color:var(--color-yellow-800)}.dss-alert--success{color:var(--color-green-700);background-color:var(--color-green-50);border-color:var(--color-green-700)}.dss-alert .dss-alert-body{display:flex;gap:var(--dss-spacing-xs)}.dss-alert .dss-alert-body .dss-alert__icon{align-self:flex-start;height:24px;display:flex;align-items:center}.dss-alert.dss-alert--md .dss-alert-body .dss-alert__icon{height:16px}.dss-alert .dss-alert-body .dss-alert__text{display:flex;align-items:center}.dss-alert .dss-alert-action{line-height:0}",g=d`dss-icon${c(h())}`,p=d`dss-icon-button${c(h())}`,b=d`dss-button${c(h())}`,y=t=>l`
  <div
    class="dss-alert dss-alert--${t._size} dss-alert--${t._state}"
  >
    <div class="dss-alert-body">
      ${t._size!=="sm"?l`
            <div class="dss-alert__icon">
              <${g} size="${t._iconSize}" icon="${t._stateIcon}"></${g}>
            </div>
          `:null}
      <div class="dss-alert__text">${t._message}</div>
    </div>
    ${t._hasCloseIcon?l`
          <div class="dss-alert-action">
            <${p}
              class="dss-alert__icon-button"
              icon="close"
              size="${t._iconSize}"
              variant="${t._state}"
              @onClick="${t._handleClose}"
            ></${p}>
          </div>
        `:null}
    ${t._size==="lg"&&t._hasButton?l`
          <div class="dss-alert-action">
            <${b}
              size="sm"
              variant="${t._state}"
              label="${t._buttonLabel}"
              @onClick="${t._handleButtonClick}"
            ></${b}>
          </div>
        `:null}
  </div>
`;var $=Object.defineProperty,z=Object.getOwnPropertyDescriptor,o=(t,s,e,C)=>{for(var a=z(s,e),n=t.length-1,u;n>=0;n--)(u=t[n])&&(a=u(s,e,a)||a);return a&&$(s,e,a),a};class i extends m{constructor(){super(...arguments),this._state="info",this._size="md",this._iconSize="sm",this._message="Your message. short and clear.",this._hasCloseIcon=!1,this._hasButton=!1,this._buttonLabel="Button",this._stateIcon="info"}static get styles(){return[_(f),_(x)]}set state(s){const e=this._state;switch(s){case"error":this._state=s,this._stateIcon="error";break;case"warning":this._state=s,this._stateIcon="report";break;case"success":this._state=s,this._stateIcon="check_circle";break;default:this._state="info",this._stateIcon="info"}this.requestUpdate("state",e)}get state(){return this._state}set size(s){const e=this._size;this._size=s,this._iconSize=s==="lg"?"md":"sm",this.requestUpdate("size",e)}get size(){return this._size}set message(s){const e=this._message;this._message=s,this.requestUpdate("message",e)}get message(){return this._message}set hasCloseIcon(s){const e=this._hasCloseIcon;this._hasCloseIcon=s,this.requestUpdate("hasCloseIcon",e)}get hasCloseIcon(){return this._hasCloseIcon}set hasButton(s){const e=this._hasButton;this._hasButton=s,s&&(this._hasCloseIcon=!1),this.requestUpdate("hasButton",e)}get hasButton(){return this._hasButton}set buttonLabel(s){const e=this._buttonLabel;this._buttonLabel=s,this.requestUpdate("buttonLabel",e)}get buttonLabel(){return this._buttonLabel}_handleButtonClick(){this.dispatchEvent(new CustomEvent("onButtonClick",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0,composed:!0}))}render(){return y(this)}}o([r({type:String})],i.prototype,"state");o([r({type:String})],i.prototype,"size");o([r({type:String})],i.prototype,"message");o([r(v)],i.prototype,"hasCloseIcon");o([r(v)],i.prototype,"hasButton");o([r({type:String})],i.prototype,"buttonLabel");export{i as A};
