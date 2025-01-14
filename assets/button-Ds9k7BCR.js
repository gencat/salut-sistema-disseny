import{r as b,a as y}from"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import{n as i}from"./property-DnLABHHV.js";import{r as f}from"./reset.style-B0CQ8619.js";import{b as n}from"./property-types-CkH-zh1n.js";import{b as c}from"./button.style-2dqsCQot.js";import{e as $}from"./class-map-BDeD7Kfm.js";import{i as _,s as g,u as h}from"./static-B9bHPl91.js";import{g as z}from"./custom-element-scope-Dp4Dg8bo.js";const p=_`dss-icon${g(z())}`,v=t=>h`
  <button
    type=${t.type}
    class=${$({"dss-button":!0,"dss-button--full-width":!!t.fullWidth,[`dss-button--${t.variant}`]:!!t.variant,[`dss-button--${t._size}`]:!!t._size,"dss-button--icon-left":!!t.icon&&!t.onlyIcon&&t.iconPosition==="left","dss-button--icon-right":!!t.icon&&!t.onlyIcon&&t.iconPosition==="right","dss-button--only-icon":!!t.onlyIcon})}
    aria-label="${t.label}"
    ?disabled=${t.disabled}
    ?hidden=${t.hidden}
    @click=${t._handleClick}
  >
    ${t.icon?h`
          <${p}
            size=${t._iconSize}
            icon=${t.icon}
            >${t.icon}</${p}>
        `:null}
    ${t.onlyIcon?null:h`
          ${t.label}
        `}
    
  </button>
`;var S=Object.defineProperty,B=Object.getOwnPropertyDescriptor,s=(t,o,l,a)=>{for(var r=a>1?void 0:a?B(o,l):o,d=t.length-1,u;d>=0;d--)(u=t[d])&&(r=(a?u(o,l,r):u(r))||r);return a&&r&&S(o,l,r),r};class e extends b{constructor(){super(...arguments),this.type="button",this.variant="primary",this.label="",this.icon=void 0,this.iconPosition="left",this.disabled=!1,this.hidden=!1,this.onlyIcon=!1,this.fullWidth=!1,this._size="md",this._iconSize="sm"}static get styles(){return[y(f),y(c)]}set size(o){const l=this._size;this._size=o,o==="lg"&&(this._iconSize="md"),this.requestUpdate("size",l)}get size(){return this._size}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}render(){return v(this)}}s([i({type:String})],e.prototype,"type",2);s([i({type:String})],e.prototype,"variant",2);s([i({type:String})],e.prototype,"label",2);s([i({type:String})],e.prototype,"icon",2);s([i({type:String})],e.prototype,"iconPosition",2);s([i(n)],e.prototype,"disabled",2);s([i(n)],e.prototype,"hidden",2);s([i(n)],e.prototype,"onlyIcon",2);s([i(n)],e.prototype,"fullWidth",2);s([i({type:String})],e.prototype,"size",1);export{e as B};
