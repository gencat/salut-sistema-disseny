import{x as e}from"./iframe-_r7gOCbv.js";import{w as l}from"./storybook-decorators-DSS85Rnr.js";const s=`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`,b={title:"Components/Toggle",argTypes:{hideLabel:{name:"Amagar label",control:{type:"boolean"}},label:{name:"Label",control:{type:"text"}},disabled:{name:"Deshabil·litar",control:{type:"boolean"}},checked:{name:"Marcat",control:{type:"boolean"}}},parameters:{layout:"centered"}},g={render:c=>e`
            <dss-toggle 
                name="toggle-playground" 
                label="Label" 
                ?hideLabel="${c.hideLabel}"
                ?checked="${c.checked}"
                ?disabled="${c.disabled}"
            ></dss-toggle>
    `,args:{validateType:!1,label:"Label",hideLabel:!1,disabled:!1,checked:!1},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev"}}},t={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-toggle name="toggle-sm-1" size="sm" label="My toggle" hideLabel></dss-toggle>
                <dss-toggle name="toggle-sm-2" size="sm" label="My toggle" hideLabel checked></dss-toggle>
                <dss-toggle name="toggle-sm-3" size="sm" label="My toggle" hideLabel disabled></dss-toggle>
                <dss-toggle name="toggle-sm-4" size="sm" label="My toggle" hideLabel checked disabled></dss-toggle>
            </div>
        `,decorators:[l(s,"toggle-sm-no-label-style")]},a={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-toggle name="toggle-md-1" size="md" label="My toggle" hideLabel></dss-toggle>
                <dss-toggle name="toggle-md-2" size="md" label="My toggle" hideLabel checked></dss-toggle>
                <dss-toggle name="toggle-md-3" size="md" label="My toggle" hideLabel disabled></dss-toggle>
                <dss-toggle name="toggle-md-4" size="md" label="My toggle" hideLabel checked disabled></dss-toggle>
            </div>
    `,decorators:[l(s,"toggle-md-no-label-style")]},o={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-toggle name="toggle-lg-1" size="lg" label="My toggle" hideLabel></dss-toggle>
                <dss-toggle name="toggle-lg-2" size="lg" label="My toggle" hideLabel checked></dss-toggle>
                <dss-toggle name="toggle-lg-3" size="lg" label="My toggle" hideLabel disabled></dss-toggle>
                <dss-toggle name="toggle-lg-4" size="lg" label="My toggle" hideLabel checked disabled></dss-toggle>
            </div>
    `,decorators:[l(s,"toggle-lg-no-label-style")]},d={tags:["!dev"],render:()=>e`
     <div class="wrapper">
                <dss-toggle name="toggle-sm-1" size="sm" label="My toggle"></dss-toggle>
                <dss-toggle name="toggle-sm-2" size="sm" label="My toggle" checked></dss-toggle>
                <dss-toggle name="toggle-sm-3" size="sm" label="My toggle" disabled></dss-toggle>
                <dss-toggle name="toggle-sm-4" size="sm" label="My toggle" checked disabled></dss-toggle>
            </div>
    `,decorators:[l(s,"toggle-sm-style")]},r={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-toggle name="toggle-md-1" size="md" label="My toggle"></dss-toggle>
                <dss-toggle name="toggle-md-2" size="md" label="My toggle" checked></dss-toggle>
                <dss-toggle name="toggle-md-3" size="md" label="My toggle" disabled></dss-toggle>
                <dss-toggle name="toggle-md-4" size="md" label="My toggle" checked disabled></dss-toggle>
            </div>
    `,decorators:[l(s,"toggle-md-style")]},m={tags:["!dev"],render:()=>e`
      <div class="wrapper">
                <dss-toggle name="toggle-lg-1" size="lg" label="My toggle"></dss-toggle>
                <dss-toggle name="toggle-lg-2" size="lg" label="My toggle" checked></dss-toggle>
                <dss-toggle name="toggle-lg-3" size="lg" label="My toggle" disabled></dss-toggle>
                <dss-toggle name="toggle-lg-4" size="lg" label="My toggle" checked disabled></dss-toggle>
            </div>
    `,decorators:[l(s,"toggle-lg-style")]},i={tags:["!dev"],render:()=>e`
            <div class="wrapper">
                <dss-button label="Focus" @click=${()=>{const n=document.querySelector("#manual-focus-demo");n&&n.focus()}}></dss-button>
                <dss-toggle 
                    id="manual-focus-demo"
                    name="toggle-focus" 
                    size="md" 
                    label="Toggle amb focus"
                ></dss-toggle>
            </div>
        `,decorators:[l(s,"toggle-focus-style")]};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    return html\`
            <dss-toggle 
                name="toggle-playground" 
                label="Label" 
                ?hideLabel="\${args.hideLabel}"
                ?checked="\${args.checked}"
                ?disabled="\${args.disabled}"
            ></dss-toggle>
    \`;
  },
  args: {
    validateType: false,
    label: 'Label',
    hideLabel: false,
    disabled: false,
    checked: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=253-7021&m=dev'
    }
  }
}`,...g.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-toggle name="toggle-sm-1" size="sm" label="My toggle" hideLabel></dss-toggle>
                <dss-toggle name="toggle-sm-2" size="sm" label="My toggle" hideLabel checked></dss-toggle>
                <dss-toggle name="toggle-sm-3" size="sm" label="My toggle" hideLabel disabled></dss-toggle>
                <dss-toggle name="toggle-sm-4" size="sm" label="My toggle" hideLabel checked disabled></dss-toggle>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-sm-no-label-style')]
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
            <div class="wrapper">
                <dss-toggle name="toggle-md-1" size="md" label="My toggle" hideLabel></dss-toggle>
                <dss-toggle name="toggle-md-2" size="md" label="My toggle" hideLabel checked></dss-toggle>
                <dss-toggle name="toggle-md-3" size="md" label="My toggle" hideLabel disabled></dss-toggle>
                <dss-toggle name="toggle-md-4" size="md" label="My toggle" hideLabel checked disabled></dss-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-md-no-label-style')]
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-toggle name="toggle-lg-1" size="lg" label="My toggle" hideLabel></dss-toggle>
                <dss-toggle name="toggle-lg-2" size="lg" label="My toggle" hideLabel checked></dss-toggle>
                <dss-toggle name="toggle-lg-3" size="lg" label="My toggle" hideLabel disabled></dss-toggle>
                <dss-toggle name="toggle-lg-4" size="lg" label="My toggle" hideLabel checked disabled></dss-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-lg-no-label-style')]
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
     <div class="wrapper">
                <dss-toggle name="toggle-sm-1" size="sm" label="My toggle"></dss-toggle>
                <dss-toggle name="toggle-sm-2" size="sm" label="My toggle" checked></dss-toggle>
                <dss-toggle name="toggle-sm-3" size="sm" label="My toggle" disabled></dss-toggle>
                <dss-toggle name="toggle-sm-4" size="sm" label="My toggle" checked disabled></dss-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-sm-style')]
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-toggle name="toggle-md-1" size="md" label="My toggle"></dss-toggle>
                <dss-toggle name="toggle-md-2" size="md" label="My toggle" checked></dss-toggle>
                <dss-toggle name="toggle-md-3" size="md" label="My toggle" disabled></dss-toggle>
                <dss-toggle name="toggle-md-4" size="md" label="My toggle" checked disabled></dss-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-md-style')]
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <div class="wrapper">
                <dss-toggle name="toggle-lg-1" size="lg" label="My toggle"></dss-toggle>
                <dss-toggle name="toggle-lg-2" size="lg" label="My toggle" checked></dss-toggle>
                <dss-toggle name="toggle-lg-3" size="lg" label="My toggle" disabled></dss-toggle>
                <dss-toggle name="toggle-lg-4" size="lg" label="My toggle" checked disabled></dss-toggle>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-lg-style')]
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
                <dss-button label="Focus" @click=\${forceFocus}></dss-button>
                <dss-toggle 
                    id="manual-focus-demo"
                    name="toggle-focus" 
                    size="md" 
                    label="Toggle amb focus"
                ></dss-toggle>
            </div>
        \`;
  },
  decorators: [withStyle(wrapperStyle, 'toggle-focus-style')]
}`,...i.parameters?.docs?.source}}};const p=["Playground","Small","Medium","Large","LabelSmall","LabelMedium","LabelLarge","Focus"],h=Object.freeze(Object.defineProperty({__proto__:null,Focus:i,LabelLarge:m,LabelMedium:r,LabelSmall:d,Large:o,Medium:a,Playground:g,Small:t,__namedExportsOrder:p,default:b},Symbol.toStringTag,{value:"Module"}));export{i as F,o as L,a as M,g as P,h as S,t as a,d as b,r as c,m as d};
