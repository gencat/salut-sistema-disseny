import{r as c,a as h}from"./lit-element-vV9fql9z.js";import"./lit-html-paDGiEfB.js";import{n as e}from"./property-CzN8u98o.js";import{r as p}from"./reset.style-B0CQ8619.js";import{b as d}from"./property-types-CkH-zh1n.js";import{b as y}from"./button.style-2dqsCQot.js";import{i as b,s as f,g as $,u as _}from"./custom-element-scope-KJWplpvx.js";import{e as g}from"./class-map-2iHk_WiG.js";const u=b`dss-icon${f($())}`,z=t=>_`
  <button
    class=${g({"dss-button":!0,"dss-button--full-width":!!t._fullWidth,[`dss-button--${t._type}`]:!!t._type,[`dss-button--${t._size}`]:!!t._size,"dss-button--icon-left":!!t._icon&&!t._onlyIcon&&t._iconPosition==="left","dss-button--icon-right":!!t._icon&&!t._onlyIcon&&t._iconPosition==="right","dss-button--only-icon":!!t._onlyIcon})}
    ?disabled=${t._disabled}
    ?hidden=${t._hidden}
    @click=${t._handleClick}
  >
    ${t._icon?_`
          <${u}
            size=${t._iconSize}
            icon=${t._icon}
            >${t._icon}</${u}>
        `:null}
    ${t._label}
  </button>
`;var P=Object.defineProperty,S=Object.getOwnPropertyDescriptor,o=(t,i,s,q)=>{for(var n=S(i,s),r=t.length-1,a;r>=0;r--)(a=t[r])&&(n=a(i,s,n)||n);return n&&P(i,s,n),n};class l extends c{constructor(){super(...arguments),this._type="primary",this._size="md",this._label="",this._icon=void 0,this._iconSize="sm",this._iconPosition="left",this._iconFill=!1,this._disabled=!1,this._hidden=!1,this._onlyIcon=!1,this._fullWidth=!1}static get styles(){return[h(p),h(y)]}set type(i){const s=this._type;this._type=i,this.requestUpdate("type",s)}set size(i){const s=this._size;this._size=i,i==="lg"&&(this._iconSize="md"),this.requestUpdate("size",s)}set label(i){const s=this._label;this._label=i,this.requestUpdate("label",s)}set icon(i){const s=this._icon;this._icon=i,this.requestUpdate("icon",s)}set iconPosition(i){const s=this._iconPosition;this._iconPosition=i,this.requestUpdate("iconPosition",s)}set iconFill(i){const s=this._iconFill;this._iconFill=i,this.requestUpdate("iconFill",s)}set disabled(i){const s=this._disabled;this._disabled=i,this.requestUpdate("disabled",s)}set hidden(i){const s=this._hidden;this._hidden=i,this.requestUpdate("hidden",s)}set onlyIcon(i){const s=this._onlyIcon;this._onlyIcon=i,this.requestUpdate("onlyIcon",s)}set fullWidth(i){const s=this._fullWidth;this._fullWidth=i,this.requestUpdate("fullWidth",s)}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}render(){return z(this)}}o([e({type:String})],l.prototype,"type");o([e({type:String})],l.prototype,"size");o([e({type:String})],l.prototype,"label");o([e({type:String})],l.prototype,"icon");o([e({type:String})],l.prototype,"iconPosition");o([e(d)],l.prototype,"iconFill");o([e(d)],l.prototype,"disabled");o([e(d)],l.prototype,"hidden");o([e(d)],l.prototype,"onlyIcon");o([e(d)],l.prototype,"fullWidth");export{l as B};
