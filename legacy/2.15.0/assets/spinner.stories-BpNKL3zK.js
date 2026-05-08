import{x as d}from"./lit-html-D6cejpwM.js";import{w as m}from"./storybook-decorators-DSS85Rnr.js";const l=`
  .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
`,c={title:"Components/Spinner",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},e={render:o=>d`<dss-spinner size="${o.size}"></dss-spinner>`,args:{size:"md"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1470-3928&m=dev"}}},s={tags:["!dev"],render:()=>d`
      <div class="wrapper">
        <dss-spinner size="sm"></dss-spinner>
        <dss-spinner size="md"></dss-spinner>
        <dss-spinner size="lg"></dss-spinner>
      </div>
    `,decorators:[m(l,"spinner-size-style")]};var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var i,a,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-spinner size="sm"></dss-spinner>
        <dss-spinner size="md"></dss-spinner>
        <dss-spinner size="lg"></dss-spinner>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'spinner-size-style')]
}`,...(p=(a=s.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const g=["Playground","Size"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Size:s,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{e as P,y as S,s as a};
