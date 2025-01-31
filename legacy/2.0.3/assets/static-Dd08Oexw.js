import{x as d}from"./lit-html-CeYizTxc.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=Symbol.for(""),S=t=>{if((t==null?void 0:t.r)===o)return t==null?void 0:t._$litStatic$},m=t=>({_$litStatic$:t,r:o}),b=(t,...e)=>({_$litStatic$:e.reduce((a,n,u)=>a+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+t[u+1],t[0]),r:o}),p=new Map,h=t=>(e,...a)=>{const n=a.length;let u,r;const s=[],$=[];let l,i=0,c=!1;for(;i<n;){for(l=e[i];i<n&&(r=a[i],(u=S(r))!==void 0);)l+=u+e[++i],c=!0;i!==n&&$.push(r),s.push(l),i++}if(i===n&&s.push(e[n]),c){const f=s.join("$$lit$$");(e=p.get(f))===void 0&&(s.raw=s,p.set(f,e=s)),a=$}return t(e,...a)},g=h(d);export{b as i,m as s,g as u};
