import{x as e}from"./iframe-CdZ_4rdx.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const r=`
 .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }
`,v={title:"Components/Decorative Icon",argTypes:{icon:{name:"Icona",description:"Icona a mostrar."},state:{name:"Estat",description:"Estat de la icona.",control:{type:"select"},options:["default","info","success","danger"],defaultValue:"default"},size:{name:"Mida",description:"Mida de la icona.",control:{type:"radio"},options:["sm","md","lg","xl"],defaultValue:"md"},disabled:{name:"Desactivat",description:"Desactiva la icona.",control:{type:"boolean"},defaultValue:!1}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5573&m=dev"}},args:{icon:"add_box",state:"default",size:"md",disabled:!1},render:n=>e`
    <dss-decorative-icon icon=${n.icon} state=${n.state} size=${n.size} ?disabled=${n.disabled}></dss-decorative-icon>
  `},d={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-default-style")]},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="info" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-info-style")]},i={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="success" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-success-style")]},a={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="danger" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="xl"></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-error-style")]},c={tags:["!dev"],render:()=>e`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl" disabled></dss-decorative-icon>
      </div>
    `,decorators:[t(r,"decorative-icon-disabled-style")]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=703-5573&m=dev'
    }
  },
  args: {
    icon: 'add_box',
    state: 'default',
    size: 'md',
    disabled: false
  },
  render: (args: any) => html\`
    <dss-decorative-icon icon=\${args.icon} state=\${args.state} size=\${args.size} ?disabled=\${args.disabled}></dss-decorative-icon>
  \`
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-default-style')]
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="info" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="info" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-info-style')]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="success" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="success" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-success-style')]
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" state="danger" size="sm"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="md"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="lg"></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" state="danger" size="xl"></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-error-style')]
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
        <dss-decorative-icon icon="add_box" size="sm" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="md" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="lg" disabled></dss-decorative-icon>
        <dss-decorative-icon icon="add_box" size="xl" disabled></dss-decorative-icon>
      </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'decorative-icon-disabled-style')]
}`,...c.parameters?.docs?.source}}};const l=["Playground","ByDefault","Info","Success","ErrorState","Disabled"],u=Object.freeze(Object.defineProperty({__proto__:null,ByDefault:d,Disabled:c,ErrorState:a,Info:o,Playground:s,Success:i,__namedExportsOrder:l,default:v},Symbol.toStringTag,{value:"Module"}));export{d as B,c as D,a as E,o as I,s as P,u as S,i as a};
