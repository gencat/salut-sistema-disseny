import{x as d}from"./lit-html-D6cejpwM.js";import{w as g}from"./storybook-decorators-DSS85Rnr.js";const v=`
 .innerZoomElementWrapper #root-inner {
        width: 900px
    }
`,y={title:"Components/Divider",argTypes:{weight:{name:"Ample",control:{type:"select"},options:["sm","md"]}}},e={render:u=>d`<dss-divider size=${u.weight}></dss-divider>`,args:{weight:"sm"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=816-3956&m=dev"}}},r={tags:["!dev"],render:()=>d`<dss-divider></dss-divider>`,decorators:[g(v,"divider-default-style")]},s={tags:["!dev"],render:()=>d`<dss-divider size='md'></dss-divider>`,decorators:[g(v,"divider-bold-style")]};var t,i,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => html\`<dss-divider size=\${args.weight}></dss-divider>\`,
  args: {
    weight: 'sm'
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=816-3956&m=dev'
    }
  }
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,n,m;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => html\`<dss-divider></dss-divider>\`,
  decorators: [withStyle(wrapperStyle, 'divider-default-style')]
}`,...(m=(n=r.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var p,l,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => html\`<dss-divider size='md'></dss-divider>\`,
  decorators: [withStyle(wrapperStyle, 'divider-bold-style')]
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const w=["Playground","ByDefault","Bold"],f=Object.freeze(Object.defineProperty({__proto__:null,Bold:s,ByDefault:r,Playground:e,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{r as B,e as P,f as S,s as a};
