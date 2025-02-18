import"./lit-element-DhY7bShc.js";import{E as c,x as t}from"./lit-html-B2eaWknC.js";const d=(e,s=()=>e.disabled)=>Array.from({length:e.items},(g,m)=>({label:`${e.label} ${m+1}`,selected:e.selected??m===0,disabled:s(m)})),l={label:"Tab",items:2,disabled:!1,size:c},E={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},n={render:e=>{const s=d(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...l},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=368-6550&m=dev"}}},r={tags:["!dev"],render:e=>{const s=d(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...l}},a={tags:["!dev"],render:e=>{const s=d(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...l,disabled:!0,selected:!1}},o={tags:["!dev"],render:e=>{const s=d(e,g=>g>1);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...l,items:4,disabled:!0}},i={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`
          <dss-content-switcher
            .tabs=${[{label:s,selected:!0},{label:s}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `};var b,u,p;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,z,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: (args: any) => {
    const tabs = generateTabs(args);
    return html\`
      <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing}></dss-content-switcher>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...(w=(z=r.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var $,S,y;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,v,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  }
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,A,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      label: size
    }]}
            size=\${size}
          ></dss-content-switcher>
          <br />
        \`)}
    \`;
  }
}`,...(_=(A=i.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const D=["Playground","Enabled","Disabled","Mix","Sizes"],C=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,Enabled:r,Mix:o,Playground:n,Sizes:i,__namedExportsOrder:D,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,r as E,o as M,n as P,C as S,i as a};
