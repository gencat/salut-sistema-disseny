import{x as o}from"./lit-html-DH549LZe.js";import{u as O,f as P,i as C,s as A}from"./lit-element-DVGqpS1e.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:P},q=(e=j,a,s)=>{const{kind:r,metadata:t}=s;let n=globalThis.litPropertyMetadata.get(t);if(n===void 0&&globalThis.litPropertyMetadata.set(t,n=new Map),n.set(s.name,e),r==="accessor"){const{name:i}=s;return{set(m){const y=a.get.call(this);a.set.call(this,m),this.requestUpdate(i,y,e)},init(m){return m!==void 0&&this.P(i,void 0,e),m}}}if(r==="setter"){const{name:i}=s;return function(m){const y=this[i];a.call(this,m),this.requestUpdate(i,y,e)}}throw Error("Unsupported decorator location: "+r)};function u(e){return(a,s)=>typeof s=="object"?q(e,a,s):((r,t,n)=>{const i=t.hasOwnProperty(n);return t.constructor.createProperty(n,i?{...r,wrapped:!0}:r),i?Object.getOwnPropertyDescriptor(t,n):void 0})(e,a,s)}const M=C`
    :host {
          display: inline-block;
          width: fit-content;
          height: fit-content;
        }

        .dss-avatar {
          border-radius: 100%;
          background-color: #f5f5f5;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #656565;
          text-transform: uppercase;
        }

        .dss-avatar.dss-avatar--border {
          box-shadow: inset 0 0 0 1px #d8d8d8;
        }

        .dss-avatar .dss-avatar__icon {
          font-weight: 500;
        }

        .dss-avatar .dss-avatar__font {
          font-weight: 600;
        }

        .dss-avatar .dss-avatar__img {
          border-radius: 100%;
          height: 100%;
        }

        .dss-avatar--sm {
          width: 24px;
          height: 24px;
        }

        .dss-avatar--md {
          width: 32px;
          height: 32px;
        }

        .dss-avatar--lg {
          width: 40px;
          height: 40px;
        }

        .dss-avatar--xl {
          width: 48px;
          height: 48px;
        }

        .dss-avatar--sm .dss-avatar__icon {
          font-size: 16px;
        }

        .dss-avatar--md .dss-avatar__icon {
          font-size: 16px;
        }

        .dss-avatar--lg .dss-avatar__icon {
          font-size: 24px;
        }

        .dss-avatar--xl .dss-avatar__icon {
          font-size: 32px;
        }

        .dss-avatar--sm .dss-avatar__font {
          font-size: 12px;
          line-height: 16px;
        }

        .dss-avatar--md .dss-avatar__font,
        .dss-avatar--lg .dss-avatar__font {
          font-size: 14px;
          line-height: 24px;
        }

        .dss-avatar--xl .dss-avatar__font {
          font-size: 16px;
          line-height: 24px;
        }
`,k=C`
  .dss-icon,
  .material-symbols-rounded {
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  }

  .dss-icon--fill,
  .material-symbols-rounded--fill {
    font-variation-settings: 'FILL' 1;
  }

  .dss-icon--sm {
    font-size: var(--icon-size-sm);
  }

  .dss-icon--md {
    font-size: var(--icon-size-md);
  }

  .dss-icon--lg {
    font-size: var(--icon-size-lg);
  }

  .dss-icon--xl {
    font-size: var(--icon-size-xl);
  }
`;var L=Object.defineProperty,T=Object.getOwnPropertyDescriptor,h=(e,a,s,r)=>{for(var t=T(a,s),n=e.length-1,i;n>=0;n--)(i=e[n])&&(t=i(a,s,t)||t);return t&&L(a,s,t),t};class p extends A{constructor(){super(...arguments),this._acronym="",this._name="",this._surname="",this._imageUrl="",this._size="md"}static get styles(){return[k,M]}set name(a){const s=this._name;this._name=a,this.requestUpdate("name",s)}set surname(a){const s=this._surname;this._surname=a,this.requestUpdate("surname",s)}set imageUrl(a){const s=this._imageUrl;this._imageUrl=a,this.requestUpdate("imageUrl",s)}set size(a){const s=this._size;this._size=a,this.requestUpdate("size",s)}render(){const a=this._imageUrl?"":"dss-avatar--border";return o`
      <div class="dss-avatar dss-avatar--${this._size} ${a}">
        ${this._imageUrl?o`<img
              class="dss-avatar__img"
              src="${this._imageUrl}"
              alt="avatar"
            />`:o`${this._acronym?o`<span class="dss-avatar__font">${this._acronym}</span>`:o`<span class="material-symbols-rounded dss-avatar__icon">
                  person
                </span>`}`}
      </div>
    `}willUpdate(a){const s=a.has("name"),r=a.has("surname");(s||r)&&this.formatAcronym()}formatAcronym(){var s,r;let a=(s=this._name)==null?void 0:s.trim().substring(0,1).toUpperCase();this._name&&this._surname?a+=this._surname.trim().substring(0,1).toUpperCase():a=(r=this._name)==null?void 0:r.trim().substring(0,2).toUpperCase(),this._acronym=a,this.requestUpdate("acronym",a)}}h([u({type:String})],p.prototype,"name");h([u({type:String})],p.prototype,"surname");h([u({type:String})],p.prototype,"imageUrl");h([u({type:String})],p.prototype,"size");const d=""+new URL("avatar-doctor-CmbJ3HXo.jpg",import.meta.url).href;customElements.define("dss-avatar",p);const V={title:"Components/Avatar",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg","xl"]},name:{name:"Nom",control:{type:"text"}},surname:{name:"Cognom",control:{type:"text"}},showImage:{name:"Mostrar imatge",control:{type:"boolean"}},imageUrl:{name:"Imatge",control:{type:"text"},if:{arg:"showImage"}}},parameters:{layout:"centered"}},l={render:e=>{let a=o``;return e.showImage?a=o`<dss-avatar
        size="${e.size}"
        name="${e.name}"
        surname="${e.surname}"
        imageUrl="${e.imageUrl}"
      ></dss-avatar>`:a=o`<dss-avatar
        size="${e.size}"
        name="${e.name}"
        surname="${e.surname}"
      ></dss-avatar>`,a},name:"Exemple",args:{size:"md",name:"Nom",surname:"Cognom",showImage:!1,imageUrl:d}},v={tags:["!dev"],render:()=>o`
      <div style="display: flex; gap: 10px; align-items:center;">
        <dss-avatar size="sm" name="Design" surname="System" imageUrl=${d}></dss-avatar>
        <dss-avatar size="md" name="Design" surname="System" imageUrl=${d}></dss-avatar>
        <dss-avatar size="lg" name="Design" surname="System" imageUrl=${d}></dss-avatar>
        <dss-avatar size="xl" name="Design" surname="System" imageUrl=${d}></dss-avatar>
      </div>`},c={tags:["!dev"],render:()=>o`
      <div style="display: flex; gap: 10px; align-items:center;">
        <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
        <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
        <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
        <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      </div>`},g={tags:["!dev"],render:()=>o`
      <div style="display: flex; gap: 10px; align-items:center;">
        <dss-avatar size="sm"></dss-avatar>
        <dss-avatar size="md"></dss-avatar>
        <dss-avatar size="lg"></dss-avatar>
        <dss-avatar size="xl"></dss-avatar>
      </div>`};var f,_,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    let avatarEl = html\`\`;
    args.showImage ? avatarEl = html\`<dss-avatar
        size="\${args.size}"
        name="\${args.name}"
        surname="\${args.surname}"
        imageUrl="\${args.imageUrl}"
      ></dss-avatar>\` : avatarEl = html\`<dss-avatar
        size="\${args.size}"
        name="\${args.name}"
        surname="\${args.surname}"
      ></dss-avatar>\`;
    return avatarEl;
  },
  name: 'Exemple',
  args: {
    size: 'md',
    name: 'Nom',
    surname: 'Cognom',
    showImage: false,
    imageUrl: avatarDoctor
  }
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var x,U,w;v.parameters={...v.parameters,docs:{...(x=v.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="display: flex; gap: 10px; align-items:center;">
        <dss-avatar size="sm" name="Design" surname="System" imageUrl=\${avatarDoctor}></dss-avatar>
        <dss-avatar size="md" name="Design" surname="System" imageUrl=\${avatarDoctor}></dss-avatar>
        <dss-avatar size="lg" name="Design" surname="System" imageUrl=\${avatarDoctor}></dss-avatar>
        <dss-avatar size="xl" name="Design" surname="System" imageUrl=\${avatarDoctor}></dss-avatar>
      </div>\`;
  }
}`,...(w=(U=v.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};var S,b,$;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="display: flex; gap: 10px; align-items:center;">
        <dss-avatar size="sm" name="Design" surname="System"></dss-avatar>
        <dss-avatar size="md" name="Design" surname="System"></dss-avatar>
        <dss-avatar size="lg" name="Design" surname="System"></dss-avatar>
        <dss-avatar size="xl" name="Design" surname="System"></dss-avatar>
      </div>\`;
  }
}`,...($=(b=c.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};var D,I,E;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="display: flex; gap: 10px; align-items:center;">
        <dss-avatar size="sm"></dss-avatar>
        <dss-avatar size="md"></dss-avatar>
        <dss-avatar size="lg"></dss-avatar>
        <dss-avatar size="xl"></dss-avatar>
      </div>\`;
  }
}`,...(E=(I=g.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const N=["Exemple","Image","Acronym","Icon"],G=Object.freeze(Object.defineProperty({__proto__:null,Acronym:c,Exemple:l,Icon:g,Image:v,__namedExportsOrder:N,default:V},Symbol.toStringTag,{value:"Module"}));export{G as A,l as E,v as I,c as a,g as b};
