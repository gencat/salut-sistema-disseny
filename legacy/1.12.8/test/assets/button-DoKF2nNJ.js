import{r as f,a as h}from"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import{n as i}from"./property-DnLABHHV.js";import{r as b}from"./reset.style-B0CQ8619.js";import{b as a}from"./property-types-CkH-zh1n.js";import{b as c}from"./button.style-2dqsCQot.js";import{e as _}from"./class-map-BDeD7Kfm.js";import{i as $,s as z,u as p}from"./static-B9bHPl91.js";import{g}from"./custom-element-scope-Dp4Dg8bo.js";const y=$`dss-icon${z(g())}`,S=t=>p`
  <button
    class=${_({"dss-button":!0,"dss-button--full-width":!!t.fullWidth,[`dss-button--${t.type}`]:!!t.type,[`dss-button--${t._size}`]:!!t._size,"dss-button--icon-left":!!t.icon&&!t.onlyIcon&&t.iconPosition==="left","dss-button--icon-right":!!t.icon&&!t.onlyIcon&&t.iconPosition==="right","dss-button--only-icon":!!t.onlyIcon})}
    ?disabled=${t.disabled}
    ?hidden=${t.hidden}
    @click=${t._handleClick}
  >
    ${t.icon?p`
          <${y}
            size=${t._iconSize}
            icon=${t.icon}
            >${t.icon}</${y}>
        `:null}
    ${t.label}
  </button>
`;var B=Object.defineProperty,m=Object.getOwnPropertyDescriptor,s=(t,o,l,n)=>{for(var r=n>1?void 0:n?m(o,l):o,d=t.length-1,u;d>=0;d--)(u=t[d])&&(r=(n?u(o,l,r):u(r))||r);return n&&r&&B(o,l,r),r};class e extends f{constructor(){super(...arguments),this.type="primary",this.label="",this.icon=void 0,this.iconPosition="left",this.disabled=!1,this.hidden=!1,this.onlyIcon=!1,this.fullWidth=!1,this._size="md",this._iconSize="sm"}static get styles(){return[h(b),h(c)]}set size(o){const l=this._size;this._size=o,o==="lg"&&(this._iconSize="md"),this.requestUpdate("size",l)}get size(){return this._size}_handleClick(){this.dispatchEvent(new CustomEvent("onClick",{bubbles:!0,composed:!0}))}render(){return S(this)}}s([i({type:String})],e.prototype,"type",2);s([i({type:String})],e.prototype,"label",2);s([i({type:String})],e.prototype,"icon",2);s([i({type:String})],e.prototype,"iconPosition",2);s([i(a)],e.prototype,"disabled",2);s([i(a)],e.prototype,"hidden",2);s([i(a)],e.prototype,"onlyIcon",2);s([i(a)],e.prototype,"fullWidth",2);s([i({type:String})],e.prototype,"size",1);export{e as B};
