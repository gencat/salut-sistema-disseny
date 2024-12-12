import{r as n,a as l}from"./lit-element-DhY7bShc.js";import"./lit-html-B2eaWknC.js";import{n as m}from"./property-DnLABHHV.js";import{r as d}from"./reset.style-B0CQ8619.js";import{u as c}from"./static-B9bHPl91.js";const b=':host{display:block}.dss-breadcrumb{display:flex;align-items:center;width:100%;gap:var(--dss-spacing-xs);height:-moz-fit-content;height:fit-content}.dss-breadcrumb__item{font-size:.875rem;cursor:pointer;color:var(--color-neutral-500);font-weight:var(--font-semibold);display:flex;align-self:center;text-decoration:none}.dss-breadcrumb__item:hover,.dss-breadcrumb__item:focus{color:var(--color-primary-500);transition:all .3s linear}.dss-breadcrumb__item:active{color:var(--color-primary-400)}.dss-breadcrumb__item:not(:first-child):before{font-family:var(--font-icons);content:"keyboard_arrow_right";text-align:center;font-size:var(--icon-size-sm);margin-right:var(--dss-spacing-xs);font-weight:var(--font-semibold);color:var(--color-neutral-500)}.dss-breadcrumb__item:last-of-type{color:var(--color-neutral-900)}.dss-breadcrumb__item:last-of-type:hover,.dss-breadcrumb__item:last-of-type:focus{color:var(--color-primary-500)}.dss-breadcrumb__item:last-of-type:active{color:var(--color-primary-400)}',f=e=>c`
    <div class="dss-breadcrumb">
      ${e.items.map((r,t)=>c`
            <a
              class="dss-breadcrumb__item"
              href="${r.href||"#"}"
              @click="${a=>e.handleItemClick(a,r)}"
              aria-current="${t===e.items.length-1?"page":"false"}"
            >
              ${r.label}
            </a>
          `)}
    </div>
  `;var u=Object.defineProperty,p=(e,r,t,a)=>{for(var s=void 0,o=e.length-1,i;o>=0;o--)(i=e[o])&&(s=i(r,t,s)||s);return s&&u(r,t,s),s};class v extends n{constructor(){super(...arguments),this.items=[]}static get styles(){return[l(d),l(b)]}handleItemClick(r,t){var a;r.preventDefault(),(a=r.currentTarget)==null||a.blur(),this.dispatchEvent(new CustomEvent("onItemClick",{detail:t.href,bubbles:!0,composed:!0}))}render(){return f(this)}}p([m({type:Array})],v.prototype,"items");export{v as B};
