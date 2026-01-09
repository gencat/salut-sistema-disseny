import{i as g,r as l}from"./lit-element-BL4lq474.js";import"./lit-html-D6cejpwM.js";import{s as c,i as y,u as f,n as t,r as v}from"./static-BGxLalzl.js";import{i as k}from"./icon.style-Bcf7OUvG.js";import{b as h}from"./property-types-BdBkOe9l.js";import{e as b}from"./class-map-BdrBOWJy.js";import{g as u}from"./custom-element-scope-Dp4Dg8bo.js";const S=":host{display:inline;vertical-align:middle;font-size:inherit}.dss-link{display:inline-flex;align-items:center;gap:var(--dss-spacing-xxs);font-family:var(--font-family);font-size:inherit;font-weight:inherit;line-height:inherit;color:var(--color-primary-500);text-decoration:none;transition:.2s all ease-in;vertical-align:text-bottom}.dss-link:visited{color:var(--color-purple-700)}.dss-link:hover{color:var(--color-primary-600)}.dss-link:active{color:var(--color-primary-400)}.dss-link:focus-visible{outline:var(--dss-border-width-lg) solid var(--color-blue-200)}.dss-link.dss-link--disabled{cursor:not-allowed;color:var(--color-neutral-500)!important}.dss-link.dss-link--regular{font-weight:var(--font-regular)}.dss-link.dss-link--semibold{font-weight:var(--font-semibold)}.dss-link.dss-link--bold{font-weight:var(--font-bold)}.dss-link .dss-link-text{text-decoration:underline}.dss-link--icon-right{flex-direction:row-reverse}",p=y`dss-icon${c(u())}`,m=i=>f`
  <a
    href="${i.disabled?"javascript:void(0)":i.href}"
    target="${i.disabled?"_self":i.target}"
    ?download="${i.download}"
    style="font-size: ${i.fontSize};"
    class=${b({"dss-link":!0,"dss-link--disabled":!!i.disabled,"dss-link--icon-right":!!i.icon&&i.iconPosition==="right",[`dss-link--${i.fontWeight}`]:i.fontWeight!=="inherit"})}
  >
    ${i.icon?f`
          <${p} size="${i.iconSize}" icon="${i.icon}"></${p}>
        `:null}
    <span class="dss-link-text">${i.label}</span>
  </a>
`;var $=Object.defineProperty,s=(i,n,a,x)=>{for(var r=void 0,o=i.length-1,d;o>=0;o--)(d=i[o])&&(r=d(n,a,r)||r);return r&&$(n,a,r),r};class e extends g{constructor(){super(...arguments),this.href="#",this.label="",this.icon=void 0,this.iconSize="sm",this.iconPosition="left",this.disabled=!1,this.download=!1,this.target="_self",this.fontWeight="inherit",this.fontSize="inherit"}static get styles(){return[l(k),l(v),l(S)]}render(){return m(this)}}s([t({type:String})],e.prototype,"href");s([t({type:String})],e.prototype,"label");s([t({type:String})],e.prototype,"icon");s([t({type:String})],e.prototype,"iconSize");s([t({type:String})],e.prototype,"iconPosition");s([t(h)],e.prototype,"disabled");s([t(h)],e.prototype,"download");s([t({type:String})],e.prototype,"target");s([t({type:String})],e.prototype,"fontWeight");s([t({type:String})],e.prototype,"fontSize");export{e as L};
