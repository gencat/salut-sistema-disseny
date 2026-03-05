import{x as n}from"./iframe-CdZ_4rdx.js";const r={title:"Foundations/Icons",argTypes:{icon:{name:"Icona"},size:{name:"Mides",control:{type:"radio"},options:["sm","md","lg","xl"]}},parameters:{layout:"centered"}},e={args:{icon:"add_box",size:"lg"},render:o=>n`
      <dss-icon icon="${o.icon}" size="${o.size}"></dss-icon>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'add_box',
    size: 'lg'
  },
  render: (args: any) => {
    return html\`
      <dss-icon icon="\${args.icon}" size="\${args.size}"></dss-icon>
    \`;
  }
}`,...e.parameters?.docs?.source}}};const s=["Playground"],t=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:s,default:r},Symbol.toStringTag,{value:"Module"}));export{e as P,t as S};
