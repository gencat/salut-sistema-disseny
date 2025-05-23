import{x as a}from"./lit-html-D6a8R3xZ.js";const g={title:"Foundations/Elevation",argTypes:{options:{name:"Opcions",control:{type:"radio"},options:["sm","md","lg","left","right","top"]}},parameters:{layout:"centered"}},e={render:m=>a`<div class="elevations-box dss-elevation--${m.options}"></div>`,args:{options:"md"}},s={tags:["!dev"],render:()=>a`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--sm elevations-box">Small Elevation</div>
        <div class="dss-elevation--md elevations-box">Medium Elevation</div>
        <div class="dss-elevation--lg elevations-box">Large Elevation</div>
      </div>
    `},t={tags:["!dev"],render:()=>a`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--left elevations-box">Left Elevation</div>
        <div class="dss-elevation--right elevations-box">Right Elevation</div>
        <div class="dss-elevation--top elevations-box">Top Elevation</div>
      </div>
    `};var i,o,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<div class="elevations-box dss-elevation--\${args.options}"></div>\`;
  },
  args: {
    options: 'md'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,r,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--sm elevations-box">Small Elevation</div>
        <div class="dss-elevation--md elevations-box">Medium Elevation</div>
        <div class="dss-elevation--lg elevations-box">Large Elevation</div>
      </div>
    \`;
  }
}`,...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var v,c,p;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--left elevations-box">Left Elevation</div>
        <div class="dss-elevation--right elevations-box">Right Elevation</div>
        <div class="dss-elevation--top elevations-box">Top Elevation</div>
      </div>
    \`;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const u=["Playground","Size","Direction"],b=Object.freeze(Object.defineProperty({__proto__:null,Direction:t,Playground:e,Size:s,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{t as D,b as E,e as P,s as S};
