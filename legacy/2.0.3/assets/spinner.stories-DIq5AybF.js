import{x as t}from"./lit-html-CeYizTxc.js";const m={title:"Components/Spinner",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},s={render:o=>t`<dss-spinner size="${o.size}"></dss-spinner>`,name:"Exemple",args:{size:"md"}},e={tags:["!dev"],render:()=>t`
      <div class="wrapper">
        <dss-spinner size="sm"></dss-spinner>
        <dss-spinner size="md"></dss-spinner>
        <dss-spinner size="lg"></dss-spinner>
      </div>
    `};var r,n,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    return html\`<dss-spinner size="\${args.size}"></dss-spinner>\`;
  },
  name: 'Exemple',
  args: {
    size: 'md'
  }
}`,...(i=(n=s.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,d,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-spinner size="sm"></dss-spinner>
        <dss-spinner size="md"></dss-spinner>
        <dss-spinner size="lg"></dss-spinner>
      </div>
    \`;
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const c=["Exemple","Size"],z=Object.freeze(Object.defineProperty({__proto__:null,Exemple:s,Size:e,__namedExportsOrder:c,default:m},Symbol.toStringTag,{value:"Module"}));export{s as E,z as S,e as a};
