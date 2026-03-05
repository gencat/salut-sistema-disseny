import{x as t}from"./iframe-CdZ_4rdx.js";import{w as r}from"./storybook-decorators-DSS85Rnr.js";const s=`
  
`,o={title:"Collections/Table",argTypes:{variant:{name:"Variant",control:{type:"select"},options:["Amb pacient: Assistencial","Amb pacient: Administratiu","Sense pacient","Extern"]},area:{name:"Area",if:{arg:"variant",eq:"Extern"}},appName:{name:"Iniciativa",if:{arg:"variant",eq:"Extern"}},showPatient:{name:"Mostrar menu pacient",control:{type:"boolean"}},showLinks:{name:"Mostrar enllaços",control:{type:"boolean"}},showProfessional:{name:"Mostrar menu professional",control:{type:"boolean"}},showLogout:{name:"Mostrar botó tancar sessió",control:{type:"boolean"}}}},e={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev "}},args:{variant:"Amb pacient: Assistencial",area:"HES",appName:"Mi iniciativa",showPatient:!0,showLinks:!0,showProfessional:!0,showLogout:!1},render:n=>t`
        TODO TEMPLATE ${n.appName}
      `},a={tags:["!dev"],render:()=>t`
      XXXX
    `,decorators:[r(s,"xxxx-style")]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=4099-39796&m=dev '
    }
  },
  args: {
    variant: 'Amb pacient: Assistencial',
    area: 'HES',
    appName: 'Mi iniciativa',
    showPatient: true,
    showLinks: true,
    showProfessional: true,
    showLogout: false
  },
  render: (args: any) => {
    return html\`
        TODO TEMPLATE \${args.appName}
      \`;
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      XXXX
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'xxxx-style')]
}`,...a.parameters?.docs?.source}}};const i=["Playground","XXXX"],l=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,XXXX:a,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{e as P,l as S};
