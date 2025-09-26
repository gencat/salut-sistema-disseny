import{f as $,u as h}from"./lit-element-Dloa6E9d.js";import{x as b}from"./lit-html-D6a8R3xZ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:$},m=(t=g,e,r)=>{const{kind:s,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(r.name,t),s==="accessor"){const{name:a}=r;return{set(n){const c=e.get.call(this);e.set.call(this,n),this.requestUpdate(a,c,t)},init(n){return n!==void 0&&this.C(a,void 0,t,n),n}}}if(s==="setter"){const{name:a}=r;return function(n){const c=this[a];e.call(this,n),this.requestUpdate(a,c,t)}}throw Error("Unsupported decorator location: "+s)};function P(t){return(e,r)=>typeof r=="object"?m(t,e,r):((s,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(i,o):void 0})(t,e,r)}const _="*,*:before,*:after{box-sizing:border-box}*{margin:0;padding:0;font-family:var(--font-family)}ul,ol{list-style:none}";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=Symbol.for(""),y=t=>{if((t==null?void 0:t.r)===u)return t==null?void 0:t._$litStatic$},j=t=>({_$litStatic$:t,r:u}),x=(t,...e)=>({_$litStatic$:e.reduce((r,s,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[i+1],t[0]),r:u}),d=new Map,v=t=>(e,...r)=>{const s=r.length;let i,o;const a=[],n=[];let c,l=0,f=!1;for(;l<s;){for(c=e[l];l<s&&(o=r[l],(i=y(o))!==void 0);)c+=i+e[++l],f=!0;l!==s&&n.push(o),a.push(c),l++}if(l===s&&a.push(e[s]),f){const p=a.join("$$lit$$");(e=d.get(p))===void 0&&(a.raw=a,d.set(p,e=a)),r=n}return t(e,...r)},M=v(b);export{x as i,P as n,_ as r,j as s,M as u};
