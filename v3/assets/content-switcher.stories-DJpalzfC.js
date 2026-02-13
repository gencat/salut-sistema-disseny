import{E as p,x as t}from"./iframe-DLVb3rJw.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const r=`
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
    }
    .full-width-wrapper {
        display: block;
        width: 800px;
    }
`,b=(e,s=()=>e.disabled)=>Array.from({length:e.items},(w,h)=>({label:`${e.label} ${h+1}`,selected:e.selected??h===0,disabled:s(h)})),g={label:"Tab",items:2,disabled:!1,size:"md"},u={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},a={render:e=>{const s=b(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||p}></dss-content-switcher>
    `},args:{...g},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=368-6550&m=dev"}}},o={tags:["!dev"],render:e=>{const s=b(e);return t`
            <div class="full-width-wrapper">
                <dss-content-switcher .tabs=${s} size=${e.size||p} fullWidth></dss-content-switcher>
            </div>
    `},args:{...g,items:4,disabled:!1},decorators:[n(r,"content-switcher-full-width-style")]},i={tags:["!dev"],render:e=>{const s=b(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||p}></dss-content-switcher>
    `},args:{...g},decorators:[n(r,"content-switcher-enabled-style")]},c={tags:["!dev"],render:e=>{const s=b(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||p}></dss-content-switcher>
    `},args:{...g,disabled:!0,selected:!1},decorators:[n(r,"content-switcher-disabled-style")]},d={tags:["!dev"],render:e=>{const s=b(e,w=>w>1);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||p}></dss-content-switcher>
    `},args:{...g,items:4,disabled:!0},decorators:[n(r,"content-switcher-mix-style")]},l={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`

          <dss-content-switcher
            .tabs=${[{label:s,selected:!0},{label:"Tab"}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `,decorators:[n(r,"content-switcher-sizes-style")]},m={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`
          <dss-content-switcher
            .tabs=${[{label:"Option 1",selected:!0,icon:"add_box"},{label:"Option 2",icon:"settings"}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `,decorators:[n(r,"content-switcher-sizes-style")]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
    const tabs = generateTabs(args);
    return html\`
      <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing}></dss-content-switcher>
    \`;
  },
  args: {
    ...defaultArgs
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=368-6550&m=dev'
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: any) => {
    const tabs = generateTabs(args);
    return html\`
            <div class="full-width-wrapper">
                <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing} fullWidth></dss-content-switcher>
            </div>
    \`;
  },
  args: {
    ...defaultArgs,
    items: 4,
    disabled: false
  },
  decorators: [withStyle(wrapperStyle, 'content-switcher-full-width-style')]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: any) => {
    const tabs = generateTabs(args);
    return html\`
      <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing}></dss-content-switcher>
    \`;
  },
  args: {
    ...defaultArgs
  },
  decorators: [withStyle(wrapperStyle, 'content-switcher-enabled-style')]
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: any) => {
    const tabs = generateTabs(args);
    return html\`
      <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing}></dss-content-switcher>
    \`;
  },
  args: {
    ...defaultArgs,
    disabled: true,
    selected: false
  },
  decorators: [withStyle(wrapperStyle, 'content-switcher-disabled-style')]
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: any) => {
    const tabs = generateTabs(args, index => index > 1);
    return html\`
      <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing}></dss-content-switcher>
    \`;
  },
  args: {
    ...defaultArgs,
    items: 4,
    disabled: true
  },
  decorators: [withStyle(wrapperStyle, 'content-switcher-mix-style')]
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const sizes = ['sm', 'md', 'lg'];
    return html\`
      \${sizes.map(size => html\`

          <dss-content-switcher
            .tabs=\${[{
      label: size,
      selected: true
    }, {
      label: 'Tab'
    }]}
            size=\${size}
          ></dss-content-switcher>
          <br />
        \`)}
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'content-switcher-sizes-style')]
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    const sizes = ['sm', 'md', 'lg'];
    return html\`
      \${sizes.map(size => html\`
          <dss-content-switcher
            .tabs=\${[{
      label: 'Option 1',
      selected: true,
      icon: 'add_box'
    }, {
      label: 'Option 2',
      icon: 'settings'
    }]}
            size=\${size}
          ></dss-content-switcher>
          <br />
        \`)}
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'content-switcher-sizes-style')]
}`,...m.parameters?.docs?.source}}};const y=["Playground","FullWidth","Enabled","Disabled","Mix","Sizes","Icons"],$=Object.freeze(Object.defineProperty({__proto__:null,Disabled:c,Enabled:i,FullWidth:o,Icons:m,Mix:d,Playground:a,Sizes:l,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{c as D,i as E,o as F,m as I,d as M,a as P,$ as S,l as a};
