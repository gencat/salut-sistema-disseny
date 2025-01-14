import"./lit-element-DhY7bShc.js";import{x as s}from"./lit-html-B2eaWknC.js";const $={title:"Discontinued/Switch ⚠️",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},showLabel:{name:"Mostrar Label",control:{type:"boolean"}},label:{name:"Label",if:{arg:"showLabel"}}},parameters:{layout:"centered"}},e={render:l=>{const P=l.showLabel?l.label:null;return s`
      <dss-switch size="${l.size}" label="${P}"></dss-switch>
    `},name:"Exemple",args:{size:"md",showLabel:!1,label:"Switch"}},d={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-switch size="sm"></dss-switch>
        <dss-switch size="sm" checked></dss-switch>
        <dss-switch size="sm" disabled></dss-switch>
        <dss-switch size="sm" checked disabled></dss-switch>
      </div>
    `},i={tags:["!dev"],render:()=>s`
      <div class="wrapper">
       <dss-switch size="md"></dss-switch>
        <dss-switch size="md" checked></dss-switch>
        <dss-switch size="md" disabled></dss-switch>
        <dss-switch size="md" checked disabled></dss-switch>
      </div>
    `},c={tags:["!dev"],render:()=>s`
      <div class="wrapper">
       <dss-switch size="lg"></dss-switch>
        <dss-switch size="lg" checked></dss-switch>
        <dss-switch size="lg" disabled></dss-switch>
        <dss-switch size="lg" checked disabled></dss-switch>
      </div>
    `},t={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-switch label="Switch" size="sm"></dss-switch>
        <dss-switch label="Switch" size="sm" checked></dss-switch>
        <dss-switch label="Switch" size="sm" disabled></dss-switch>
        <dss-switch label="Switch" size="sm" checked disabled></dss-switch>
      </div>
    `},a={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-switch label="Switch" size="md"></dss-switch>
        <dss-switch label="Switch" size="md" checked></dss-switch>
        <dss-switch label="Switch" size="md" disabled></dss-switch>
        <dss-switch label="Switch" size="md" checked disabled></dss-switch>
      </div>
    `},r={tags:["!dev"],render:()=>s`
      <div class="wrapper">
        <dss-switch label="Switch" size="lg"></dss-switch>
        <dss-switch label="Switch" size="lg" checked></dss-switch>
        <dss-switch label="Switch" size="lg" disabled></dss-switch>
        <dss-switch label="Switch" size="lg" checked disabled></dss-switch>
      </div>
    `};var h,n,w;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: any) => {
    const label = args.showLabel ? args.label : null;
    return html\`
      <dss-switch size="\${args.size}" label="\${label}"></dss-switch>
    \`;
  },
  name: 'Exemple',
  args: {
    size: 'md',
    showLabel: false,
    label: 'Switch'
  }
}`,...(w=(n=e.parameters)==null?void 0:n.docs)==null?void 0:w.source}}};var o,m,b;d.parameters={...d.parameters,docs:{...(o=d.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-switch size="sm"></dss-switch>
        <dss-switch size="sm" checked></dss-switch>
        <dss-switch size="sm" disabled></dss-switch>
        <dss-switch size="sm" checked disabled></dss-switch>
      </div>
    \`;
  }
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,z,S;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-switch size="md"></dss-switch>
        <dss-switch size="md" checked></dss-switch>
        <dss-switch size="md" disabled></dss-switch>
        <dss-switch size="md" checked disabled></dss-switch>
      </div>
    \`;
  }
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var g,u,v;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
       <dss-switch size="lg"></dss-switch>
        <dss-switch size="lg" checked></dss-switch>
        <dss-switch size="lg" disabled></dss-switch>
        <dss-switch size="lg" checked disabled></dss-switch>
      </div>
    \`;
  }
}`,...(v=(u=c.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var k,L,M;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-switch label="Switch" size="sm"></dss-switch>
        <dss-switch label="Switch" size="sm" checked></dss-switch>
        <dss-switch label="Switch" size="sm" disabled></dss-switch>
        <dss-switch label="Switch" size="sm" checked disabled></dss-switch>
      </div>
    \`;
  }
}`,...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var y,f,_;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-switch label="Switch" size="md"></dss-switch>
        <dss-switch label="Switch" size="md" checked></dss-switch>
        <dss-switch label="Switch" size="md" disabled></dss-switch>
        <dss-switch label="Switch" size="md" checked disabled></dss-switch>
      </div>
    \`;
  }
}`,...(_=(f=a.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var x,D,G;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-switch label="Switch" size="lg"></dss-switch>
        <dss-switch label="Switch" size="lg" checked></dss-switch>
        <dss-switch label="Switch" size="lg" disabled></dss-switch>
        <dss-switch label="Switch" size="lg" checked disabled></dss-switch>
      </div>
    \`;
  }
}`,...(G=(D=r.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const E=["Playground","SizeSM","SizeMD","SizeLG","LabelSM","LabelMD","LabelLG"],T=Object.freeze(Object.defineProperty({__proto__:null,LabelLG:r,LabelMD:a,LabelSM:t,Playground:e,SizeLG:c,SizeMD:i,SizeSM:d,__namedExportsOrder:E,default:$},Symbol.toStringTag,{value:"Module"}));export{t as L,e as P,T as S,d as a,i as b,c,a as d,r as e};
