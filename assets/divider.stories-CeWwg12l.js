import{x as d}from"./iframe-_r7gOCbv.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const i=`
  .wrapper {
        width: 900px
    }
`,o={title:"Components/Divider",argTypes:{weight:{name:"Ample",control:{type:"select"},options:["sm","md"]}}},e={render:a=>d`<dss-divider size=${a.weight}></dss-divider>`,args:{weight:"sm"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=816-3956&m=dev"}}},r={tags:["!dev"],render:()=>d`
        <div class="wrapper">
            <dss-divider></dss-divider>
        </div>
    `,decorators:[t(i,"divider-default-style")]},s={tags:["!dev"],render:()=>d`
        <div class="wrapper">
            <dss-divider size='md'></dss-divider>
        </div>
    `,decorators:[t(i,"divider-bold-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  render: () => html\`
        <div class="wrapper">
            <dss-divider></dss-divider>
        </div>
    \`,
  decorators: [withStyle(wrapperStyle, 'divider-default-style')]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => html\`
        <div class="wrapper">
            <dss-divider size='md'></dss-divider>
        </div>
    \`,
  decorators: [withStyle(wrapperStyle, 'divider-bold-style')]
}`,...s.parameters?.docs?.source}}};const n=["Playground","ByDefault","Bold"],m=Object.freeze(Object.defineProperty({__proto__:null,Bold:s,ByDefault:r,Playground:e,__namedExportsOrder:n,default:o},Symbol.toStringTag,{value:"Module"}));export{r as B,e as P,m as S,s as a};
