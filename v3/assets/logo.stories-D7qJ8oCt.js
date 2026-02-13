import{x as r}from"./iframe-DLVb3rJw.js";const s={title:"Foundations/Logo",argTypes:{style:{name:"Estil",control:{type:"radio"},options:["default","negative","positive"]},width:{name:"Amplaria",control:{type:"text"}}},parameters:{layout:"centered"}},t={render:e=>r`<img
      style="width:${e.width};"
      src="../../assets/img/salut-logotip-${e.style}.svg"
    />`,args:{style:"default",width:"150px"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const o=["Playground"],n=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:o,default:s},Symbol.toStringTag,{value:"Module"}));export{n as L,t as P};
