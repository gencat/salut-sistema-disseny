import{x as l}from"./lit-html-D6cejpwM.js";const v={title:"Foundations/Elevation",argTypes:{options:{name:"Opcions",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},e={render:d=>l`<div class="elevations-box dss-elevation--${d.options}"></div>`,args:{options:"md"}},s={tags:["!dev"],render:()=>l`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--sm elevations-box">Small Elevation</div>
        <div class="dss-elevation--md elevations-box">Medium Elevation</div>
        <div class="dss-elevation--lg elevations-box">Large Elevation</div>
      </div>
    `};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<div class="elevations-box dss-elevation--\${args.options}"></div>\`;
  },
  args: {
    options: 'md'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var t,i,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const c=["Playground","Size"],p=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Size:s,__namedExportsOrder:c,default:v},Symbol.toStringTag,{value:"Module"}));export{e as P,p as S,s as a};
