import"./lit-element-BL4lq474.js";import{E as p,x as t}from"./lit-html-D6cejpwM.js";import{w as n}from"./storybook-decorators-DSS85Rnr.js";const r=`
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
`,b=(e,s=()=>e.disabled)=>Array.from({length:e.items},(w,h)=>({label:`${e.label} ${h+1}`,selected:e.selected??h===0,disabled:s(h)})),g={label:"Tab",items:2,disabled:!1,size:"md"},k={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},a={render:e=>{const s=b(e);return t`
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
    `,decorators:[n(r,"content-switcher-sizes-style")]};var u,y,z;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var S,$,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=($=o.parameters)==null?void 0:$.docs)==null?void 0:f.source}}};var v,x,T;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var _,A,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var F,O,D;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var P,I,M;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(I=l.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var C,W,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const q=["Playground","FullWidth","Enabled","Disabled","Mix","Sizes","Icons"],X=Object.freeze(Object.defineProperty({__proto__:null,Disabled:c,Enabled:i,FullWidth:o,Icons:m,Mix:d,Playground:a,Sizes:l,__namedExportsOrder:q,default:k},Symbol.toStringTag,{value:"Module"}));export{c as D,i as E,o as F,m as I,d as M,a as P,X as S,l as a};
