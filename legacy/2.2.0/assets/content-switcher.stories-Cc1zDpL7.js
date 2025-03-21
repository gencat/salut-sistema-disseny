import"./lit-element-DhY7bShc.js";import{E as n,x as t}from"./lit-html-B2eaWknC.js";const l=(e,s=()=>e.disabled)=>Array.from({length:e.items},(b,g)=>({label:`${e.label} ${g+1}`,selected:e.selected??g===0,disabled:s(g)})),m={label:"Tab",items:2,disabled:!1,size:n},M={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},r={render:e=>{const s=l(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||n}></dss-content-switcher>
    `},args:{...m},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=368-6550&m=dev"}}},a={tags:["!dev"],render:e=>{const s=l(e);return t`
            <div class="full-width-wrapper">
                <dss-content-switcher .tabs=${s} size=${e.size||n} fullWidth></dss-content-switcher>
            </div>
    `},args:{...m,items:4,disabled:!1}},o={tags:["!dev"],render:e=>{const s=l(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||n}></dss-content-switcher>
    `},args:{...m}},d={tags:["!dev"],render:e=>{const s=l(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||n}></dss-content-switcher>
    `},args:{...m,disabled:!0,selected:!1}},i={tags:["!dev"],render:e=>{const s=l(e,b=>b>1);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||n}></dss-content-switcher>
    `},args:{...m,items:4,disabled:!0}},c={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`
          <dss-content-switcher
            .tabs=${[{label:s,selected:!0},{label:s}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `};var u,p,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var w,z,$;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
  }
}`,...($=(z=a.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var f,S,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,T,A;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var x,_,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(_=i.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,D,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(D=c.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const C=["Playground","FullWidth","Enabled","Disabled","Mix","Sizes"],j=Object.freeze(Object.defineProperty({__proto__:null,Disabled:d,Enabled:o,FullWidth:a,Mix:i,Playground:r,Sizes:c,__namedExportsOrder:C,default:M},Symbol.toStringTag,{value:"Module"}));export{d as D,o as E,a as F,i as M,r as P,j as S,c as a};
