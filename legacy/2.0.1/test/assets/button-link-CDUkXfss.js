import{r as u,a as e}from"./lit-element-DhY7bShc.js";import{x as c}from"./lit-html-B2eaWknC.js";import{n as o}from"./property-DnLABHHV.js";import{i as p}from"./icon.style-DPTab5RN.js";import{r as b}from"./reset.style-B0CQ8619.js";import{b as f}from"./property-types-CkH-zh1n.js";import{e as v}from"./class-map-BDeD7Kfm.js";const k=":host{display:inline-block;vertical-align:middle}.dss-button-link{display:inline-flex;align-items:center;gap:var(--dss-spacing-xxs);font-size:14px;line-height:24px;font-weight:var(--font-semibold);color:var(--color-primary-500);text-decoration:none;border-radius:var(--dss-radius-xs);transition:.2s all ease-in;vertical-align:middle}.dss-button-link:visited{color:var(--color-purple-700)}.dss-button-link:hover{color:var(--color-primary-600)}.dss-button-link:active{color:var(--color-primary-400)}.dss-button-link:focus-visible{outline:var(--dss-border-width-md) solid var(--color-blue-200)}.dss-button-link.dss-button-link--disabled{cursor:not-allowed;color:var(--color-neutral-500)!important}.dss-button-link .dss-button-link-text{text-decoration:underline}.dss-button-link--icon-right{flex-direction:row-reverse}",m=t=>c`
  <a
    href="${t.linkHref}"
    class=${v({"dss-button-link":!0,"dss-button-link--disabled":!!t.disabled,"dss-button-link--icon-right":!!t.icon&&t.iconPosition==="right"})}
  >
    ${t.icon?c`
          <i class="dss-icon dss-icon--sm dss-button-link-icon"
            >${t.icon}</i
          >
        `:null}
    <span class="dss-button-link-text"> ${t.label} </span>
  </a>
`;var y=Object.defineProperty,s=(t,l,a,h)=>{for(var i=void 0,n=t.length-1,d;n>=0;n--)(d=t[n])&&(i=d(l,a,i)||i);return i&&y(l,a,i),i};class r extends u{constructor(){super(...arguments),this.linkHref="#",this.label="Button Link",this.icon=void 0,this.iconPosition="left",this.disabled=!1}static get styles(){return[e(p),e(b),e(k)]}render(){return m(this)}}s([o({type:String})],r.prototype,"linkHref");s([o({type:String})],r.prototype,"label");s([o({type:String})],r.prototype,"icon");s([o({type:String})],r.prototype,"iconPosition");s([o(f)],r.prototype,"disabled");export{r as B};
