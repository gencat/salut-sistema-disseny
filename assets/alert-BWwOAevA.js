import{i as m,r as p}from"./lit-element-Dloa6E9d.js";import"./lit-html-D6a8R3xZ.js";import{n as r}from"./property-BpSxuat7.js";import{r as x}from"./reset.style-B0CQ8619.js";import{b as h}from"./property-types-CkH-zh1n.js";import{e as y}from"./class-map-t53NE6z1.js";import{s as u,i as _,u as d}from"./static-BTPASdtP.js";import{g}from"./custom-element-scope-Dp4Dg8bo.js";const $=".dss-alert{display:flex;justify-content:space-between;gap:var(--dss-spacing-md);padding:var(--dss-spacing-xs) var(--dss-spacing-sm);border-radius:var(--dss-radius-sm);width:-moz-fit-content;width:fit-content;max-width:100%;font-weight:var(--font-semibold);font-size:14px;line-height:var(--line-24);color:var(--color-blue-700);background-color:var(--color-blue-50);border:1px solid var(--color-blue-700)}.dss-alert--full-width{width:100%}.dss-alert--md{font-size:12px;line-height:16px;padding:var(--dss-spacing-xs) var(--dss-spacing-xs) var(--dss-spacing-xs) var(--dss-spacing-sm);border-radius:var(--dss-radius-sm);gap:var(--dss-spacing-sm)}.dss-alert--sm{font-size:12px;line-height:16px;gap:var(--dss-spacing-xs);padding:var(--dss-spacing-xxs) var(--dss-spacing-xs);border-radius:var(--dss-radius-xs)}.dss-alert--error{color:var(--color-red-700);background-color:var(--color-red-50);border-color:var(--color-red-700)}.dss-alert--warning{color:var(--color-yellow-800);background-color:var(--color-yellow-50);border-color:var(--color-yellow-800)}.dss-alert--success{color:var(--color-green-700);background-color:var(--color-green-50);border-color:var(--color-green-700)}.dss-alert .dss-alert-body{display:flex;gap:var(--dss-spacing-xs)}.dss-alert .dss-alert-body .dss-alert__icon{align-self:flex-start;height:24px;display:flex;align-items:center}.dss-alert.dss-alert--md .dss-alert-body .dss-alert__icon{height:16px}.dss-alert .dss-alert-body .dss-alert__text{display:flex;align-items:center}.dss-alert .dss-alert-action{line-height:0}",b=_`dss-icon${u(g())}`,v=_`dss-icon-button${u(g())}`,f=_`dss-button${u(g())}`,z=s=>d`
  <div
    class=${y({"dss-alert":!0,[`dss-alert--${s._size}`]:!!s._size,[`dss-alert--${s._state}`]:!!s._state,"dss-alert--full-width":s.fullWidth})}
  >
    <div class="dss-alert-body">
      ${s._size!=="sm"?d`
            <div class="dss-alert__icon">
              <${b} size="${s._iconSize}" icon="${s._stateIcon}"></${b}>
            </div>
          `:null}
      <div class="dss-alert__text">${s._message}</div>
    </div>
    ${s._hasCloseIcon?d`
          <div class="dss-alert-action">
            <${v}
              class="dss-alert__icon-button"
              icon="close"
              size="${s._iconSize}"
              variant="${s._state}"
              @onClick="${s._handleClose}"
            ></${v}>
          </div>
        `:null}
    ${s._size==="lg"&&s._hasButton?d`
          <div class="dss-alert-action">
            <${f}
              size="sm"
              variant="${s._state}"
              label="${s._buttonLabel}"
              @onClick="${s._handleButtonClick}"
            ></${f}>
          </div>
        `:null}
  </div>
`;var C=Object.defineProperty,w=Object.getOwnPropertyDescriptor,o=(s,t,e,l)=>{for(var a=l>1?void 0:l?w(t,e):t,n=s.length-1,c;n>=0;n--)(c=s[n])&&(a=(l?c(t,e,a):c(a))||a);return l&&a&&C(t,e,a),a};class i extends m{constructor(){super(...arguments),this.fullWidth=!1,this._state="info",this._size="md",this._iconSize="sm",this._message="Your message. short and clear.",this._hasCloseIcon=!1,this._hasButton=!1,this._buttonLabel="Button",this._stateIcon="info"}static get styles(){return[p(x),p($)]}set state(t){const e=this._state;switch(t){case"error":this._state=t,this._stateIcon="error";break;case"warning":this._state=t,this._stateIcon="report";break;case"success":this._state=t,this._stateIcon="check_circle";break;default:this._state="info",this._stateIcon="info"}this.requestUpdate("state",e)}get state(){return this._state}set size(t){const e=this._size;this._size=t,this._iconSize=t==="lg"?"md":"sm",this.requestUpdate("size",e)}get size(){return this._size}set message(t){const e=this._message;this._message=t,this.requestUpdate("message",e)}get message(){return this._message}set hasCloseIcon(t){const e=this._hasCloseIcon;this._hasCloseIcon=t,this.requestUpdate("hasCloseIcon",e)}get hasCloseIcon(){return this._hasCloseIcon}set hasButton(t){const e=this._hasButton;this._hasButton=t,t&&(this._hasCloseIcon=!1),this.requestUpdate("hasButton",e)}get hasButton(){return this._hasButton}set buttonLabel(t){const e=this._buttonLabel;this._buttonLabel=t,this.requestUpdate("buttonLabel",e)}get buttonLabel(){return this._buttonLabel}_handleButtonClick(){this.dispatchEvent(new CustomEvent("onButtonClick",{bubbles:!0,composed:!0}))}_handleClose(){this.dispatchEvent(new CustomEvent("onClose",{bubbles:!0,composed:!0}))}render(){return z(this)}}o([r({type:String})],i.prototype,"state",1);o([r({type:String})],i.prototype,"size",1);o([r({type:String})],i.prototype,"message",1);o([r(h)],i.prototype,"hasCloseIcon",1);o([r(h)],i.prototype,"hasButton",1);o([r({type:String})],i.prototype,"buttonLabel",1);o([r(h)],i.prototype,"fullWidth",2);export{i as A};
