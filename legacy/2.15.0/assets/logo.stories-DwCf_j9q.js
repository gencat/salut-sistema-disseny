import{x as a}from"./lit-html-D6cejpwM.js";const n={title:"Foundations/Logo",argTypes:{style:{name:"Estil",control:{type:"radio"},options:["default","negative","positive"]},width:{name:"Amplaria",control:{type:"text"}}},parameters:{layout:"centered"}},t={render:e=>a`<img
      style="width:${e.width};"
      src="../../assets/img/salut-logotip-${e.style}.svg"
    />`,args:{style:"default",width:"150px"}};var r,s,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`<img
      style="width:\${args.width};"
      src="../../assets/img/salut-logotip-\${args.style}.svg"
    />\`;
  },
  args: {
    style: 'default',
    width: '150px'
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const l=["Playground"],d=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:l,default:n},Symbol.toStringTag,{value:"Module"}));export{d as L,t as P};
