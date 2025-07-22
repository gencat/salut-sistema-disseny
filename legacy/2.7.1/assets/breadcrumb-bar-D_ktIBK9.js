import{i as n,r as c}from"./lit-element-Dloa6E9d.js";import{E as m}from"./lit-html-D6a8R3xZ.js";import{n as u}from"./property-BpSxuat7.js";import{r as b}from"./reset.style-B0CQ8619.js";import{o as p}from"./map-DiiNQ3pp.js";import{n as f}from"./when-BR7zwNJC.js";import{s as g,i as v,u as o}from"./static-BTPASdtP.js";import{g as h}from"./custom-element-scope-Dp4Dg8bo.js";const _=":host{display:block}.dss-breadcrumb-bar{display:flex;align-items:center;width:100%;gap:var(--dss-spacing-lg);height:40px;padding:var(--dss-spacing-xs) var(--dss-spacing-lg);background-color:var(--color-neutral-50)}.dss-breadcrumb{flex:1;display:flex;align-items:center;width:100%;gap:var(--dss-spacing-xs);height:-moz-fit-content;height:fit-content}.dss-breadcrumb__item{font-size:.875rem;cursor:pointer;color:var(--color-neutral-700);font-weight:var(--font-semibold);display:flex;align-self:center;text-decoration:none}.dss-breadcrumb__item:hover{color:var(--color-neutral-900);transition:color .3s linear}.dss-breadcrumb__item:focus{outline:4px solid var(--color-blue-200);border-radius:4px}.dss-breadcrumb__item:active{color:var(--color-neutral-500)}.dss-breadcrumb__item:last-of-type{color:var(--color-primary-500)}.dss-breadcrumb__actions{display:flex;align-items:center}",d=v`dss-icon${g(h())}`,y=e=>o`
    <div class="dss-breadcrumb-bar">

      <div class="dss-breadcrumb" role="navigation" aria-label="Ruta de pàgina">
        ${p(e.items,(r,s)=>o`
              <a
                class="dss-breadcrumb__item"
                href="${r.href||"#"}"
                @click="${a=>e.handleItemClick(a,r)}"
                aria-current="${s===e.items.length-1?"page":"false"}"
                title="${r.label}"
              >
                ${r.label}
              </a>
              ${f(s<e.items.length-1,()=>o`<${d} icon="keyboard_arrow_right" size="sm"></${d}>`,()=>m)}
          `)}
      </div>

      <div class="dss-breadcrumb__actions">
        <slot></slot>  
      </div>
    </div>

  `;var x=Object.defineProperty,$=(e,r,s,a)=>{for(var t=void 0,i=e.length-1,l;i>=0;i--)(l=e[i])&&(t=l(r,s,t)||t);return t&&x(r,s,t),t};class k extends n{constructor(){super(...arguments),this.items=[]}static get styles(){return[c(b),c(_)]}handleItemClick(r,s){var a;r.preventDefault(),(a=r.currentTarget)==null||a.blur(),this.dispatchEvent(new CustomEvent("onItemClick",{detail:s.href,bubbles:!0,composed:!0}))}render(){return y(this)}}$([u({type:Array})],k.prototype,"items");export{k as B};
