import"./lit-element-DhY7bShc.js";import{x as o}from"./lit-html-B2eaWknC.js";import"./typography-U3a2g7kk.js";const L={title:"Foundations/Typography",component:"dss-typography",argTypes:{text:{name:"Text"},tag:{name:"HTML Tag",control:{type:"select"},options:["h1","h2","h3","h4","h5","h6","div","p","span"]},variant:{name:"Variant",control:{type:"select"},options:["headline-1","headline-2","headline-3","headline-4","subtitle-1","subtitle-2","subtitle-3","subtitle-4","body-1","body-2","body-3"]},fontWeight:{name:"Font weight",control:{type:"select"},options:["ihnerit","regular","semibold","bold"]},underline:{name:"Underline",control:{type:"boolean"}}},decorators:[(t,a)=>{const g=a.args.variant.startsWith("body-");return a.argTypes.underline.table={...a.argTypes.underline.table,disable:!g},a.argTypes.fontWeight.table={...a.argTypes.fontWeight.table,disable:!g},t(a.args,a)}]},n={text:"Lorem ipsum dolor sit amet.",tag:"div",variant:"body-3",fontWeight:"regular",underline:!1},r={parameters:{design:{type:"figma",url:"https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=20-284&m=dev"}},args:{text:"Lorem ipsum dolor sit amet.",tag:"div",variant:"body-3",fontWeight:"regular",underline:!1},render:t=>o`
            <dss-typography tag="${t.tag}" variant="${t.variant}" fontWeight="${t.fontWeight}" ?underline=${t.underline}>
                ${t.text}
            </dss-typography>
        `},s={tags:["!dev"],render:()=>o`
      <dss-typography tag="h1" variant="headline-1">Lorem ipsum 38px</dss-typography>
      <dss-typography tag="h2" variant="headline-2">Lorem ipsum 30px</dss-typography>
      <dss-typography tag="h3" variant="headline-3">Lorem ipsum 24px</dss-typography>
      <dss-typography tag="h4" variant="headline-4">Lorem ipsum 20px</dss-typography>
    `,args:{...n}},e={tags:["!dev"],render:()=>o`
      <dss-typography tag="h2" variant="subtitle-1">Lorem ipsum 20px</dss-typography>
      <dss-typography tag="h3" variant="subtitle-2">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="h4" variant="subtitle-3">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="h5" variant="subtitle-4">Lorem ipsum 14px</dss-typography>
    `,args:{...n}},p={tags:["!dev"],render:()=>o`
      <dss-typography tag="p" variant="body-1" fontWeight="regular">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="regular" underline>Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="semibold">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="bold">Lorem ipsum 18px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-2" fontWeight="regular">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="regular" underline>Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="semibold">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="bold">Lorem ipsum 16px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-3" fontWeight="regular">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="regular" underline>Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="semibold">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="bold">Lorem ipsum 14px</dss-typography>
    `,args:{...n}};var i,d,y;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/vc3HcReFayadsJO1cEM8HS/Foundations---Design-System-HES-Salut?node-id=20-284&m=dev'
    }
  },
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    tag: 'div',
    variant: 'body-3',
    fontWeight: 'regular',
    underline: false
  },
  render: (args: {
    text: unknown;
    tag: string;
    variant: string;
    fontWeight: string;
    underline: boolean;
  }) => {
    return html\`
            <dss-typography tag="\${args.tag}" variant="\${args.variant}" fontWeight="\${args.fontWeight}" ?underline=\${args.underline}>
                \${args.text}
            </dss-typography>
        \`;
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var h,m,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-typography tag="h1" variant="headline-1">Lorem ipsum 38px</dss-typography>
      <dss-typography tag="h2" variant="headline-2">Lorem ipsum 30px</dss-typography>
      <dss-typography tag="h3" variant="headline-3">Lorem ipsum 24px</dss-typography>
      <dss-typography tag="h4" variant="headline-4">Lorem ipsum 20px</dss-typography>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,b,v;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-typography tag="h2" variant="subtitle-1">Lorem ipsum 20px</dss-typography>
      <dss-typography tag="h3" variant="subtitle-2">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="h4" variant="subtitle-3">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="h5" variant="subtitle-4">Lorem ipsum 14px</dss-typography>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...(v=(b=e.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,c,x;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-typography tag="p" variant="body-1" fontWeight="regular">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="regular" underline>Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="semibold">Lorem ipsum 18px</dss-typography>
      <dss-typography tag="p" variant="body-1" fontWeight="bold">Lorem ipsum 18px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-2" fontWeight="regular">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="regular" underline>Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="semibold">Lorem ipsum 16px</dss-typography>
      <dss-typography tag="p" variant="body-2" fontWeight="bold">Lorem ipsum 16px</dss-typography>
            <br/>
            <dss-typography tag="p" variant="body-3" fontWeight="regular">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="regular" underline>Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="semibold">Lorem ipsum 14px</dss-typography>
      <dss-typography tag="p" variant="body-3" fontWeight="bold">Lorem ipsum 14px</dss-typography>
    \`;
  },
  args: {
    ...defaultArgs
  }
}`,...(x=(c=p.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};const W=["Playground","Headline","Subtitle","Body"],w=Object.freeze(Object.defineProperty({__proto__:null,Body:p,Headline:s,Playground:r,Subtitle:e,__namedExportsOrder:W,default:L},Symbol.toStringTag,{value:"Module"}));export{p as B,s as H,r as P,w as S,e as a};
