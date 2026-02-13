import{x as d}from"./iframe-DLVb3rJw.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const i=`
  #root-inner {
        width: 900px
    }
`,a={title:"Components/Divider",argTypes:{weight:{name:"Ample",control:{type:"select"},options:["sm","md"]}}},e={render:o=>d`<dss-divider size=${o.weight}></dss-divider>`,args:{weight:"sm"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=816-3956&m=dev"}}},r={tags:["!dev"],render:()=>d`<dss-divider></dss-divider>`,decorators:[t(i,"divider-default-style")]},s={tags:["!dev"],render:()=>d`<dss-divider size='md'></dss-divider>`,decorators:[t(i,"divider-bold-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => html\`<dss-divider></dss-divider>\`,
  decorators: [withStyle(wrapperStyle, 'divider-default-style')]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => html\`<dss-divider size='md'></dss-divider>\`,
  decorators: [withStyle(wrapperStyle, 'divider-bold-style')]
}`,...s.parameters?.docs?.source}}};const n=["Playground","ByDefault","Bold"],p=Object.freeze(Object.defineProperty({__proto__:null,Bold:s,ByDefault:r,Playground:e,__namedExportsOrder:n,default:a},Symbol.toStringTag,{value:"Module"}));export{r as B,e as P,p as S,s as a};
