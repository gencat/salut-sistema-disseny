import"./lit-element-BL4lq474.js";import{E as c,x as t}from"./lit-html-D6cejpwM.js";const l=(e,s=()=>e.disabled)=>Array.from({length:e.items},(b,g)=>({label:`${e.label} ${g+1}`,selected:e.selected??g===0,disabled:s(g)})),m={label:"Tab",items:2,disabled:!1,size:"md"},M={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},n={render:e=>{const s=l(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...m},parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=368-6550&m=dev"}}},r={tags:["!dev"],render:e=>{const s=l(e);return t`
            <div class="full-width-wrapper">
                <dss-content-switcher .tabs=${s} size=${e.size||c} fullWidth></dss-content-switcher>
            </div>
    `},args:{...m,items:4,disabled:!1}},a={tags:["!dev"],render:e=>{const s=l(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...m}},o={tags:["!dev"],render:e=>{const s=l(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...m,disabled:!0,selected:!1}},d={tags:["!dev"],render:e=>{const s=l(e,b=>b>1);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||c}></dss-content-switcher>
    `},args:{...m,items:4,disabled:!0}},i={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`

          <dss-content-switcher
            .tabs=${[{label:s,selected:!0},{label:"Tab"}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `};var u,p,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var w,z,$;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...($=(z=r.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var f,S,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,T,A;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var x,_,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,D,P;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const C=["Playground","FullWidth","Enabled","Disabled","Mix","Sizes"],j=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Enabled:a,FullWidth:r,Mix:d,Playground:n,Sizes:i,__namedExportsOrder:C,default:M},Symbol.toStringTag,{value:"Module"}));export{o as D,a as E,r as F,d as M,n as P,j as S,i as a};
