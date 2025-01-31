import{T as o}from"./lit-html-CeYizTxc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},d=e=>(...t)=>({_$litDirective$:e,values:t});class c{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=d(class extends c{constructor(e){var t;if(super(e),e.type!==a.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((r=this.nt)!=null&&r.has(s))&&this.st.add(s);return this.render(t)}const n=e.element.classList;for(const s of this.st)s in t||(n.remove(s),this.st.delete(s));for(const s in t){const h=!!t[s];h===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(h?(n.add(s),this.st.add(s)):(n.remove(s),this.st.delete(s)))}return o}});export{d as a,l as e,c as i,a as t};
