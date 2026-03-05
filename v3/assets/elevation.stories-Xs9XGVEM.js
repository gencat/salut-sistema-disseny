import{x as a}from"./iframe-CdZ_4rdx.js";const n={title:"Foundations/Elevation",argTypes:{options:{name:"Opcions",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},e={render:o=>a`<div class="elevations-box dss-elevation--${o.options}"></div>`,args:{options:"md"}},s={tags:["!dev"],render:()=>a`
      <div style="display: flex; gap: 30px; align-items:center;">
        <div class="dss-elevation--sm elevations-box">Small Elevation</div>
        <div class="dss-elevation--md elevations-box">Medium Elevation</div>
        <div class="dss-elevation--lg elevations-box">Large Elevation</div>
      </div>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<div class="elevations-box dss-elevation--\${args.options}"></div>\`;
  },
  args: {
    options: 'md'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const t=["Playground","Size"],r=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Size:s,__namedExportsOrder:t,default:n},Symbol.toStringTag,{value:"Module"}));export{e as P,r as S,s as a};
