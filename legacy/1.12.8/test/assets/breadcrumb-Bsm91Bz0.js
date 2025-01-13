import{r as m,a as n}from"./lit-element-DhY7bShc.js";import{E as d}from"./lit-html-B2eaWknC.js";import{n as u}from"./property-DnLABHHV.js";import{r as f}from"./reset.style-B0CQ8619.js";import{n as b}from"./when-BR7zwNJC.js";import{i as p,s as h,u as a}from"./static-B9bHPl91.js";import{g as v}from"./custom-element-scope-Dp4Dg8bo.js";const _=":host{display:block}.dss-breadcrumb{display:flex;align-items:center;width:100%;gap:var(--dss-spacing-xs);height:-moz-fit-content;height:fit-content}.dss-breadcrumb__item{font-size:.875rem;cursor:pointer;color:var(--color-neutral-700);font-weight:var(--font-semibold);display:flex;align-self:center;text-decoration:none}.dss-breadcrumb__item:hover{color:var(--color-neutral-900);transition:color .3s linear}.dss-breadcrumb__item:focus{outline:4px solid var(--color-blue-200);border-radius:4px}.dss-breadcrumb__item:active{color:var(--color-neutral-500)}.dss-breadcrumb__item:last-of-type{color:var(--color-primary-500)}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*g(r,e){if(r!==void 0){let t=0;for(const s of r)yield e(s,t++)}}const c=p`dss-icon${h(v())}`,y=r=>a`
    <div class="dss-breadcrumb">
      ${g(r.items,(e,t)=>a`
            <a
              class="dss-breadcrumb__item"
              href="${e.href||"#"}"
              @click="${s=>r.handleItemClick(s,e)}"
              aria-current="${t===r.items.length-1?"page":"false"}"
            >
              ${e.label}
            </a>
            ${b(t<r.items.length-1,()=>a`<${c} icon="keyboard_arrow_right" size="sm"></${c}>`,()=>d)}
        `)}
    </div>
  `;var $=Object.defineProperty,x=(r,e,t,s)=>{for(var o=void 0,i=r.length-1,l;i>=0;i--)(l=r[i])&&(o=l(e,t,o)||o);return o&&$(e,t,o),o};class k extends m{constructor(){super(...arguments),this.items=[]}static get styles(){return[n(f),n(_)]}handleItemClick(e,t){var s;e.preventDefault(),(s=e.currentTarget)==null||s.blur(),this.dispatchEvent(new CustomEvent("onItemClick",{detail:t.href,bubbles:!0,composed:!0}))}render(){return y(this)}}x([u({type:Array})],k.prototype,"items");export{k as B};
