import{x as n}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const i=`
  .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
`,a={title:"Components/Spinner",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},e={render:r=>n`<dss-spinner size="${r.size}"></dss-spinner>`,args:{size:"md"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=1470-3928&m=dev"}}},s={tags:["!dev"],render:()=>n`
      <div class="wrapper">
        <dss-spinner size="sm"></dss-spinner>
        <dss-spinner size="md"></dss-spinner>
        <dss-spinner size="lg"></dss-spinner>
      </div>
    `,decorators:[t(i,"spinner-size-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const p=["Playground","Size"],m=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,Size:s,__namedExportsOrder:p,default:a},Symbol.toStringTag,{value:"Module"}));export{e as P,m as S,s as a};
