import{x as p}from"./lit-html-B2eaWknC.js";const m={title:"Components/Spinner",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},s={render:o=>p`<dss-spinner size="${o.size}"></dss-spinner>`,args:{size:"md"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1470-3928&m=dev"}}},e={tags:["!dev"],render:()=>p`
      <div class="wrapper">
        <dss-spinner size="sm"></dss-spinner>
        <dss-spinner size="md"></dss-spinner>
        <dss-spinner size="lg"></dss-spinner>
      </div>
    `};var n,r,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    return html\`<dss-spinner size="\${args.size}"></dss-spinner>\`;
  },
  args: {
    size: 'md'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1470-3928&m=dev'
    }
  }
}`,...(i=(r=s.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var t,d,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(d=e.parameters)==null?void 0:d.docs)==null?void 0:a.source}}};const g=["Playground","Size"],l=Object.freeze(Object.defineProperty({__proto__:null,Playground:s,Size:e,__namedExportsOrder:g,default:m},Symbol.toStringTag,{value:"Module"}));export{s as P,l as S,e as a};
