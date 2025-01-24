import"./lit-element-DyeN6MU1.js";import{x as t,E as d}from"./lit-html-CeYizTxc.js";const i=(e,s=()=>e.disabled)=>Array.from({length:e.items},(m,b)=>({label:`${e.label} ${b+1}`,selected:e.selected??b===0,disabled:s(b)})),l={label:"Tab",items:2,disabled:!1,size:d},E={title:"Components/Content Switcher",argTypes:{label:{name:"Text"},disabled:{name:"Deshabilitar",control:{type:"boolean"}},items:{name:"Quantitat de botons",control:{type:"select"},options:[2,3,4]},size:{name:"size",description:"Mida",control:{type:"radio"},options:["sm","md","lg"]}},parameters:{layout:"centered"}},n={render:e=>{const s=i(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...l}},r={tags:["!dev"],render:e=>{const s=i(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...l}},a={tags:["!dev"],render:e=>{const s=i(e);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...l,disabled:!0,selected:!1}},o={tags:["!dev"],render:e=>{const s=i(e,m=>m>1);return t`
      <dss-content-switcher .tabs=${s} size=${e.size||d}></dss-content-switcher>
    `},args:{...l,items:4,disabled:!0}},c={tags:["!dev"],render:()=>t`
      ${["sm","md","lg"].map(s=>t`
          <dss-content-switcher
            .tabs=${[{label:s,selected:!0},{label:s}]}
            size=${s}
          ></dss-content-switcher>
          <br />
        `)}
    `};var g,u,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => {
    const tabs = generateTabs(args);
    return html\`
      <dss-content-switcher .tabs=\${tabs} size=\${args.size || nothing}></dss-content-switcher>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...(p=(u=n.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,z,$;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...($=(z=r.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var w,y,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,v,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(v=o.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var _,x,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const M=["Playground","Enabled","Disabled","Mix","Sizes"],O=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,Enabled:r,Mix:o,Playground:n,Sizes:c,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{a as D,r as E,o as M,n as P,O as S,c as a};
