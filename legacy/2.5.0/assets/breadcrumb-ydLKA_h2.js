import{i as m,r as n}from"./lit-element-Dloa6E9d.js";import{E as d}from"./lit-html-D6a8R3xZ.js";import{n as u}from"./property-BpSxuat7.js";import{r as b}from"./reset.style-B0CQ8619.js";import{o as f}from"./map-DiiNQ3pp.js";import{n as p}from"./when-BR7zwNJC.js";import{s as h,i as v,u as i}from"./static-BTPASdtP.js";import{g}from"./custom-element-scope-Dp4Dg8bo.js";const _=":host{display:block}.dss-breadcrumb{display:flex;align-items:center;width:100%;gap:var(--dss-spacing-xs);height:-moz-fit-content;height:fit-content}.dss-breadcrumb__item{font-size:.875rem;cursor:pointer;color:var(--color-neutral-700);font-weight:var(--font-semibold);display:flex;align-self:center;text-decoration:none}.dss-breadcrumb__item:hover{color:var(--color-neutral-900);transition:color .3s linear}.dss-breadcrumb__item:focus{outline:4px solid var(--color-blue-200);border-radius:4px}.dss-breadcrumb__item:active{color:var(--color-neutral-500)}.dss-breadcrumb__item:last-of-type{color:var(--color-primary-500)}",c=v`dss-icon${h(g())}`,y=e=>i`
    <div class="dss-breadcrumb" role="navigation" aria-label="Ruta de pàgina">
      ${f(e.items,(r,t)=>i`
            <a
              class="dss-breadcrumb__item"
              href="${r.href||"#"}"
              @click="${o=>e.handleItemClick(o,r)}"
              aria-current="${t===e.items.length-1?"page":"false"}"
              title="${r.label}"
            >
              ${r.label}
            </a>
            ${p(t<e.items.length-1,()=>i`<${c} icon="keyboard_arrow_right" size="sm"></${c}>`,()=>d)}
        `)}
    </div>
  `;var $=Object.defineProperty,x=(e,r,t,o)=>{for(var s=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(s=l(r,t,s)||s);return s&&$(r,t,s),s};class k extends m{constructor(){super(...arguments),this.items=[]}static get styles(){return[n(b),n(_)]}handleItemClick(r,t){var o;r.preventDefault(),(o=r.currentTarget)==null||o.blur(),this.dispatchEvent(new CustomEvent("onItemClick",{detail:t.href,bubbles:!0,composed:!0}))}render(){return y(this)}}x([u({type:Array})],k.prototype,"items");export{k as B};
