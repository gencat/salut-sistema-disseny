import{x as o}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const n=`
  #root-inner {
        display: flex;
        align-items: center;
        gap: 16px;  
    }
`,m={title:"Components/Icon Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},variant:{name:"Variant",control:{type:"select"},options:["primary","danger","warning","success","info","neutral","ghost","orange","purple"]},icon:{name:"Icona"},label:{name:"Label (accessibilitat)"},fill:{name:"Icona tipus fill",control:{type:"boolean"}}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=39-6419&m=dev"}},args:{size:"md",variant:"primary",icon:"add_box",label:"Botó d'acció",fill:!1},render:a=>o`
      <dss-icon-button size="${a.size}" variant="${a.variant}" icon="${a.icon}" label="${a.label}" ?fill=${a.fill}></dss-icon-button>
    `},i={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-primary-style")]},d={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-neutral-style")]},c={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-danger-style")]},e={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-warning-style")]},r={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-success-style")]},b={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-info-style")]},l={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-orange-style")]},u={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-purple-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=39-6419&m=dev'
    }
  },
  args: {
    size: 'md',
    variant: 'primary',
    icon: 'add_box',
    label: "Botó d'acció",
    fill: false
  },
  render: (args: any) => {
    return html\`
      <dss-icon-button size="\${args.size}" variant="\${args.variant}" icon="\${args.icon}" label="\${args.label}" ?fill=\${args.fill}></dss-icon-button>
    \`;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-primary-style')]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-neutral-style')]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-danger-style')]
}`,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-warning-style')]
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-success-style')]
}`,...r.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-info-style')]
}`,...b.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-orange-style')]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-purple-style')]
}`,...u.parameters?.docs?.source}}};const p=["Playground","Primary","Neutral","ErrorState","Warning","Success","Info","Orange","Purple"],z=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:c,Info:b,Neutral:d,Orange:l,Playground:s,Primary:i,Purple:u,Success:r,Warning:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{c as E,b as I,d as N,l as O,s as P,z as S,e as W,i as a,r as b,u as c};
