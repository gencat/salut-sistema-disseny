import{x as o}from"./iframe-D7EeAtJA.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const s=`
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`,g={title:"Components/Icon Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},variant:{name:"Variant",control:{type:"select"},options:["primary","danger","warning","success","info","neutral","ghost","orange","purple"]},icon:{name:"Icona"},label:{name:"Label (accessibilitat)"},fill:{name:"Icona tipus fill",control:{type:"boolean"}}},parameters:{layout:"centered"}},i={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=39-6419&m=dev"}},args:{size:"md",variant:"primary",icon:"add_box",label:"Botó d'acció",fill:!1},render:a=>o`
      <dss-icon-button size="${a.size}" variant="${a.variant}" icon="${a.icon}" label="${a.label}" ?fill=${a.fill}></dss-icon-button>
    `},n={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-primary-style")]},d={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-neutral-style")]},e={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-danger-style")]},c={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                </div>
    `,decorators:[t(s,"icon-button-warning-style")]},r={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-success-style")]},b={tags:["!dev"],render:()=>o`
      <div class="wrapper">
                <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-info-style")]},l={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-orange-style")]},u={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    `,decorators:[t(s,"icon-button-purple-style")]},p={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge value="3" state="alert" style="position: absolute; top: -8px; right: -8px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge dot state="alert" style="position: absolute; top: -4px; right: -4px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
    `,decorators:[t(s,"icon-button-notification-style")]},m={tags:["!dev"],render:()=>o`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const v=document.querySelector("#manual-focus-demo");v&&v.focus()}} variant="secondary"></dss-button>
                <dss-icon-button 
                    id="manual-focus-demo"
                    size="md" 
                    icon="add_box" 
                    label="Botó d'acció"
                ></dss-icon-button>
            </div>
        `,decorators:[t(s,"button-focus-style")]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-primary-style')]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-neutral-style')]
}`,...d.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-danger-style')]
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-warning-style')]
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-success-style')]
}`,...r.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-info-style')]
}`,...b.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-orange-style')]
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-purple-style')]
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge value="3" state="alert" style="position: absolute; top: -8px; right: -8px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge dot state="alert" style="position: absolute; top: -4px; right: -4px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-notification-style')]
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const forceFocus = () => {
      const element = document.querySelector('#manual-focus-demo');
      if (element) {
        (element as HTMLElement).focus();
      }
    };
    return html\`
            <div class="wrapper">
                <dss-button label="Focus" @click=\${forceFocus} variant="secondary"></dss-button>
                <dss-icon-button 
                    id="manual-focus-demo"
                    size="md" 
                    icon="add_box" 
                    label="Botó d'acció"
                ></dss-icon-button>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'button-focus-style')]
}`,...m.parameters?.docs?.source}}};const x=["Playground","Primary","Neutral","ErrorState","Warning","Success","Info","Orange","Purple","Notification","Focus"],B=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:e,Focus:m,Info:b,Neutral:d,Notification:p,Orange:l,Playground:i,Primary:n,Purple:u,Success:r,Warning:c,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{e as E,m as F,b as I,d as N,l as O,i as P,B as S,c as W,n as a,r as b,u as c,p as d};
