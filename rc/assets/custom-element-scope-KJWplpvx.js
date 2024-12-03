import{x as S}from"./lit-html-paDGiEfB.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=Symbol.for(""),m=t=>{if((t==null?void 0:t.r)===l)return t==null?void 0:t._$litStatic$},_=t=>({_$litStatic$:t,r:l}),v=(t,...e)=>({_$litStatic$:e.reduce((n,o,u)=>n+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[u+1],t[0]),r:l}),p=new Map,d=t=>(e,...n)=>{const o=n.length;let u,r;const s=[],c=[];let a,i=0,$=!1;for(;i<o;){for(a=e[i];i<o&&(r=n[i],(u=m(r))!==void 0);)a+=u+e[++i],$=!0;i!==o&&c.push(r),s.push(a),i++}if(i===o&&s.push(e[o]),$){const f=s.join("$$lit$$");(e=p.get(f))===void 0&&(s.raw=s,p.set(f,e=s)),n=c}return t(e,...n)},x=d(S);let g="";function b(){return g}export{b as g,v as i,_ as s,x as u};
