import"./lit-element-BL4lq474.js";import{E as d,x as t}from"./lit-html-D6cejpwM.js";import{w as l}from"./storybook-decorators-DSS85Rnr.js";const m=`
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
`,p=(e,s=()=>e.disabled)=>Array.from({length:e.items},(h,g)=>({label:`${e.label} ${g+1}`,selected:e.selected??g===0,disabled:s(g)})),b={label:"Tab",items:2,disabled:!1,size:"md"},W={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},n={render:e=>{const s=p(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...b},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=368-6550&m=dev"}}},r={tags:["!dev"],render:e=>{const s=p(e);return t`
            <div class="full-width-wrapper">
                <dss-content-switcher .tabs=${s} size=${e.size||d} fullWidth></dss-content-switcher>
            </div>
    `},args:{...b,items:4,disabled:!1},decorators:[l(m,"content-switcher-full-width-style")]},a={tags:["!dev"],render:e=>{const s=p(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...b},decorators:[l(m,"content-switcher-enabled-style")]},o={tags:["!dev"],render:e=>{const s=p(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...b,disabled:!0,selected:!1},decorators:[l(m,"content-switcher-disabled-style")]},i={tags:["!dev"],render:e=>{const s=p(e,h=>h>1);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...b,items:4,disabled:!0},decorators:[l(m,"content-switcher-mix-style")]},c={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`

          <dss-content-switcher
            .tabs=${[{label:s,selected:!0},{label:"Tab"}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `,decorators:[l(m,"content-switcher-sizes-style")]};var w,u,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var z,S,f;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var $,v,x;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,A,_;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(A=o.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var E,F,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var P,M,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const j=["Playground","FullWidth","Enabled","Disabled","Mix","Sizes"],H=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Enabled:a,FullWidth:r,Mix:i,Playground:n,Sizes:c,__namedExportsOrder:j,default:W},Symbol.toStringTag,{value:"Module"}));export{o as D,a as E,r as F,i as M,n as P,H as S,c as a};
