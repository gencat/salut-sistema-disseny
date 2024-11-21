import"./lit-element-vV9fql9z.js";import{B as _}from"./lit-html-paDGiEfB.js";import{d as a}from"./index-DrFu-skq.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,{simulatePageLoad:s,simulateDOMContentLoaded:y}=__STORYBOOK_MODULE_PREVIEW_API__,{global:O}=__STORYBOOK_MODULE_GLOBAL__;var u=Object.defineProperty,T=(e,t)=>{for(var i in t)u(e,i,{get:t[i],enumerable:!0})},h={};T(h,{parameters:()=>c,render:()=>L,renderToCanvas:()=>M});var{Node:m}=O,L=(e,t)=>{let{id:i,component:n}=t;if(!n)throw new Error(`Unable to render story ${i} as the component annotation is missing from the default export`);let d=document.createElement(n);return Object.entries(e).forEach(([p,r])=>{d[p]=r}),d};function M({storyFn:e,kind:t,name:i,showMain:n,showError:d,forceRemount:p},r){let o=e();if(n(),l(o)){(p||!r.querySelector('[id="root-inner"]'))&&(r.innerHTML='<div id="root-inner"></div>');let f=r.querySelector('[id="root-inner"]');_(o,f),s(r)}else if(typeof o=="string")r.innerHTML=o,s(r);else if(o instanceof m){if(r.firstChild===o&&!p)return;r.innerHTML="",r.appendChild(o),y()}else d({title:`Expecting an HTML snippet or DOM node from the story: "${i}" of "${t}".`,description:a`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}var c={renderer:"web-components"};export{c as parameters,L as render,M as renderToCanvas};
