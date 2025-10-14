import{x as o}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const n=`
  .innerZoomElementWrapper #root-inner {
        display: flex;
        align-items: center;
        gap: 16px;  
    }
`,D={title:"Components/Icon Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},variant:{name:"Variant",control:{type:"select"},options:["primary","error","warning","success","info","neutral","ghost","orange","purple"]},icon:{name:"Icona"},label:{name:"Label (accessibilitat)"}},parameters:{layout:"centered"}},s={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=39-6419&m=dev"}},args:{size:"md",variant:"primary",icon:"add_box",label:"Botó d'acció"},render:u=>o`
      <dss-icon-button size="${u.size}" variant="${u.variant}" icon="${u.icon}" label="${u.label}"></dss-icon-button>
    `},a={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-primary-style")]},i={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-neutral-style")]},d={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="error" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="error" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="error" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="error" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="error" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="error" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-error-style")]},c={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-warning-style")]},e={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-success-style")]},r={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-info-style")]},b={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-orange-style")]},l={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(n,"icon-button-purple-style")]};var m,p,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    label: "Botó d'acció"
  },
  render: (args: any) => {
    return html\`
      <dss-icon-button size="\${args.size}" variant="\${args.variant}" icon="\${args.icon}" label="\${args.label}"></dss-icon-button>
    \`;
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,z,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-primary-style')]
}`,...(x=(z=a.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var _,B,y;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-neutral-style')]
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var w,S,f;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="error" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="error" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="error" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="error" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="error" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="error" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-error-style')]
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var h,P,$;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-warning-style')]
}`,...($=(P=c.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var E,I,O;e.parameters={...e.parameters,docs:{...(E=e.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-success-style')]
}`,...(O=(I=e.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,T,W;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-info-style')]
}`,...(W=(T=r.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var C,N,j;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-orange-style')]
}`,...(j=(N=b.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var k,q,A;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
      <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-purple-style')]
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const H=["Playground","Primary","Neutral","ErrorState","Warning","Success","Info","Orange","Purple"],M=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:d,Info:r,Neutral:i,Orange:b,Playground:s,Primary:a,Purple:l,Success:e,Warning:c,__namedExportsOrder:H,default:D},Symbol.toStringTag,{value:"Module"}));export{d as E,r as I,i as N,b as O,s as P,M as S,c as W,a,e as b,l as c};
