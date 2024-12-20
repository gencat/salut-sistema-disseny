import{E as v,x as _}from"./lit-html-B2eaWknC.js";import{r as $,a as l}from"./lit-element-DhY7bShc.js";import{n as S}from"./property-DnLABHHV.js";import{r as O}from"./reset.style-B0CQ8619.js";import{n as x}from"./when-BR7zwNJC.js";import{i as J,s as N,u as c}from"./static-B9bHPl91.js";import{g as P}from"./custom-element-scope-Dp4Dg8bo.js";const C=":host{display:block}.dss-breadcrumb{display:flex;align-items:center;width:100%;gap:var(--dss-spacing-xs);height:-moz-fit-content;height:fit-content}.dss-breadcrumb__item{font-size:.875rem;cursor:pointer;color:var(--color-neutral-700);font-weight:var(--font-semibold);display:flex;align-self:center;text-decoration:none}.dss-breadcrumb__item:hover{color:var(--color-neutral-900);transition:color .3s linear}.dss-breadcrumb__item:focus{outline:4px solid var(--color-blue-200);border-radius:4px}.dss-breadcrumb__item:active{color:var(--color-neutral-500)}.dss-breadcrumb__item:last-of-type{color:var(--color-primary-500)}";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*E(r,e){if(r!==void 0){let s=0;for(const t of r)yield e(t,s++)}}const u=J`dss-icon${N(P())}`,k=r=>c`
    <div class="dss-breadcrumb">
      ${E(r.items,(e,s)=>c`
            <a
              class="dss-breadcrumb__item"
              href="${e.href||"#"}"
              @click="${t=>r.handleItemClick(t,e)}"
              aria-current="${s===r.items.length-1?"page":"false"}"
            >
              ${e.label}
            </a>
            ${x(s<r.items.length-1,()=>c`<${u} icon="keyboard_arrow_right" size="sm"></${u}>`,()=>v)}
        `)}
    </div>
  `;var j=Object.defineProperty,w=(r,e,s,t)=>{for(var a=void 0,d=r.length-1,m;d>=0;d--)(m=r[d])&&(a=m(e,s,a)||a);return a&&j(e,s,a),a};class z extends ${constructor(){super(...arguments),this.items=[]}static get styles(){return[l(O),l(C)]}handleItemClick(e,s){var t;e.preventDefault(),(t=e.currentTarget)==null||t.blur(),this.dispatchEvent(new CustomEvent("onItemClick",{detail:s.href,bubbles:!0,composed:!0}))}render(){return k(this)}}w([S({type:Array})],z.prototype,"items");const n=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Product 1",href:"/products/1"}],B={title:"Components/Breadcrumb",argTypes:{items:{name:"Elements",description:"Els elements del breadcrumb.",control:{type:"object"}}},parameters:{layout:"centered"}},o={args:{items:n},render:r=>_`
      <dss-breadcrumb items=${JSON.stringify(r.items)}></dss-breadcrumb>
    `},i={tags:["!dev"],render:()=>_`
      <dss-breadcrumb items=${JSON.stringify(n.slice(0,1))}></dss-breadcrumb>
      <dss-breadcrumb items=${JSON.stringify(n.slice(0,2))}></dss-breadcrumb>
      <dss-breadcrumb items=${JSON.stringify(n.slice(0,3))}></dss-breadcrumb>
    `};var b,f,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: items
  },
  render: (args: any) => {
    return html\`
      <dss-breadcrumb items=\${JSON.stringify(args.items)}></dss-breadcrumb>
    \`;
  }
}`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var g,y,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 1))}></dss-breadcrumb>
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 2))}></dss-breadcrumb>
      <dss-breadcrumb items=\${JSON.stringify(items.slice(0, 3))}></dss-breadcrumb>
    \`;
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const I=["Playground","More"],G=Object.freeze(Object.defineProperty({__proto__:null,More:i,Playground:o,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{G as B,i as M,o as P};
