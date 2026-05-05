import{x as o}from"./lit-html-D6cejpwM.js";import{w as t}from"./storybook-decorators-DSS85Rnr.js";const s=`
  #root-inner {
        display: flex;
        align-items: center;
        gap: 16px;  
    }
    .wrapper {
        display: flex;
        align-items: center;
        gap: 16px;
    }
`,M={title:"Components/Icon Button",argTypes:{size:{name:"Mida",control:{type:"radio"},options:["sm","md","lg"]},variant:{name:"Variant",control:{type:"select"},options:["primary","danger","warning","success","info","neutral","ghost","orange","purple"]},icon:{name:"Icona"},label:{name:"Label (accessibilitat)"},fill:{name:"Icona tipus fill",control:{type:"boolean"}}},parameters:{layout:"centered"}},a={parameters:{design:{type:"figma",url:"https://www.figma.com/design/3IF7P2qsk4KAFtTzwxXp8J/Components---Design-System-HES-Salut?node-id=39-6419&m=dev"}},args:{size:"md",variant:"primary",icon:"add_box",label:"Botó d'acció",fill:!1},render:n=>o`
      <dss-icon-button size="${n.size}" variant="${n.variant}" icon="${n.icon}" label="${n.label}" ?fill=${n.fill}></dss-icon-button>
    `},i={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="primary" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-primary-style")]},d={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="neutral" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-neutral-style")]},e={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-danger-style")]},c={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="warning" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-warning-style")]},r={tags:["!dev"],render:()=>o`
        <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="success" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-success-style")]},b={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="info" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-info-style")]},l={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="orange" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-orange-style")]},u={tags:["!dev"],render:()=>o`
      <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció"></dss-icon-button>
            <dss-icon-button size="sm" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="md" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
            <dss-icon-button size="lg" variant="purple" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    `,decorators:[t(s,"icon-button-purple-style")]},m={tags:["!dev"],render:()=>o`
    
            <div class="wrapper">
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge value="3" state="alert" style="position: absolute; top: -6px; right: -6px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge dot state="alert" style="position: absolute; top: -2px; right: -2px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
    `,decorators:[t(s,"icon-button-purple-style")]};var p,g,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
    label: "Botó d'acció",
    fill: false
  },
  render: (args: any) => {
    return html\`
      <dss-icon-button size="\${args.size}" variant="\${args.variant}" icon="\${args.icon}" label="\${args.label}" ?fill=\${args.fill}></dss-icon-button>
    \`;
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,z,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(_=(z=i.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var B,y,f;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var w,S,h;e.parameters={...e.parameters,docs:{...(w=e.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
        <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció"></dss-icon-button>
                <dss-icon-button size="sm" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="md" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
                <dss-icon-button size="lg" variant="danger" icon="add_box" label="Botó d'acció" disabled></dss-icon-button>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-danger-style')]
}`,...(h=(S=e.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var P,$,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var E,O,N;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(O=r.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var F,T,C;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(T=b.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var W,j,k;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,A,D;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: () => {
    return html\`
    
            <div class="wrapper">
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge value="3" state="alert" style="position: absolute; top: -6px; right: -6px; z-index: 900"></dss-notification-badge>
                </div>
                <div style="position: relative">
                    <dss-icon-button size="md" icon="add_box" label="Botó d'acció"></dss-icon-button>
                    <dss-notification-badge dot state="alert" style="position: absolute; top: -2px; right: -2px; z-index: 900"></dss-notification-badge>
                </div>
            </div>
    \`;
  },
  decorators: [withStyle(wrapperStyle, 'icon-button-purple-style')]
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const X=["Playground","Primary","Neutral","ErrorState","Warning","Success","Info","Orange","Purple","Notification"],G=Object.freeze(Object.defineProperty({__proto__:null,ErrorState:e,Info:b,Neutral:d,Notification:m,Orange:l,Playground:a,Primary:i,Purple:u,Success:r,Warning:c,__namedExportsOrder:X,default:M},Symbol.toStringTag,{value:"Module"}));export{e as E,b as I,d as N,l as O,a as P,G as S,c as W,i as a,r as b,u as c,m as d};
