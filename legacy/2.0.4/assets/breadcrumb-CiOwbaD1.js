import{r as d,a as n}from"./lit-element-DyeN6MU1.js";import{E as m}from"./lit-html-CeYizTxc.js";import{n as u}from"./property-CttF5lnp.js";import{r as f}from"./reset.style-B0CQ8619.js";import{n as b}from"./when-BR7zwNJC.js";import{i as p,s as h,u as i}from"./static-Dd08Oexw.js";import{g as v}from"./custom-element-scope-Dp4Dg8bo.js";const g=":host{display:block}.dss-breadcrumb{display:flex;align-items:center;width:100%;gap:var(--dss-spacing-xs);height:-moz-fit-content;height:fit-content}.dss-breadcrumb__item{font-size:.875rem;cursor:pointer;color:var(--color-neutral-700);font-weight:var(--font-semibold);display:flex;align-self:center;text-decoration:none}.dss-breadcrumb__item:hover{color:var(--color-neutral-900);transition:color .3s linear}.dss-breadcrumb__item:focus{outline:4px solid var(--color-blue-200);border-radius:4px}.dss-breadcrumb__item:active{color:var(--color-neutral-500)}.dss-breadcrumb__item:last-of-type{color:var(--color-primary-500)}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*_(e,r){if(e!==void 0){let t=0;for(const s of e)yield r(s,t++)}}const c=p`dss-icon${h(v())}`,y=e=>i`
    <div class="dss-breadcrumb" role="navigation" aria-label="Ruta de pàgina">
      ${_(e.items,(r,t)=>i`
            <a
              class="dss-breadcrumb__item"
              href="${r.href||"#"}"
              @click="${s=>e.handleItemClick(s,r)}"
              aria-current="${t===e.items.length-1?"page":"false"}"
              title="${r.label}"
            >
              ${r.label}
            </a>
            ${b(t<e.items.length-1,()=>i`<${c} icon="keyboard_arrow_right" size="sm"></${c}>`,()=>m)}
        `)}
    </div>
  `;var $=Object.defineProperty,x=(e,r,t,s)=>{for(var o=void 0,a=e.length-1,l;a>=0;a--)(l=e[a])&&(o=l(r,t,o)||o);return o&&$(r,t,o),o};class k extends d{constructor(){super(...arguments),this.items=[]}static get styles(){return[n(f),n(g)]}handleItemClick(r,t){var s;r.preventDefault(),(s=r.currentTarget)==null||s.blur(),this.dispatchEvent(new CustomEvent("onItemClick",{detail:t.href,bubbles:!0,composed:!0}))}render(){return y(this)}}x([u({type:Array})],k.prototype,"items");export{k as B};
