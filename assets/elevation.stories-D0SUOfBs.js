import{x as t}from"./lit-html-B2eaWknC.js";const g={title:"Foundations/Elevation",argTypes:{options:{name:"Opcions",control:{type:"radio"},options:["sm","md","lg","left","right"]}},parameters:{layout:"centered"}},e={render:m=>t`<div class="elevations-box dss-elevation--${m.options}"></div>`,args:{options:"md"}},s={tags:["!dev"],render:()=>t`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--sm elevations-box">Small Elevation</div>
        <div class="dss-elevation--md elevations-box">Medium Elevation</div>
        <div class="dss-elevation--lg elevations-box">Large Elevation</div>
      </div>
    `},a={tags:["!dev"],render:()=>t`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--left elevations-box">Left Elevation</div>
        <div class="dss-elevation--right elevations-box">Right Elevation</div>
      </div>
    `};var i,n,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<div class="elevations-box dss-elevation--\${args.options}"></div>\`;
  },
  args: {
    options: 'md'
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var r,l,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var v,c,p;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--left elevations-box">Left Elevation</div>
        <div class="dss-elevation--right elevations-box">Right Elevation</div>
      </div>
    \`;
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const u=["Playground","Size","Direction"],y=Object.freeze(Object.defineProperty({__proto__:null,Direction:a,Playground:e,Size:s,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{a as D,y as E,e as P,s as S};